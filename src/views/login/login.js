import React from "react";
import "./login.scss";

const Login = () => {
    return <div className="LoginContainer">
        <div className="LoginBox">
            <div className="Title">Welcome back</div>
            <div className="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur</div>

            <div className="Form">
                <div className="InputGroup">
                    <div className="Label">
                        Company email address
                    </div>
                    <input type="text" className="Input"/>
                </div>
                <div className="InputGroup Bottom">
                    <div className="Label">
                        Password
                    </div>
                    <input type="text" className="Input"/>
                </div>
                <a href="#" className="ForgotPassword">Forgot password</a>
            </div>

            <div className="Button">Sign In</div>
            <a href="#" className="NoAccount">Don’t have an account yet?</a>
        </div>
    </div>
}

export default Login;
