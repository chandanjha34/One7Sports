import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./Details.css";

function Details() {
  const stats = [
    { id: 1, value: 2000, suffix: "+", label: "Active Members" },
    { id: 2, value: 5, label: "Tournaments Hosted" },
    { id: 3, value: "8-12", label: "Sports Playground" },
    { id: 4, value: 98, suffix: "%", label: "Customer Satisfaction" },
  ];

  const [displayedValues, setDisplayedValues] = useState(
    stats.map(() => 0) // Initialize all numeric values to 0
  );

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      // Animate numeric stats only
      stats.forEach((stat, index) => {
        if (typeof stat.value === "number") {
          const totalFrames = 60; // Total animation frames
          const increment = stat.value / totalFrames; // Increment per frame
          let currentFrame = 0;

          const animate = () => {
            currentFrame++;
            const newValue = Math.min(stat.value, increment * currentFrame); // Increment the value

            setDisplayedValues((prev) => {
              const updated = [...prev];
              updated[index] = Math.floor(newValue); // Ensure the value is an integer
              return updated;
            });

            if (currentFrame < totalFrames) {
              requestAnimationFrame(animate); // Continue animation until all frames are complete
            }
          };

          animate(); // Start the animation for this stat
        } else {
          // Directly handle non-numeric values
          setDisplayedValues((prev) => {
            const updated = [...prev];
            updated[index] = stat.value;
            return updated;
          });
        }
      });
    }
  }, [inView]); // Trigger only when `inView` becomes true

  return (
    <div className="flex flex-col w-[100vw]">
      <div className="text-center text-3xl text-[#5FBC1E]">Some Milestones</div>
      <div ref={ref} className="stats-container w-full flex justify-between flex-col md:flex-row items-center py-8">
        {stats.map((stat, index) => (
          <div key={stat.id} className="stat-item text-center mx-4 flex flex-col items-center">
            <h2 className="text-blue-500 font-bold text-4xl stat-number">
              {typeof stat.value === "number"
                ? displayedValues[index] + (stat.suffix || "")
                : stat.value}
            </h2>
            <p className="text-gray-600 text-3xl md:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
