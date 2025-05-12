
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import ServiceCard from '@/components/shop/ServiceCard';

// Mock data for services - In a real app, this would come from an API
const MOCK_SERVICES = [
  {
    id: '1',
    name: 'Corte de Cabelo',
    description: 'Corte tradicional com acabamento perfeito e toalha quente.',
    price: 40,
    duration: 30,
    isPopular: true
  },
  {
    id: '2',
    name: 'Barba',
    description: 'Aparamento e modelagem de barba com toalha quente e produtos especiais.',
    price: 35,
    duration: 25,
    isPopular: false
  },
  {
    id: '3',
    name: 'Corte + Barba',
    description: 'Combo completo de corte de cabelo e barba com tratamento especial.',
    price: 70,
    duration: 50,
    isPopular: true
  },
  {
    id: '4',
    name: 'Hot Towel Shave',
    description: 'Barbear tradicional com toalha quente e produtos premium.',
    price: 45,
    duration: 35,
    isPopular: false
  },
  {
    id: '5',
    name: 'Tratamento Capilar',
    description: 'Tratamento para fortalecer os fios e prevenir queda de cabelo.',
    price: 55,
    duration: 40,
    isPopular: false
  },
  {
    id: '6',
    name: 'Coloração',
    description: 'Coloração completa com produtos profissionais.',
    price: 80,
    duration: 60,
    isPopular: false
  },
];

interface ServiceSelectionProps {
  onSelect: (service: any) => void;
  shopId?: string;
}

const ServiceSelection: React.FC<ServiceSelectionProps> = ({ onSelect, shopId }) => {
  const [services, setServices] = useState(MOCK_SERVICES);
  const [loading, setLoading] = useState(false);
  
  // In a real app, fetch services from API based on shopId
  useEffect(() => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setServices(MOCK_SERVICES);
      setLoading(false);
    }, 500);
  }, [shopId]);
  
  if (loading) {
    return (
      <Card className="p-6">
        <div className="text-center">
          <p>Carregando serviços...</p>
        </div>
      </Card>
    );
  }
  
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Escolha o Serviço</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(service => (
          <ServiceCard
            key={service.id}
            name={service.name}
            description={service.description}
            price={service.price}
            duration={service.duration}
            isPopular={service.isPopular}
            onSelect={() => onSelect(service)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;
