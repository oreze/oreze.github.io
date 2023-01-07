import {FC, useCallback} from "react";
import type {Container, Engine} from "tsparticles-engine";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import backgroundParticlesConfig from "../../config/backgroundParticlesConfig";

interface BackgroundParticlesProps {
}

const BackgroundParticles: FC<BackgroundParticlesProps> = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={backgroundParticlesConfig}
        />
    );
}

export default BackgroundParticles;
