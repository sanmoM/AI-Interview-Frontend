const plans = [
  {
    name: "Starter",
    price: "$29",
    description:
      "Perfect for startups and small businesses getting started with AI voice agents.",

    features: [
      "1 AI Voice Agent",
      "100 Monthly Calls",
      "Basic Call Analytics",
      "Web Call Support",
      "Email Support",
    ],

    button: "Start Building",

    popular: false,
  },

  {
    name: "Professional",
    price: "$99",

    description:
      "Advanced AI voice automation for growing teams and customer support.",

    features: [
      "5 AI Voice Agents",
      "2,000 Monthly Calls",
      "Phone Number Integration",
      "Advanced Analytics",
      "Custom Prompts & Flows",
      "Priority Support",
    ],

    button: "Start Free Trial",

    popular: true,
  },

  {
    name: "Enterprise",
    price: "$299",

    description:
      "Scalable AI voice infrastructure for enterprises and high-volume operations.",

    features: [
      "Unlimited AI Agents",
      "Unlimited Calls",
      "Dedicated Phone Numbers",
      "AI Call Insights",
      "Team Collaboration",
      "API Access",
      "24/7 Dedicated Support",
      "Advanced Security & Compliance",
    ],

    button: "Contact Sales",

    popular: false,
  },
];

export default function PricingComponent() {
  return (
    <section className="min-h-screen py-20 px-6 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-secondary px-4 py-1 text-sm font-medium text-primary mb-4">
            Pricing Plans
          </span>

          <h2 className="text-5xl font-bold tracking-tight text-gray-900">
            Simple pricing for everyone
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business. Upgrade anytime as your
            needs grow.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular
                  ? "border-secondary ring-2 ring-indigo-200 scale-105"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-secondary px-4 py-1 text-sm font-semibold text-primary shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 mb-1">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-2xl py-3 font-semibold transition-all duration-200 ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:opacity-95"
                    : "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
