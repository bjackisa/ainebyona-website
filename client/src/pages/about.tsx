import { Link } from "wouter";
import { GraduationCap, Heart, Users, Award, ArrowRight } from "lucide-react";
import { campaignData } from "@/lib/campaign-data";

export default function About() {
  return (
    <div className="fade-in">
      <section className="min-h-screen py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gradient mb-6">About Ainebyona Nicholas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet your dedicated representative for Western Youth - A leader with vision, experience, and unwavering commitment to youth empowerment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Photo and Basic Info */}
            <div className="relative">
              <div className="glass rounded-3xl p-8 hover-glass transition-all duration-500">
                <div className="relative mb-6">
                  <img
                    src={campaignData.candidate.photo}
                    alt="Ainebyona Nicholas - Professional Photo"
                    className="rounded-2xl w-full h-auto shadow-2xl"
                  />
                  <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4">
                    <h3 className="text-xl font-bold text-gray-800">{campaignData.candidate.name}</h3>
                    <p className="text-primary font-semibold">{campaignData.candidate.party}</p>
                    <p className="text-gray-600">{campaignData.candidate.position}</p>
                  </div>
                </div>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Contact</p>
                      <p className="text-gray-600">{campaignData.candidate.phones.join(" / ")}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✉️</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">{campaignData.candidate.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-8">
              <div className="glass rounded-3xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Background</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {campaignData.candidate.bio.background}
                </p>
              </div>

              <div className="glass rounded-3xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Education & Credentials</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {campaignData.candidate.bio.education}
                </p>
              </div>

              <div className="glass rounded-3xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-800 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Current Leadership</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {campaignData.candidate.bio.currentRole}
                </p>
              </div>

              <div className="glass rounded-3xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Areas of Expertise</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {campaignData.candidate.bio.interests}
                </p>
              </div>
            </div>
          </div>

          {/* Young Leaders Forever Highlight */}
          <div className="glass rounded-3xl p-8 mb-16">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Young Leaders Forever</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                As CEO of Young Leaders Forever, Ainebyona has dedicated his career to championing and motivating young people 
                to engage in leadership at every level. This movement represents his lifelong commitment to youth empowerment 
                and his proven track record in developing the next generation of leaders.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link href="/pillars">
              <button className="bg-gradient-to-r from-primary to-blue-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <ArrowRight className="w-5 h-5 inline mr-2" />
                Explore Our Strategic Pillars
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}