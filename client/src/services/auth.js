import axios from "axios";

const backendURL = "http://127.0.0.1:3000/";

const login = (email, password, secretKey, navigate) => {
  axios
    .post(`${backendURL}user/login`, {
      email: email,
      password: password,
      secretKey: secretKey,
    })
    .then((res) => {
      if (res.data) {
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
    .post(`${backendURL}user/signup`, {
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
