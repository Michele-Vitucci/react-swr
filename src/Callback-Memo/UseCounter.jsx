import { useState, useCallback } from "react";

export function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  const incrementa = useCallback(() => {
    setCounter((c) => c + 1);
  }, []);

  const decrementa = useCallback(() => {
    setCounter((c) => c - 1);
  }, []);

  const resetta = useCallback(() => {
    setCounter(initialValue);
  }, [initialValue]);

  return { counter, incrementa, decrementa, resetta };
}
