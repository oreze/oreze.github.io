import React, {useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from 'tsparticles-engine';
import {Container} from "react-dom";
import CVPdf from './resources/SzymonJedrychResume.pdf';
import BackgroundParticles from "./components/background-particles/background-particles";
import AboutMe from "./components/section-list/about-me";

function App() {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <div className="App">
            <BackgroundParticles/>
            <AboutMe/>
        </div>
    );


}

export default App;
