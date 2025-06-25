import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { AppRoutes } from "./AppRoutes";

async function enableMocking() {
  if (import.meta.env.VITE_ENABLE_API_MOCK !== "true") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start({ onUnhandledRequest: "bypass" });
}

enableMocking()
  .then(() => {
    createRoot(document.getElementById("root")!).render(
      <StrictMode>
        <AppRoutes />
      </StrictMode>
    );
  })
  .catch((err) => console.log(err));
