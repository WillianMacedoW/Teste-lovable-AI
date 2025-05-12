
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar as CalendarIcon, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample data - would come from API in real implementation
const AVAILABLE_TIMES = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
];

interface BookingCalendarProps {
  onSelectTime?: (date: Date, time: string) => void;
  className?: string;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ 
  onSelectTime,
  className 
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };
  
  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
    
    if (selectedDate && onSelectTime) {
      // Parse time string to create full date object
      const [hours, minutes] = time.split(':').map(Number);
      const dateTime = new Date(selectedDate);
      dateTime.setHours(hours, minutes, 0, 0);
      
      onSelectTime(dateTime, time);
    }
  };
  
  return (
    <div className={cn("flex flex-col md:flex-row gap-6", className)}>
      {/* Calendar */}
      <div className="md:w-1/2">
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
          <div className="flex items-center mb-4">
            <CalendarIcon className="mr-2 h-5 w-5 text-barber-yellow" />
            <h3 className="text-lg font-medium">Selecione a data</h3>
          </div>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateChange}
            className="rounded-md border"
            disabled={(date) => {
              // Disable past dates and Sundays
              return date < new Date(new Date().setHours(0, 0, 0, 0)) || 
                     date.getDay() === 0;
            }}
            initialFocus
          />
        </div>
      </div>
      
      {/* Time Selection */}
      <div className="md:w-1/2">
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 h-full">
          <div className="flex items-center mb-4">
            <Clock className="mr-2 h-5 w-5 text-barber-yellow" />
            <h3 className="text-lg font-medium">
              {selectedDate ? (
                <>Horários disponíveis para {selectedDate.toLocaleDateString('pt-BR')}</>
              ) : (
                <>Selecione uma data</>
              )}
            </h3>
          </div>
          
          {selectedDate ? (
            <div className="grid grid-cols-3 gap-2">
              {AVAILABLE_TIMES.map((time) => (
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
            <div className="flex items-center justify-center h-48 text-muted-foreground">
              Selecione uma data para ver os horários disponíveis
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;
