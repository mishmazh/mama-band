import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./shared/styles/main.scss";
import App from "./App";

const root = createRoot(document.querySelector('#root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);