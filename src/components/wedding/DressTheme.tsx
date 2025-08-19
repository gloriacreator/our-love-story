import dressCodeIcon from '@/assets/dress-code-icon.png';

export const DressTheme = () => {
  return (
    <section className="py-16 px-6 bg-card">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <img 
            src={dressCodeIcon} 
            alt="Dress Code" 
            className="w-16 h-16 object-contain opacity-80"
          />
        </div>
        
        <h2 className="font-playfair text-3xl font-bold text-primary mb-8">
          Dress Theme
        </h2>
        
        <div className="bg-sand-light/30 rounded-lg p-8 shadow-soft">
          <p className="font-playfair text-2xl font-semibold text-foreground">
            Black Tie
          </p>
          <p className="text-muted-foreground mt-2">
            Formal attire requested
          </p>
        </div>
      </div>
    </section>
  );
};