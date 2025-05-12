
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Calendar as CalendarIcon, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

// Sample data - would come from API in real implementation
const AVAILABLE_TIMES_BY_DATE: Record<string, string[]> = {
  "2025-05-12": ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
  "2025-05-13": ['10:00', '11:00', '13:00', '14:00', '15:00', '17:00'],
  "2025-05-14": ['09:00', '10:00', '11:00', '14:00', '16:00', '17:00'],
  "2025-05-15": ['09:00', '11:00', '13:00', '14:00', '15:00', '16:00'],
  "2025-05-16": ['10:00', '11:00', '13:00', '15:00', '16:00', '17:00'],
};

interface DateTimeSelectionProps {
  onSelect: (dateTime: { date: Date; time: string; }) => void;
  shopId?: string;
  barberId?: string;
}

const DateTimeSelection: React.FC<DateTimeSelectionProps> = ({ 
  onSelect,
  shopId,
  barberId
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  
  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime(null);
    
    if (date) {
      setLoading(true);
      
      // In a real app, this would be an API call to get available times
      setTimeout(() => {
        const dateString = format(date, 'yyyy-MM-dd');
        setAvailableTimes(AVAILABLE_TIMES_BY_DATE[dateString] || []);
        setLoading(false);
      }, 300);
    }
  };
  
  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
    
    if (selectedDate && time) {
      onSelect({
        date: selectedDate,
        time,
      });
    }
  };
  
  const isDateDisabled = (date: Date) => {
    // Disable past dates and Sundays
    return date < new Date(new Date().setHours(0, 0, 0, 0)) || 
           date.getDay() === 0;
  };
  
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Escolha a Data e Horário</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Calendar */}
        <Card className="md:w-1/2 p-4 border border-gray-200">
          <div className="flex items-center mb-4">
            <CalendarIcon className="mr-2 h-5 w-5 text-barber-yellow" />
            <h3 className="text-lg font-medium">Selecione a data</h3>
          </div>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateChange}
            className={cn("rounded-md border pointer-events-auto")}
            disabled={isDateDisabled}
            locale={ptBR}
            initialFocus
          />
        </Card>
        
        {/* Time Selection */}
        <Card className="md:w-1/2 p-4 border border-gray-200">
          <div className="flex items-center mb-4">
            <Clock className="mr-2 h-5 w-5 text-barber-yellow" />
            <h3 className="text-lg font-medium">
              {selectedDate ? (
                <>Horários em {format(selectedDate, "dd 'de' MMMM", { locale: ptBR })}</>
              ) : (
                <>Selecione uma data</>
              )}
            </h3>
          </div>
          
          {loading ? (
            <div className="flex items-center justify-center h-48 text-gray-500">
              Carregando horários disponíveis...
            </div>
          ) : selectedDate ? (
            availableTimes.length > 0 ? (
              <div className="grid grid-cols-3 gap-2">
                {availableTimes.map((time) => (
                  <Button
                    key={time}
                    variant="outline"
                    onClick={() => handleTimeSelection(time)}
                    className={cn(
                      "relative h-10",
                      selectedTime === time && "border-barber-yellow bg-barber-yellow/10"
                    )}
                  >
                    {time}
                    {selectedTime === time && (
                      <CheckCircle className="h-4 w-4 absolute top-1 right-1 text-barber-yellow" />
                    )}
                  </Button>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-48 text-gray-500">
                Não há horários disponíveis nesta data.
              </div>
            )
          ) : (
            <div className="flex items-center justify-center h-48 text-gray-500">
              Selecione uma data para ver os horários disponíveis.
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default DateTimeSelection;
