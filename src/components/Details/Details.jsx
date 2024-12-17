import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./Details.css";

function Details() {
  const stats = [
    { id: 1, value: 4400, suffix: "+", label: "Active Members" },
    { id: 2, value: 25,suffix:"+", label: "Tournaments Hosted" },
    { id: 3, value: 14,suffix:"+", label: "Sports Playground" },
    { id: 4, value: 98, suffix: "%", label: "Customer Satisfaction" },
    { id: 5, value: 5, suffix: "+", label: "Premium Leagues" },
    { id: 6, value: 3, suffix: "+", label: "Box Cricket" },
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
      <div className="text-center text-4xl my-[2rem] font-bold text-[#5FBC1E]">Why Athletes Chose us</div>
      <div ref={ref} className="stats-container w-full flex justify-between flex-wrap flex-col md:flex-row items-center py-8">
        {stats.map((stat, index) => (
          <div key={stat.id} className=" stat-item text-center mx-4 flex flex-col justify-between items-center">
            <h2 className="text-blue-500 text-white font-bold text-4xl stat-number">
              {typeof stat.value === "number"
                ? displayedValues[index] + (stat.suffix || "")
                : stat.value}
            </h2>
            <p className="text-white text-3xl md:text-3xl">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
