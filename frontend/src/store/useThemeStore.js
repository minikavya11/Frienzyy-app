import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("frienzyy-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("frienzyy-theme", theme);
    set({ theme });
  },
}));