import React from "react";
import "./Login.css";

function Login(props) {
  return (
    <div className=" Login-div ">
      <div className="welcome">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2276/2276931.png"
          alt=""
        />
        <h1>WELCOME</h1>
      </div>

      <form>
        <input placeholder="Email" type="text" name="" id="" />
        <input placeholder="Password" type="text" name="" id="" />
        <input placeholder="Confirm Password" type="text" name="" id="" />
        <button>LOGIN</button>
        <div className="form_div">
          <p>Forgot Password</p>
          <p>Create New Account</p>
        </div>
      </form>
    </div>
  );
}

export default Login;
