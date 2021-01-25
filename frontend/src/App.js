import "./App.css";
import { React, useState } from "react";
import Login from "./components/Login";
function App() {
  const [token, setToken] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {token ? (
          <h1>THIS IS A PROTECTED ROUTE REQUIRING AUTHENTICATION</h1>
        ) : (
          <Login />
        )}
      </header>
    </div>
  );
}

export default App;
