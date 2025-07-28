import { create } from "zustand";
import { toast } from "react-toastify";
import { devtools, persist } from "zustand/middleware";
import type { UserLogin } from "../types";

type AuthState = {
  usersList: UserLogin[];
  logIn: (data: UserLogin) => boolean;
};

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set, get) => ({
        usersList: [],
        logIn: (data) => {
          const { password, username } = data;

          const existUser = get().usersList.filter(
            (e) => e.username === username
          )[0];

          if (!existUser) {
            toast.error("El usuario no existe.");
            return false;
          }

          if (existUser.password !== password) {
            toast.error("Contraseña incorrecta.");
            return false;
          }

          return true;
        },
      }),
      {
        name: "auth-storage",
      }
    )
  )
);
