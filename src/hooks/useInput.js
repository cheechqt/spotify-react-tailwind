import { useState } from "react";
import useValidation from "./useValidation";

function useInput(initialValue, validations) {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onBlur = (e) => {
    setIsDirty(true);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onBlur,
    onChange,
    isDirty,
    ...valid,
  };
}

export default useInput;