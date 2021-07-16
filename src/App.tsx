import React from "react";
import "./App.css";
import {Card} from "./Components/Card";
import {Provider} from "react-redux";
import {store} from "./Controllers/store";

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <Card/>
        </Provider>
    </div>
  );
}

export default App;
