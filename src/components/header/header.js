import React from "react";
import "./header.scss";

const Header = () => {
    return <div className="HeaderWrapper">
        <div className="HeaderContainer">
            <div className="Logo">
                findr
            </div>
            <div className="Menu">
                <div className="Links">
                    <div className="Link">How it works</div>
                    <div className="Link">For Startups</div>
                    <div className="Link">For Corporations</div>
                    <div className="Link">For Investors</div>
                </div>
                <div className="Buttons">
                    <div className="Button Secondary SignUp Small">Sign up</div>
                    <div className="Button Small">Login</div>
                </div>
            </div>
        </div>
    </div>;
}

export default Header;
