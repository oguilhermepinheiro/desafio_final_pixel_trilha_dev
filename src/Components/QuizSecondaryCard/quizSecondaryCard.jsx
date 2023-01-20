import "./quizSecondaryCard.css";
import P from "prop-types";

export const QuizSecondaryCard = ({
  title,
  short_description,
  answered_date,
  banner_image,
  questions_count,
  correct_answers_count,
}) => {
  return (
    <div className="quiz-card">
      <img className="img-quiz" src={banner_image} alt="" />
      <div className="info-answered-quiz">
        <div className="result_and_date">
          <p className="correct_answers_count">
            Você acertou {correct_answers_count} de {questions_count}
          </p>
          <p className="answered_date">Em {answered_date}</p>
        </div>
        <h4 className="title-answered-quiz">{title}</h4>
        <p className="description-answered-quiz">{short_description}</p>
      </div>
    </div>
  );
};

QuizSecondaryCard.propTypes = {
  title: P.string.isRequired,
  short_description: P.string.isRequired,
  answered_date: P.string.isRequired,
  banner_image: P.string.isRequired,
  questions_count: P.string.isRequired,
  correct_answers_count: P.string.isRequired,
};
