import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/sass/main.scss";
import "./gradient.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from "./components/reuseable/Loader.tsx";
import { Providers } from "./redux-store/provider.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

library.add(fas);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <Suspense fallback={<Loader />}>
        <Router>
          <ToastContainer />
          <App />
        </Router>
      </Suspense>
    </Providers>
  </React.StrictMode>
);
