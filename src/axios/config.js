import axios from "axios";

const quizzesFetch = axios.create({
  baseURL: "https://my-json-server.typicode.com/higorpo/trilha-dev-json-server",
});

export default quizzesFetch;
