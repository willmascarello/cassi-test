import { createContext, useState, ReactNode } from "react";

interface FormContextData {
  isActive: boolean;
}

interface FormProviderProps {
  children: ReactNode;
  isActive: boolean;
}

export const FormContext = createContext({} as FormContextData);

export function FormProvider({ children, ...rest }: FormProviderProps) {
  const [isActive] = useState(rest.isActive ?? false);

  return (
    <FormContext.Provider value={{ isActive }}>{children}</FormContext.Provider>
  );
}
