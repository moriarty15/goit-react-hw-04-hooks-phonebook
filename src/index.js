import reactDom from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import "modern-normalize/modern-normalize.css";

reactDom.render(
  <Provider store={store}>
    <App />
 </Provider >
  ,
  document.getElementById("root")
);
