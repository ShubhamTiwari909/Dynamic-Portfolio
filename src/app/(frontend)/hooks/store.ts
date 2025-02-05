import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export type Colors = 'orange' | 'emerald' | 'violet' | 'red' | 'sky'

type Store = {
  theme: Colors
  toggleTheme: (theme: Colors) => void
  color: Colors
  toggleColor: (color: Colors) => void
}

const store = create<Store>()(
  persist(
    (set) => ({
      theme: 'orange',
      toggleTheme: (theme: Colors) => set({ theme }),
      color: 'orange',
      toggleColor: (color: Colors) => set({ color }),
    }),
    {
      name: 'theme-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)

export default store
