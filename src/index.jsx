import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./global_styles.css";
import { Login } from "./Components/Login/login";
import { RecuperarSenha } from "./Components/RecuperarSenha/recuperarSenha";
import { Cadastro } from "./Components/Cadastro/cadastro";
import { Home } from "./Components/Home/home";
import { Historico } from "./Components/Historico/historico";
import { QuizPage } from "./Components/QuizPage/quizPage";
import { Perguntas } from "./Components/Perguntas/perguntas";

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
        <Route path="/historico" element={<Historico></Historico>}></Route>
        <Route path="/quiz/:id" element={<QuizPage></QuizPage>}></Route>
        <Route path="/perguntas/:id" element={<Perguntas></Perguntas>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
