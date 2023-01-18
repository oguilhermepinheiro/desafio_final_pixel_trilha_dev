import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./global_styles.css";
import { Login } from "./Components/Login";
import { RecuperarSenha } from "./Components/RecuperarSenha";
import { Cadastro } from "./Components/Cadastro";
import { Home } from "./Components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route
          path="/recuperarsenha"
          element={<RecuperarSenha></RecuperarSenha>}
        ></Route>
        <Route path="/cadastro" element={<Cadastro></Cadastro>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
