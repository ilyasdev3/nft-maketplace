import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/sass/main.scss";
import "./gradient.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from "./components/reuseable/Loader.tsx";

library.add(fas);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </React.StrictMode>
);
