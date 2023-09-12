import { useState } from "react";

const useFormState = (initialValue?: string) => {
  const [value, setValue] = useState(initialValue);

  const handelChange = (value: string) => {
    setValue(value);
  };

  const clear = () => {
    setValue("");
  };

  return [value, handelChange, clear];
};

export default useFormState;
