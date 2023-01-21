import { Back } from "../Back/back";
import { useState, useEffect } from "react";
import "./historico.css";
import quizzesFetch from "../../axios/config";
import { Link } from "react-router-dom";
import { QuizNotFound } from "../QuizNotFound/quizNotFound";
import { QuizSecondaryCard } from "../QuizSecondaryCard/quizSecondaryCard";

export const Historico = () => {
  const [answeredQuizzes, setAnsweredQuizzes] = useState("");

  const getQuizzes = async () => {
    try {
      const response = await quizzesFetch.get("/quizzes?is_answered=true");

      const data = response.data;
      setAnsweredQuizzes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuizzes();
  }, []);

  return (
    <div>
      <div className="historico-header-container">
        <header className="historico-header">
          <div className="back-to-home">
            <Back path="/home"></Back>
          </div>
          <div className="header-content">
            <h1 className="historico-title">Seu histórico</h1>
          </div>
        </header>
      </div>
      <div className="historico-content">
        {answeredQuizzes.length === 0 ? (
          <QuizNotFound></QuizNotFound>
        ) : (
          answeredQuizzes.map((quiz) => {
            const pathQuizId = `/quiz/${quiz.id}`;
            return (
              <Link to={pathQuizId} key={quiz.id}>
                <QuizSecondaryCard
                  title={quiz.title}
                  short_description={quiz.short_description}
                  banner_image={quiz.banner_image}
                  answered_date={quiz.answered_date}
                  questions_count={quiz.questions_count}
                  correct_answers_count={quiz.correct_answers_count}
                ></QuizSecondaryCard>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};
