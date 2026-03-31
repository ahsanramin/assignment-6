import React from 'react';

const Steps = () => {
  const steps = [
    {
      number: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started."
    },
    {
      number: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs."
    },
    {
      number: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately."
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Get Started In 3 Steps</h2>
          <p className="text-gray-600 mt-2">Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;