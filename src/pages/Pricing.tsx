
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AuthModal from '@/components/auth/AuthModal';

// Pricing plans
const PRICING_PLANS = [
  {
    name: 'Simples',
    price: {
      monthly: '12,99',
      yearly: '9,99'
    },
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
    price: {
      monthly: '49',
      yearly: '39'
    },
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
    price: {
      monthly: '99',
      yearly: '79'
    },
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

const Pricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenAuthModal={() => setIsAuthModalOpen(true)} />
      
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Planos para Barbearias</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Escolha o melhor plano para sua barbearia e impulsione seu negócio
            </p>
            
            <Tabs 
              defaultValue="monthly" 
              className="w-full max-w-xs mx-auto mt-8"
              onValueChange={(value) => setBillingPeriod(value as 'monthly' | 'yearly')}
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="monthly">Mensal</TabsTrigger>
                <TabsTrigger value="yearly">Anual (20% off)</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_PLANS.map((plan, index) => (
              <div 
                key={index} 
                className={`border ${plan.popular ? 'border-barber-yellow' : 'border-gray-200'} 
                  rounded-lg p-8 relative ${plan.popular ? 'shadow-lg' : 'shadow-sm'} bg-white`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-barber-yellow text-barber-black text-xs font-bold py-1 px-3 rounded-full">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">R${plan.price[billingPeriod]}</span>
                  <span className="text-gray-600 ml-1">/mês</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckIcon size={18} className="text-green-500 mr-2 mt-1 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  
                  {plan.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-400">
                      <span className="w-4 h-4 mr-2 flex items-center justify-center mt-1 shrink-0">—</span>
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
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Perguntas Frequentes</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-5 rounded-lg shadow">
                <h3 className="font-bold">Posso mudar de plano depois?</h3>
                <p className="text-gray-600 mt-2">Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento.</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow">
                <h3 className="font-bold">Existe período de fidelidade?</h3>
                <p className="text-gray-600 mt-2">Não, você pode cancelar sua assinatura quando quiser sem multa.</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow">
                <h3 className="font-bold">Como funciona o período de teste?</h3>
                <p className="text-gray-600 mt-2">Todos os planos incluem 14 dias de teste gratuito, sem necessidade de cartão de crédito.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
};

export default Pricing;
