import { Link } from "wouter";
import { Trophy, Megaphone, HandHeart, ArrowRight } from "lucide-react";
import { campaignData } from "@/lib/campaign-data";

export default function Vision() {
  const iconMap = {
    "Win the 2026 Election": Trophy,
    "Raise Awareness": Megaphone,
    "Inspire Civic Engagement": HandHeart
  };

  return (
    <div className="fade-in">
      <section className="min-h-screen py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gradient mb-6">Our Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {campaignData.campaign.vision}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="glass rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Campaign Objectives</h3>
                <div className="space-y-6">
                  {campaignData.campaign.objectives.map((objective, index) => {
                    const IconComponent = iconMap[objective.title as keyof typeof iconMap];
                    const colors = ["bg-primary", "bg-secondary", "bg-accent"];
                    
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`w-8 h-8 ${colors[index]} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">{objective.title}</h4>
                          <p className="text-gray-600">{objective.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <div className="glass rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Target Audience</h3>
              <div className="space-y-4">
                {campaignData.campaign.targetAudience.map((audience, index) => (
                  <div key={index} className="bg-white/50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">{audience.title}</h4>
                    <p className="text-gray-600">{audience.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <Link href="/pillars">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <ArrowRight className="w-5 h-5 inline mr-2" />
                Explore Our Strategy
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
