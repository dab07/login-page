import React, { useState } from "react";
import { account, ID } from "../lib/appwrite";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState("");

  async function login(email, password) {
    await account.createEmailSession(email, password);
    setIsLogin(await account.get());
  }
  return (
    <div className="Login-box">
      <center>
        <h1>Welcome to Aratagi Gang</h1>
      </center>
      <input
        type="email"
        className="box-container"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="box-container"
        placeholder="Password, you remember?"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          type="button"
          id="button-container"
          onClick={() => login(email, password)}
        >
          Login
        </button>
      </div>
      <div className="box-caption">
        <p>
          Account nhi hai? ban jayega! <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
};
export default Login;
