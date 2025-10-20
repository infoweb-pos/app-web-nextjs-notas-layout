import { MobileLayout } from "@/components/mobile-layout";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, Award, TrendingUp } from "lucide-react";

export default function AlunoPage() {
  return (
    <MobileLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-1">Olá, João!</h2>
          <p className="text-gray-600">
            Bem-vindo de volta ao seu portal de estudos
          </p>
        </div>

        {/* Progress Card */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Seu Progresso</h3>
            <Award size={24} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Cursos Concluídos</span>
              <span className="font-bold">3/5</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div
                className="bg-white rounded-full h-2"
                style={{ width: "60%" }}
              />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="text-blue-600" size={20} />
              <h4 className="font-semibold text-sm">Cursos Ativos</h4>
            </div>
            <p className="text-2xl font-bold">5</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="text-green-600" size={20} />
              <h4 className="font-semibold text-sm">Próximas Aulas</h4>
            </div>
            <p className="text-2xl font-bold">3</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Award className="text-purple-600" size={20} />
              <h4 className="font-semibold text-sm">Certificados</h4>
            </div>
            <p className="text-2xl font-bold">2</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="text-orange-600" size={20} />
              <h4 className="font-semibold text-sm">Média Geral</h4>
            </div>
            <p className="text-2xl font-bold">8.5</p>
          </div>
        </div>

        {/* Current Courses */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="text-lg font-semibold mb-4">Cursos em Andamento</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="h-12 w-12 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
                JS
              </div>
              <div className="flex-1">
                <p className="font-semibold">JavaScript Avançado</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 rounded-full h-2"
                      style={{ width: "75%" }}
                    />
                  </div>
                  <span className="text-xs text-gray-600">75%</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="h-12 w-12 bg-green-600 rounded flex items-center justify-center text-white font-bold">
                RE
              </div>
              <div className="flex-1">
                <p className="font-semibold">React & Next.js</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 rounded-full h-2"
                      style={{ width: "45%" }}
                    />
                  </div>
                  <span className="text-xs text-gray-600">45%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Activities */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="text-lg font-semibold mb-4">Próximas Atividades</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">15</p>
                <p className="text-xs text-gray-500">JAN</p>
              </div>
              <div className="flex-1 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <p className="font-semibold">Prova de JavaScript</p>
                <p className="text-sm text-gray-600">14:00 - 16:00</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">18</p>
                <p className="text-xs text-gray-500">JAN</p>
              </div>
              <div className="flex-1 p-3 bg-green-50 rounded-lg border-l-4 border-green-600">
                <p className="font-semibold">Entrega de Projeto</p>
                <p className="text-sm text-gray-600">Até 23:59</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button className="h-16">Ver Todos os Cursos</Button>
          <Button variant="outline" className="h-16">
            Minhas Notas
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
