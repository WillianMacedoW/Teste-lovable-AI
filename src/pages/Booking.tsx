
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';
import { CalendarIcon, CheckCircle, Clock, MapPin, Scissors, UserIcon } from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BookingCalendar from '@/components/booking/BookingCalendar';
import ServiceCard from '@/components/shop/ServiceCard';

// Mock data for barbers, services, etc.
const BARBERS = [
  { id: '1', name: 'Carlos Mendes' },
  { id: '2', name: 'Rafael Costa' },
];

const SERVICES = [
  {
    id: '1',
    name: 'Corte de Cabelo',
    description: 'Corte com tesoura ou máquina, finalizado com produtos profissionais.',
    price: 40,
    duration: 30,
    isPopular: true,
  },
  {
    id: '2',
    name: 'Barba',
    description: 'Modelagem completa de barba, com toalha quente e produtos especiais.',
    price: 35,
    duration: 25,
  },
  {
    id: '3',
    name: 'Corte e Barba',
    description: 'Combo com corte de cabelo e serviço completo de barba.',
    price: 65,
    duration: 50,
    isPopular: true,
  },
  {
    id: '4',
    name: 'Corte Degradê',
    description: 'Corte moderno com técnica degradê, máquina e tesoura.',
    price: 45,
    duration: 35,
  },
];

// Types for booking steps
type BookingStep = 'service' | 'barber' | 'date' | 'confirmation';

