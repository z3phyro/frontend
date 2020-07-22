import React from "react";
import "./footer.scss";
import textData from "../../content/footer.yaml";

const Footer = () => {
    return <footer className="FooterWrapper">
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
                <div className="Title">{textData.register.title}</div>
                <div className="RegisterGroup">
                    <input type="text"/>
                    <div className="Square"></div>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;
