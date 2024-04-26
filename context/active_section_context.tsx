"use client";

import type { SectionName } from '@/lib/types';
import React, { useState, createContext, useContext } from 'react'

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName | null;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName | null>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName | null>(null);
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (<ActiveSectionContext.Provider
    value={{
      activeSection: activeSection,
      setActiveSection: setActiveSection,
      timeOfLastClick: timeOfLastClick,
      setTimeOfLastClick: setTimeOfLastClick
    }}
  >
    {children}
  </ActiveSectionContext.Provider>);
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null){
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
