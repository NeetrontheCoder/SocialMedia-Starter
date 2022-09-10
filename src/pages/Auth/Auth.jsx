import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="WebName">
          <h1>Silver & Grain</h1>
          <h6>Analog photography online.</h6>
        </div>
      </div>

      <SignUp />
    </div>
  );
};

function SignUp() {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Sign Up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="User Name"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="infoInput"
            name="pass"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="infoInput"
            name="confirmpass"
          />
        </div>

        <div>
                  <span style={{ fontSize: '12px'}}>Already have an account? Login!</span>
        </div>
            <button className="button infoButton" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Auth;
