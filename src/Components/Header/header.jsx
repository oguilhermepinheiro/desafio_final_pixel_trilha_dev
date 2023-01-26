import "./header.css";
import { Link } from "react-router-dom";
import { Menu } from "../Menu/menu";
import P from "prop-types";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export const Header = ({ user, onChange }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(true);
  };

  document.documentElement.onclick = (e) => {
    const openMenu = document.getElementById("open-menu");
    if (e.target !== openMenu) {
      setShowMenu(false);
    }
  };

  // Enviar o que chega aqui para o home.jsx para mudar a pesquisa
  const childToParent = (searchMenu) => {
    onChange(searchMenu, true);
    document.getElementById("input-search").value = searchMenu;
  };

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
              <li className="nav-content-ul-item">
                <Link to="/historico" className="nav-historico">
                  Histórico
                </Link>
              </li>

              <li className="nav-content-ul-item">
                <div className="show-menu-div">
                  <p
                    id="open-menu"
                    className="nav-content-ul-item-menu"
                    onClick={handleClick}
                  >
                    Temas
                  </p>
                  <div id="menu" className="menu-item">
                    {showMenu && <Menu childToParent={childToParent}></Menu>}
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <div className="input-search">
            <input
              onBlur={onChange}
              id="input-search"
              name="search-quizzes"
              placeholder="Pesquisar quiz"
            />
            <div className="search-icon">
              <FaSearch></FaSearch>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: P.node.isRequired,
  onChange: P.func.isRequired,
};
