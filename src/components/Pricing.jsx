import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for getting started",
      price: 0,
      period: "month",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month"
      ],
      buttonText: "Get Started Free",
      buttonClass: "bg-indigo-700 text-white hover:bg-blue-700"
    },
    {
      name: "Pro",
      description: "Best for professionals",
      price: 29,
      period: "month",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics"
      ],
      buttonText: "Start Pro Trial",
      buttonClass: "bg-indigo-700 text-white hover:bg-blue-700",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For teams and businesses",
      price: 99,
      period: "month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding"
      ],
      buttonText: "Contact Sales",
      buttonClass: "bg-indigo-700 text-white hover:bg-blue-700"
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 mt-2">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-lg shadow-md overflow-hidden border ${
                plan.popular ? 'border-indigo-700 bg-indigo-700 relative' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="bg-indigo-700 text-white text-center text-sm py-1">Most Popular</div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-500 ml-1">/{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 w-full py-2 rounded-lg font-medium transition ${plan.buttonClass}`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;