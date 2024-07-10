import React, { useEffect, useState } from 'react'

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(() => {
      const timeOute = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
  
      return () => {
        clearTimeout(timeOute);
      };
    }, [value, delay]);
  
    return debouncedValue;
  };

export default useDebounce
