import "./cadastro.css";
import { Link } from "react-router-dom";

export const Cadastro = () => {
  return (
    <div className="initial-pages-content">
      <div className="forms-content">
        <h2>Cadastre-se</h2>
        <p>Crie uma conta gratuitamente</p>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="E-mail" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
        />
        <Link className="link-button" to="/">
          <button className="btn">Cadastre-se</button>
        </Link>
        <Link className="link" to="/">
          Entrar
        </Link>
      </div>
    </div>
  );
};
