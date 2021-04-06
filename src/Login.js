import React from "react";
import "./Login.css";
import logo from "./static/facebook.png";
import text from "./static/text.jpg";
import Button from "@material-ui/core/Button";
import { auth } from "./firebase";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
const provider = new firebase.auth.GoogleAuthProvider();

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });

        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div>
        <img src={logo} />
        <img src={text} />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign in
      </Button>
    </div>
  );
}

export default Login;
