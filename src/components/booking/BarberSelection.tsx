
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Clock, Star, Calendar } from 'lucide-react';

// Mock data for barbers - In a real app, this would come from an API
const MOCK_BARBERS = [
  {
    id: '1',
    name: 'Carlos Mendes',
    imageUrl: 'https://images.unsplash.com/photo-1615893511926-6c0fcabea1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    yearsExperience: 5,
    rating: 4.8,
    totalReviews: 124,
    specialties: ['Corte Clássico', 'Barba', 'Degradê']
  },
  {
    id: '2',
    name: 'Rafael Costa',
    imageUrl: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    yearsExperience: 3,
    rating: 4.6,
    totalReviews: 95,
    specialties: ['Corte Moderno', 'Hot Towel Shave', 'Coloração']
  },
  {
    id: '3',
    name: 'André Gomes',
    imageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    yearsExperience: 8,
    rating: 4.9,
    totalReviews: 187,
    specialties: ['Cabelo', 'Barba', 'Tratamentos']
  },
];

interface BarberSelectionProps {
  onSelect: (barber: any) => void;
  shopId?: string;
  serviceId?: string;
}

const BarberSelection: React.FC<BarberSelectionProps> = ({ onSelect, shopId, serviceId }) => {
  const [barbers, setBarbers] = useState(MOCK_BARBERS);
  const [loading, setLoading] = useState(false);
  
  // In a real app, fetch barbers from API based on shopId and serviceId
  useEffect(() => {
    if (!shopId || !serviceId) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setBarbers(MOCK_BARBERS);
      setLoading(false);
    }, 500);
  }, [shopId, serviceId]);
  
  if (loading) {
    return (
      <Card className="p-6">
        <div className="text-center">
          <p>Carregando barbeiros disponíveis...</p>
        </div>
      </Card>
    );
  }
  
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Escolha o Barbeiro</h2>
      
      <div className="space-y-4">
        {barbers.map(barber => (
          <Card key={barber.id} className="p-4 hover:border-barber-yellow transition-colors">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Avatar className="w-16 h-16">
                <img src={barber.imageUrl} alt={barber.name} className="object-cover" />
              </Avatar>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{barber.name}</h3>
                
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Clock size={14} className="mr-1" />
                  <span>{barber.yearsExperience} anos de experiência</span>
                </div>
                
                <div className="flex items-center text-sm mt-1">
                  <Star size={14} className="text-yellow-400 mr-1" />
                  <span className="font-medium">{barber.rating}</span>
                  <span className="text-gray-500 ml-1">({barber.totalReviews} avaliações)</span>
                </div>
                
                <div className="mt-2">
                  <span className="text-sm text-gray-500">Especialidades:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {barber.specialties.map((specialty, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="self-end sm:self-center mt-3 sm:mt-0">
                <Button 
                  onClick={() => onSelect(barber)} 
                  className="whitespace-nowrap bg-barber-yellow text-barber-black hover:bg-barber-yellow-light"
                >
                  <Calendar size={16} className="mr-2" />
                  Selecionar
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BarberSelection;
