import { Button } from "@/components/ui/button";
import { Rocket, Zap, Shield } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Bem-vindo ao Tutorial Next.js
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Aprenda a criar layouts profissionais com Next.js, Tailwind CSS,
            shadcn/ui e TypeScript
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/">
              <Button size="lg" variant="secondary">
                Começar Agora
              </Button>
            </Link>
            <Link href="/assistente">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Ver Assistente
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Recursos Principais
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rápido e Moderno</h3>
              <p className="text-gray-600">
                Built com Next.js 15 e React 19 para máxima performance
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Design Responsivo
              </h3>
              <p className="text-gray-600">
                Layouts que se adaptam perfeitamente a qualquer dispositivo
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Type-Safe</h3>
              <p className="text-gray-600">
                TypeScript para código mais seguro e manutenível
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore os diferentes layouts e componentes deste tutorial
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/">
              <Button size="lg">Página Principal</Button>
            </Link>
            <Link href="/aluno">
              <Button size="lg" variant="outline">Área do Aluno</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            © 2025 Tutorial Next.js. Criado para fins educacionais.
          </p>
        </div>
      </footer>
    </>
  );
}
