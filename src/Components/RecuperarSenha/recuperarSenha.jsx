import { useState } from "react";
import "./recuperarSenha.css";
import { Link } from "react-router-dom";

export const RecuperarSenha = () => {
  const [form, setForm] = useState({
    email: "",
  });

  const [emptyProp, setEmptyProp] = useState(false);

  const handleChange = (e) => {
    let newProp = form;
    newProp[e.target.name] = e.target.value;
    setForm({ ...newProp });
  };

  const handleSubmit = (e) => {
    if (form["email"] === "") {
      e.preventDefault();
    }

    let emptyProps = Object.values(form).some((prop) => prop === "");
    setEmptyProp(emptyProps);
  };

  return (
    <div className="initial-pages-content">
      <div className="forms-content">
        <h2>Recuperar senha</h2>
        <input
          name="email"
          type="text"
          placeholder="Digite seu endereço de e-mail"
          onBlur={(e) => handleChange(e)}
        />
        {emptyProp && form["email"] === "" ? (
          <span className="emptyProp">Preencha um e-mail</span>
        ) : (
          ""
        )}
        <Link className="link-button" to="/">
          <button onClick={(e) => handleSubmit(e)} className="btn">
            Enviar e-mail
          </button>
        </Link>
      </div>
    </div>
  );
};
