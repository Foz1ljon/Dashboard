import { ref } from "vue";
import axios from "axios";

export const useAuth = () => {
  const isLogin = ref(false);
  const error = ref(null);

  const userData = ref({
    username: "emilys",
    password: "emilyspass",
  });

  const login = async (userData) => {
    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        userData.value
      );
      isLogin.value = true;
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("refreshToken", response.data.refreshToken);
    } catch (err) {
      error.value = err.response ? err.response.data.message : err.message;
      console.log(err.response.data.message);
      isLogin.value = false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    console.log("hello");
    isLogin.value = false;
  };

  return { isLogin, error, userData, login, logout };
};
