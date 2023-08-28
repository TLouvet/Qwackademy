import { useEffect } from 'react';

export default function usePreventCopy() {
  useEffect(() => {
    // prevent copy
    document.addEventListener('copy', (e) => {
      e.preventDefault();
      return false;
    });

    // prevent right click
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      return false;
    });
  }, []);
}
