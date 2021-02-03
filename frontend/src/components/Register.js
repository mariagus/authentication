import { React, useState } from "react";
import "./Register.css";
function Register(props) {
  const [usernameInput, setUsernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [password2Input, setPassword2Input] = useState("");

  return (
    <div className="register">
      <h3>SIGN UP</h3>
      <form>
        <p>username:</p>
        <input
          type="textbox"
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <p>email:</p>
        <input type="textbox" onChange={(e) => setEmailInput(e.target.value)} />

        <p>password:</p>
        <input
          type="textbox"
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <p>re-enter password:</p>
        <input
          type="textbox"
          onChange={(e) => setPassword2Input(e.target.value)}
        />
        <br />
        {/* call callback with local state as args */}
        <button
          id="button"
          onClick={(e) => {
            e.preventDefault();
            props.handleRegister(
              usernameInput,
              emailInput,
              passwordInput,
              password2Input
            );
          }}
        >
          Sign up
        </button>
        <div>
          {props.registerError.map((errors) => (
            <li style={{ color: "red", listStyle: "none" }}>{errors}</li>
          ))}
        </div>
      </form>
    </div>
  );
}

export default Register;
