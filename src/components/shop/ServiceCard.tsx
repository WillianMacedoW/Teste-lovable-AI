
import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  description: string;
  price: number;
  duration: number;
  isPopular?: boolean;
  onSelect: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  description,
  price,
  duration,
  isPopular = false,
  onSelect,
}) => {
  return (
    <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm hover:shadow-md transition relative">
      {isPopular && (
        <div className="absolute top-0 right-0 bg-barber-yellow text-barber-black text-xs font-bold py-1 px-3 rounded-bl-lg rounded-tr-lg">
          Popular
        </div>
      )}
      
      <h3 className="font-bold text-lg mb-1">{name}</h3>
      
      <div className="flex items-center text-gray-600 text-sm mb-3">
        <Clock size={14} className="mr-1 text-barber-yellow" />
        <span>{duration} minutos</span>
      </div>
      
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {description}
      </p>
      
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-semibold">
          R$ {price.toFixed(2)}
        </span>
        <Button 
          onClick={onSelect} 
          variant="outline"
          className="border-barber-yellow text-barber-black hover:bg-barber-yellow hover:text-black transition-colors"
        >
          Selecionar
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
