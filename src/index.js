import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { theme } from "./theme";
import global_en from "./translations/en/global.json";
import global_th from "./translations/th/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: true },
  lng: "th",
  resources: {
    en: {
      global: global_en,
    },
    th: {
      global: global_th,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
