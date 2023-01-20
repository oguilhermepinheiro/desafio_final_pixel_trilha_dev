import "./header.css";
import { Link } from "react-router-dom";
import { Menu } from "../Menu/menu";
import P from "prop-types";

export const Header = ({ user, onChange }) => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div>
          <p className="user-p">Olá,</p>
          <h1 className="user-h1">{user.name}</h1>
        </div>
        <div className="search-content">
          <nav className="nav-content">
            <ul className="nav-content-ul">
              <Link to="/historico" className="nav-historico">
                <li className="nav-content-ul-item">Histórico</li>
              </Link>
              <li className="nav-content-ul-item">
                Temas
                <Menu></Menu>
              </li>
            </ul>
          </nav>
          <input
            onBlur={onChange}
            type="search"
            name="search-quizzes"
            placeholder="Pesquisar quiz"
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: P.node.isRequired,
  onChange: P.func.isRequired,
};
