import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../Store/Context";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

import Logo from "../../olx-logo.png";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Login;
