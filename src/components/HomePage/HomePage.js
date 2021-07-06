import React, { useContext } from "react";
import AppContext from "../../context/app-context";
const HomePage = () => {
  const { message, isAuth } = useContext(AppContext);
  return (
    <div style={{ background: isAuth ? "green" : "red" }}>
      <h2 style={{ background: "#eee" }}>This is the home page</h2>
      <p>{message}</p>
    </div>
    //   {isAuth ? (
    //     <button onClick={() => setIsAuth(false)}>Logout</button>
    //   ) : (
    //     <button onClick={() => setIsAuth(true)}>Login</button>
    //   )}
    //   <p>{message}</p>
    // </div>
  );
};

export default HomePage;
