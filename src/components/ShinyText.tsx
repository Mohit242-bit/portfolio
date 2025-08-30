import React from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`relative inline-block ${className}`}
      style={{
        color: '#b5b5b5',
      }}
    >
      <span
        className={`absolute inset-0 bg-clip-text text-transparent ${disabled ? '' : 'animate-shine'}`}
        style={{
          backgroundImage:
            'linear-gradient(120deg, #b5b5b5 40%, #fff 50%, #b5b5b5 60%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          animationDuration,
          zIndex: 2,
        }}
        aria-hidden="true"
      >
        {text}
      </span>
      <span style={{ visibility: 'hidden' }}>{text}</span>
    </span>
  );
};

export default ShinyText;
