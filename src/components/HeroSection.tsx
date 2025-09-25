import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import heroMockup from "@/assets/hero-mockup.jpg";
import heroBackground from "@/assets/hubcsr-01.png";
import { ArrowRight } from "lucide-react";

interface FormData {
  nome: string;
  email: string;
}

const HeroSection = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();
  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    try {
      const { error } = await supabase.functions.invoke('brevo-lead', {
        body: {
          email: data.email,
          RAZAO_SOCIAL: data.nome // usando nome da OSC como razão social
        }
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Sucesso!",
        description: "Seus dados foram enviados com sucesso. Entraremos em contato em breve!",
      });

      reset();
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar seus dados. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">

          {/* Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left md:w-fit">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in-up">
                Em até 7 dias sua OSC organizada e pronta para crescer.
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed animate-slide-in-left max-w-2xl mx-auto lg:mx-0">
                Ganhe visibilidade, engaje voluntários e comece a receber doações de forma simples e transparente.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 animate-fade-in-delay-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1">
                  <Input
                    {...register("nome", { required: "Nome da OSC é obrigatório" })}
                    placeholder="Nome da sua OSC"
                    className="h-12 text-base bg-white/90 border-white/20 focus:bg-white text-gray-900 placeholder:text-gray-600"
                  />
                  {errors.nome && (
                    <p className="text-red-300 text-sm mt-1">{errors.nome.message}</p>
                  )}
                </div>
                <div className="flex-1">
                  <Input
                    {...register("email", {
                      required: "E-mail é obrigatório",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "E-mail inválido"
                      }
                    })}
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="h-12 text-base bg-white/90 border-white/20 focus:bg-white text-gray-900 placeholder:text-gray-600"
                  />
                  {errors.email && (
                    <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 px-4 text-base bg-hubcsr-orange hover:bg-hubcsr-orange/90 text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
                >
                  {isSubmitting ? "Enviando..." : <ArrowRight />}
                </Button>
              </div>
            </form>

            <div className="bg-white/5 w-full backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/20 animate-fade-in-delay-3 hover:bg-white/10 transition-all duration-300">
              <p className="text-base sm:text-lg font-semibold text-hubcsr-green">+30 OSCs já organizadas este mês</p>
              <p className="text-sm sm:text-base text-white/80 mt-2 italic">
                "Em poucos dias já tínhamos projetos ativos e começamos a receber nossas primeiras doações."
              </p>
            </div>
          </div>

          {/* Visual - Empty for now */}

        </div>
      </div>
    </section>
  );
};

export default HeroSection;