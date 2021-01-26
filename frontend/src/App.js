import "./App.css";
import { React, useEffect, useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import {
  createUser,
  loginUser,
  getUsername,
  setAuthToken,
} from "./util/session_api_util";

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  //useEffect to monitor whether the user is still logged in?
  useEffect(() => {
    if (localStorage.jwtToken) {
      setLoggedIn(true);
      setAuthToken(localStorage.jwtToken);
    } else {
      setLoggedIn(false);
    }
    loggedIn ? setUsername(localStorage.username) : setUsername("");
    setLoading(false);
  }, [loggedIn, username]);

  const handleLogin = async (email, password) => {
    const payload = {
      email: email,
      password: password,
    };
    const result = await loginUser(payload);
    localStorage.jwtToken = result.token;
    setLoggedIn(result.success);
    setUsername(getUsername(result.token));
  };

  const handleRegister = async (username, email, password, password2) => {
    const payload = {
      username: username,
      email: email,
      password: password,
      password2: password2,
    };
    const result = await createUser(payload);
    localStorage.jwtToken = result.token;
    setUsername(getUsername(result.token));
  };

  const handleLogout = () => {
    localStorage.jwtToken = "";
    setLoggedIn(false);
  };

  if (loading) {
    return (
      <div>
        <h1>LOADING!!!!</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        {loggedIn ? (
          <div>
            <h1>You're in, {username}!</h1>
            <button onClick={() => handleLogout()}>LOGOUT</button>
          </div>
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
