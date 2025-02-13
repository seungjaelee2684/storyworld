import { create } from "zustand";
import { getCookies } from "../utils/getCookies";

interface AuthState {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
};

export const useLoginAuth = create<AuthState>((set) => {
  const token = getCookies("stw-lg");

  return {
    isLogin: !!token,
    setIsLogin: (value) => set({ isLogin: value }),
  };
});