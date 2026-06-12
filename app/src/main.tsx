import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { ThemeSynchronizer } from "./app/theme/components/ThemeSynchronizer.tsx";
import App from "./App.tsx";
import { store } from "./app/store/store.ts";
// import { ThemeToggle } from "./app/theme/components/ThemeToggle.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeSynchronizer />
      {/* <ThemeToggle /> */}
      <App />
    </Provider>
  </StrictMode>,
);
