import React, { useEffect, useState } from "react";
import "./StartBackground.css";

const StartBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const count = 100;
    const newStars = [];

    for (let i = 0; i < count; i++) {
      newStars.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 2 + 1,
        delay: Math.random() * 3,
      });
    }

    setStars(newStars);
  }, []);

  return (
    <div className="star-background">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default StartBackground;
