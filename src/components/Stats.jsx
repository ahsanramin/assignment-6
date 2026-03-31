import React from 'react';

const Stats = () => {
  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "200+", label: "Premium Tools" },
    { number: "4.9", label: "Rating" },
  ];

  return (
    <div className="bg-indigo-700 py-12 border-b mx-auto ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-white">{stat.number}</div>
              <div className="text-white">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;