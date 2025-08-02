import { Link } from "wouter";
import { Phone, Mail } from "lucide-react";
import { campaignData } from "@/lib/campaign-data";

export default function Footer() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/vision", label: "Our Vision" },
    { href: "/pillars", label: "Strategic Pillars" },
    { href: "/budget", label: "Campaign Budget" },
    { href: "/donate", label: "Donate" }
  ];

  return (
    <footer className="glass rounded-t-3xl mx-4 mb-4 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold">
                AN
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">{campaignData.candidate.name}</h3>
                <p className="text-sm text-gray-600">{campaignData.candidate.position}</p>
              </div>
            </div>
            <p className="text-gray-600">
              {campaignData.campaign.slogan} - A movement of hope, empowerment, and active patriotic citizenship.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-600 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h4>
            <div className="space-y-3">
              {campaignData.candidate.phones.map((phone) => (
                <div key={phone} className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-gray-600">{phone}</span>
                </div>
              ))}
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-gray-600">{campaignData.candidate.email}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-gray-600">
            &copy; 2025 {campaignData.candidate.name} Campaign. All rights reserved. |{" "}
            <span className="text-primary font-semibold">{campaignData.campaign.slogan}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
