import React from "react";
import ReactDOM from "react-dom/client";

import "./style/global.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FormPage } from "./pages/FormPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <>
      <Header />
      <FormPage />
      <Footer />
    </>
  </React.StrictMode>
);
