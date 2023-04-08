import { createContext, useContext, useState } from "react";
// State of data loading
const LoadingContext = createContext();

export function LoadingWrapper({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
export function useLoadingContext() {
  return useContext(LoadingContext);
}
