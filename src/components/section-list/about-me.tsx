import React, { FC } from 'react';
import './about-me.css';
import IconCV from '../../resources/cv-icon.svg';
import DocumentCV from '../../resources/SzymonJedrychResume.pdf';
import ButtonLinkRounded from "../shared/buttons/button-with-icon/button-link-rounded";

interface SectionListProps {}

const AboutMe: FC<SectionListProps> = () => {
    return  (
        <div className="list-vertical">
            <div>
                <h1>Szymon Jędrych</h1>
                <h2>.NET Developer</h2>
            </div>
            <div className="list-horizontal">
                <ButtonLinkRounded linkPath={process.env.REACT_APP_GITHUB_PROFILE_URL as string} target={"_blank"} buttonText="Github"/>
                <ButtonLinkRounded linkPath={DocumentCV} target={"_blank"} buttonText="CV"/>
                <ButtonLinkRounded linkPath={process.env.REACT_APP_LINKEDIN_PROFILE_URL as string} target={"_blank"} buttonText="Linkedin"/>
            </div>
        </div>
    );
};

export default AboutMe;
