import P from "prop-types";
import "./quizzes.css";
import { Link } from "react-router-dom";
import { QuizCard } from "../QuizCard/quizCard";

export const Quizzes = ({ quizzes }) => {
  return (
    <div className="quizzes">
      {quizzes.map((quiz) => {
        const pathQuizId = `/quiz/${quiz.id}`;
        return (
          <Link to={pathQuizId} key={quiz.id}>
            <QuizCard
              key={quiz.id}
              title={quiz.title}
              short_description={quiz.short_description}
              banner_image={quiz.banner_image}
              difficulty={quiz.difficulty}
            ></QuizCard>
          </Link>
        );
      })}
    </div>
  );
};

Quizzes.propTypes = {
  quizzes: P.node.isRequired,
};
