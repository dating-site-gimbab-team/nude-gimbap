import { create } from 'zustand';
import { HighlightState } from './types';

export const useHighlightStore = create<HighlightState>((set) => ({
  highlight: {
    isHighlighted: false,
    clonedElement: null,
  },
  setHighlight: (highlight) => set({ highlight }),
}));
