
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import ServiceSelection from './ServiceSelection';
import BarberSelection from './BarberSelection';
import DateTimeSelection from './DateTimeSelection';
import BookingConfirmation from './BookingConfirmation';

type BookingStep = 'service' | 'barber' | 'datetime' | 'confirmation';

interface BookingPagesProps {
  onComplete?: (bookingDetails: any) => void;
  shopId?: string;
  className?: string;
}

const BookingPages: React.FC<BookingPagesProps> = ({ 
  onComplete,
  shopId,
  className 
}) => {
  const [currentStep, setCurrentStep] = useState<BookingStep>('service');
  const [bookingData, setBookingData] = useState({
    service: null,
    barber: null,
    dateTime: null,
  });

  const location = useLocation();
  const navigate = useNavigate();

  // Set initial step based on URL
  useEffect(() => {
    if (location.pathname === '/booking/create') {
      setCurrentStep('service');
    }
  }, [location.pathname]);
  
  const handleServiceSelect = (service: any) => {
    setBookingData({ ...bookingData, service });
    setCurrentStep('barber');
    navigate('/booking/create', { replace: true });
  };
  
  const handleBarberSelect = (barber: any) => {
    setBookingData({ ...bookingData, barber });
    setCurrentStep('datetime');
  };
  
  const handleDateTimeSelect = (dateTime: any) => {
    setBookingData({ ...bookingData, dateTime });
    setCurrentStep('confirmation');
  };
  
  const handleConfirmBooking = () => {
    if (onComplete) {
      onComplete(bookingData);
    }
  };
  
  const handleBack = () => {
    switch (currentStep) {
      case 'barber':
        setCurrentStep('service');
        break;
      case 'datetime':
        setCurrentStep('barber');
        break;
      case 'confirmation':
        setCurrentStep('datetime');
        break;
      default:
        break;
    }
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 'service':
        return <ServiceSelection onSelect={handleServiceSelect} shopId={shopId} />;
      case 'barber':
        return <BarberSelection onSelect={handleBarberSelect} shopId={shopId} serviceId={bookingData.service?.id} />;
      case 'datetime':
        return <DateTimeSelection onSelect={handleDateTimeSelect} shopId={shopId} barberId={bookingData.barber?.id} />;
      case 'confirmation':
        return <BookingConfirmation bookingData={bookingData} onConfirm={handleConfirmBooking} />;
      default:
        return null;
    }
  };
  
  const steps = [
    { key: 'service', label: 'Serviço' },
    { key: 'barber', label: 'Barbeiro' },
    { key: 'datetime', label: 'Data e Hora' },
    { key: 'confirmation', label: 'Confirmação' },
  ];
  
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <React.Fragment key={step.key}>
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep === step.key 
                  ? 'bg-barber-yellow text-barber-black' 
                  : steps.findIndex(s => s.key === currentStep) > index 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-200 text-gray-500'
              }`}>
                {steps.findIndex(s => s.key === currentStep) > index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              <span className={`text-xs mt-1 font-medium ${
                currentStep === step.key ? 'text-barber-yellow' : 'text-gray-500'
              }`}>
                {step.label}
              </span>
            </div>
            
            {index < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-2 ${
                steps.findIndex(s => s.key === currentStep) > index 
                  ? 'bg-green-500' 
                  : 'bg-gray-200'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
      
      {/* Content Area */}
      <div className="min-h-[400px]">
        {renderStepContent()}
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        {currentStep !== 'service' && (
          <Button 
            variant="outline" 
            onClick={handleBack}
            className="flex items-center gap-1"
          >
            <ChevronLeft size={16} />
            Voltar
          </Button>
        )}
        
        {currentStep === 'service' && (
          <div></div> // Empty div for flex spacing when no back button
        )}
        
        {currentStep !== 'confirmation' && currentStep !== 'service' && (
          <Button 
            onClick={() => {
              if (currentStep === 'barber') setCurrentStep('datetime');
              if (currentStep === 'datetime') setCurrentStep('confirmation');
            }}
            className="flex items-center gap-1 bg-barber-black hover:bg-barber-gray text-white"
          >
            Próximo
            <ChevronRight size={16} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default BookingPages;
