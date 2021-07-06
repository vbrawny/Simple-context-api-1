import React, { useState } from "react";

import AppContext from "./app-context";

const AppState = (props) => {
  const { isAuth, setAuth } = useState(false);
  return (
    <AppContext.Provider
      value={{
        isAuth,
        message: "from the context"
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
