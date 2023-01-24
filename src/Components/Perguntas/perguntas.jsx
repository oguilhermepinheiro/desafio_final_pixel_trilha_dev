import { useParams } from "react-router-dom";
import "./perguntas.css";
import { useEffect } from "react";
import quizzesFetch from "../../axios/config";
import { useState } from "react";
import { Result } from "../Result/result";
import { Back } from "../Back/back";

export const Perguntas = () => {
  const [perguntas, setPerguntas] = useState([]);
  const [perguntasCarregou, setPerguntasCarregou] = useState(false);
  const [counter, setCounter] = useState(0);
  const [index, setIndex] = useState(1);
  const [continuar, setContinuar] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [disabledOptions, setDisabledOptions] = useState({
    optionA: false,
    optionB: false,
    optionC: false,
  });
  const { id } = useParams();
  const backPath = `/quiz/${id}`;

  useEffect(() => {
    const getPerguntas = async () => {
      try {
        const response = await quizzesFetch.get(`/questions/${id}`);

        const data = response.data;
        if (data.data.length > 0) {
          setPerguntasCarregou(true);
        }
        setPerguntas(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPerguntas();
  }, [id]);

  if (perguntasCarregou) {
    var valueA = `A. ${perguntas[index - 1].answers[0]}`;
    var valueB = `B. ${perguntas[index - 1].answers[1]}`;
    var valueC = `C. ${perguntas[index - 1].answers[2]}`;
  }

  const handleClickA = () => {
    if (1 === perguntas[index - 1].correct_answer_index) {
      setCounter((prevCounter) => prevCounter + 1);
      document.getElementById("optionA").style.background = "#FFF5EE";
      document.getElementById("optionA").style.border = "2px solid #5BA092";
    } else {
      document.getElementById("optionA").style.background = "#FFF5EE";
      document.getElementById("optionA").style.border = "2px solid #EF4949";
    }
    setDisabledOptions({
      optionA: true,
      optionB: true,
      optionC: true,
    });
    setContinuar(true);
  };

  const handleClickB = () => {
    if (2 === perguntas[index - 1].correct_answer_index) {
      setCounter((prevCounter) => prevCounter + 1);
      document.getElementById("optionB").style.background = "#FFF5EE";
      document.getElementById("optionB").style.border = "2px solid #5BA092";
    } else {
      document.getElementById("optionB").style.background = "#FFF5EE";
      document.getElementById("optionB").style.border = "2px solid #EF4949";
    }
    setDisabledOptions({
      optionA: true,
      optionB: true,
      optionC: true,
    });
    setContinuar(true);
  };

  const handleClickC = () => {
    if (3 === perguntas[index - 1].correct_answer_index) {
      setCounter((prevCounter) => prevCounter + 1);
      document.getElementById("optionC").style.background = "#FFF5EE";
      document.getElementById("optionC").style.border = "2px solid #5BA092";
    } else {
      document.getElementById("optionC").style.background = "#FFF5EE";
      document.getElementById("optionC").style.border = "2px solid #EF4949";
    }
    setDisabledOptions({
      optionA: true,
      optionB: true,
      optionC: true,
    });
    setContinuar(true);
  };

  const handleSubmit = () => {
    if (perguntas.length === index) {
      setShowResult(true);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
      setContinuar(false);
      setDisabledOptions({
        optionA: false,
        optionB: false,
        optionC: false,
      });
      document.getElementById("optionA").style.background = "white";
      document.getElementById("optionA").style.border = "1px solid #BEBAB3";
      document.getElementById("optionB").style.background = "white";
      document.getElementById("optionB").style.border = "1px solid #BEBAB3";
      document.getElementById("optionC").style.background = "white";
      document.getElementById("optionC").style.border = "1px solid #BEBAB3";
    }
  };

  return (
    <div>
      {perguntasCarregou && !showResult ? (
        <div>
          <div className="quiz-page-back">
            <Back path={backPath}></Back>
          </div>
          <div className="perguntas-content">
            <p className="number-perguntas">
              {index} de {perguntas.length}
            </p>
            <h1 className="title-perguntas">
              {perguntas[index - 1].question_text}
            </h1>
            <img
              className="img-perguntas"
              src={perguntas[index - 1].banner_image}
              alt=""
            />
            <div className="options-content">
              <input
                disabled={disabledOptions.optionA}
                id="optionA"
                onClick={handleClickA}
                className="option-perguntas"
                type="button"
                value={valueA}
              />
              <input
                disabled={disabledOptions.optionB}
                id="optionB"
                onClick={handleClickB}
                className="option-perguntas"
                type="button"
                value={valueB}
              />
              <input
                disabled={disabledOptions.optionC}
                id="optionC"
                onClick={handleClickC}
                className="option-perguntas"
                type="button"
                value={valueC}
              />
            </div>
            {continuar ? (
              <button onClick={handleSubmit} className="btn btn-perguntas">
                Continuar
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
      {showResult && (
        <Result
          counter={counter}
          numberOfQuestions={perguntas.length}
          id={id}
        ></Result>
      )}
    </div>
  );
};
