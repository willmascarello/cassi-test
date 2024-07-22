import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FormPage } from "./pages/FormPage";
import { FormProvider } from "./context/FormContext";

import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FormProvider isActive={true}>
      <Header />
      <FormPage />
      <Footer />
    </FormProvider>
  </React.StrictMode>
);
