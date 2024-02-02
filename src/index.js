// import React, { createContext } from "react";
import React, { StrictMode, createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserStore from "./store/UserStore";
import PetStore from "./store/PetStore";
export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new UserStore(),
        pet: new PetStore(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
