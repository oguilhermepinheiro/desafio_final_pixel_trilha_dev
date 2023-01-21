import "./quizPage.css";
import quizzesFetch from "../../axios/config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Back } from "../Back/back";

export const QuizPage = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState("");

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const response = await quizzesFetch.get(`/quizzes/${id}`);

        const data = response.data;
        setQuiz(data);
      } catch (error) {
        console.log(error);
      }
    };
    getQuiz();
  }, [id]);

  return (
    <div>
      <div className="quiz-page-back">
        <Back path="/home"></Back>
      </div>
      <div className="quiz-page-content">
        <h1 className="quiz-page-title">{quiz.title}</h1>
        <img
          className="page-quiz-img"
          src={quiz.banner_image}
          alt="Imagem do Quiz"
        />
        <div>
          <p className="quiz-page-difficulty">{quiz.difficulty}</p>
        </div>
        <div className="quiz-page-about">
          <h2 className="quiz-page-h2">Sobre o quiz</h2>
          <p className="quiz-page-info">{quiz.description}</p>
          <h2 className="quiz-page-h2">Quantidade de perguntas</h2>
          <p className="quiz-page-info">{quiz.questions_count}</p>
        </div>
        <button className="btn btn-quiz-page">Fazer tentativa</button>
      </div>
    </div>
  );
};
