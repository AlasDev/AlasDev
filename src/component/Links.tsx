import "./Links.css"
import linkedinIcon from "../assets/images/linkedin.svg";
import githubIcon from "../assets/images/github.svg";
import steamIcon from "../assets/images/steam.svg";

export function Links() {
    const githubUrl = "https://github.com/AlasDev";
    const linkedinUrl = "https://www.linkedin.com/in/davide-sala-686554294/";
    const steamUrl = "https://steamcommunity.com/id/AlasDev/";

    return(
        <div className="links">
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
                <img className="linkIcon" src={linkedinIcon} alt="LinkedIn"/>
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer">
                <img className="linkIcon" src={githubIcon} alt="GitHub"/>
            </a>
            <a href={steamUrl} target="_blank" rel="noreferrer">
                <img className="linkIcon" src={steamIcon} alt="Steam"/>
            </a>
        </div>
    );
}