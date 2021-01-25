import "./App.css";
import { React, useEffect, useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import { PromiseProvider } from "mongoose";
import { setAuthToken, createUser, loginUser } from "./util/session_api_util";

function App(props) {
  const [token, setToken] = useState(false);

  const handleLogin = async (email, password) => {
    const payload = {
      email: email,
      password: password,
    };
    const result = await loginUser(payload);
    console.log(result);
    await setToken(result);
  };

  const handleRegister = async (username, email, password, password2) => {
    const payload = {
      username: username,
      email: email,
      password: password,
      password2: password2,
    };
    const result = createUser(payload);
    await setToken(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        {token ? (
          <h1>You're in</h1>
        ) : (
          <div className="loginRegister">
            <Login handleLogin={handleLogin} />
            <Register handleRegister={handleRegister} />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
