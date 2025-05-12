
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  CalendarIcon,
  StarIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface BarberShopProps {
  id: string;
  name: string;
  image: string;
  address: string;
  rating: number;
  totalReviews: number;
  services: string[];
}

const BarberCard: React.FC<BarberShopProps> = ({
  id,
  name,
  image,
  address,
  rating,
  totalReviews,
  services
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
      {/* Image */}
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold font-montserrat mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">{address}</p>
        
        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center mr-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                size={16}
                className={i < Math.floor(rating) ? "text-barber-yellow fill-barber-yellow" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {rating.toFixed(1)} ({totalReviews} avaliações)
          </span>
        </div>
        
        {/* Services */}
        <div className="mb-4">
          <p className="font-medium mb-1">Serviços:</p>
          <div className="flex flex-wrap gap-1">
            {services.slice(0, 3).map((service, index) => (
              <span 
                key={index}
                className="text-xs bg-gray-100 px-2 py-1 rounded-full"
              >
                {service}
              </span>
            ))}
            {services.length > 3 && (
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                +{services.length - 3} mais
              </span>
            )}
          </div>
        </div>
        
        {/* Button */}
        <Link to={`/booking/${id}`}>
          <Button className="w-full bg-barber-black text-barber-yellow hover:bg-barber-gray">
            <CalendarIcon size={16} className="mr-2" />
            Agendar
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BarberCard;
