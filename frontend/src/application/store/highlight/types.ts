interface HighlightType {
  isHighlighted: boolean;
  clonedElement: HTMLElement | null;
}

export interface HighlightState {
  highlight: HighlightType;
  setHighlight: (highlight: HighlightType) => void;
}
