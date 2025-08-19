import churchIcon from '@/assets/church-icon.png';

export const NuptialDetails = () => {
  return (
    <section className="py-16 px-6 bg-card">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <img 
            src={churchIcon} 
            alt="Church" 
            className="w-16 h-16 object-contain opacity-80"
          />
        </div>
        
        <h2 className="font-playfair text-3xl font-bold text-primary mb-8">
          Nuptials
        </h2>
        
        <div className="space-y-4">
          <div className="bg-sand-light/30 rounded-lg p-6 shadow-soft">
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
              Venue
            </h3>
            <p className="text-muted-foreground">
              Holy Family Church, Andheri East
            </p>
          </div>
          
          <div className="bg-sand-light/30 rounded-lg p-6 shadow-soft">
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
              Timing
            </h3>
            <p className="text-muted-foreground text-lg font-medium">
              4:30 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};