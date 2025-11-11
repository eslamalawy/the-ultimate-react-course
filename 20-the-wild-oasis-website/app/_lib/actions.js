"use server"; //to be like an endpoint bridge between client and server actions

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { updateGuest } from "./data-service";

export async function updateProfile(formData) {
  console.log("Server Action", formData);
  const session = await auth();
  if (!session) throw new Error("You must be logged in");
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a vaild national ID");
  const updateData = { nationality, countryFlag, nationalID };

  if (!nationality || !countryFlag)
    throw new Error("Please provide a nationality");
  console.log(updateData);
  const data = await updateGuest(session.user.guestId, updateData);
  // Revalidate the client ROUTER CACHE
  revalidatePath("/account/profile");
}

export async function signInAction() {
  // if you have many providers  so you have to get provider name from the api route http://localhost:3000/api/auth/providers
  // and loop over it to get your specific provider
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
