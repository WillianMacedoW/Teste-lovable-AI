
import React from 'react';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BookingPages from '@/components/booking/BookingPages';

const Booking = () => {
  const { toast } = useToast();

  const handleBookingComplete = (bookingDetails: any) => {
    console.log('Booking completed:', bookingDetails);
    // In a real app, this would trigger API calls to create the booking
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="barber-container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Agende seu Atendimento</h1>
            <p className="text-gray-600">Escolha o serviço, barbeiro e horário para seu agendamento.</p>
          </div>
          
          <Card className="p-6 shadow-md">
            <BookingPages onComplete={handleBookingComplete} />
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Booking;
