import { FC, useCallback } from "react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";

interface Props {
  variant?: 'light' | 'dark';
}

const ParticlesBackground: FC<Props> = ({ variant = 'light' }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options: ISourceOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: variant === 'light' ? "#2563eb" : "#ffffff"
      },
      opacity: {
        value: 0.2,
        animation: {
          enable: true,
          minimumValue: 0.1,
          speed: 1
        }
      },
      size: {
        value: 3,
        animation: {
          enable: true,
          minimumValue: 1,
          speed: 1
        }
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        outMode: "out",
        bounce: false,
      },
      links: {
        enable: true,
        distance: 150,
        color: variant === 'light' ? "#2563eb" : "#ffffff",
        opacity: 0.1,
        width: 1
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.3
          }
        }
      }
    },
    background: {
      color: "transparent"
    },
    detectRetina: true
  };

  return (
    <Particles
      className="absolute inset-0 -z-10"
      id="tsparticles"
      init={particlesInit}
      options={options}
    />
  );
};

export default ParticlesBackground;