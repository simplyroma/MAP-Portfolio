'use client';
import React, { useEffect } from 'react';

type GlowCircleProps = {
  size?: number;
};

const GlowCircle: React.FC<GlowCircleProps> = ({ size = 200 }) => {
  useEffect(() => {
    const styleId = 'glow-circle-animation';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 rgba(255, 60, 0, 0);
          }
          50% {
            box-shadow: 0 0 10px 6px rgba(255, 60, 0, 0.2);
          }
        }

        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div
      className="pulse-glow"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'radial-gradient(circle, #ff3c00 0%, #ff6b3e 50%, transparent 100%)',
      }}
    />
  );
};

export default GlowCircle;
