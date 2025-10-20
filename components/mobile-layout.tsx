"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Home,
  User,
  BookOpen,
  FileText,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileLayoutProps {
  children: ReactNode;
}

const navItems = [
  { href: "/aluno", label: "Início", icon: Home },
  { href: "/aluno/perfil", label: "Meu Perfil", icon: User },
  { href: "/aluno/cursos", label: "Cursos", icon: BookOpen },
  { href: "/aluno/atividades", label: "Atividades", icon: FileText },
  { href: "/aluno/configuracoes", label: "Configurações", icon: Settings },
];

export function MobileLayout({ children }: MobileLayoutProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Fixed Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden"
          >
            <Menu size={24} />
          </Button>

          <h1 className="text-lg font-semibold text-gray-800">
            Portal do Aluno
          </h1>

          <Link href="/aluno/perfil">
            <Avatar className="h-10 w-10 border-2 border-blue-500">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=student" />
              <AvatarFallback className="bg-blue-600 text-white">
                AL
              </AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </header>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full bg-white shadow-lg z-50 transition-transform duration-300 w-64",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </Button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-3 rounded-lg transition-colors",
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Profile in Sidebar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border-2 border-blue-500">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=student" />
              <AvatarFallback className="bg-blue-600 text-white">
                AL
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-gray-800">João Silva</p>
              <p className="text-sm text-gray-500">joao@example.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pt-16 pb-6 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
