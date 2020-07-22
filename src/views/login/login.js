import React from "react";
import "./login.scss";
import textData from "../../content/auth.yaml";

const Login = () => {
    return <div className="LoginContainer">
        <div className="LoginBox">
            <div className="Title">{textData.login.title}</div>
            <div className="Description">{textData.login.description}</div>

            <div className="Form">
                <div className="InputGroup">
                    <div className="Label">
                        {textData.login.email}
                    </div>
                    <input type="text" className="Input"/>
                </div>
                <div className="InputGroup Bottom">
                    <div className="Label">
                        {textData.login.password}
                    </div>
                    <input type="text" className="Input"/>
                </div>
                <a href="#" className="ForgotPassword">{textData.login.forgotPassword}</a>
            </div>

            <div className="Button">{textData.login.button}</div>
            <a href="#" className="NoAccount">{textData.login.noAccount}</a>
        </div>
    </div>
}

export default Login;
