import { createContext, useState, useContext } from "react";

const UseContext = createContext();

export function UseContextProvider({ children }) {
  const [name, setName] = useState("Nirbhay Singh");

  return (
    <UseContext.Provider value={{ name, setName }}>
      {children}
    </UseContext.Provider>
  );
}

export function useName() {
  return useContext(UseContext);
}