const Booking: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Step management
  const [currentStep, setCurrentStep] = useState<BookingStep>('service');
  
  // Booking selections
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  // Handle service selection
  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setCurrentStep('barber');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Handle barber selection
  const handleBarberSelect = (barberId: string) => {
    setSelectedBarber(barberId);
    setCurrentStep('date');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Handle date and time selection
  const handleDateTimeSelect = (date: Date, time: string) => {
    setSelectedDateTime(date);
    setSelectedTime(time);
    setCurrentStep('confirmation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Handle booking confirmation
  const handleConfirmBooking = () => {
    // In a real app, this would make an API call to create the booking
    toast({
      title: "Agendamento confirmado!",
      description: "Seu agendamento foi realizado com sucesso.",
    });
    
    // Redirect to confirmation page or dashboard
    navigate('/booking/success');
  };
  
  // Get selected service details
  const getSelectedServiceDetails = () => {
    return SERVICES.find(service => service.id === selectedService);
  };
  
  // Get selected barber details
  const getSelectedBarberDetails = () => {
    return BARBERS.find(barber => barber.id === selectedBarber);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow py-8 md:py-12">
        <div className="barber-container max-w-5xl">
          {/* Progress Steps */}
          <div className="mb-8 md:mb-12">
            <div className="flex justify-between">
              <div className={`flex-1 text-center ${currentStep === 'service' ? 'text-barber-yellow' : ''}`}>
                <div className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center mb-2 ${
                  currentStep === 'service' 
                    ? 'bg-barber-yellow text-barber-black' 
                    : selectedService 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-200 text-gray-600'
                }`}>
                  {selectedService ? <CheckCircle size={20} /> : 1}
                </div>
                <span className="text-sm font-medium">Serviço</span>
              </div>
              
              <div className={`flex-1 text-center ${currentStep === 'barber' ? 'text-barber-yellow' : ''}`}>
                <div className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center mb-2 ${
                  currentStep === 'barber' 
                    ? 'bg-barber-yellow text-barber-black' 
                    : selectedBarber 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-200 text-gray-600'
                }`}>
                  {selectedBarber ? <CheckCircle size={20} /> : 2}
                </div>
                <span className="text-sm font-medium">Profissional</span>
              </div>
              
              <div className={`flex-1 text-center ${currentStep === 'date' ? 'text-barber-yellow' : ''}`}>
                <div className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center mb-2 ${
                  currentStep === 'date' 
                    ? 'bg-barber-yellow text-barber-black' 
                    : selectedDateTime 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-200 text-gray-600'
                }`}>
                  {selectedDateTime ? <CheckCircle size={20} /> : 3}
                </div>
                <span className="text-sm font-medium">Data/Hora</span>
              </div>
              
              <div className={`flex-1 text-center ${currentStep === 'confirmation' ? 'text-barber-yellow' : ''}`}>
                <div className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center mb-2 ${
                  currentStep === 'confirmation' ? 'bg-barber-yellow text-barber-black' : 'bg-gray-200 text-gray-600'
                }`}>
                  4
                </div>
                <span className="text-sm font-medium">Confirmação</span>
              </div>
            </div>
            
            <div className="relative mt-2">
              <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full">
                <div className={`h-full bg-green-500 transition-all ${
                  currentStep === 'service' ? 'w-0' :
                  currentStep === 'barber' ? 'w-1/3' :
                  currentStep === 'date' ? 'w-2/3' :
                  'w-full'
                }`}></div>
              </div>
            </div>
          </div>
          
          {/* Step Content */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            {/* Step 1: Service Selection */}
            {currentStep === 'service' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Selecione o Serviço</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SERVICES.map((service) => (
                    <ServiceCard
                      key={service.id}
                      name={service.name}
                      description={service.description}
                      price={service.price}
                      duration={service.duration}
                      isPopular={service.isPopular}
                      onSelect={() => handleServiceSelect(service.id)}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {/* Step 2: Barber Selection */}
            {currentStep === 'barber' && (
              <div>
                <h2 className="text-2xl font-bold mb-2">Selecione o Profissional</h2>
                <p className="text-gray-600 mb-6">
                  Para {getSelectedServiceDetails()?.name} ({getSelectedServiceDetails()?.duration} min)
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {BARBERS.map((barber) => (
                    <Card 
                      key={barber.id}
                      className="p-6 cursor-pointer hover:border-barber-yellow transition-colors"
                      onClick={() => handleBarberSelect(barber.id)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-barber-yellow/10 w-16 h-16 rounded-full flex items-center justify-center">
                          <UserIcon size={24} className="text-barber-yellow" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{barber.name}</h3>
                          <p className="text-gray-600">Especialista em Barbearia</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <Button className="w-full">Selecionar</Button>
                      </div>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-between">
                  <Button 
                    variant="outline"
                    onClick={() => setCurrentStep('service')}
                  >
                    Voltar
                  </Button>
                </div>
              </div>
            )}
            
            {/* Step 3: Date and Time Selection */}
            {currentStep === 'date' && (
              <div>
                <h2 className="text-2xl font-bold mb-2">Selecione Data e Horário</h2>
                <p className="text-gray-600 mb-6">
                  {getSelectedServiceDetails()?.name} com {getSelectedBarberDetails()?.name}
                </p>
                
                <BookingCalendar onSelectTime={handleDateTimeSelect} />
                
                <div className="mt-8 flex justify-between">
                  <Button 
                    variant="outline"
                    onClick={() => setCurrentStep('barber')}
                  >
                    Voltar
                  </Button>
                </div>
              </div>
            )}
            
            {/* Step 4: Confirmation */}
            {currentStep === 'confirmation' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Confirme seu Agendamento</h2>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-lg mb-4">Detalhes do Agendamento</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Scissors size={20} className="text-barber-yellow" />
                      <div>
                        <p className="font-medium">Serviço</p>
                        <p className="text-gray-600">{getSelectedServiceDetails()?.name}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <UserIcon size={20} className="text-barber-yellow" />
                      <div>
                        <p className="font-medium">Profissional</p>
                        <p className="text-gray-600">{getSelectedBarberDetails()?.name}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <CalendarIcon size={20} className="text-barber-yellow" />
                      <div>
                        <p className="font-medium">Data</p>
                        <p className="text-gray-600">
                          {selectedDateTime?.toLocaleDateString('pt-BR', { 
                            weekday: 'long', 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock size={20} className="text-barber-yellow" />
                      <div>
                        <p className="font-medium">Horário</p>
                        <p className="text-gray-600">{selectedTime}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <MapPin size={20} className="text-barber-yellow" />
                      <div>
                        <p className="font-medium">Local</p>
                        <p className="text-gray-600">Studio Corte Exclusivo</p>
                        <p className="text-gray-600 text-sm">Rua das Flores, 123 - Centro</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>R$ {getSelectedServiceDetails()?.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Pagamento na loja após o atendimento
                  </p>
                </div>
                
                <div className="flex flex-col-reverse sm:flex-row justify-between gap-4">
                  <Button 
                    variant="outline"
                    onClick={() => setCurrentStep('date')}
                  >
                    Voltar
                  </Button>
                  <Button 
                    className="bg-barber-yellow text-barber-black hover:bg-barber-yellow-light"
                    onClick={handleConfirmBooking}
                  >
                    Confirmar Agendamento
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Booking;
