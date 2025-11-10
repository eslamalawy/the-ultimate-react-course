"use server";

import { signIn } from "./auth";

export async function signInAction() {
  // if you have many providers  so you have to get provider name from the api route http://localhost:3000/api/auth/providers
  // and loop over it to get your specific provider
  await signIn("google", { redirectTo: "/account" });
}
