import P from "prop-types";
import "./menu.css";

export const Menu = ({ childToParent }) => {
  const handleClickHTML = () => {
    childToParent("HTML");
  };

  const handleClickUX = () => {
    childToParent("UX");
  };

  const handleClickSwift = () => {
    childToParent("Swift");
  };

  const handleClickUI = () => {
    childToParent("UI");
  };

  return (
    <nav className="nav-menu">
      <ul className="nav-menu-ul">
        <li onClick={handleClickHTML} className="nav-menu-item">
          #HTML
        </li>
        <li onClick={handleClickUX} className="nav-menu-item border-top">
          #UX
        </li>
        <li onClick={handleClickSwift} className="nav-menu-item border-top">
          #Swift
        </li>
        <li onClick={handleClickUI} className="nav-menu-item border-top">
          #UI
        </li>
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  childToParent: P.func.isRequired,
};
