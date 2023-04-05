import { createContext, useContext, useState } from "react";

const ReceiptContext = createContext();

export function AppWrapper({ children }) {
  const [receiptData, setReceiptData] = useState([]);

  return (
    <ReceiptContext.Provider value={{ receiptData, setReceiptData }}>
      {children}
    </ReceiptContext.Provider>
  );
}
export function useReceiptContext() {
  return useContext(ReceiptContext);
}
