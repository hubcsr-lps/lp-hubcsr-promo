import { Settings, MessageSquare, Users, Calendar, BarChart3, HeadphonesIcon } from "lucide-react";

const SolutionsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-blue-600/20"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Soluções
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto">
            <span className="font-semibold">SaaS + consultoria sob demanda</span> para potencializar o impacto social da sua organização
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">

          {/* Personalização e comunicação */}
          <div className="space-y-6">
            <div className="bg-green-500/10 backdrop-blur-sm p-6 rounded-xl border border-green-400/20">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="text-green-400 w-6 h-6" />
                <h3 className="text-xl font-semibold text-white">Personalização e comunicação</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <h4 className="font-semibold text-white mb-2">Ambientes (White-Label)</h4>
                <p className="text-white/80 text-sm">Adapte toda a plataforma à identidade visual da sua organização.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <h4 className="font-semibold text-white mb-2">Páginas sociais</h4>
                <p className="text-white/80 text-sm">Compartilhe os resultados com páginas dedicadas a ações, conquistas e histórias inspiradoras.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <h4 className="font-semibold text-white mb-2">Customização</h4>
                <p className="text-white/80 text-sm">Configure funcionalidades conforme os objetivos, fluxos e metas da sua organização.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <h4 className="font-semibold text-white mb-2">Comunicação</h4>
                <p className="text-white/80 text-sm">Aproxime-se do público certo com mensagens personalizadas para colaboradores e parceiros.</p>
              </div>
            </div>
          </div>

          {/* Engajamento e execução */}
          <div className="space-y-6">
            <div className="bg-orange-500/10 backdrop-blur-sm p-6 rounded-xl border border-orange-400/20">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-orange-400 w-6 h-6" />
                <h3 className="text-xl font-semibold text-white">Engajamento e execução</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <h4 className="font-semibold text-white mb-2">Gestão de Voluntariado</h4>
                <p className="text-white/80 text-sm">Gerencie perfis, ações e engajamento de voluntários em tempo real — com mais autonomia e visibilidade.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <h4 className="font-semibold text-white mb-2">Eventos</h4>
                <p className="text-white/80 text-sm">Organize eventos e mentorias com controle completo, formulários e automações integrados.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <h4 className="font-semibold text-white mb-2">Projetos</h4>
                <p className="text-white/80 text-sm">Acompanhe a execução de projetos sociais com gestão colaborativa e indicadores personalizados.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <h4 className="font-semibold text-white mb-2">Parcerias</h4>
                <p className="text-white/80 text-sm">Fortaleça parcerias com organizações sociais e fornecedores em ações de impacto comum.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-orange-500/10 backdrop-blur-sm p-6 rounded-xl border border-orange-400/20">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-orange-400 w-6 h-6" />
                <h3 className="text-xl font-semibold text-white">Engajamento e execução</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <h4 className="font-semibold text-white mb-2">Gestão de Voluntariado</h4>
                <p className="text-white/80 text-sm">Gerencie perfis, ações e engajamento de voluntários em tempo real — com mais autonomia e visibilidade.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <h4 className="font-semibold text-white mb-2">Eventos</h4>
                <p className="text-white/80 text-sm">Organize eventos e mentorias com controle completo, formulários e automações integrados.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <h4 className="font-semibold text-white mb-2">Projetos</h4>
                <p className="text-white/80 text-sm">Acompanhe a execução de projetos sociais com gestão colaborativa e indicadores personalizados.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <h4 className="font-semibold text-white mb-2">Parcerias</h4>
                <p className="text-white/80 text-sm">Fortaleça parcerias com organizações sociais e fornecedores em ações de impacto comum.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;