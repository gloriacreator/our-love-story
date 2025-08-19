import beachBackground from '@/assets/beach-background.jpg';

export const Header = () => {
  return (
    <header className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center beach-particles"
            style={{ backgroundImage: `url(${beachBackground})` }}>
      {/* Overlay for text readability with enhanced beach gradient */}
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      
      {/* Floating wave elements */}
      <div className="absolute top-1/4 left-4 w-8 h-8 rounded-full bg-white/20 animate-float" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-1/3 right-8 w-6 h-6 rounded-full bg-white/15 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-12 w-4 h-4 rounded-full bg-white/25 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/4 right-6 w-10 h-10 rounded-full bg-white/10 animate-wave" style={{animationDelay: '0.5s'}}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <h1 className="font-great-vibes text-6xl md:text-7xl text-white mb-4 drop-shadow-lg animate-shimmer whitespace-nowrap"
            style={{
              background: 'linear-gradient(90deg, #ffffff 0%, #e6f3ff 50%, #ffffff 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
          Keenan weds Gloria
        </h1>
        <p className="font-playfair text-xl md:text-2xl text-white/90 tracking-wider animate-float">
          25.10.25
        </p>
      </div>
      
      {/* Enhanced decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background via-background/80 to-transparent animate-wave">
        <svg viewBox="0 0 1200 120" className="w-full h-full opacity-60">
          <path d="m0,49.98C149.99,150 349.20,-50.00 599.74,49.98C850.27,149.98 1050.01,-50.00 1200.00,49.98L1200.00,120.00L0.00,120.00Z" 
                fill="hsl(var(--background))" opacity="0.8"/>
        </svg>
      </div>
    </header>
  );
};