import React, { useState, useContext } from "react";

import Logo from "../../olx-logo.png";
import "./Signup.css";
import { FirebaseContext } from "../../Store/Context";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const { firebase } = useContext(FirebaseContext);

  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      result.user.updateProfile({ displayName: userName });

      await firebase.firestore().collection("users").add({
        id: result.user.uid,
        userName: userName,
        phoneNumber: phoneNumber,
        email: email,
      });

      await history.push("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
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
          <button>Signup</button>
        </form>
        <Link to="/login">
          <a>Login</a>
        </Link>
      </div>
    </div>
  );
}
