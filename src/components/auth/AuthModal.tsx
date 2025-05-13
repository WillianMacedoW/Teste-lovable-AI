
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [isBarberShop, setIsBarberShop] = useState<boolean>(false);
  const { toast } = useToast();
  const { login } = useAuth();
  const navigate = useNavigate();
  
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
      }
      
      onClose();
      navigate('/dashboard');
    }, 1000);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            {activeTab === 'login' ? 'Acesse sua conta' : 'Crie sua conta'}
          </DialogTitle>
        </DialogHeader>
        
        <Tabs 
          value={activeTab} 
          onValueChange={(v) => setActiveTab(v as 'login' | 'register')}
          className="w-full"
        >
          <TabsList className="grid grid-cols-2 w-full mb-4">
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
                <Label htmlFor="password">Senha</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="text-right">
                <a href="#" className="text-sm text-barber-yellow hover:underline">
                  Esqueceu sua senha?
                </a>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-barber-yellow text-barber-black hover:bg-barber-yellow-light"
                disabled={loading}
              >
                {loading ? "Processando..." : "Entrar"}
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="register">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Label className="cursor-pointer">
                  <Input 
                    type="radio" 
                    name="userType" 
                    className="mr-2" 
                    checked={!isBarberShop}
                    onChange={() => setIsBarberShop(false)}
                  />
                  Cliente
                </Label>
                <Label className="cursor-pointer">
                  <Input 
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
              
              <Button 
                type="submit" 
                className="w-full bg-barber-yellow text-barber-black hover:bg-barber-yellow-light"
                disabled={loading}
              >
                {loading ? "Processando..." : "Criar conta"}
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                Ao se cadastrar, você concorda com nossos {" "}
                <a href="#" className="text-barber-yellow hover:underline">
                  Termos de Serviço
                </a>
                {" "} e {" "}
                <a href="#" className="text-barber-yellow hover:underline">
                  Política de Privacidade
                </a>
              </p>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
