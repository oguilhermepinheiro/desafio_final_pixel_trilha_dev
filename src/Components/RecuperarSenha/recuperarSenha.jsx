import "./recuperarSenha.css";
import { Link } from "react-router-dom";

export const RecuperarSenha = () => {
  return (
    <div className="initial-pages-content">
      <div className="forms-content">
        <h2>Recuperar senha</h2>
        <input type="text" placeholder="Digite seu endereço de e-mail" />
        <Link className="link-button" to="/">
          <button className="btn">Enviar e-mail</button>
        </Link>
      </div>
    </div>
  );
};
