import "./styles.css";
import logo from "../../assets/logo.svg";

export const Login = () => {
  return (
    <div className="login-content">
      <img className="logo-pixel-quizzes" src={logo} alt="PixelQuizzes" />
      <div className="forms-content">
        <h2>Entrar</h2>
        <input className="login-input" type="text" placeholder="E-mail" />
        <input
          className="password-input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <a>Esqueceu sua senha?</a>
        <button className="btn">Entrar</button>
        <a>Criar uma conta</a>
      </div>
    </div>
  );
};
