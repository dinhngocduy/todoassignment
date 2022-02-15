import api from "api/api";

export const loginApi = ({ username, password }) => {
  return api.post("/auth/login", {
    username,
    password,
  });
};

export const registerApi = ({ username, password }) => {
  return api.post("/auth/register", {
    username,
    password,
  });
};
