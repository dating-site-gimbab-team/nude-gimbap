import { create } from 'zustand';
import { SizeStore } from './types';

const useSizeStore = create<SizeStore>((set) => ({
  size: {
    width: 0,
    height: 0,
  },
  setSize: (newSize) => set({ size: newSize }),
}));

export default useSizeStore;
