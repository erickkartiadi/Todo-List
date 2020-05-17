import { useState } from "react";

function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const clear = () => {
    setValue("");
  };
  return [value, handleChange, clear];
}

export default useInput;
