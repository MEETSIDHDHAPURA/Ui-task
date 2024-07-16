import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  // debounce require two parameters first one is search and second one is delay
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // this function get the value and set the delay
    const timeOute = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // this function is use to clear the Time out
    return () => {
      clearTimeout(timeOute);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
