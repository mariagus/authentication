import "./App.css";
import { React, useEffect, useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import { createUser, loginUser } from "./util/session_api_util";
//import jwt_decode from "jwt-decode";

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  //useEffect to monitor whether the user is still logged in?
  useEffect(() => {
    localStorage.jwtToken ? setLoggedIn(true) : setLoggedIn(false);
    setLoading(false);
  }, [loggedIn]);

  const handleLogin = async (email, password) => {
    const payload = {
      email: email,
      password: password,
    };
    const result = await loginUser(payload);
    localStorage.jwtToken = result.token;
    setLoggedIn(result.success);
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
    setLoggedIn(result.success);
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
            <h1>You're in</h1>
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
