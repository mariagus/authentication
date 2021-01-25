import { React, useState } from "react";
import "./Register.css";
function Register(props) {
  // state with username input
  const [usernameInput, setUsernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <div className="register">
      <h3>SIGN UP</h3>
      <form>
        <p>choose a username:</p>
        <input
          type="textbox"
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <p>your email:</p>
        <input type="textbox" onChange={(e) => setEmailInput(e.target.value)} />

        <p>choose a password:</p>
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
            props.handleRegister(usernameInput, emailInput, passwordInput);
          }}
        >
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Register;
