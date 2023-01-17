import "./styles.css";

export const RecuperarSenha = () => {
  return (
    <div className="cadastro-content">
      <div className="forms-content">
        <h2>Recuperar senha</h2>
        <input type="text" placeholder="Digite seu endereço de e-mail" />
        <button className="btn">Enviar e-mail</button>
      </div>
    </div>
  );
};
