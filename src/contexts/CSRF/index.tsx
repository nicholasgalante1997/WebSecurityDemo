import React from 'react';

type CSRFContextState = {
  csrf?: string;
};

type CSRFContextActions = {
  setCSRF(token: string): void;
};

type CSRFContextType = CSRFContextState & CSRFContextActions;

export const CSRFContext = React.createContext<CSRFContextType>({ setCSRF(token) {} });

export const useCSRFContext = () => React.useContext(CSRFContext);

export function CSRFProvider({ children }: { children: React.ReactNode }) {
  const [csrf, setCsrf] = React.useState<string>();
  
  return (
        <CSRFContext.Provider value={{ csrf, setCSRF: setCsrf }}>
          {children}
        </CSRFContext.Provider>
    );
}