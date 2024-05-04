import { useEffect } from "react";

interface DebounceHookProps {
  value?: string;
  handleChange: () => void;
  time?: number;
}
const useDebounceHook = ({
  value,
  handleChange,
  time = 600,
}: DebounceHookProps) => {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null;

    if (value !== undefined) {
      timeoutId = setTimeout(handleChange, time);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [value]);
};

export default useDebounceHook;
