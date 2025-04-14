import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,

} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const Particle = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options:ISourceOptions  = useMemo(
        () => ( {
            particles: {
                number: { value: 100, density: { enable: true, value_area: 600 } },
                color: { value: "rgb(255,255,255)" },
                shape: {
                    type: "circle",
                    stroke: { width: 2, color: "#000000" },
                    polygon: { nb_sides: 5 },
                    image: { src: "img/github.svg", width: 100, height: 100 }
                },
                opacity: {
                    value: 0.1,
                    random: true,
                    anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
                },
                line_linked: {
                    enable: false,
                    distance: 300,
                    color: "#1b7527",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: { enable: false, rotateX: 600, rotateY: 600 }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onHover: { enable: true, mode: "bubble" },
                    onClick: { enable: true, mode: "repulse" },

                },
                modes: {
                    grab: { distance: 400, line_linked: { opacity: 1 } },
                    bubble: { distance: 400, size: 2, duration: 5, opacity: 1, speed: 0.2 },
                    repulse: { distance: 400, duration: 0.4 },
                    push: { particles_nb: 4 },
                    remove: { particles_nb: 2 }
                }
            },
            retina_detect: true
        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }

    return <></>;
};
