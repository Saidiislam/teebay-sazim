import Cookies from "js-cookie";
const TOKEN_KEY = "TOKEN";

export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, JSON.stringify(token), { expires: 1 });
};

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token === undefined){
    return false
  }
  return JSON.parse(token);
};

export const removeToken = () => {
  Cookies.remove(TOKEN_KEY);
};

export const isAuthenticated = () => {
  const token = getToken();
  console.log("TOKEN", token);
  return !!token;
};
