
import React, { useState } from 'react';
import BookingCalendar from './BookingCalendar';

interface DateTimeSelectionProps {
  onSelect: (dateTime: { date: Date; time: string }) => void;
  shopId?: string;
  barberId?: string;
}

const DateTimeSelection: React.FC<DateTimeSelectionProps> = ({
  onSelect,
  shopId,
  barberId
}) => {
  const handleDateTimeSelect = (date: Date, time: string) => {
    onSelect({ date, time });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Escolha a Data e Horário</h2>
      <BookingCalendar onSelectTime={handleDateTimeSelect} />
    </div>
  );
};

export default DateTimeSelection;
