import { useEffect, useRef, useState } from 'react';
import useSizeStore from './stats';

export function useCheckWidth(): {
  target: React.MutableRefObject<HTMLDivElement | null>;
  width: number;
  height: number;
} {
  const target = useRef<HTMLDivElement | null>(null);
  const size = useSizeStore((state) => state.size);
  const setSize = useSizeStore((state) => state.setSize);

  useEffect(() => {
    const handleResize = (): void => {
      if (target.current) {
        const refWidth = target.current.clientWidth;
        const refHeight = target.current.clientHeight;
        setSize({ width: refWidth, height: refHeight });
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setSize]);

  return { target, width: size.width, height: size.height };
}

export const useViewportSize = (): {
  viewportWidth: string;
  viewportHeight: string;
} => {
  const [viewportWidth, setViewportWidth] = useState('100vh');
  const [viewportHeight, setViewportHeight] = useState('100vw');

  useEffect(() => {
    const handleResize = (): void => {
      setViewportWidth(`${window.innerWidth}px`);
      setViewportHeight(`${window.innerHeight}px`);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    viewportWidth,
    viewportHeight,
  };
};
