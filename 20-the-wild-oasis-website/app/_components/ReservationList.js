"use client";
import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteBookingAction } from "@/app/_lib/actions";

function ReservationList({ bookings }) {
  // it accept current state : bookings
  // second it accept update function
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    },
  );

  // callback for adding
  // (curBookings, bookingId) => {return [...curBookings, newBooking]}

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteBookingAction(bookingId);
  }
  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
