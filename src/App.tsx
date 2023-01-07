import React, {useCallback} from 'react';
import './App.css';
import {loadFull} from "tsparticles";
import {Engine} from 'tsparticles-engine';
import {Container} from "react-dom";
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
