import axios from "axios";

const instance = axios.create({
  baseURL: "https://mvn-task-manager.work/",
});

export default instance;
