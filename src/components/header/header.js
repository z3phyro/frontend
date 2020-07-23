import React from "react";
import "./header.scss";
import textData from "../../content/header.yaml";
import {Link} from "react-router-dom";

const Header = () => {
    return <header className="HeaderWrapper">
        <div className="HeaderContainer">
            <div className="Logo">
                findr
            </div>
            <div className="Menu">
                <div className="Links">
                    {textData.links.map((link, i) => <div key={i} className="Link">{link.data.title}</div>)}
                </div>
                <div className="Buttons">
                    <div className="Button Secondary SignUp Small">{textData.signUp}</div>
                    <Link className="Button Small" to={'/login'}>{textData.login}</Link>
                </div>
            </div>
        </div>
    </header>;
}

export default Header;
