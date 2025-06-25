'use client'

import { createContext, useContext, useState, ReactNode } from "react";

type ContactContextType = {
  highlight: boolean;
  triggerHighlight: () => void;
};

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider = ({ children }: { children: ReactNode }) => {
  const [highlight, setHighlight] = useState(false);

  const triggerHighlight = () => {
    setHighlight(true);
    setTimeout(() => setHighlight(false), 1500);
  };

  return <ContactContext.Provider value={{ highlight, triggerHighlight }}>{children}</ContactContext.Provider>;
};

export const useContactContext = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContactContext must be used within ContactProvider");
  }
  return context;
};
