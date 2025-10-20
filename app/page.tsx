import { AppLayout } from "@/components/app-layout";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
} from "lucide-react";

export default function Home() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Dashboard Principal</h2>
          <p className="text-gray-600">
            Bem-vindo ao painel de controle do seu aplicativo
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">
                Total Usuários
              </h3>
              <Users className="text-blue-600" size={20} />
            </div>
            <p className="text-3xl font-bold">1,234</p>
            <p className="text-sm text-green-600 mt-2">+12% este mês</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Receita</h3>
              <DollarSign className="text-green-600" size={20} />
            </div>
            <p className="text-3xl font-bold">R$ 45.2K</p>
            <p className="text-sm text-green-600 mt-2">+8% este mês</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">
                Taxa de Conversão
              </h3>
              <TrendingUp className="text-purple-600" size={20} />
            </div>
            <p className="text-3xl font-bold">3.2%</p>
            <p className="text-sm text-red-600 mt-2">-2% este mês</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">
                Engajamento
              </h3>
              <BarChart3 className="text-orange-600" size={20} />
            </div>
            <p className="text-3xl font-bold">87%</p>
            <p className="text-sm text-green-600 mt-2">+5% este mês</p>
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Atividades Recentes</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="text-blue-600" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Novo usuário cadastrado</p>
                  <p className="text-sm text-gray-500">Há 2 minutos</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                  <DollarSign className="text-green-600" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Nova venda realizada</p>
                  <p className="text-sm text-gray-500">Há 15 minutos</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-purple-600" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Relatório mensal gerado</p>
                  <p className="text-sm text-gray-500">Há 1 hora</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Ações Rápidas</h3>
            <div className="grid grid-cols-2 gap-4">
              <Button className="h-20 flex-col gap-2">
                <Users size={24} />
                <span>Novo Usuário</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <BarChart3 size={24} />
                <span>Ver Relatório</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <DollarSign size={24} />
                <span>Nova Venda</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <TrendingUp size={24} />
                <span>Análise</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
