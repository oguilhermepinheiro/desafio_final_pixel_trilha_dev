import "./home.css";
import { Header } from "../Header/header";
import { Quizzes } from "../Quizzes/quizzes";
import { useEffect, useState } from "react";
import quizzesFetch from "../../axios/config";

export const Home = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [user, setUser] = useState([]);

  const getQuizzes = async () => {
    try {
      const response = await quizzesFetch.get("/quizzes");

      const data = response.data;
      setQuizzes(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const response = await quizzesFetch.get("/profile");

      const data = response.data;
      setUser(data);
      console.log(data);
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
      {user.length === 0 ? <p>Carregando...</p> : <Header user={user}></Header>}

      <div className="quizzes-content">
        {quizzes.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          <Quizzes quizzes={quizzes}></Quizzes>
        )}
      </div>
    </div>
  );
};
