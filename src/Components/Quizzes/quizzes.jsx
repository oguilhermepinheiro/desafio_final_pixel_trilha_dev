import P from "prop-types";
import "./quizzes.css";
import { QuizCard } from "../QuizCard/quizCard";

export const Quizzes = ({ quizzes }) => {
  return (
    <div className="quizzes">
      {quizzes.map((quiz) => (
        <QuizCard
          key={quiz.id}
          title={quiz.title}
          short_description={quiz.short_description}
          banner_image={quiz.banner_image}
          difficulty={quiz.difficulty}
        ></QuizCard>
      ))}
    </div>
  );
};

Quizzes.propTypes = {
  quizzes: P.node.isRequired,
};
