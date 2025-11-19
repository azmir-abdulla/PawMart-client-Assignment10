import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/router.jsx";
// import { HelmetProvider } from "react-helmet"; // ✅ Import HelmetProvider
import App from "./App.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <HelmetProvider> */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    {/* </HelmetProvider> */}
  </StrictMode>
);
