
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Info, Star, Users } from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="barber-container">
          {/* Hero Section */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-barber-black">Sobre o BarberTime</h1>
            <p className="text-xl text-gray-600 mb-8">
              Conheça a história por trás da plataforma que está transformando o mercado de barbearias no Brasil.
            </p>
          </div>
          
          {/* Mission Section */}
          <Card className="mb-16 overflow-hidden shadow-lg border-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="bg-barber-black text-white p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center mb-6">
                  <div className="p-2 bg-barber-yellow rounded-full">
                    <Info className="h-6 w-6 text-barber-black" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold ml-3">Nossa Missão</h2>
                </div>
                <p className="text-gray-300 mb-4 text-lg">
                  Criamos o BarberTime com uma missão clara: simplificar o agendamento de serviços de barbearia tanto para os clientes quanto para os próprios estabelecimentos.
                </p>
                <p className="text-gray-300 mb-4">
                  Acreditamos que tecnologia de ponta deve estar acessível a todos os tipos de negócios, independente do tamanho. Nossa plataforma foi desenhada para aumentar a eficiência operacional e melhorar a experiência do cliente.
                </p>
                <p className="text-gray-300">
                  Com o BarberTime, barbearias de todo o país podem oferecer um serviço de agendamento profissional, reduzir faltas e organizar melhor o fluxo de clientes.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-12 flex items-center justify-center">
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <p className="text-lg text-gray-500 italic mb-3">"Espaço reservado para futura imagem institucional"</p>
                  <p className="text-sm text-gray-400">Adicione sua imagem aqui</p>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Timeline Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="p-2 bg-barber-yellow rounded-full mr-3">
                <Star className="h-6 w-6 text-barber-black" />
              </div>
              <h2 className="text-3xl font-bold text-center">Nossa História</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden transform transition-all hover:shadow-xl">
                <div className="h-2 bg-barber-yellow"></div>
                <CardContent className="pt-6">
                  <div className="text-barber-black text-2xl font-bold mb-3">2021</div>
                  <h3 className="text-xl font-medium mb-3">O início</h3>
                  <p className="text-gray-600">
                    Fundada por um grupo de empreendedores apaixonados por tecnologia e barbearias, a ideia nasceu da frustração com sistemas de agendamento antiquados.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden transform transition-all hover:shadow-xl">
                <div className="h-2 bg-barber-yellow"></div>
                <CardContent className="pt-6">
                  <div className="text-barber-black text-2xl font-bold mb-3">2023</div>
                  <h3 className="text-xl font-medium mb-3">Crescimento</h3>
                  <p className="text-gray-600">
                    Após crescer rapidamente, atingimos a marca de 200 barbearias parceiras e mais de 50.000 agendamentos realizados mensalmente em nossa plataforma.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden transform transition-all hover:shadow-xl">
                <div className="h-2 bg-barber-yellow"></div>
                <CardContent className="pt-6">
                  <div className="text-barber-black text-2xl font-bold mb-3">2025</div>
                  <h3 className="text-xl font-medium mb-3">Presente</h3>
                  <p className="text-gray-600">
                    Hoje somos a maior plataforma de agendamentos para barbearias do Brasil, com planos de expansão para toda a América Latina nos próximos anos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Founder Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="p-2 bg-barber-yellow rounded-full mr-3">
                <Users className="h-6 w-6 text-barber-black" />
              </div>
              <h2 className="text-3xl font-bold text-center">Nossa Liderança</h2>
            </div>
            
            <Card className="overflow-hidden shadow-lg max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="md:col-span-1 bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <Avatar className="h-32 w-32 mx-auto border-4 border-white shadow-lg bg-barber-yellow">
                      <AvatarFallback className="text-4xl font-bold text-white">
                        WM
                      </AvatarFallback>
                    </Avatar>
                    <div className="mt-4 p-2 bg-white rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500">Espaço para foto do CEO</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-2">Willian Soares Macedo</h3>
                  <p className="text-barber-yellow font-semibold mb-4">CEO & Fundador</p>
                  <p className="text-gray-600 mb-4">
                    Formado em Análise e Desenvolvimento de Sistemas, Willian combina sua paixão por tecnologia com uma visão inovadora para o mercado de barbearias.
                  </p>
                  <p className="text-gray-600">
                    Sob sua liderança, o BarberTime tem revolucionado a forma como as barbearias gerenciam seus agendamentos, trazendo mais eficiência e melhor experiência para todos os envolvidos.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-barber-black to-barber-gray text-white p-8 md:p-12 rounded-lg shadow-lg">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Pronto para experimentar o BarberTime?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Agende um corte agora mesmo ou cadastre sua barbearia na plataforma.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-barber-yellow text-barber-black hover:bg-barber-yellow-light font-bold"
                  asChild
                >
                  <Link to="/booking/create">
                    Agendar um corte
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-barber-black font-bold"
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
