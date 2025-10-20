import { AppLayout } from "@/components/app-layout";
import { Button } from "@/components/ui/button";
import { Send, Sparkles } from "lucide-react";

export default function AssistentePage() {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Assistente Virtual</h2>
          <p className="text-gray-600">
            Converse com nosso assistente inteligente para obter ajuda
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {/* Chat Messages */}
          <div className="space-y-4 mb-6 h-96 overflow-y-auto">
            {/* Assistant Message */}
            <div className="flex gap-3">
              <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles className="text-white" size={20} />
              </div>
              <div className="bg-blue-50 rounded-lg p-4 max-w-md">
                <p className="text-sm">
                  Olá! Sou o assistente virtual. Como posso ajudá-lo hoje?
                </p>
                <p className="text-xs text-gray-500 mt-2">10:30 AM</p>
              </div>
            </div>

            {/* User Message */}
            <div className="flex gap-3 justify-end">
              <div className="bg-gray-100 rounded-lg p-4 max-w-md">
                <p className="text-sm">
                  Preciso de ajuda com meu perfil
                </p>
                <p className="text-xs text-gray-500 mt-2 text-right">
                  10:31 AM
                </p>
              </div>
              <div className="h-10 w-10 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold">
                U
              </div>
            </div>

            {/* Assistant Message */}
            <div className="flex gap-3">
              <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles className="text-white" size={20} />
              </div>
              <div className="bg-blue-50 rounded-lg p-4 max-w-md">
                <p className="text-sm">
                  Claro! Posso ajudá-lo a atualizar suas informações de perfil.
                  Você pode acessar a área do aluno clicando no menu lateral ou
                  posso guiá-lo através das configurações. O que você gostaria
                  de fazer?
                </p>
                <p className="text-xs text-gray-500 mt-2">10:32 AM</p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="flex gap-2 border-t pt-4">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button size="icon">
              <Send size={20} />
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold mb-4">Ações Rápidas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Button variant="outline" className="justify-start">
              📊 Ver Dashboard
            </Button>
            <Button variant="outline" className="justify-start">
              👤 Atualizar Perfil
            </Button>
            <Button variant="outline" className="justify-start">
              ⚙️ Configurações
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
