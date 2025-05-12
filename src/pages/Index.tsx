
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarIcon, CheckIcon, UsersIcon, ClockIcon } from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AuthModal from '@/components/auth/AuthModal';
import BarberCard from '@/components/shop/BarberCard';

// Mock data for barber shops
const BARBER_SHOPS = [
  {
    id: '1',
    name: 'Studio Corte Exclusivo',
    image: 'https://images.unsplash.com/photo-1588771930296-88c2cb03f4ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    address: 'Rua das Flores, 123 - Centro',
    rating: 4.8,
    totalReviews: 156,
    services: ['Corte', 'Barba', 'Tratamento Facial', 'Tintura']
  },
  {
    id: '2',
    name: 'Barbearia Vintage',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    address: 'Av. Paulista, 1000 - Bela Vista',
    rating: 4.5,
    totalReviews: 89,
    services: ['Corte', 'Barba', 'Hot Towel', 'Massagem']
  },
  {
    id: '3',
    name: 'Barber King',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    address: 'Rua Augusta, 789 - Consolação',
    rating: 4.7,
    totalReviews: 214,
    services: ['Corte', 'Barba', 'Sobrancelha', 'Limpeza Facial']
  }
];

// Pricing plans
const PRICING_PLANS = [
  {
    name: 'Simples',
    price: '12,99',
    description: 'Para barbearias que estão começando',
    features: [
      '1 barbeiro',
      'Agendamentos ilimitados',
      'Calendário online',
      'Página pública de agendamento',
    ],
    notIncluded: [
      'Múltiplos barbeiros',
      'Notificações automáticas',
      'Relatórios avançados',
      'Integração com Google Agenda',
    ],
    cta: 'Começar Gratuitamente',
    popular: false,
  },
  {
    name: 'Padrão',
    price: '49',
    description: 'Para barbearias estabelecidas',
    features: [
      'Até 5 barbeiros',
      'Agendamentos ilimitados',
      'Notificações por email',
      'Calendário online',
      'Relatórios básicos',
      'Página pública de agendamento',
      'Suporte por email',
    ],
    notIncluded: [
      'Integração com Google Agenda',
      'Notificações por WhatsApp',
      'Venda de produtos',
    ],
    cta: 'Comece com o Padrão',
    popular: true,
  },
  {
    name: 'Profissional',
    price: '99',
    description: 'Para barbearias com alto volume',
    features: [
      'Barbeiros ilimitados',
      'Agendamentos ilimitados',
      'Notificações por email e WhatsApp',
      'Integração com Google Agenda',
      'Venda de produtos',
      'Relatórios avançados',
      'Suporte prioritário',
      'Personalização avançada',
    ],
    notIncluded: [],
    cta: 'Comece com o Profissional',
    popular: false,
  },
];

const Index: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenAuthModal={() => setIsAuthModalOpen(true)} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-barber-black text-white py-16 md:py-24">
          <div className="barber-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6 animate-slideUp">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Agende seu <span className="text-barber-yellow">corte</span> na 
                  barbearia ideal
                </h1>
                <p className="text-lg md:text-xl text-gray-300">
                  A plataforma completa para barbearias e clientes agendarem serviços de forma rápida e intuitiva.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-barber-yellow text-barber-black hover:bg-barber-yellow-light"
                    asChild
                  >
                    <Link to="/booking">
                      <CalendarIcon size={20} className="mr-2" />
                      Agendar agora
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-barber-black"
                    onClick={() => setIsAuthModalOpen(true)}
                  >
                    Sou uma barbearia
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1599351431613-e8c232493a1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="Barbearia moderna"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-barber-yellow text-barber-black p-4 rounded-lg shadow-lg">
                  <p className="font-bold">+500 barbearias</p>
                  <p className="text-sm">já utilizam o BarberTime</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="barber-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Por que escolher o BarberTime?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nossa plataforma completa conecta clientes às melhores barbearias, com agendamento fácil e uma experiência incrível para todos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="p-6 border-gray-200 hover:border-barber-yellow transition-colors">
                <div className="bg-barber-yellow/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <CalendarIcon size={24} className="text-barber-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2">Agendamento Simples</h3>
                <p className="text-gray-600">
                  Agende seu atendimento em segundos, veja a disponibilidade em tempo real e receba confirmações instantâneas.
                </p>
              </Card>
              
              {/* Feature 2 */}
              <Card className="p-6 border-gray-200 hover:border-barber-yellow transition-colors">
                <div className="bg-barber-yellow/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <UsersIcon size={24} className="text-barber-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2">Escolha seu Barbeiro</h3>
                <p className="text-gray-600">
                  Conheça o perfil dos barbeiros, veja suas avaliações e escolha o profissional que melhor atende suas necessidades.
                </p>
              </Card>
              
              {/* Feature 3 */}
              <Card className="p-6 border-gray-200 hover:border-barber-yellow transition-colors">
                <div className="bg-barber-yellow/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <ClockIcon size={24} className="text-barber-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sem Espera</h3>
                <p className="text-gray-600">
                  Elimine filas e tempo perdido. Chegue na hora marcada e seja atendido pontualmente, sem estresse.
                </p>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="barber-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Planos para Barbearias
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Escolha o melhor plano para sua barbearia e impulsione seu negócio
              </p>
              
              <Tabs defaultValue="monthly" className="w-full max-w-xs mx-auto mt-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="monthly">Mensal</TabsTrigger>
                  <TabsTrigger value="yearly">Anual (20% off)</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PRICING_PLANS.map((plan, index) => (
                <div 
                  key={index} 
                  className={`border ${plan.popular ? 'border-barber-yellow' : 'border-gray-200'} rounded-lg p-6 relative ${plan.popular ? 'shadow-lg' : 'shadow-sm'}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-barber-yellow text-barber-black text-xs font-bold py-1 px-3 rounded-full">
                        Mais Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold">R${plan.price}</span>
                    <span className="text-gray-600 ml-1">/mês</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckIcon size={16} className="text-green-500 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    
                    {plan.notIncluded.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-400">
                        <span className="w-4 h-4 mr-2 flex items-center justify-center shrink-0">—</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-barber-yellow text-barber-black hover:bg-barber-yellow-light' 
                        : 'bg-barber-black text-white hover:bg-barber-gray'
                    }`}
                    onClick={() => setIsAuthModalOpen(true)}
                  >
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-barber-black text-white">
          <div className="barber-container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pronto para transformar sua barbearia?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Junte-se a centenas de barbearias que já estão conquistando mais clientes e organizando melhor seu negócio com o BarberTime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-barber-yellow text-barber-black hover:bg-barber-yellow-light"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  Criar conta de barbearia
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-barber-black"
                  asChild
                >
                  <Link to="/contact">
                    Fale com um consultor
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
};

export default Index;
