import "./quizNotFound.css";
import quizNotFound from "../../assets/quizNotFound.svg";

export const QuizNotFound = () => {
  return (
    <div className="not-found-quiz">
      <img src={quizNotFound} alt="Quiz Not Found" />
      <h2 className="not-found-page-h2">Quiz não encontrado</h2>
      <p className="not-found-page-p">
        Não encontramos nenhum quiz. Tente procurar usando palavras chaves
        diferentes...
      </p>
    </div>
  );
};
