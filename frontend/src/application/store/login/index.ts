import { create } from 'zustand';
import { LoginState } from './types';

export const useLoginStore = create<LoginState>((set) => ({
  username: '',
  password: '',
  setUsername: (username) => set({ username }),
  setPassword: (password) => set({ password }),
}));
