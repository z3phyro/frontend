import React from "react";
import "./footer.scss";

const Footer = () => {
    return <div className="FooterWrapper">
        <div className="FooterContainer">
            <div className="Logo">
                findr
            </div>
            <div className="Columns">
                <div className="Column">
                    <div className="Link">Lorem Ipsum</div>
                    <div className="Link">Lorem Ipsum</div>
                    <div className="Link">Lorem Ipsum</div>
                    <div className="Link">Lorem Ipsum</div>
                    <div className="Link">Lorem Ipsum</div>
                </div>
                <div className="Column">
                    <div className="Link">Lorem Ipsum</div>
                    <div className="Link">Lorem Ipsum</div>
                    <div className="Link">Lorem Ipsum</div>
                    <div className="Link">Lorem Ipsum</div>
                    <div className="Link">Lorem Ipsum</div>
                </div>
                <div className="Column">
                    <div className="Link">Lorem Ipsum</div>
                    <div className="Link">Lorem Ipsum</div>
                    <div className="Link">Lorem Ipsum</div>
                    <div className="Link">Lorem Ipsum</div>
                    <div className="Link">Lorem Ipsum</div>
                </div>
            </div>
            <div className="Register">
                <div className="Title">Register for updates</div>
                <div className="RegisterGroup">
                    <input type="text"/>
                    <div className="Square"></div>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;
