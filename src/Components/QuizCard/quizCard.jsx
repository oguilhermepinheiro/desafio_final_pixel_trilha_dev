import "./quizCard.css";
import P from "prop-types";

export const QuizCard = ({
  title,
  short_description,
  difficulty,
  banner_image,
}) => {
  const difficultyElements = document.getElementsByClassName("difficulty");
  for (let i = 0; i < difficultyElements.length; i++) {
    if (difficultyElements[i].textContent === "hard") {
      var elementFound = difficultyElements[i];
      elementFound.style.backgroundColor = "#EF4949";
    }
  }
  return (
    <div className="quiz-card">
      <img className="img-quiz" src={banner_image} alt="" />
      <span className="difficulty">{difficulty}</span>
      <h4 className="title-quiz">{title}</h4>
      <p className="description-quiz">{short_description}</p>
    </div>
  );
};

QuizCard.propTypes = {
  title: P.string.isRequired,
  short_description: P.string.isRequired,
  difficulty: P.string.isRequired,
  banner_image: P.string.isRequired,
};
