import "./styles.css";

export const Cadastro = () => {
  return (
    <div className="cadastro-content">
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
        <button className="btn">Cadastre-se</button>
        <a>Entrar</a>
      </div>
    </div>
  );
};
