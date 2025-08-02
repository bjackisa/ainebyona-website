import { Link } from "wouter";
import { Rocket, Heart, Users, Briefcase, GraduationCap, Vote } from "lucide-react";

export default function Home() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-accent font-semibold text-lg">Western Youth MP 2026-2031</p>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gradient">Lighting the</span><br />
                  <span className="text-gray-800">Youth Nation</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Igniting and empowering a generation of youth leaders, change-makers, problem solvers and patriotic citizens through credible value-driven political representation.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <button className="bg-gradient-to-r from-primary to-blue-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <Users className="w-5 h-5 inline mr-2" />
                    Meet Ainebyona
                  </button>
                </Link>
                <Link href="/donate">
                  <button className="glass hover-glass text-gray-800 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300">
                    <Heart className="w-5 h-5 inline mr-2" />
                    Join the Movement
                  </button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass rounded-3xl p-8 hover-glass transition-all duration-500">
                <div className="relative">
                  <img
                    src="https://res.cloudinary.com/dsijcu1om/image/upload/v1754123632/dd8425a3971845c5be5d5584ee2d1709_gmdck0.webp"
                    alt="Ainebyona Nicholas - Western Youth MP Candidate"
                    className="rounded-2xl w-full h-auto shadow-2xl"
                  />
                  {/* PFF Party Logo Overlay */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/90 rounded-xl p-2 shadow-lg">
                    <img
                      src="https://res.cloudinary.com/dsijcu1om/image/upload/v1754123630/PPF_1_o24vph.jpg"
                      alt="PFF Party Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                {/* Floating stats cards */}
                <div className="absolute -top-4 -right-4 glass rounded-2xl p-4 slide-in-right">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">18-30</p>
                    <p className="text-sm text-gray-600">Target Age</p>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 slide-in-right" style={{animationDelay: '0.3s'}}>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">PFF</p>
                    <p className="text-sm text-gray-600">2026-2031</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Poster Showcase */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gradient mb-6">Official Campaign</h3>
            <p className="text-xl text-gray-600">PFF Party's Vision for Western Youth</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="glass rounded-3xl p-8 hover-glass transition-all duration-500">
              <img
                src="https://res.cloudinary.com/dsijcu1om/image/upload/v1754123631/WhatsApp_Image_2025-06-08_at_15.07.46_zy3h4o.jpg"
                alt="Ainebyona Nicholas Official Campaign Poster"
                className="rounded-2xl w-full h-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="glass rounded-2xl p-6 text-center hover-glass">
              <Users className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-800">Youth Focus</h3>
              <p className="text-gray-600">Empowering the next generation</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover-glass">
              <Briefcase className="w-8 h-8 text-blue-700 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-800">Economic Empowerment</h3>
              <p className="text-gray-600">Creating opportunities</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover-glass">
              <GraduationCap className="w-8 h-8 text-blue-800 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-800">Education & Skills</h3>
              <p className="text-gray-600">Building capacity</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover-glass">
              <Vote className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-800">Civic Participation</h3>
              <p className="text-gray-600">Democratic engagement</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
