
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="barber-container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Sobre o BarberTime</h1>
            <p className="text-gray-600 mb-6">
              Conheça a história por trás da plataforma que está transformando o mercado de barbearias no Brasil.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Nossa Missão</h2>
              <p className="text-gray-600 mb-4">
                Criamos o BarberTime com uma missão clara: simplificar o agendamento de serviços de barbearia tanto para os clientes quanto para os próprios estabelecimentos.
              </p>
              <p className="text-gray-600 mb-4">
                Acreditamos que tecnologia de ponta deve estar acessível a todos os tipos de negócios, independente do tamanho. Nossa plataforma foi desenhada para aumentar a eficiência operacional e melhorar a experiência do cliente.
              </p>
              <p className="text-gray-600">
                Com o BarberTime, barbearias de todo o país podem oferecer um serviço de agendamento profissional, reduzir faltas e organizar melhor o fluxo de clientes.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1622288432450-277d0fef5ed7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Equipe BarberTime" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Nossa História</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-barber-yellow text-xl font-bold mb-2">2021</div>
                <h3 className="text-lg font-medium mb-2">O início</h3>
                <p className="text-gray-600">
                  Fundada por um grupo de empreendedores apaixonados por tecnologia e barbearias, a ideia nasceu da frustração com sistemas de agendamento antiquados.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-barber-yellow text-xl font-bold mb-2">2023</div>
                <h3 className="text-lg font-medium mb-2">Crescimento</h3>
                <p className="text-gray-600">
                  Após crescer rapidamente, atingimos a marca de 200 barbearias parceiras e mais de 50.000 agendamentos realizados mensalmente em nossa plataforma.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-barber-yellow text-xl font-bold mb-2">2025</div>
                <h3 className="text-lg font-medium mb-2">Presente</h3>
                <p className="text-gray-600">
                  Hoje somos a maior plataforma de agendamentos para barbearias do Brasil, com planos de expansão para toda a América Latina nos próximos anos.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Nossa Equipe</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Carlos Oliveira', role: 'CEO & Fundador', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' },
                { name: 'Ana Silva', role: 'CTO', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' },
                { name: 'Rafael Santos', role: 'Head de Design', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' },
                { name: 'Julia Costa', role: 'Head de Marketing', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' },
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-64">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-barber-black text-white p-8 rounded-lg">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">
                Pronto para experimentar o BarberTime?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Agende um corte agora mesmo ou cadastre sua barbearia na plataforma.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-barber-yellow text-barber-black hover:bg-barber-yellow-light"
                  asChild
                >
                  <Link to="/booking">
                    Agendar um corte
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-barber-black"
                  asChild
                >
                  <Link to="/contact">
                    Cadastrar minha barbearia
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
