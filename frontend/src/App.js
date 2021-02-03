import "./App.css";
import { React, useEffect, useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";

import jwtDecoder from "./util/helperFunctions";
import {
  createUser,
  loginUser,
  setAuthToken,
  getCurrentUser,
} from "./util/session_api_util";

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  //useEffect to monitor whether the user is still logged in
  useEffect(() => {
    if (localStorage.jwtToken) {
      setLoggedIn(true);
      getUserInfo();
      setAuthToken(localStorage.jwtToken);
      const decodedUser = jwtDecoder(localStorage.jwtToken);
      setUsername(decodedUser.username);
      if (decodedUser.exp > Date.now()) {
        handleLogout();
      }
    }
    setLoading(false);
  }, [loggedIn, username]);

  const handleLogin = async (email, password) => {
    const payload = {
      email: email,
      password: password,
    };

    try {
      const data = await loginUser(payload);
      localStorage.setItem("jwtToken", data.token);
      setLoggedIn(data.success);
      getUserInfo();
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegister = async (username, email, password, password2) => {
    const payload = {
      username: username,
      email: email,
      password: password,
      password2: password2,
    };
    const result = await createUser(payload);
    localStorage.setItem("jwtToken", result.token);
    setLoggedIn(result.success);
    getUserInfo();
  };

  const handleLogout = () => {
    localStorage.clear();
    setUsername("");
    setLoggedIn(false);
    setUserInfo([]);
  };

  const getUserInfo = async () => {
    const result = await getCurrentUser();
    setUserInfo(result);
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

            {userInfo.map((el, i) => (
              <li key={i} style={{ textAlign: "left" }}>
                {el}
              </li>
            ))}

            <button onClick={() => handleLogout()} style={{ margin: "1rem" }}>
              LOGOUT
            </button>
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
