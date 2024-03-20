import { account, ID } from "../lib/appwrite";
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
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
        <h1>Aratagi Gang Registration</h1>
      </center>
      <input
        type="text"
        className="box-container"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
          onClick={async () => {
            await account.create(ID.unique(), email, password, name);
            login(email, password);
          }}
        >
          Register
        </button>
      </div>
      <div className="box-caption">
        <p>
          Apne gang ke ho? <a className="links" href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
