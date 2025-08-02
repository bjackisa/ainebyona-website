export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Political themed background with translucent overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-yellow-50"></div>
      <div className="absolute inset-0 bg-white/30"></div>
      
      {/* Floating geometric shapes for visual interest */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full floating"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/20 rounded-full floating" style={{animationDelay: '-2s'}}></div>
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-yellow-200/20 rounded-full floating" style={{animationDelay: '-4s'}}></div>
    </div>
  );
}
