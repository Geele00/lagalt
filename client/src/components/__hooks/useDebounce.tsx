import { useEffect, useState } from "react";

export const useDebounce = (value: any, milliSeconds: number) => {
  const [nextValue, setNextValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNextValue(value);
    }, milliSeconds);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, milliSeconds]);

  return nextValue;
};
