export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "£0/month",
      features: ["5 script generations per day", "1 script import"],
      buttonText: "Use for Free",
    },
    {
      name: "Premium",
      price: "£10/month",
      features: ["10 script generations per day", "5 script import"],
      buttonText: "Get Premium",
    },
    {
      name: "Pro",
      price: "£20/month",
      features: ["Unlimited script generations", "Unlimited imports"],
      buttonText: "Go Pro",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="text-3xl font-bold text-center mb-12 text-[#2E3A87]">
        <h2 >
          Choose Your Plan
        </h2>
        <p className="text-center text-sm text-white mt-1">Our billing cycle is monthly but you can cancel your plan anytime</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-md p-6 bg-white flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-[#2E3A87] mb-2">
                {plan.name}
              </h3>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <p className="text-sm text-gray-500 font-medium mb-2">
                What’s included:
              </p>
              <ul className="mb-6 space-y-2 text-gray-700 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
            </div>
            <button
              className={`mt-auto py-2 px-4 rounded transition ${
                plan.name === "Free"
                ? "bg-[#2E3A87] hover:bg-gray-600 text-white"
                : plan.name === "Premium"
                ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700"
                : "bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:from-gray-400 hover:to-gray-600"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
