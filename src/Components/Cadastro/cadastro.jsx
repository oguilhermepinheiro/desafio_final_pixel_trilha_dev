import { useState } from "react";
import "./cadastro.css";
import { Link } from "react-router-dom";

export const Cadastro = () => {
  const [form, setForm] = useState({
    name: "",
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
    if (
      form["name"] === "" ||
      form["email"] === "" ||
      form["password"] === ""
    ) {
      e.preventDefault();
    }
    let emptyProps = Object.values(form).some((prop) => prop === "");
    setEmptyProp(emptyProps);
  };

  return (
    <div className="initial-pages-content">
      <div className="forms-content">
        <h2>Cadastre-se</h2>
        <p>Crie uma conta gratuitamente</p>
        <input
          onBlur={(e) => handleChange(e)}
          name="name"
          type="text"
          placeholder="Nome"
        />
        {emptyProp && form["name"] === "" ? (
          <span className="emptyProp">Preencha um nome</span>
        ) : (
          ""
        )}
        <input
          onBlur={(e) => handleChange(e)}
          name="email"
          type="text"
          placeholder="E-mail"
        />
        {emptyProp && form["email"] === "" ? (
          <span className="emptyProp">Preencha um e-mail</span>
        ) : (
          ""
        )}
        <input
          onBlur={(e) => handleChange(e)}
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
        />
        {emptyProp && form["password"] === "" ? (
          <span className="emptyProp">Preencha uma senha</span>
        ) : (
          ""
        )}
        <Link className="link-button" to="/">
          <button onClick={(e) => handleSubmit(e)} className="btn">
            Cadastre-se
          </button>
        </Link>
        <Link className="link" to="/">
          Entrar
        </Link>
      </div>
    </div>
  );
};
