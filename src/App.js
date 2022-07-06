import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";




function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <NavBar></NavBar>
        <div className="container-md pt-4">
          <Alert />
          <Routes>
            <Route path={"/"} exect element={<Home />} />
            <Route path={"/about"} exect element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AlertState>
  );
}

export default App;
