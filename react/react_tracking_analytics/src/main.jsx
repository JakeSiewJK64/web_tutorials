import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { PostHogProvider } from "posthog-js/react";
import "./App.css";

const REACT_APP_PUBLIC_POSTHOG_KEY = process.env.REACT_APP_PUBLIC_POSTHOG_KEY;

const options = {};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostHogProvider apiKey={REACT_APP_PUBLIC_POSTHOG_KEY} options={options}>
      <App />
    </PostHogProvider>
  </StrictMode>
);
