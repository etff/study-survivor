import React from "react";
import MyRouter from "./routes/Router";
import "antd/dist/antd.css";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import store, { history } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MyRouter />
      </ConnectedRouter>
    </Provider>
  );
};
export default App;
