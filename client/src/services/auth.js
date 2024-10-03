import axios from "axios";

const backendURL = "https://localhost:3000/";

const login = (email, password, secretKey, navigate, setIsAuth) => {
  axios
    .post(`${backendURL}auth/login`, {
      email: email,
      password: password,
      secretKey: secretKey,
    })
    .then((res) => {
      if (res.data) {
        localStorage.setItem("token", res.data.token);
        setIsAuth(true);
        navigate("/dashboard");
      } else {
        console.log("login failed!");
      }
    })
    .catch((err) => {
      console.error("Error during login: ", err);
    });
};

const signup = (email, password, fullName, navigate, setAuth) => {
  axios
    .post(`${backendURL}auth/signup`, {
      email: email,
      password: password,
      fullName: fullName,
    })
    .then((res) => {
      if (res.data) {
        localStorage.setItem("token", res.data.token);
        setAuth("AUTH");
        window.alert("Signup successful!");
      } else {
        console.log("Signup failed!");
      }
    })
    .catch((err) => {
      console.error("Error during signup: ", err);
    });
};

export { login, signup };
