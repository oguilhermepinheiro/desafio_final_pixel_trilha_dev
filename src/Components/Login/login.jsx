import "./login.css";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [emptyProp, setEmptyProp] = useState(false);

  const handleChange = (e) => {
    let newProp = form;
    newProp[e.target.name] = e.target.value;
    setForm({ ...newProp });
  };

  const handleSubmit = (e) => {
    if (form["email"] === "" || form["password"] === "") {
      e.preventDefault();
    }
    let emptyProps = Object.values(form).some((prop) => prop === "");
    setEmptyProp(emptyProps);
  };

  const password = document.getElementById("password");
  const [closedEye, setClosedEye] = useState(false);
  const hidePassword = () => {
    if (password.type === "password") {
      password.setAttribute("type", "text");
      setClosedEye(true);
    } else {
      password.setAttribute("type", "password");
      setClosedEye(false);
    }
  };

  return (
    <div className="initial-pages-content">
      <img className="logo-pixel-quizzes" src={logo} alt="PixelQuizzes" />
      <div className="forms-content">
        <h2>Entrar</h2>
        <input
          type="text"
          placeholder="E-mail"
          name="email"
          onBlur={(e) => handleChange(e)}
        />
        {emptyProp && form["email"] === "" ? (
          <span className="emptyProp">Preencha um e-mail</span>
        ) : (
          ""
        )}
        <div className="input-password">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onBlur={(e) => handleChange(e)}
          />
          <div onClick={hidePassword} className="eye-icon">
            {!closedEye ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
          </div>
        </div>
        {emptyProp && form["password"] === "" ? (
          <span className="emptyProp">Preencha uma senha</span>
        ) : (
          ""
        )}
        <Link className="link no-margin-top" to="/recuperarsenha">
          Esqueceu sua senha?
        </Link>
        <Link className="link-button" to="/home">
          <button onClick={(e) => handleSubmit(e)} className="btn">
            Entrar
          </button>
        </Link>
        <Link className="link" to="/cadastro">
          Criar uma conta
        </Link>
      </div>
    </div>
  );
};
