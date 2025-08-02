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
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To ignite and empower a generation of youth leaders, change-makers, problem solvers and patriotic citizens through credible value-driven political representation in national parliament.
            </p>
            <div className="mt-8 glass rounded-2xl p-6 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">The Challenge We Face</h3>
              <p className="text-gray-700 leading-relaxed">
                The youth of Western Region represent the most dynamic and resourceful demographic in Uganda today, yet they continue to face persistent challenges—unemployment, exclusion from leadership, limited access to skills and capital, and a lack of meaningful representation in Parliament. The 2026–2031 election cycle presents a unique opportunity to change this narrative.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="glass rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Core Objectives</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Trophy className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Win the 2026 Election</h4>
                      <p className="text-gray-600">To win the 2026 election through a transparent, inclusive, and issue-based campaign that truly represents the voice of Western youth.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Megaphone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Raise Awareness & Build Support</h4>
                      <p className="text-gray-600">To raise awareness and build support for youth-centered legislation and development programs that will transform the Western Region.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <HandHeart className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Inspire Civic Engagement</h4>
                      <p className="text-gray-600">To inspire civic engagement and political education among youth, fostering a new generation of active patriotic citizens.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Target Audience</h3>
              <div className="space-y-4">
                <div className="bg-white/50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">National Youth Council Voters</h4>
                  <p className="text-gray-600">Three (3) National youth council college voters aged 18–30 at the sub county level</p>
                </div>
                
                <div className="bg-white/50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Student Representatives & PWDs</h4>
                  <p className="text-gray-600">Two student representatives nominated by UNSA, two youth among the Persons with Disabilities</p>
                </div>
                
                <div className="bg-white/50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Unemployed & Underemployed Youth</h4>
                  <p className="text-gray-600">Including student leaders in the institutes of higher learning seeking economic opportunities</p>
                </div>
                
                <div className="bg-white/50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Youth in Key Sectors</h4>
                  <p className="text-gray-600">Youth in agriculture, arts, and informal sectors who form the backbone of our regional economy</p>
                </div>
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
