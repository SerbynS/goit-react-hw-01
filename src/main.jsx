import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import App from "./components/App/App";
import "./index.css";

createRoot(document.getElementById("root")).render(<App />);
