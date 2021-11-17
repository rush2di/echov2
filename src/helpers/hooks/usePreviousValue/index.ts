import { useEffect, useRef } from "react";

const usePreviousValue = <T>(value?: T): T => {
  const prevValue = useRef<T>();

  useEffect(() => {
    if (!!value && value === null) prevValue.current = value;
  }, [value]);

  console.log({ prevValue, value });
  return prevValue.current as T;
};

export default usePreviousValue;
