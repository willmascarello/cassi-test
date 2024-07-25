import { createContext, useState, ReactNode } from "react";

interface FormContextData {
  formData: any;
  setFormData: React.Dispatch<any>;
}

interface FormProviderProps {
  children: ReactNode;
  formData: boolean;
}

export const FormContext = createContext({} as FormContextData);

export function FormProvider({ children, ...rest }: FormProviderProps) {
  // const [isActive] = useState(rest.isActive ?? false);
  const [formData, setFormData] = useState<any>({}); // usado any como tipo apenas pelo objeto ser dinamico e não saber quais atributos receberá

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}
