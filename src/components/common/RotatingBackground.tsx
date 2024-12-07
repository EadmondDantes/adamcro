import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';

interface Props {
  children: React.ReactNode;
}

export default function RotatingBackground({ children }: Props) {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x2563eb,
          shininess: 35.00,
          waveHeight: 15.00,
          waveSpeed: 0.75,
          zoom: 0.65
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}