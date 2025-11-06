import { getFileNameFromUrl } from "../utils/helpers";
import supabase from "./supabase";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1. Update password or fullName
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // 1.5 Check existing avatar if exist delete it
  const { user_metadata: currentUserMetaData } = await getCurrentUser();
  if (currentUserMetaData?.avatar) {
    const oldImageName = getFileNameFromUrl(currentUserMetaData.avatar);
    const { error: storageError } = await supabase.storage
      .from("avatars")
      .remove(oldImageName);

    if (storageError) {
      console.error(storageError);
      throw new Error("Avatar image could not be updated try different one!");
    }
  }
  // 2. Upload the avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}-${avatar?.name}`;
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);
  if (storageError) throw new Error(storageError.message);

  // 3. Get the avatar url
  const {
    data: { publicUrl },
  } = supabase.storage.from("avatars").getPublicUrl(fileName);

  // 4. Update avatar in the user
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: publicUrl,
    },
  });

  if (error2) throw new Error(error2.message);
  return updatedUser;
}
