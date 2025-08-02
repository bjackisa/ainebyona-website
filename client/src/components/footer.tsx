import { Phone, Mail, MessageCircle, Globe } from "lucide-react";
import { campaignData } from "@/lib/campaign-data";

export default function Footer() {
  return (
    <footer className="glass mx-4 mb-4 py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          {/* Left side - Campaign info */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://res.cloudinary.com/dsijcu1om/image/upload/v1754123630/PPF_1_o24vph.jpg"
                alt="PFF Party Logo"
                className="w-8 h-8 object-contain"
              />
              <div>
                <span className="font-semibold text-gray-800 text-sm">{campaignData.candidate.name}</span>
                <span className="text-gray-600 text-xs ml-2">• Western Youth MP 2026-2031</span>
              </div>
            </div>
          </div>

          {/* Center - Copyright */}
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              &copy; 2025 {campaignData.campaign.slogan} Campaign
            </p>
          </div>

          {/* Right side - Developer contact buttons */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 text-sm mr-2">Built by Jackisa Daniel Barack</span>
            <button
              onClick={() => window.open("https://wa.me/256702860347", "_blank")}
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors"
              title="WhatsApp Developer"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
            <button
              onClick={() => window.open("tel:+256760570331")}
              className="bg-primary hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
              title="Call Developer"
            >
              <Phone className="w-4 h-4" />
            </button>
            <button
              onClick={() => window.open("https://my.jackisa.com", "_blank")}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
              title="Developer Website"
            >
              <Globe className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
