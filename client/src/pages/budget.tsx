import { Link } from "wouter";
import { Heart } from "lucide-react";
import { campaignData } from "@/lib/campaign-data";
import { formatCurrency } from "@/lib/donation-utils";

export default function Budget() {
  return (
    <div className="fade-in">
      <section className="min-h-screen py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gradient mb-6">Campaign Budget</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transparent breakdown of our {formatCurrency(campaignData.budget.total)} campaign budget for maximum impact and accountability.
            </p>
            <div className="glass rounded-2xl p-6 inline-block">
              <h3 className="text-4xl font-bold text-gray-800">
                {formatCurrency(campaignData.budget.total)}
              </h3>
              <p className="text-gray-600">Total Campaign Budget</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Budget Breakdown */}
            <div className="space-y-6">
              {campaignData.budget.breakdown.slice(0, 4).map((item, index) => (
                <div key={index} className="glass rounded-2xl p-6 hover-glass transition-all duration-300">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl font-semibold text-gray-800">{item.category}</h4>
                    <span className="text-2xl font-bold text-primary">{item.percentage}%</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="bg-gray-200 rounded-full h-3 mb-2">
                    <div 
                      className={`bg-gradient-to-r ${item.color} h-3 rounded-full`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-lg font-semibold text-gray-800">
                    {formatCurrency(item.amount)}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Budget Items */}
            <div className="space-y-6">
              {campaignData.budget.breakdown.slice(4).map((item, index) => (
                <div key={index} className="glass rounded-2xl p-6 hover-glass transition-all duration-300">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl font-semibold text-gray-800">{item.category}</h4>
                    <span className="text-2xl font-bold text-secondary">{item.percentage}%</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="bg-gray-200 rounded-full h-3 mb-2">
                    <div 
                      className={`bg-gradient-to-r ${item.color} h-3 rounded-full`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-lg font-semibold text-gray-800">
                    {formatCurrency(item.amount)}
                  </p>
                </div>
              ))}

              {/* Support Types */}
              <div className="glass rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Forms of Support</h4>
                <div className="space-y-3">
                  {campaignData.supportTypes.map((support, index) => {
                    const colors = ["text-primary", "text-secondary", "text-accent", "text-green-500"];
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <span className={`${colors[index]} text-lg`}>•</span>
                        <span className="text-gray-700">{support.type}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Link href="/donate">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Heart className="w-5 h-5 inline mr-2" />
                Support Our Campaign
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
