import React, { useState, useCallback } from "react";

const useInput = (initialvalue) => {
  const [state, setState] = useState(initialvalue);

  const changehandler = useCallback(
    (e, type) => {
      setState((state) => ({ ...state, [type]: e.target.value }));
      console.log(e.target.value);
    },
    [state]
  );

  return [state, changehandler, setState];
};

export default useInput;
