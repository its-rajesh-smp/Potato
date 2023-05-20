import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import {
  createNewUser,
  loginExistingUser,
} from "../../Store/Actions/authActions";

function Login(props) {
  const dispatch = useDispatch();
  const [islogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Switch Login
  const switchLogin = () => {
    setIsLogin((p) => !p);
  };

  //On Create Account
  const onCreateAccount = (e) => {
    e.preventDefault();
    if (!loading) {
      setLoading(true);
      const enteredInput = {
        email: email,
        password: password,
      };
      dispatch(createNewUser(enteredInput, setLoading));
    }
  };

  // On Login Account
  const onLoginAccount = (e) => {
    e.preventDefault();
    if (!loading) {
      setLoading(true);
      const enteredInput = {
        email: email,
        password: password,
      };
      dispatch(loginExistingUser(enteredInput, setLoading));
    }
  };

  return (
    <div className=" Login-div ">
      <div className="welcome">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2276/2276931.png"
          alt=""
        />
        <h1>WELCOME</h1>
        <p>{islogin ? "Login" : "Create A Account"} To Continue</p>
      </div>

      <form>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          type="text"
          name=""
          id=""
        />

        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          type="text"
          name=""
          id=""
        />
        {!islogin && (
          <input
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            placeholder="Confirm Password"
            type="text"
            name=""
            id=""
          />
        )}

        {islogin ? (
          <button onClick={onLoginAccount}>
            {!loading ? "LOGIN" : <i className="bx bx-loader-circle bx-spin" />}
          </button>
        ) : (
          <button onClick={onCreateAccount}>
            {!loading ? (
              "CREATE ACCOUTN"
            ) : (
              <i className="bx bx-loader-circle bx-spin" />
            )}
          </button>
        )}

        <div className="form_div">
          {islogin && <p>Forgot Password</p>}

          <p onClick={switchLogin}>
            {islogin ? "Create New Account" : "Existing User Login"}
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
