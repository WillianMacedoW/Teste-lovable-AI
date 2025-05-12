
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon } from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BarberCard } from '@/components/shop/BarberCard';

// Mock data for barber shops
const BARBER_SHOPS = [
  {
    id: 1,
    name: "Barbearia Vintage",
    rating: 4.9,
    reviewCount: 124,
    image: "/placeholder.svg",
    location: "São Paulo, SP",
    services: ["Corte", "Barba", "Tratamento"],
    price: "$$"
  },
  {
    id: 2,
    name: "Corte & Estilo",
    rating: 4.7,
    reviewCount: 98,
    image: "/placeholder.svg",
    location: "Rio de Janeiro, RJ",
    services: ["Corte", "Barba", "Coloração"],
    price: "$$"
  },
  {
    id: 3,
    name: "Barber Club",
    rating: 4.8,
    reviewCount: 156,
    image: "/placeholder.svg",
    location: "Belo Horizonte, MG",
    services: ["Corte", "Barba", "Spa"],
    price: "$$$"
  },
  {
    id: 4,
    name: "Barbearia Moderna",
    rating: 4.6,
    reviewCount: 87,
    image: "/placeholder.svg",
    location: "Curitiba, PR",
    services: ["Corte", "Barba"],
    price: "$"
  },
  {
    id: 5,
    name: "Barba & Navalha",
    rating: 4.9,
    reviewCount: 112,
    image: "/placeholder.svg",
    location: "Brasília, DF",
    services: ["Corte", "Barba", "Massagem"],
    price: "$$"
  },
  {
    id: 6,
    name: "Espaço VIP",
    rating: 5.0,
    reviewCount: 78,
    image: "/placeholder.svg",
    location: "Porto Alegre, RS",
    services: ["Corte", "Barba", "Premium"],
    price: "$$$"
  }
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredShops, setFilteredShops] = useState(BARBER_SHOPS);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const filtered = BARBER_SHOPS.filter((shop) => 
      shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shop.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shop.services.some(service => 
        service.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    
    setFilteredShops(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="barber-container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Encontre Barbearias</h1>
            <p className="text-gray-600">
              Busque as melhores barbearias com base em localização, serviços ou nome
            </p>
          </div>
          
          <Card className="p-6 shadow-md mb-8">
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input 
                placeholder="Buscar por nome, localização ou serviço..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow"
              />
              <Button 
                type="submit" 
                className="bg-barber-yellow text-barber-black hover:bg-barber-yellow-light"
              >
                <SearchIcon className="h-4 w-4 mr-2" />
                Buscar
              </Button>
            </form>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredShops.length > 0 ? (
              filteredShops.map((shop) => (
                <BarberCard
                  key={shop.id}
                  {...shop}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-lg text-gray-500">
                  Nenhuma barbearia encontrada com os critérios de busca.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    setFilteredShops(BARBER_SHOPS);
                  }}
                  variant="outline"
                  className="mt-4"
                >
                  Limpar busca
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
