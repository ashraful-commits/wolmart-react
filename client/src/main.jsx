import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/feathericon.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/plugins/datatables/datatables.min.css";
import "./assets/css/select2.min.css";
import "./assets/css/style.css";
import { Provider } from "react-redux";
import store from "./app/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
