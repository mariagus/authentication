import { React, useState } from "react";
import "./Login.css";
function Login(props) {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <div className="login">
      <h3>LOG IN</h3>
      <form>
        <p>email:</p>
        <input type="textbox" onChange={(e) => setEmailInput(e.target.value)} />
        <p>password:</p>
        <input
          type="textbox"
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <br />
        {/* call callback with local state as args */}
        <button
          style={{ margin: "2em" }}
          id="button"
          onClick={(e) => {
            e.preventDefault();
            props.handleLogin(emailInput, passwordInput);
          }}
        >
          Login
        </button>
        <div>
          {props.loginError.map((errors) => (
            <li style={{ color: "red", listStyle: "none", fontSize: "small" }}>
              Error: {errors}
            </li>
          ))}
        </div>
      </form>
    </div>
  );
}

export default Login;
