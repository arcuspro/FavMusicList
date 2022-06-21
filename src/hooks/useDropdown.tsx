import { useCallback, useEffect, useRef, useState } from 'react';

export const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideableHeight, setHideableHeight] = useState(0);
  const hideableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHideableHeight(hideableRef.current!.scrollHeight);

    const handleResize = () => {
      setHideableHeight(hideableRef.current!.scrollHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const accordionHandler = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return { accordionHandler, hideableHeight, isOpen, hideableRef };
};
