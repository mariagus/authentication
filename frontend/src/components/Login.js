import { React, useState } from "react";
import "./Login.css";
function Login(props) {
  // state with username input
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <div className="login">
      <h3>LOG IN</h3>
      <form>
        <p>username:</p>
        <input type="textbox" onChange={(e) => setEmailInput(e.target.value)} />
        <p>password:</p>
        <input
          type="textbox"
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <br />
        {/* call callback with local state as args */}
        <button
          id="button"
          onClick={(e) => {
            e.preventDefault();
            props.handleLogin(emailInput, passwordInput);
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
