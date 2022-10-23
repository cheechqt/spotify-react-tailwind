import { useEffect, useState } from "react";

function useValidation(value, validations) {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [confirmEmailError, setConfirmEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "isEmpty":
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case "isEmail":
          const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          re.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
          break;
        case "isConfirmEmail":
          value === validations[validation]
            ? setConfirmEmailError(false)
            : setConfirmEmailError(true);
          break;

        default:
          break;
      }
    }
  }, [validations, value]);

  useEffect(() => {
    if (isEmpty || minLengthError || emailError || confirmEmailError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError, emailError, confirmEmailError]);

  return {
    isEmpty,
    minLengthError,
    emailError,
    confirmEmailError,
    inputValid,
  };
}

export default useValidation