import axios from "axios";

const BASE_URL = "https://shoppingappbackend-oao7.onrender.com/api";
const persistedData = JSON.parse(localStorage.getItem("persist:root"));
const currentUser = persistedData?.user?.currentUser;

let TOKEN = null;
if (currentUser && currentUser.accessToken) {
  TOKEN = currentUser.accessToken;
} else {
  // Handle the case where currentUser is null or accessToken is not available
  // For example, you might redirect the user to the login page or display an error message
  console.error("Access token not available. User may not be logged in.");
}
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
