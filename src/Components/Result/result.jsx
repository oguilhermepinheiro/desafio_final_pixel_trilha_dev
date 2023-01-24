import { useEffect, useState } from "react";
import { Back } from "../Back/back";
import { Link } from "react-router-dom";
import "./result.css";
import P from "prop-types";

export const Result = ({ id, counter, numberOfQuestions }) => {
  const [textResult, setTextResult] = useState({
    primary: "",
    secondary: "",
  });
  const backPath = `/quiz/${id}`;

  useEffect(() => {
    if (counter === numberOfQuestions) {
      setTextResult({
        primary:
          "Você concluiu o quiz com sucesso e acertou todas as perguntas. Você é realmente muito bom!",
        secondary: "Você é um mestre",
      });
    } else {
      setTextResult({
        primary:
          "Continue estudando e tentando, uma hora você vai gabaritar! Eu acredito em você!",
        secondary: "Quase lá...",
      });
    }
  }, [counter, numberOfQuestions]);

  return (
    <div>
      <div className="quiz-page-back">
        <Back path={backPath}></Back>
      </div>
      <div className="result-content">
        <h1 className="title-result">Resultados</h1>
        <p className="result-result">
          {counter}/{numberOfQuestions}
        </p>
        <p className="secondary-text-result">{textResult.secondary}</p>
        <p className="primary-text-result">{textResult.primary}</p>
        <div className="btn-result">
          <Link to={backPath}>
            <button className="btn">Finalizar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Result.propTypes = {
  id: P.string.isRequired,
  counter: P.number.isRequired,
  numberOfQuestions: P.number.isRequired,
};
