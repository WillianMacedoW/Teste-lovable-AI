
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { SendIcon, CheckCircle } from 'lucide-react';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Digite um email válido.",
  }),
  phone: z.string().min(10, {
    message: "Telefone deve ter pelo menos 10 dígitos.",
  }).optional(),
  subject: z.string().min(3, {
    message: "Assunto deve ter pelo menos 3 caracteres.",
  }),
  message: z.string().min(10, {
    message: "Mensagem deve ter pelo menos 10 caracteres.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log('Form data:', data);
    
    // Here you would typically send this data to your backend API
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      setFormSubmitted(true);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="barber-container">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Fale Conosco</h1>
            <p className="text-gray-600">
              Estamos aqui para ajudar! Preencha o formulário abaixo para entrar em contato com nossa equipe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6 shadow-md">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Mensagem Enviada!</h2>
                  <p className="text-gray-600 mb-6">
                    Obrigado por entrar em contato. Nossa equipe responderá o mais breve possível.
                  </p>
                  <Button 
                    onClick={() => setFormSubmitted(false)}
                    className="bg-barber-black text-white hover:bg-barber-gray"
                  >
                    Enviar outra mensagem
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome completo" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="seu.email@exemplo.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone (opcional)</FormLabel>
                          <FormControl>
                            <Input placeholder="(00) 00000-0000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Assunto</FormLabel>
                          <FormControl>
                            <Input placeholder="Assunto da mensagem" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensagem</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Digite sua mensagem aqui..." 
                              className="min-h-[150px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-barber-yellow text-barber-black hover:bg-barber-yellow-light"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          <SendIcon className="mr-2 h-4 w-4" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </Card>
            
            <div className="space-y-6">
              <Card className="p-6 shadow-md bg-barber-black text-white">
                <h2 className="text-xl font-bold mb-4 text-barber-yellow">Informações de Contato</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-barber-yellow">Endereço</h3>
                    <p>Av. Paulista, 1000</p>
                    <p>São Paulo, SP - 01310-100</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-barber-yellow">Email</h3>
                    <p>contato@barbertime.com</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-barber-yellow">Telefone</h3>
                    <p>(11) 9999-9999</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-barber-yellow">Horário de Atendimento</h3>
                    <p>Segunda a Sexta: 9h às 18h</p>
                    <p>Sábado: 9h às 13h</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 shadow-md">
                <h2 className="text-xl font-bold mb-4">Perguntas Frequentes</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold">Como funciona o plano gratuito?</h3>
                    <p className="text-gray-600">O plano gratuito permite 1 barbeiro com agendamentos ilimitados.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold">Posso cancelar minha assinatura a qualquer momento?</h3>
                    <p className="text-gray-600">Sim, você pode cancelar sua assinatura a qualquer momento sem taxas adicionais.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold">O BarberTime oferece suporte técnico?</h3>
                    <p className="text-gray-600">Sim, oferecemos suporte via email para todos os planos e suporte prioritário para o plano Profissional.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
