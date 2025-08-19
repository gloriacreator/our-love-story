import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';
import brideClipart from '@/assets/bride-clipart.png';
import groomClipart from '@/assets/groom-clipart.png';

const dialogues = [
  { speaker: 'girl', text: 'I walked along the shore, lost in thought, not knowing love was walking toward me.' },
  { speaker: 'boy', text: 'From the other end of the beach, I saw her—and the world stood still.' },
  { speaker: 'girl', text: 'Each step brought us closer, like the sea was guiding us.' },
  { speaker: 'boy', text: 'When our eyes met, I knew—this was the start of forever.' },
  { speaker: 'final', text: 'Now, hand in hand, we walk into a new chapter. <br><strong>Join us as we say "I do."</strong>' }
];

export const LoveStory = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDialogue, setCurrentDialogue] = useState(-1);
  const [displayText, setDisplayText] = useState('');

  const startNarration = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setCurrentDialogue(-1);
      setDisplayText('');
      return;
    }

    setIsPlaying(true);
    setCurrentDialogue(0);
  };

  useEffect(() => {
    if (currentDialogue >= 0 && currentDialogue < dialogues.length) {
      setDisplayText(dialogues[currentDialogue].text);
      
      const timer = setTimeout(() => {
        if (currentDialogue < dialogues.length - 1) {
          setCurrentDialogue(currentDialogue + 1);
        } else {
          setIsPlaying(false);
          setTimeout(() => {
            setCurrentDialogue(-1);
            setDisplayText('');
          }, 3000);
        }
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [currentDialogue]);

  const getCurrentSpeaker = () => {
    if (currentDialogue >= 0 && currentDialogue < dialogues.length) {
      return dialogues[currentDialogue].speaker;
    }
    return null;
  };

  return (
    <section className="py-16 px-6 bg-gradient-beach relative overflow-hidden">
      {/* Beach particle overlay */}
      <div className="absolute inset-0 beach-particles opacity-30"></div>
      
      {/* Floating elements */}
      <div className="absolute top-8 right-4 w-6 h-6 rounded-full bg-ocean-light/30 animate-float" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-12 left-8 w-4 h-4 rounded-full bg-sunset-coral/40 animate-wave" style={{animationDelay: '3s'}}></div>
      
      <div className="text-center mb-12 relative z-10">
        <h2 className="font-playfair text-4xl font-bold text-foreground mb-4 animate-shimmer"
            style={{
              background: 'linear-gradient(90deg, hsl(var(--ocean-deep)) 0%, hsl(var(--primary)) 50%, hsl(var(--ocean-deep)) 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
          Our Love Story
        </h2>
        <div className="w-20 h-1 bg-gradient-sunset mx-auto rounded-full animate-wave"></div>
      </div>

      <div className="flex items-center justify-center gap-8 mb-8">
        {/* Bride */}
        <div className={`flex-1 flex justify-center transition-all duration-500 ${
          getCurrentSpeaker() === 'girl' ? 'scale-110 opacity-100' : 'opacity-60'
        }`}>
          <img 
            src={brideClipart} 
            alt="Bride" 
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* Play Button */}
        <Button
          onClick={startNarration}
          className="w-16 h-16 rounded-full bg-primary hover:bg-primary-glow shadow-romantic animate-romantic-pulse"
          size="lg"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-primary-foreground" />
          ) : (
            <Play className="w-6 h-6 text-primary-foreground ml-1" />
          )}
        </Button>

        {/* Groom */}
        <div className={`flex-1 flex justify-center transition-all duration-500 ${
          getCurrentSpeaker() === 'boy' ? 'scale-110 opacity-100' : 'opacity-60'
        }`}>
          <img 
            src={groomClipart} 
            alt="Groom" 
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>

      {/* Narration Text */}
      {displayText && (
        <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-elegant animate-fade-in">
          <p 
            className="font-playfair text-lg text-center text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: displayText }}
          />
        </div>
      )}
    </section>
  );
};