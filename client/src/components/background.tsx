export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* PFF Party themed background with translucent overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>
      <div className="absolute inset-0 bg-white/40"></div>
      
      {/* Parliament artwork as background element */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://res.cloudinary.com/dsijcu1om/image/upload/v1754123638/ChatGPT_Image_Jun_4_2025_01_16_46_PM_1_ymbb46.png"
          alt="Parliament Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating geometric shapes in PFF colors */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-900/10 rounded-full floating"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-blue-800/15 rounded-full floating" style={{animationDelay: '-2s'}}></div>
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-blue-700/10 rounded-full floating" style={{animationDelay: '-4s'}}></div>
      <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-white/20 rounded-full floating" style={{animationDelay: '-1s'}}></div>
      <div className="absolute bottom-20 right-10 w-36 h-36 bg-blue-600/10 rounded-full floating" style={{animationDelay: '-3s'}}></div>
    </div>
  );
}
