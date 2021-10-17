import { useLayoutEffect, useRef } from "react";

const useAnimationFrame = (callback) => {
  const requestRef = useRef<number | any>();
  const previousTimeRef = useRef<number | any>();

  const animate = (time: number) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useLayoutEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
};

export default useAnimationFrame;
