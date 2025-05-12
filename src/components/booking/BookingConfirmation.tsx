
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckIcon, CalendarIcon, ClockIcon, ScissorsIcon, UserIcon } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface BookingConfirmationProps {
  bookingData: {
    service: any;
    barber: any;
    dateTime: { date: Date; time: string; };
  };
  onConfirm: () => void;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({ 
  bookingData,
  onConfirm
}) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const { service, barber, dateTime } = bookingData;
  
  if (!service || !barber || !dateTime) {
    return (
      <Card className="p-6">
        <div className="text-center">
          <p className="text-red-500">Informações de agendamento incompletas.</p>
        </div>
      </Card>
    );
  }

  const handleConfirmBooking = () => {
    // In a real app, this would submit the booking to an API
    toast({
      title: "Agendamento confirmado!",
      description: `Seu agendamento para ${format(dateTime.date, "dd 'de' MMMM", { locale: ptBR })} às ${dateTime.time} foi confirmado.`,
    });
    
    onConfirm();
    
    // Redirect to dashboard after successful booking
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };
  
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Confirme seu Agendamento</h2>
      
      <Card className="p-6 border-2 border-barber-yellow">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckIcon className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold">Quase lá!</h3>
          <p className="text-gray-600">Revise os detalhes do seu agendamento antes de confirmar.</p>
        </div>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <ScissorsIcon className="h-5 w-5 text-barber-yellow mr-3 mt-0.5" />
            <div>
              <p className="font-semibold">Serviço</p>
              <p className="text-gray-600">{service.name}</p>
              <p className="text-sm text-gray-500">Duração: {service.duration} minutos</p>
            </div>
            <div className="ml-auto">
              <p className="font-semibold text-right">R$ {service.price.toFixed(2)}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <UserIcon className="h-5 w-5 text-barber-yellow mr-3 mt-0.5" />
            <div>
              <p className="font-semibold">Barbeiro</p>
              <p className="text-gray-600">{barber.name}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <CalendarIcon className="h-5 w-5 text-barber-yellow mr-3 mt-0.5" />
            <div>
              <p className="font-semibold">Data</p>
              <p className="text-gray-600">{format(dateTime.date, "EEEE, dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <ClockIcon className="h-5 w-5 text-barber-yellow mr-3 mt-0.5" />
            <div>
              <p className="font-semibold">Horário</p>
              <p className="text-gray-600">{dateTime.time}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total</span>
            <span className="font-bold text-xl">R$ {service.price.toFixed(2)}</span>
          </div>
          
          <div className="text-sm text-gray-500 mb-4">
            <p>* Você pode cancelar ou reagendar até 3 horas antes do horário marcado.</p>
            <p>* O pagamento será feito diretamente na barbearia.</p>
          </div>
        </div>
      </Card>
      
      <div className="mt-6 text-center">
        <Button 
          onClick={handleConfirmBooking} 
          className="px-8 py-6 bg-barber-yellow text-barber-black hover:bg-barber-yellow-light text-lg"
        >
          Confirmar Agendamento
        </Button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
