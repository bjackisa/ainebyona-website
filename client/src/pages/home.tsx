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
                <Link href="/vision">
                  <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <Rocket className="w-5 h-5 inline mr-2" />
                    Our Vision
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
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
                  alt="Ainebyona Nicholas - Professional Campaign Photo"
                  className="rounded-2xl w-full h-auto shadow-2xl"
                />
                
                {/* Floating stats cards */}
                <div className="absolute -top-4 -right-4 glass rounded-2xl p-4 slide-in-right">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">18-30</p>
                    <p className="text-sm text-gray-600">Target Age</p>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 slide-in-right" style={{animationDelay: '0.3s'}}>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-secondary">2026-2031</p>
                    <p className="text-sm text-gray-600">Term Period</p>
                  </div>
                </div>
              </div>
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
              <Briefcase className="w-8 h-8 text-secondary mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-800">Economic Empowerment</h3>
              <p className="text-gray-600">Creating opportunities</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover-glass">
              <GraduationCap className="w-8 h-8 text-accent mb-4 mx-auto" />
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
