import { useState } from 'react';
import { Header } from './wedding/Header';
import { LoveStory } from './wedding/LoveStory';
import { NuptialDetails } from './wedding/NuptialDetails';
import { ReceptionDetails } from './wedding/ReceptionDetails';
import { DressTheme } from './wedding/DressTheme';
import { RSVPForm } from './wedding/RSVPForm';

export const WeddingInvitation = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile-first single scroll design */}
      <div className="max-w-md mx-auto bg-card shadow-elegant">
        <Header />
        <LoveStory />
        <NuptialDetails />
        <ReceptionDetails />
        <DressTheme />
        <RSVPForm />
      </div>
    </div>
  );
};