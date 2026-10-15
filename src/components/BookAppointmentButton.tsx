"use client";

import { useModal } from '@/context/ModalContext';

export default function BookAppointmentButton({ label = 'BOOK APPOINTMENT', className = '' }: { label?: string; className?: string }) {
  const { openAppointmentModal } = useModal();
  return (
    <button
      onClick={openAppointmentModal}
      className={`bg-brand-red hover:bg-brand-dark text-white px-7 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer ${className}`}
    >
      {label}
    </button>
  );
}
