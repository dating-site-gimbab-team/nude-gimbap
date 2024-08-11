import { useHighlightStore } from '@application/store/highlight';
import { ZIndexes } from '@presentation/styles/variables';
import { useCallback } from 'react';

export function useHighLight(): any {
  const isHighlight = useHighlightStore((state) => state.highlight);
  const setIsHighlight = useHighlightStore((state) => state.setHighlight);

  const setOverlayOnElement = useCallback(
    (elem: HTMLElement, id: string, message: string): void => {
      const rect = elem.getBoundingClientRect();
      const x = rect.left;
      const y = rect.top;
      const w = rect.width;
      const h = rect.height;

      // 전체 오버레이 생성 (백그라운드)
      const overlay = document.createElement('div');
      overlay.setAttribute('id', id);
      overlay.style.width = `${w}px`;
      overlay.style.height = `${h}px`;
      overlay.style.top = `${y}px`;
      overlay.style.left = `${x}px`;
      overlay.style.position = 'absolute';
      document.body.appendChild(overlay);

      // 메세지창 생성
      const balloon = document.createElement('div');
      balloon.innerText = message;
      balloon.style.position = 'absolute';
      balloon.style.left = `${x + w / 2}px`;
      balloon.style.top = `${y + h + 10}px`;
      balloon.style.backgroundColor = '#fff';
      balloon.style.border = '1px solid #ddd';
      balloon.style.borderRadius = '50px';
      balloon.style.padding = '8px';
      balloon.style.boxShadow = '0px 2px 4px rgba(0,0,0,0.2)';
      balloon.style.zIndex = (ZIndexes.HIGHLIGHT + 1).toString();
      document.body.appendChild(balloon);

      // target element의 clone 생성
      const clone: any = elem.cloneNode(true);
      const rect2 = elem.getBoundingClientRect();
      clone.style.position = 'absolute';
      clone.style.left = `${rect2.left + window.scrollX}px`; // Adjust for scrolling
      clone.style.top = `${rect2.top + window.scrollY}px`; // Adjust for scrolling
      clone.style.width = `${rect2.width}px`;
      clone.style.height = `${rect2.height}px`;
      clone.style.zIndex = ZIndexes.HIGHLIGHT + 1;
      clone.style.boxShadow = '0 0 0 9999px rgba(0, 0, 0, 0.7)'; // Example to create a highlight effect
      document.body.appendChild(clone);

      setIsHighlight({ isHighlighted: true, clonedElement: clone });
    },
    [],
  );

  const highlightElement = useCallback(
    (targetId: string, message: string): void => {
      const elem = document.getElementById(targetId);
      if (elem) {
        setOverlayOnElement(elem, 'overlayID', message);
      }
    },
    [],
  );

  const removeHighlightElement = useCallback((): void => {
    const overlay = document.getElementById('overlayID');
    if (!isHighlight.clonedElement || !overlay) {
      return;
    }

    isHighlight.clonedElement.remove();
    overlay.remove();
    setIsHighlight({ isHighlighted: false, clonedElement: null });
  }, [isHighlight]);

  return {
    highlightElement,
    removeHighlightElement,
    isHighlight,
  };
}
