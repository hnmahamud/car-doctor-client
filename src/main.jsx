import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProviders from "./context/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </div>
);
