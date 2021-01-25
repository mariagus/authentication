import "./App.css";
import { React, useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import { PromiseProvider } from "mongoose";

function App(props) {
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (username, password) => {
    setUsername(username);
    setPassword(password);
  };

  const handleRegister = (username, email, password) => {
    setUsername();
    setEmail();
    setPassword();
    console.log(email);
  };

  return (
    <div className="App">
      <header className="App-header">
        {token ? (
          <h1>THIS IS A PROTECTED ROUTE REQUIRING AUTHENTICATION</h1>
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
