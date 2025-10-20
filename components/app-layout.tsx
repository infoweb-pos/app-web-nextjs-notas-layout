"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Home,
  MessageSquare,
  Settings,
  Users,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AppLayoutProps {
  children: ReactNode;
}

const navItems = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/assistente", label: "Assistente", icon: MessageSquare },
  { href: "/aluno", label: "Área do Aluno", icon: Users },
  { href: "/landing", label: "Landing Page", icon: Settings },
];

export function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={cn(
          "bg-gray-900 text-white transition-all duration-300 flex flex-col",
          sidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          {sidebarOpen && <h2 className="text-xl font-bold">Tutorial App</h2>}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white hover:bg-gray-800"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-800"
                    )}
                  >
                    <Icon size={20} />
                    {sidebarOpen && <span>{item.label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center gap-3 px-3 py-2">
            <Settings size={20} />
            {sidebarOpen && <span>Configurações</span>}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">
              {navItems.find((item) => item.href === pathname)?.label ||
                "Dashboard"}
            </h1>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                Notificações
              </Button>
              <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                U
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <p>© 2025 Tutorial App. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-600">
                Privacidade
              </a>
              <a href="#" className="hover:text-blue-600">
                Termos
              </a>
              <a href="#" className="hover:text-blue-600">
                Contato
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* Floating Chat Button */}
      <Button
        size="icon"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700"
      >
        <MessageSquare size={24} />
      </Button>
    </div>
  );
}
