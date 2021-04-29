import './App.css';
import React from "react";
import Main from "./components/Main";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Main />
      </BrowserRouter> 
    </div>
  );
}

export default App;
