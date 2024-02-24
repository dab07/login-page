import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {account, ID} from "./lib/appwrite.js";

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState('');

  async function login(email, password) {
    await account.createEmailSession(email, password);
    setIsLogin(await account.get());
  }

  return (
      <div className="App">
        <div style={{display: "flex", justifyContent:"center", flexDirection: "row", position:"absolute", top: 100,  color:"white", fontSize: 20}}>
          {isLogin ? `Logged in as ${isLogin.name}` : 'Not logged in'}
        </div>
        <div className="Login-box">
            <center><h1>Welcome to []</h1></center>
            <input type="text" className="box-container" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)}/>
            <input type="email" className="box-container" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" className="box-container" placeholder="Password, you remember?" value={password} onChange={e => setPassword(e.target.value)}/>
            <div style={{display:"flex", justifyContent : "center"}}>
                <button type="button" id="button-container" onClick={() => login(email, password)}>
                    Login
                </button>
                <button type="button" id="button-container" onClick={async () => {
                    await account.create(ID.unique(), email, password, name);
                    login(email, password);
                    }}>
                    Register
                </button>
            </div>
        </div>

        {/*  <button type={"button"} onChange={async () => {*/}
        {/*    await account.deleteSessions('current');*/}
        {/*    setIsLogin(null)*/}
        {/*  }}>*/}
        {/*    Logout*/}
        {/*  </button>*/}
      </div>
  );
}

export default App;
