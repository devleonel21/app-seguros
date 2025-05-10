import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { UserData } from "../types/userData";


  type UserStore = {
    userData: UserData;
    setUserData: (data: Partial<UserData>) => void;
    resetUserData: () => void;
  };

 /* export const useUserStore = create<UserStore>((set) => ({
    userData: {},
    setUserData: (data) => set((state) => ({ userData: { ...state.userData, ...data } })),
    resetUserData: () => set({ userData: {} }),
  }));*/
  export const useUserStore = create<UserStore>()(
    persist(
      (set) => ({
        userData: {},
        setUserData: (data) => set((state) => ({ userData: { ...state.userData, ...data } })),
        resetUserData: () => set({ userData: {} }),
      }),
      {
        name: 'rimac-user-data',
        storage: createJSONStorage(() => sessionStorage) 
      }
    )
  );