import "./styles.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="initial-pages-content">
      <img className="logo-pixel-quizzes" src={logo} alt="PixelQuizzes" />
      <div className="forms-content">
        <h2>Entrar</h2>
        <input type="text" placeholder="E-mail" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <Link className="link no-margin-top" to="/recuperarsenha">
          Esqueceu sua senha?
        </Link>
        <Link className="link-button" to="/home">
          <button className="btn">Entrar</button>
        </Link>
        <Link className="link" to="/cadastro">
          Criar uma conta
        </Link>
      </div>
    </div>
  );
};
