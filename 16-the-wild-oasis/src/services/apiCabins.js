import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
async function updateCabinImg(oldImageName, newImageName, image) {
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .remove(oldImageName);

  if (storageError) {
    console.error(storageError);
    throw new Error("Cabin image could not be updated try different one!");
  }

  return await uploadCabinImg(newImageName, image);
}

async function uploadCabinImg(imageName, image) {
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, image);

  if (storageError) {
    console.error(storageError);
    throw new Error("Cabin image could not be uploaded try different one!");
  }
  const { data } = await supabase.storage
    .from("cabin-images")
    .getPublicUrl(imageName);

  return data;
}

async function handleImage(image, mode, oldName = null) {
  if (image.name) {
    const newImageName = `${Math.random()}-${image.name}`.replaceAll("/", "");
    if (mode === "upload") {
      const { publicUrl } = await uploadCabinImg(newImageName, image);
      return publicUrl;
    } else if (mode === "replace") {
      const { publicUrl } = await updateCabinImg(oldName, newImageName, image);
      return publicUrl;
    }
  } else {
    return image;
  }
}

function getFileNameFromUrl(url) {
  const parts = url.split("/");
  return parts[parts.length - 1];
}

export async function createEditCabin(newCabin, id) {
  let publicUrl;
  if (id && newCabin.image.name) {
    const { data, error } = await supabase
      .from("cabins")
      .select("id,image")
      .eq("id", id);
    if (error) {
      console.error(error);
      throw new Error("Selected cabin does not exist!");
    }
    const oldName = getFileNameFromUrl(data[0].image);
    publicUrl = await handleImage(newCabin.image, "replace", oldName);
  } else {
    publicUrl = await handleImage(newCabin.image, id ? "replace" : "upload");
  }

  // 1. Create/Edit cabin
  let query = supabase.from("cabins");
  // A) Create
  if (!id) query = query.insert([{ ...newCabin, image: publicUrl }]);
  if (id) query = query.update({ ...newCabin, image: publicUrl }).eq("id", id);
  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
