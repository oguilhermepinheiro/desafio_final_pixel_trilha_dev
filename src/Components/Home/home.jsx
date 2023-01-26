import "./home.css";
import { Header } from "../Header/header";
import { Quizzes } from "../Quizzes/quizzes";
import { QuizNotFound } from "../QuizNotFound/quizNotFound";
import { useEffect, useState } from "react";
import quizzesFetch from "../../axios/config";

export const Home = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [data, setData] = useState("");
  const [user, setUser] = useState([]);

  const childToParent = (e, temaSearch = false) => {
    if (!temaSearch) {
      setData(e.target.value);
    } else {
      setData(e);
    }
  };

  const lowerData = data.toLowerCase();

  const fetchedQuizzes = quizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(lowerData)
  );

  const getQuizzes = async () => {
    try {
      const response = await quizzesFetch.get("/quizzes");

      const data = response.data;
      setQuizzes(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const response = await quizzesFetch.get("/profile");

      const data = response.data;
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getQuizzes();
  }, []);

  return (
    <div className="home-content">
      {user.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <Header onChange={childToParent} user={user}></Header>
      )}
      <div className="quizzes-content">
        {fetchedQuizzes.length === 0 ? (
          <QuizNotFound></QuizNotFound>
        ) : (
          <Quizzes quizzes={fetchedQuizzes}></Quizzes>
        )}
      </div>
    </div>
  );
};
