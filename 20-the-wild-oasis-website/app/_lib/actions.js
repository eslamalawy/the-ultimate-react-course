"use server"; //to be like an endpoint bridge between client and server actions

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import {
  deleteBooking,
  getBookings,
  updateBooking,
  updateGuest,
} from "./data-service";
import { redirect } from "next/navigation";

export async function updateProfile(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a vaild national ID");
  const updateData = { nationality, countryFlag, nationalID };

  if (!nationality || !countryFlag)
    throw new Error("Please provide a nationality");
  const data = await updateGuest(session.user.guestId, updateData);
  // Revalidate the client ROUTER CACHE
  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
  await new Promise((res) => setTimeout(res, 2000));
  throw new Error("Sorry!");
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingsIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingsIds.includes(bookingId))
    throw new Error("You are not allowed to delete this booking");
  // TODO: check if not isPast startdate
  const data = await deleteBooking(bookingId);
  // Revalidate the client ROUTER CACHE
  revalidatePath("/account/reservations");
}

export async function updateBookingAction(formData) {
  // 1) Authentication
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // 2) Authorization
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingsIds = guestBookings.map((booking) => booking.id);

  const bookingId = Number(formData.get("bookingId"));
  if (!guestBookingsIds.includes(bookingId))
    throw new Error("You are not allowed to update this booking");
  // TODO: check if not isPast startdate
  // 3) Building update data
  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };
  // 4) Mutation
  const data = await updateBooking(bookingId, updateData);
  // 5) Revalidate the client ROUTER CACHE
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath("/account/reservations");

  // 6) Redirecting
  redirect("/account/reservations");
}

export async function signInAction() {
  // if you have many providers  so you have to get provider name from the api route http://localhost:3000/api/auth/providers
  // and loop over it to get your specific provider
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
