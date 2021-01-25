import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <form>
        <p>username:</p>
        <input type="textbox" />
        <p>password:</p>
        <input type="textbox" />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
