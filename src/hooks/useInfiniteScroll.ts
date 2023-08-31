import { useEffect, useCallback, useRef, RefObject } from 'react';

const useInfiniteScroll = (onIntersect: () => void): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement | null>(null);

  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(callback, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, callback]);

  return ref;
};

export default useInfiniteScroll;
