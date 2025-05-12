
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  CalendarIcon,
  ClockIcon,
  UsersIcon,
  BarChartIcon,
  ScissorsIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Mock data - in real app would come from API
const UPCOMING_APPOINTMENTS = [
  {
    id: '1',
    clientName: 'João Silva',
    service: 'Corte de Cabelo',
    date: '25 Jun 2025',
    time: '14:30',
    barber: 'Carlos',
    status: 'confirmed'
  },
  {
    id: '2',
    clientName: 'Pedro Alves',
    service: 'Barba',
    date: '25 Jun 2025',
    time: '15:30',
    barber: 'Rafael',
    status: 'confirmed'
  },
  {
    id: '3',
    clientName: 'Marcos Santos',
    service: 'Corte e Barba',
    date: '25 Jun 2025',
    time: '16:00',
    barber: 'Carlos',
    status: 'pending'
  },
  {
    id: '4',
    clientName: 'Lucas Oliveira',
    service: 'Corte Degradê',
    date: '26 Jun 2025',
    time: '10:30',
    barber: 'Rafael',
    status: 'confirmed'
  }
];

const BARBERS = [
  {
    id: '1',
    name: 'Carlos Mendes',
    appointments: 5,
    availability: '9:00 - 18:00'
  },
  {
    id: '2',
    name: 'Rafael Costa',
    appointments: 3,
    availability: '9:00 - 18:00'
  }
];

const Dashboard: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow py-8">
        <div className="barber-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                Dashboard da Barbearia
              </h1>
              <p className="text-gray-600">
                Bem-vindo de volta, Studio Corte Exclusivo
              </p>
            </div>
            
            <div className="flex gap-2">
              <Button asChild>
                <Link to="/settings">
                  Configurações
                </Link>
              </Button>
              <Button className="bg-barber-yellow text-barber-black hover:bg-barber-yellow-light" asChild>
                <Link to="/booking/create">
                  <CalendarIcon size={18} className="mr-2" />
                  Novo Agendamento
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Appointments */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Agendamentos Hoje</p>
                      <p className="text-2xl font-bold">8</p>
                    </div>
                    <div className="bg-barber-yellow/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <CalendarIcon size={20} className="text-barber-yellow" />
                    </div>
                  </div>
                  <Progress value={80} className="mt-4 bg-gray-200 h-1" />
                  <p className="text-xs text-gray-500 mt-1">80% da capacidade</p>
                </Card>
                
                <Card className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Clientes</p>
                      <p className="text-2xl font-bold">156</p>
                    </div>
                    <div className="bg-barber-yellow/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <UsersIcon size={20} className="text-barber-yellow" />
                    </div>
                  </div>
                  <Progress value={65} className="mt-4 bg-gray-200 h-1" />
                  <p className="text-xs text-gray-500 mt-1">↑12% este mês</p>
                </Card>
                
                <Card className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Receita Hoje</p>
                      <p className="text-2xl font-bold">R$420</p>
                    </div>
                    <div className="bg-barber-yellow/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <BarChartIcon size={20} className="text-barber-yellow" />
                    </div>
                  </div>
                  <Progress value={42} className="mt-4 bg-gray-200 h-1" />
                  <p className="text-xs text-gray-500 mt-1">↑8% vs. ontem</p>
                </Card>
              </div>
              
              {/* Appointment List */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Próximos Agendamentos</h2>
                  <Tabs defaultValue="today">
                    <TabsList>
                      <TabsTrigger value="today">Hoje</TabsTrigger>
                      <TabsTrigger value="week">Semana</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                
                <div className="space-y-4">
                  {UPCOMING_APPOINTMENTS.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-barber-yellow transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-barber-yellow/10 w-12 h-12 rounded-full flex items-center justify-center">
                          <ScissorsIcon size={20} className="text-barber-yellow" />
                        </div>
                        <div>
                          <p className="font-semibold">{appointment.clientName}</p>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>{appointment.service}</span>
                            <span>•</span>
                            <span>Barbeiro: {appointment.barber}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                          <p className="font-medium">{appointment.date}</p>
                          <p className="text-sm text-gray-500">{appointment.time}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          appointment.status === 'confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {appointment.status === 'confirmed' ? 'Confirmado' : 'Pendente'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-center">
                  <Button variant="outline">Ver todos agendamentos</Button>
                </div>
              </Card>
              
              {/* Team Members */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6">Equipe</h2>
                
                <div className="space-y-4">
                  {BARBERS.map((barber) => (
                    <div 
                      key={barber.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-gray-200"
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-barber-black w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold">
                          {barber.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold">{barber.name}</p>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <ClockIcon size={14} />
                            <span>{barber.availability}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                          {barber.appointments} agendamentos hoje
                        </div>
                        <Button variant="ghost" size="sm">
                          Ver agenda
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    Adicionar Barbeiro
                  </Button>
                </div>
              </Card>
            </div>
            
            {/* Right Column - Calendar and Analytics */}
            <div className="space-y-6">
              {/* Calendar */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Calendário</h2>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border w-full"
                />
                
                {date && (
                  <div className="mt-4">
                    <h3 className="font-medium mb-2">
                      Agenda para {date.toLocaleDateString('pt-BR')}
                    </h3>
                    <div className="space-y-2">
                      <div className="bg-gray-50 p-2 rounded-md flex justify-between items-center">
                        <span>09:00 - 09:30</span>
                        <span className="text-sm text-green-600">Disponível</span>
                      </div>
                      <div className="bg-barber-yellow/10 p-2 rounded-md flex justify-between items-center">
                        <span>10:00 - 10:30</span>
                        <span className="text-sm">João Silva • Corte</span>
                      </div>
                      <div className="bg-gray-50 p-2 rounded-md flex justify-between items-center">
                        <span>11:00 - 11:30</span>
                        <span className="text-sm text-green-600">Disponível</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4">
                      Ver agenda completa
                    </Button>
                  </div>
                )}
              </Card>
              
              {/* Quick Actions */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Ações Rápidas</h2>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <CalendarIcon size={16} className="mr-2" />
                    Agendar Cliente
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <UsersIcon size={16} className="mr-2" />
                    Gerenciar Clientes
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BarChartIcon size={16} className="mr-2" />
                    Ver Relatórios
                  </Button>
                </div>
              </Card>
              
              {/* Plan Info */}
              <Card className="bg-barber-black text-white p-6">
                <h2 className="text-xl font-semibold mb-2">Plano Atual: Padrão</h2>
                <p className="text-gray-300 mb-4">
                  Você está utilizando 2 de 5 barbeiros disponíveis
                </p>
                
                <Progress value={40} className="bg-gray-700 h-1" />
                <p className="text-xs text-gray-400 mt-1">40% do seu plano utilizado</p>
                
                <Button className="w-full mt-4 bg-barber-yellow text-barber-black hover:bg-barber-yellow-light">
                  Atualizar para Profissional
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
