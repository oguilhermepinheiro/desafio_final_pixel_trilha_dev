import "./header.css";
import P from "prop-types";

export const Header = ({ user }) => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div>
          <p className="user-p">Olá,</p>
          <h1 className="user-h1">{user.name}</h1>
        </div>
        <div className="search-content">
          <nav className="nav-content">
            <ul>
              <li>Histórico</li>
              <li>Temas</li>
            </ul>
          </nav>
          <input
            type="search"
            name="search-quizzes"
            id=""
            placeholder="Pesquisar quiz"
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: P.node.isRequired,
};
