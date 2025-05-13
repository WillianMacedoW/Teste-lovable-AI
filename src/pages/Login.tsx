import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

const Login: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [isBarberShop, setIsBarberShop] = useState<boolean>(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { login } = useAuth();
  
  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [shopName, setShopName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      
      if (activeTab === 'login') {
        // Mock login success - using email as name if no name is provided
        const userName = email.split('@')[0].replace(/[^a-zA-Z]/g, ' ');
        const userData = {
          name: name || userName.charAt(0).toUpperCase() + userName.slice(1),
          email: email,
        };
        
        login(userData);
        
        toast({
          title: "Login realizado com sucesso",
          description: "Bem-vindo de volta ao BarberTime!",
        });
        
        navigate('/dashboard');
      } else {
        // Mock registration success
        const userData = {
          name,
          email,
          isBarberShop,
          ...(isBarberShop && { shopName }),
        };
        
        login(userData);
        
        toast({
          title: "Registro realizado com sucesso",
          description: "Sua conta foi criada com sucesso!",
        });
        
        navigate('/dashboard');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Brand */}
      <div className="md:w-1/3 bg-barber-black text-white p-8 flex flex-col justify-between">
        <div>
          <Link to="/" className="inline-block mb-12">
            <div className="font-montserrat font-bold text-3xl">
              Barber<span className="text-barber-yellow">Time</span>
            </div>
          </Link>
          
          <h1 className="text-3xl font-bold mb-6">
            {activeTab === 'login' ? 'Bem-vindo de volta!' : 'Crie sua conta'}
          </h1>
          
          <p className="text-gray-300">
            {activeTab === 'login' 
              ? 'Entre na sua conta para gerenciar seus agendamentos e acessar todas as funcionalidades do BarberTime.' 
              : 'Junte-se a milhares de usuários e barbearias que já estão utilizando o BarberTime para uma experiência de agendamento sem igual.'}
          </p>
        </div>
        
        <div className="hidden md:block">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} BarberTime. Todos os direitos reservados.
          </p>
        </div>
      </div>
      
      {/* Right Side - Form */}
      <div className="md:w-2/3 bg-white p-8 md:p-12 lg:p-16 flex items-center justify-center">
        <div className="w-full max-w-md">
          <Tabs 
            value={activeTab} 
            onValueChange={(v) => setActiveTab(v as 'login' | 'register')}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 w-full mb-8">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Cadastro</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password">Senha</Label>
                    <a href="#" className="text-sm text-barber-yellow hover:underline">
                      Esqueceu?
                    </a>
                  </div>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-barber-black text-white hover:bg-barber-gray"
                  disabled={loading}
                >
                  {loading ? "Processando..." : "Entrar"}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="register">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <Label className="flex items-center cursor-pointer">
                    <input 
                      type="radio" 
                      name="userType" 
                      className="mr-2" 
                      checked={!isBarberShop}
                      onChange={() => setIsBarberShop(false)}
                    />
                    Cliente
                  </Label>
                  <Label className="flex items-center cursor-pointer">
                    <input 
                      type="radio" 
                      name="userType" 
                      className="mr-2" 
                      checked={isBarberShop}
                      onChange={() => setIsBarberShop(true)}
                    />
                    Barbearia
                  </Label>
                </div>
                
                {isBarberShop && (
                  <div>
                    <Label htmlFor="shopName">Nome da Barbearia</Label>
                    <Input 
                      id="shopName" 
                      placeholder="Nome da sua Barbearia"
                      value={shopName}
                      onChange={(e) => setShopName(e.target.value)}
                      required={isBarberShop}
                    />
                  </div>
                )}
                
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input 
                    id="name" 
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="registerEmail">Email</Label>
                  <Input 
                    id="registerEmail" 
                    type="email" 
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="registerPassword">Senha</Label>
                  <Input 
                    id="registerPassword" 
                    type="password" 
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Mínimo de 8 caracteres, incluindo letras e números
                  </p>
                </div>
                
                <div className="flex items-center">
                  <Input type="checkbox" id="terms" className="mr-2" required />
                  <Label htmlFor="terms" className="text-sm">
                    Concordo com os {" "}
                    <a href="#" className="text-barber-yellow hover:underline">
                      Termos de Serviço
                    </a>
                    {" "} e {" "}
                    <a href="#" className="text-barber-yellow hover:underline">
                      Política de Privacidade
                    </a>
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-barber-black text-white hover:bg-barber-gray"
                  disabled={loading}
                >
                  {loading ? "Processando..." : "Criar conta"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {activeTab === 'login' ? "Não tem uma conta? " : "Já tem uma conta? "}
              <button
                onClick={() => setActiveTab(activeTab === 'login' ? 'register' : 'login')}
                className="text-barber-yellow hover:underline font-medium"
              >
                {activeTab === 'login' ? "Cadastre-se" : "Faça login"}
              </button>
            </p>
          </div>
          
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Ou continue com</span>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">Google</Button>
              <Button variant="outline" className="w-full">Facebook</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
