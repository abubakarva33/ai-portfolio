"use client";

import { useUtmTracker } from "@/hooks/useUtmTracker";

export const UtmProvider = ({ children }: { children: React.ReactNode }) => {
  useUtmTracker();
  return <>{children}</>;
};
