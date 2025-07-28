import { create } from "zustand";
import { toast } from "react-toastify";
import { devtools, persist } from "zustand/middleware";
import type { UserLogin } from "../types";

type AuthState = {
  usersList: UserLogin[];
  logIn: (data: UserLogin) => void;
  signUp: (data: UserLogin) => void;
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
            throw new Error("El usuario no existe.");
          }

          if (existUser.password !== password) {
            throw new Error("Contraseña incorrecta.");
          }
        },
        signUp: (data) => {
          const { password, username } = data;

          const isAlReadyAnUser = get().usersList.filter(
            (e) => e.username === username
          )[0];

          if (isAlReadyAnUser) {
            toast.error("Ya existe un usuario con ese nombre.");
            return;
          }

          set((state) => ({
            usersList: [...state.usersList, data],
          }));
        },
      }),
      {
        name: "auth-storage",
      }
    )
  )
);
