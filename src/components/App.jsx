import { useState } from "react";
// import './App.css'
import HomePage from "./HomePage";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

function App() {

  return (
    <Provider store={appStore}>
      <HomePage />
    </Provider>
  );
}

export default App;
