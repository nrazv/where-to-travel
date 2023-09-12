import { useState } from "react";

const useToggle = (value = false) => {
  const [state, setValue] = useState(value);

  const toggle = (): void => {
    setValue(!state);
  };

  return [state, toggle];
};

export default useToggle;
