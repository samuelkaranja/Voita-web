"use client";

import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section className="w-full bg-[#f5f7f6] py-16 px-4" id="pricing">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          Premium road intelligence and community access without breaking the
          bank.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Monthly */}
          <div className="bg-gray-100 rounded-3xl p-8 flex flex-col justify-between shadow-lg">
            <div>
              <p className="text-sm tracking-widest text-green-700 font-semibold">
                FLEXIBLE
              </p>

              <h3 className="mt-4 text-4xl font-bold text-gray-900">
                KES 200
                <span className="text-base font-normal text-gray-500">
                  {" "}
                  / month
                </span>
              </h3>

              <ul className="mt-6 space-y-4">
                {[
                  "Road Intelligence",
                  "Verified Provider Network",
                  "Community Boards & Registry",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="bg-green-100 p-1 rounded-full">
                      <Check className="w-4 h-4 text-green-700" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-10 border border-gray-900 rounded-full py-3 font-medium text-black hover:bg-gray-900 hover:text-white transition hover:cursor-pointer">
              Get Started
            </button>
          </div>

          {/* Annual */}
          <div className="bg-[#062f27] text-white rounded-3xl p-8 flex flex-col justify-between relative shadow-lg">
            {/* Badge */}
            <div className="absolute top-6 right-6 bg-green-300 text-green-900 text-xs font-semibold px-3 py-1 rounded-full">
              SAVE 25%
            </div>

            <div>
              <p className="text-sm tracking-widest text-green-300 font-semibold">
                ANNUAL PASS
              </p>

              <h3 className="mt-4 text-4xl font-bold">
                KES 1,800
                <span className="text-base font-normal text-green-200">
                  {" "}
                  / year
                </span>
              </h3>

              <ul className="mt-6 space-y-4">
                {[
                  "Everything in Monthly",
                  "Priority Expert Chat",
                  "Yearly Safety & Asset Report",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-green-400/20 p-1 rounded-full">
                      <Check className="w-4 h-4 text-green-300" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-10 bg-green-300 text-green-900 rounded-full py-3 font-semibold hover:bg-green-200 transition hover:cursor-pointer">
              Secure Best Value
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
