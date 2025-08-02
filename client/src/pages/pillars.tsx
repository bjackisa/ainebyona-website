import { Link } from "wouter";
import { TrendingUp, GraduationCap, Heart, Users, Rocket, BarChart3 } from "lucide-react";
import { campaignData } from "@/lib/campaign-data";

export default function Pillars() {
  const iconMap = {
    TrendingUp,
    GraduationCap,
    Heart,
    Users,
    Rocket
  };

  return (
    <div className="fade-in">
      <section className="min-h-screen py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gradient mb-6">Strategic Pillars</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to transforming the Western Region through youth-centered initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaignData.strategicPillars.map((pillar, index) => {
              const IconComponent = iconMap[pillar.icon as keyof typeof iconMap];
              
              return (
                <div key={index} className="glass rounded-3xl p-8 hover-glass transition-all duration-500 group">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{pillar.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {pillar.initiatives.map((initiative, initIndex) => (
                      <div key={initIndex} className="bg-white/50 rounded-xl p-4">
                        <p className="text-gray-700">
                          <span className={`inline-block w-2 h-2 rounded-full ${pillar.iconColor.replace('text-', 'bg-')} mr-3`}></span>
                          {initiative}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Link href="/budget">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <BarChart3 className="w-5 h-5 inline mr-2" />
                View Campaign Budget
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
