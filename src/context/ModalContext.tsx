"use client";

import React, { createContext, useContext, useState } from 'react';
import AppointmentModal from '@/components/AppointmentModal';

interface ModalContextType {
  openAppointmentModal: () => void;
  closeAppointmentModal: () => void;
  isAppointmentModalOpen: boolean;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const openAppointmentModal = () => setIsAppointmentModalOpen(true);
  const closeAppointmentModal = () => setIsAppointmentModalOpen(false);

  return (
    <ModalContext.Provider value={{ openAppointmentModal, closeAppointmentModal, isAppointmentModalOpen }}>
      {children}
      <AppointmentModal />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
