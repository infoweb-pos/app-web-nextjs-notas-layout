import { MobileLayout } from "@/components/mobile-layout";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Calendar, Edit } from "lucide-react";

export default function PerfilPage() {
  return (
    <MobileLayout>
      <div className="space-y-6">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 border-4 border-blue-500 mb-4">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=student" />
              <AvatarFallback className="bg-blue-600 text-white text-2xl">
                JS
              </AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold mb-1">João Silva</h2>
            <p className="text-gray-600 mb-4">Estudante de Tecnologia</p>
            <Button size="sm" className="gap-2">
              <Edit size={16} />
              Editar Perfil
            </Button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold mb-4">Informações de Contato</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="text-blue-600" size={20} />
              <span>joao.silva@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="text-green-600" size={20} />
              <span>(11) 98765-4321</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="text-red-600" size={20} />
              <span>São Paulo, SP - Brasil</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Calendar className="text-purple-600" size={20} />
              <span>Membro desde Janeiro 2024</span>
            </div>
          </div>
        </div>

        {/* Academic Info */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold mb-4">Informações Acadêmicas</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Curso</p>
              <p className="font-semibold">
                Desenvolvimento Web Full Stack
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Matrícula</p>
              <p className="font-semibold">2024001234</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Período</p>
              <p className="font-semibold">4º Semestre</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Média Geral</p>
              <p className="font-semibold text-green-600">8.5</p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold mb-4">Conquistas</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="text-3xl mb-1">🏆</div>
              <p className="text-xs font-semibold">Top Aluno</p>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-3xl mb-1">📚</div>
              <p className="text-xs font-semibold">5 Cursos</p>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="text-3xl mb-1">✅</div>
              <p className="text-xs font-semibold">100% Presença</p>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-200">
              <div className="text-3xl mb-1">⭐</div>
              <p className="text-xs font-semibold">50 Atividades</p>
            </div>
            <div className="text-center p-3 bg-pink-50 rounded-lg border border-pink-200">
              <div className="text-3xl mb-1">🎯</div>
              <p className="text-xs font-semibold">Metas 2024</p>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
              <div className="text-3xl mb-1">🔥</div>
              <p className="text-xs font-semibold">30 Dias Série</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold mb-4">Atividade Recente</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                📝
              </div>
              <div>
                <p className="font-medium text-sm">
                  Completou: Quiz de JavaScript
                </p>
                <p className="text-xs text-gray-500">Há 2 horas</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                ✅
              </div>
              <div>
                <p className="font-medium text-sm">
                  Entregou: Projeto React
                </p>
                <p className="text-xs text-gray-500">Ontem</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                🏆
              </div>
              <div>
                <p className="font-medium text-sm">
                  Conquistou: Badge de Top Aluno
                </p>
                <p className="text-xs text-gray-500">2 dias atrás</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pb-4">
          <Button variant="outline" className="h-14">
            Alterar Senha
          </Button>
          <Button variant="outline" className="h-14">
            Configurações
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
