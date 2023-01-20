import "./back.css";
import { Link } from "react-router-dom";
import P from "prop-types";
import { FaChevronLeft } from "react-icons/fa";

export const Back = ({ path }) => {
  return (
    <Link to={path}>
      <div className="back-button">
        <div className="icon-back">
          <FaChevronLeft></FaChevronLeft>
        </div>
      </div>
    </Link>
  );
};

Back.propTypes = {
  path: P.string.isRequired,
};
