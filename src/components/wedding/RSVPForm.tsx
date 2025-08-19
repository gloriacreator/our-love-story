import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Heart } from 'lucide-react';

export const RSVPForm = () => {
  const [name, setName] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast({
        title: "Name required",
        description: "Please enter your name to RSVP",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Here we would typically save to backend/database
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Thank you for confirming!",
        description: "We're excited to celebrate with you.",
        className: "bg-primary text-primary-foreground"
      });
      
      // Reset form
      setName('');
      setGuestCount(1);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-6 bg-gradient-beach">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-6">
          <Heart className="w-16 h-16 text-accent animate-romantic-pulse" />
        </div>
        
        <h2 className="font-playfair text-3xl font-bold text-primary mb-4">
          RSVP
        </h2>
        <p className="text-muted-foreground">
          Please confirm your attendance
        </p>
      </div>

      <Card className="p-6 shadow-elegant bg-card/80 backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-playfair text-lg">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="border-border focus:ring-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests" className="font-playfair text-lg">
              Number of Guests
            </Label>
            <Input
              id="guests"
              type="number"
              min="1"
              max="10"
              value={guestCount}
              onChange={(e) => setGuestCount(parseInt(e.target.value) || 1)}
              className="border-border focus:ring-primary"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary-glow text-primary-foreground py-3 font-playfair text-lg shadow-romantic transition-romantic"
          >
            {isSubmitting ? 'Confirming...' : 'Confirm Attendance'}
          </Button>
        </form>
      </Card>
      
      {/* Bottom spacing for mobile */}
      <div className="h-8"></div>
    </section>
  );
};