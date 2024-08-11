interface Size {
  width: number;
  height: number;
}

export interface SizeStore {
  size: Size;
  setSize: (newSize: Size) => void;
}
