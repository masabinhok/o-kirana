import axios from "axios";

const backendURL = "http://127.0.0.1:3000/";

const login = (email, password, secretKey, navigate, setIsAuth) => {
  axios
    .post(`${backendURL}auth/login`, {
      email: email,
      password: password,
      secretKey: secretKey,
    })
    .then((res) => {
      if (res.data) {
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
