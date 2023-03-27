import Cookies from "js-cookie";

const TOKEN_KEY = "access_token";

export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, { expires: 1 });
};

export const getToken = () => {
  return Cookies.get(TOKEN_KEY);
};

export const removeToken = () => {
  Cookies.remove(TOKEN_KEY);
};

export const isAuthenticated = () => {
  const token = getToken();
  console.log("TOKEN", token);
  return !!token;
};
