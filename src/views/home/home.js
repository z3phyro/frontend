import React from 'react';
import "./home.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Home = () => {
    return <div className="HomeContainer">
        <Header/>
        <div className="MainContainer">
            <div className="Info Center">
                <div className="Title">
                    Lorem ipsum dolor sit amet,
                    adipiscing elit, sed
                </div>
                <div className="Button">Get started</div>
            </div>
        </div>
        <div className="HowItWorksContainer">
            <div className="Info Center">
                <div className="Title">
                    How it works
                </div>
            </div>
            <div className="Characteristics">
                <div className="Characteristic">
                    <div className="Image"></div>
                    <div className="Description">
                        Lorem ipsum dolor sit amet, consectetur
                    </div>
                </div>
                <div className="Characteristic">
                    <div className="Image"></div>
                    <div className="Description">
                        Lorem ipsum dolor sit amet, consectetur
                    </div>
                </div>
                <div className="Characteristic">
                    <div className="Image"></div>
                    <div className="Description">
                        Lorem ipsum dolor sit amet, consectetur
                    </div>
                </div>
            </div>
            <div className="Button">Get started</div>
        </div>
        <div className="WhyChooseContainer">
            <div className="Data">
                <div className="Info">
                    <div className="Title">
                        Why Choose us?
                    </div>
                    <div className="Description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna
                    </div>
                    <div className="Button">Get started</div>
                </div>
            </div>
            <div className="Image">

            </div>
        </div>

        <div className="WhatWeOfferContainer">
            <div className="Info">
                <div className="Title">
                    What we offer
                </div>
            </div>
            <div className="Offers">
                <div className="Offer">
                    <div className="Title">
                        2000+
                    </div>
                    <div className="Description">
                        Lorem ipsum dolor sit amet, consectetur
                    </div>
                </div>
                <div className="Offer">
                    <div className="Title">
                        24hrs
                    </div>
                    <div className="Description">
                        Lorem ipsum dolor sit amet, consectetur
                    </div>
                </div>
                <div className="Offer">
                    <div className="Title">
                        300+
                    </div>
                    <div className="Description">
                        Lorem ipsum dolor sit amet, consectetur
                    </div>
                </div>
            </div>
            <div className="Button">Get started</div>
        </div>

        <div className="PartnersContainer">
            <div className="Info Center">
                <div className="Title">
                    Used by the world's most innovative companies
                </div>
            </div>
            <div className="Partners">
                <div className="Partner">
                </div>
                <div className="Partner">
                </div>
                <div className="Partner">
                </div>
                <div className="Partner">
                </div>
                <div className="Partner">
                </div>
                <div className="Partner">
                </div>
                <div className="Partner">
                </div>
                <div className="Partner">
                </div>
            </div>
            <div className="Button Secondary">
                Get started
            </div>
        </div>

        <div className="MeetContainer">
            <div className="Info">
                <div className="Title">
                    Meet the team
                </div>
            </div>
            <div className="Members">
                <div className="Member">
                    <div className="Avatar"></div>
                    <div className="Name">Greg Watts</div>
                    <div className="Position">Cheif Executive Officer</div>
                </div>
                <div className="Member">
                    <div className="Avatar"></div>
                    <div className="Name">Greg Watts</div>
                    <div className="Position">Cheif Executive Officer</div>
                </div>
                <div className="Member">
                    <div className="Avatar"></div>
                    <div className="Name">Greg Watts</div>
                    <div className="Position">Cheif Executive Officer</div>
                </div>
                <div className="Member">
                    <div className="Avatar"></div>
                    <div className="Name">Greg Watts</div>
                    <div className="Position">Cheif Executive Officer</div>
                </div>
            </div>
            <div className="Button">Get started</div>
        </div>
        <Footer/>
    </div>
};

export default Home;
