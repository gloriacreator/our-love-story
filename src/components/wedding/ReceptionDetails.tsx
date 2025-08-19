import receptionIcon from '@/assets/reception-icon.png';

export const ReceptionDetails = () => {
  return (
    <section className="py-16 px-6 bg-gradient-beach">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <img 
            src={receptionIcon} 
            alt="Reception" 
            className="w-16 h-16 object-contain opacity-80"
          />
        </div>
        
        <h2 className="font-playfair text-3xl font-bold text-primary mb-8">
          Reception
        </h2>
        
        <div className="space-y-4">
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-elegant">
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
              Venue
            </h3>
            <p className="text-muted-foreground">
              Aurika by Lemon Tree Hotels<br />
              Mumbai International Airport, Andheri East
            </p>
          </div>
          
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-elegant">
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
              Timing
            </h3>
            <p className="text-muted-foreground text-lg font-medium">
              7:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};