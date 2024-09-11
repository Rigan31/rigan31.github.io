import React, { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = (props) =>{
  const [particlesContainer, setParticlesContainer] = useState();
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = (container) => {
    setParticlesContainer(container);
  };

  useEffect(() => {
    if (particlesContainer && particlesContainer.currentTheme !== props.theme) {
      particlesContainer.loadTheme(props.theme);
    }
  }, [props.theme, particlesContainer]);

  return useMemo(
    () => (
      <Particles
        id="tsparticles"
        loaded={particlesLoaded}
        init={particlesInit}
        options={{
            fullScreen: {
                enable: true,
                zIndex: -1,
              },
          background: {
            color: {
              value: "transparent"
            }
          },
          fpsLimit: 120,
          interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#000",
            },
            links: {
                color: "#000",
                distance: 200,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                directions: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 1200,
                },
                value: 50,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "star",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
          themes: [
            {
              name: "light",
              default: {
                value: true,
                mode: "light"
              },
              options: {
                background: {
                  color: "#fff"
                },
                particles: {
                  color: {
                    value: "#000"
                  },
                    links: {
                        color: "#000",
                    },
                }
              }
            },
            {
              name: "dark",
              default: {
                value: true,
                mode: "dark"
              },
              options: {
                background: {
                  color: "#000000"
                },
                particles: {
                  color: {
                    value: "#2f0f"
                  },
                    links: {
                        color: "#2f0f",
                    },
                }
              }
            }
          ],
          detectRetina: true
        }}
      />
    ),
    []
  );
}

export default ParticlesBackground;
