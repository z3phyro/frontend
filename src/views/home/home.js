import React from "react";
import "./home.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import textData from "../../content/home.yaml";

const Home = () => {
    return <div className="HomeContainer">
        <Header/>
        <div className="MainContainer">
            <div className="Info Center">
                <div className="Title">
                    {textData.main.title}
                </div>
                <div className="Button">{textData.main.button}</div>
            </div>
        </div>
        <div className="HowItWorksContainer">
            <div className="Info Center">
                <div className="Title">
                    {textData.howItWorks.title}
                </div>
            </div>
            <div className="Characteristics">
                {textData.howItWorks.characteristics.map((characteristic, i) => <div key={i} className="Characteristic">
                    <img className="Image" src={`${process.env.PUBLIC_URL}/img/${characteristic.data.image}`} alt="HowItWorks"/>
                    <div className="Description">
                        {characteristic.data.description}
                    </div>
                </div>)}
            </div>
            <div className="Button">{textData.howItWorks.button}</div>
        </div>
        <div className="WhyUsContainer">
            <div className="Data">
                <div className="Info">
                    <div className="Title">
                        {textData.whyUs.title}
                    </div>
                    <div className="Description" dangerouslySetInnerHTML={{__html: textData.whyUs.description}}>

                    </div>
                    <div className="Button">{textData.whyUs.button}</div>
                </div>
            </div>
            <img className="Image">

            </img>
        </div>

        <div className="WhatWeOfferContainer">
            <div className="Info">
                <div className="Title">
                    {textData.whatWeOffer.title}
                </div>
            </div>
            <div className="Offers">
                {textData.whatWeOffer.offers.map((offer, i) => <div key={i} className="Offer">
                    <div className="Title">
                        {offer.data.title}
                    </div>
                    <div className="Description">
                        {offer.data.description}
                    </div>
                </div>)}
            </div>
            <div className="Button">{textData.whatWeOffer.button}</div>
        </div>

        <div className="PartnersContainer">
            <div className="Info Center">
                <div className="Title">
                    {textData.partnerCompanies.title}
                </div>
            </div>
            <div className="Partners">
                {textData.partnerCompanies.partners.map((partner, i) =><img key={i} src={`${process.env.PUBLIC_URL}/img/${partner.data.image}`} alt={partner.data.name} className="Partner">
                </img>)}
            </div>
            <div className="Button Secondary">
                {textData.partnerCompanies.button}
            </div>
        </div>

        <div className="MeetOurTeamContainer">
            <div className="Info">
                <div className="Title">
                    {textData.meetOurTeam.title}
                </div>
            </div>
            <div className="Members">
                {textData.meetOurTeam.members.map((member, i) => <div key={i} className="Member">
                    <img src={`${process.env.PUBLIC_URL}/img/${member.data.avatar}`}className="Avatar" alt="Member"/>
                    <div className="Name">{member.data.name}</div>
                    <div className="Position">{member.data.position}</div>
                </div>)}
            </div>
            <div className="Button">{textData.meetOurTeam.button}</div>
        </div>
        <Footer/>
    </div>
};

export default Home;
