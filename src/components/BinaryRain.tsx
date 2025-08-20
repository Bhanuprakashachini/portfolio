import React, { useEffect, useState } from 'react';

const BinaryRain: React.FC = () => {
  const [drops, setDrops] = useState<Array<{ id: number; left: string; delay: string }>>([]);

  useEffect(() => {
    const generateDrops = () => {
      const newDrops = [];
      for (let i = 0; i < 20; i++) {
        newDrops.push({
          id: i,
          left: `${Math.random() * 100}%`,
          delay: `${Math.random() * 10}s`,
        });
      }
      setDrops(newDrops);
    };

    generateDrops();
  }, []);

  const generateBinaryString = () => {
    return Array.from({ length: 20 }, () => Math.round(Math.random())).join('');
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="binary-rain absolute text-xs opacity-30"
          style={{
            left: drop.left,
            animationDelay: drop.delay,
          }}
        >
          {generateBinaryString()}
        </div>
      ))}
    </div>
  );
};

export default BinaryRain;