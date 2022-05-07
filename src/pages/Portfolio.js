import React, {useState} from "react";
import Navigation from '../components/navigation';
import StandardPage from "../components/DefaultPage";
import Projects from "../components/ProjectsSection";
import './Portfolio.css';


export default function Portfolio() {

    const [whichProject, setWhichProject] = useState("current");
    const [currentProjects, setCurrentProjects] = useState("currentProjects");
    const [pastProjects, setPastProjects] = useState("pastProjects2");

    function changeButton(toProject) {
        if (toProject === "current") {
            setCurrentProjects("currentProjects");
            setPastProjects("pastProjects2");
        } else {
            setPastProjects("pastProjects");
            setCurrentProjects("currentProjects2");
        }
        setWhichProject(toProject);
        console.log(whichProject)
    }

    function transitionElement() {
        var previousPosition = window.pageYOffset || document.documentElement.scrollTop;

        window.onscroll = function() {
        var currentPosition = window.pageYOffset || document.documentElement.scrollTop;

        if (previousPosition > currentPosition) {
            console.log('scrolling up');
        } else {
            console.log('scrolling down');
        }

  previousPosition = currentPosition;
};
    }

    return (
        <StandardPage>
            <Navigation />
            <div className="">
                <div className="portfolioMain">
                    <h1>Ahh the projects page, where it all begins</h1>
                    <div className="portfolioButtons">
                        <button className="portfolioButton" onClick={() => changeButton("current")}>Current Projects</button>
                        <button className="portfolioButton" onClick={() => changeButton("past")}>Past Projects</button>
                    </div>
                    <div className={pastProjects}>
                        <Projects project = "URCA"/>
                        <Projects project = "HCI"/>
                        <Projects project = "234"/>
                    </div>
                    <div className={currentProjects}>
                        <Projects project = "Portfolio"/>
                        <Projects project = "Placeholder"/>
                        <Projects project = "Placeholder"/>
                        <Projects project = "Placeholder"/>
                        <Projects project = "Placeholder"/>
                    </div>
                </div>
            </div>
        </StandardPage>
    );
};