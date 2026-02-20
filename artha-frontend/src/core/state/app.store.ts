import { create } from 'zustand'

type User = {
  id: string
  name: string
}

type AppState = {
  user: User | null
  role: string | null
  enabledFeatures: string[]
  setUser: (user: User | null) => void
  setRole: (role: string | null) => void
  setEnabledFeatures: (enabledFeatures: string[]) => void
  reset: () => void
}

const initialState: Pick<AppState, 'user' | 'role' | 'enabledFeatures'> = {
  user: null,
  role: null,
  enabledFeatures: [],
}

export const useAppStore = create<AppState>((set) => ({
  ...initialState,
  setUser: (user) => set({ user }),
  setRole: (role) => set({ role }),
  setEnabledFeatures: (enabledFeatures) => set({ enabledFeatures }),
  reset: () => set(initialState),
}))
