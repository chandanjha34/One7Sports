import React from 'react'

export const Details = () => {
    const stats = [
        { id: 1, value: 2000, suffix: "+", label: "Active Members" },
        { id: 2, value: 5, label: "Tournaments Hosted Annually" },
        { id: 3, value: "8-12", label: "Sports Playground" },
        { id: 4, value: 98, suffix: "%", label: "Customer Satisfaction" },
      ];
    
      const [displayedValues, setDisplayedValues] = useState(
        stats.map(() => 0) // Initialize all stats at 0
      );
    
      useEffect(() => {
        stats.forEach((stat, index) => {
          if (typeof stat.value === "number") {
            const increment = stat.value / 100; // Adjust speed of animation
            let currentValue = 0;
    
            const interval = setInterval(() => {
              currentValue += increment;
              if (currentValue >= stat.value) {
                currentValue = stat.value;
                clearInterval(interval);
              }
    
              setDisplayedValues((prev) => {
                const updated = [...prev];
                updated[index] = Math.floor(currentValue);
                return updated;
              });
            }, 20); // Adjust interval speed
          }
        });
      }, [stats]);
    
      return (
        <div className="stats-container flex justify-between items-center py-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="stat-item text-center mx-4 flex flex-col items-center"
            >
              <h2 className="text-blue-500 font-bold text-4xl stat-number">
                {typeof stat.value === "number"
                  ? displayedValues[index] + (stat.suffix || "")
                  : stat.value}
              </h2>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
  )
}
