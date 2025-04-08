
import React, { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Check, Upload } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'Email inválido' }),
  phone: z.string().min(9, { message: 'Telefone inválido' }),
  visaType: z.string().min(1, { message: 'Selecione um tipo de visto' }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const DocumentUpload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      visaType: '',
      message: '',
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles([...files, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // In a real application, we would use FormData to send the files to the server
      console.log('Form values:', values);
      console.log('Files to upload:', files);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      toast.success('Documentos enviados com sucesso! Entraremos em contato em breve.');
      
      // Reset form
      form.reset();
      setFiles([]);
    } catch (error) {
      toast.error('Erro ao enviar documentos. Por favor, tente novamente.');
      console.error('Upload error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-6 md:p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome Completo</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu nome completo" {...field} />
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
                    <Input placeholder="seu@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="+351 000 000 000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="visaType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de Visto</FormLabel>
                  <FormControl>
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      {...field}
                    >
                      <option value="">Selecione o tipo de visto</option>
                      <option value="d7">Visto D7 (Aposentados e Rendas)</option>
                      <option value="d2">Visto D2 (Empreendedores)</option>
                      <option value="family">Reunificação Familiar</option>
                      <option value="study">Visto de Estudante</option>
                      <option value="work">Visto de Trabalho</option>
                      <option value="golden">Golden Visa</option>
                      <option value="other">Outro</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem (Opcional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Informe detalhes adicionais sobre seu caso..." 
                    className="min-h-[120px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="border border-dashed rounded-md p-6">
            <div className="flex flex-col items-center justify-center space-y-2">
              <Upload className="h-8 w-8 text-gray-400" />
              <div className="space-y-1 text-center">
                <p className="text-sm text-gray-600">
                  Arraste seus documentos aqui ou
                </p>
                <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-primary hover:text-primary/80">
                  <span>Selecione os arquivos</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    multiple
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              <p className="text-xs text-gray-400">
                PDF, JPG, PNG até 10MB cada
              </p>
            </div>
          </div>
          
          {files.length > 0 && (
            <div>
              <h4 className="font-medium mb-2">Arquivos selecionados:</h4>
              <ul className="space-y-2">
                {files.map((file, index) => (
                  <li key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium truncate max-w-[200px] md:max-w-[300px]">
                          {file.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>Enviando...</>
            ) : (
              <>
                <Check className="mr-2 h-4 w-4" /> Enviar Documentos
              </>
            )}
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default DocumentUpload;
