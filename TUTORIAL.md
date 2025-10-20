# Tutorial: Layouts no Next.js com TypeScript, Tailwind CSS e shadcn/ui

Este projeto é um tutorial completo para iniciantes sobre como usar `layout.tsx` e `page.tsx` no Next.js 15 com TypeScript, Tailwind CSS e componentes shadcn/ui.

## 📋 Sumário

- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Conceitos Fundamentais](#-conceitos-fundamentais)
- [Páginas e Layouts Implementados](#-páginas-e-layouts-implementados)
- [Como Executar](#-como-executar)
- [Explicação dos Layouts](#-explicação-dos-layouts)
- [Componentes Reutilizáveis](#-componentes-reutilizáveis)

## 🚀 Tecnologias Utilizadas

- **Next.js 15**: Framework React com renderização híbrida
- **React 19**: Biblioteca JavaScript para interfaces
- **TypeScript**: Superset JavaScript com tipagem estática
- **Tailwind CSS 4**: Framework CSS utilitário
- **shadcn/ui**: Componentes UI acessíveis e customizáveis
- **Lucide React**: Ícones SVG modernos

## 📁 Estrutura do Projeto

```
app-web-nextjs-notas-layout/
├── app/
│   ├── layout.tsx              # Layout raiz (global)
│   ├── page.tsx                # Página inicial (Dashboard)
│   ├── globals.css             # Estilos globais
│   │
│   ├── landing/
│   │   ├── layout.tsx          # Layout da landing page
│   │   └── page.tsx            # Página landing
│   │
│   ├── assistente/
│   │   └── page.tsx            # Página do assistente
│   │
│   └── aluno/
│       ├── layout.tsx          # Layout das páginas do aluno
│       ├── page.tsx            # Página inicial do aluno
│       └── perfil/
│           └── page.tsx        # Página de perfil do aluno
│
├── components/
│   ├── app-layout.tsx          # Layout com sidebar para desktop
│   ├── mobile-layout.tsx       # Layout mobile para aluno
│   └── ui/
│       ├── button.tsx          # Componente Button
│       └── avatar.tsx          # Componente Avatar
│
└── lib/
    └── utils.ts                # Funções utilitárias
```

## 📚 Conceitos Fundamentais

### O que é layout.tsx?

O arquivo `layout.tsx` define a estrutura visual que será compartilhada entre múltiplas páginas. Ele envolve o conteúdo das páginas filhas e persiste durante a navegação, evitando re-renderização desnecessária.

**Características:**
- Mantém o estado durante a navegação
- Não é re-renderizado ao trocar de página
- Pode ser aninhado (layouts dentro de layouts)
- Recebe `children` como prop

### O que é page.tsx?

O arquivo `page.tsx` define o conteúdo único de uma rota específica. É o que muda quando você navega entre páginas.

**Características:**
- Define o conteúdo exclusivo de uma rota
- É re-renderizado a cada navegação
- Pode receber `params` e `searchParams` como props

### Hierarquia de Layouts

```
app/layout.tsx (Raiz - sempre presente)
  └── app/landing/layout.tsx (Layout específico da landing)
      └── app/landing/page.tsx

app/layout.tsx (Raiz)
  └── app/page.tsx (usa AppLayout internamente)

app/layout.tsx (Raiz)
  └── app/aluno/layout.tsx (Layout das páginas do aluno)
      └── app/aluno/page.tsx (usa MobileLayout internamente)
      └── app/aluno/perfil/page.tsx (usa MobileLayout internamente)
```

## 🎨 Páginas e Layouts Implementados

### 1. Landing Page (`/landing`)

**Rota:** `/landing`

**Layout:** `app/landing/layout.tsx`
- Layout minimalista que apenas envolve o conteúdo
- Sem sidebars ou elementos persistentes

**Página:** `app/landing/page.tsx`
- Design de landing page completo
- Seções: Hero, Features, CTA, Footer
- Cards de recursos com ícones
- Botões de call-to-action
- Footer personalizado

**Características:**
- Gradiente azul/roxo no hero
- Grid responsivo de features
- Links para outras seções do app

### 2. Dashboard Principal (`/`)

**Rota:** `/`

**Layout:** Usa `<AppLayout>` (componente client-side)

**Página:** `app/page.tsx`
- Dashboard com estatísticas
- Cards de métricas (Usuários, Receita, Conversão, Engajamento)
- Atividades recentes
- Ações rápidas

**Características:**
- Menu lateral retrátil
- Header fixo com notificações
- Footer com links
- Botão flutuante de chat

### 3. Assistente (`/assistente`)

**Rota:** `/assistente`

**Layout:** Usa `<AppLayout>` (compartilhado com `/`)

**Página:** `app/assistente/page.tsx`
- Interface de chat
- Mensagens do assistente e usuário
- Campo de entrada com botão enviar
- Ações rápidas

**Características:**
- Mesmo layout da página principal
- Interface de chat responsiva
- Histórico de mensagens

### 4. Portal do Aluno (`/aluno`)

**Rota:** `/aluno`

**Layout:** Usa `<MobileLayout>` (otimizado para mobile)

**Página:** `app/aluno/page.tsx`
- Card de progresso
- Estatísticas rápidas
- Cursos em andamento
- Próximas atividades

**Características:**
- Menu lateral escondido por padrão
- Header fixo com avatar
- Layout mobile-first
- Cards de progresso visual

### 5. Perfil do Aluno (`/aluno/perfil`)

**Rota:** `/aluno/perfil`

**Layout:** Usa `<MobileLayout>` (compartilhado com `/aluno`)

**Página:** `app/aluno/perfil/page.tsx`
- Avatar grande centralizado
- Informações de contato
- Dados acadêmicos
- Conquistas e badges
- Atividades recentes

**Características:**
- Layout mobile otimizado
- Grid de conquistas
- Timeline de atividades

## 🏃 Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/infoweb-pos/app-web-nextjs-notas-layout.git

# Entre no diretório
cd app-web-nextjs-notas-layout

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

Acesse `http://localhost:3000` no navegador.

### Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa ESLint
```

## 🔍 Explicação dos Layouts

### Layout Raiz (`app/layout.tsx`)

```tsx
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
```

- **Propósito:** Define estrutura HTML básica
- **Escopo:** Todas as páginas do aplicativo
- **Características:** 
  - Tag `<html>` e `<body>`
  - Importa estilos globais
  - Define metadata (SEO)

### AppLayout Component (`components/app-layout.tsx`)

```tsx
export function AppLayout({ children }: AppLayoutProps) {
  // Sidebar + Header + Content + Footer + Floating Chat
}
```

- **Propósito:** Layout para páginas desktop com navegação completa
- **Usado em:** `/` e `/assistente`
- **Características:**
  - Sidebar retrátil com menu de navegação
  - Header com título dinâmico e avatar
  - Footer com links úteis
  - Botão flutuante de chat (canto inferior direito)
  - Navegação persistente

**Elementos:**
1. **Sidebar (Lateral Esquerda)**
   - Menu de navegação
   - Ícones com rótulos
   - Botão para retrair/expandir
   - Configurações no rodapé

2. **Header (Topo)**
   - Título da página atual
   - Botão de notificações
   - Avatar do usuário

3. **Main Content (Centro)**
   - Área rolável
   - Conteúdo da página atual

4. **Footer (Rodapé)**
   - Copyright
   - Links de privacidade/termos

5. **Floating Button (Flutuante)**
   - Botão de chat
   - Fixo no canto inferior direito
   - Sempre visível

### MobileLayout Component (`components/mobile-layout.tsx`)

```tsx
export function MobileLayout({ children }: MobileLayoutProps) {
  // Header fixo + Sidebar escondida + Content
}
```

- **Propósito:** Layout mobile-first para área do aluno
- **Usado em:** `/aluno` e `/aluno/perfil`
- **Características:**
  - Header fixo no topo
  - Sidebar escondida (abre com menu hamburger)
  - Avatar do aluno sempre visível
  - Overlay ao abrir menu

**Elementos:**
1. **Header Fixo**
   - Botão menu hamburger (esquerda)
   - Título "Portal do Aluno" (centro)
   - Avatar do aluno (direita) - clicável

2. **Sidebar Escondida**
   - Abre por cima do conteúdo
   - Animação de slide
   - Menu de navegação completo
   - Perfil do usuário no rodapé
   - Overlay escuro no fundo

3. **Main Content**
   - Padding top para não ficar atrás do header
   - Área rolável
   - Centralizado com largura máxima

### Landing Layout (`app/landing/layout.tsx`)

```tsx
export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {children}
    </div>
  );
}
```

- **Propósito:** Layout simples para landing page
- **Usado em:** `/landing`
- **Características:**
  - Apenas container flex
  - Sem elementos fixos
  - Todo conteúdo na própria página

## 🎯 Componentes Reutilizáveis

### Button (`components/ui/button.tsx`)

Componente de botão com variantes:
- `default`: Azul primário
- `destructive`: Vermelho para ações destrutivas
- `outline`: Borda com fundo transparente
- `secondary`: Cinza secundário
- `ghost`: Sem fundo (transparente)
- `link`: Estilo de link

Tamanhos: `default`, `sm`, `lg`, `icon`

```tsx
import { Button } from "@/components/ui/button";

<Button variant="default" size="lg">
  Clique aqui
</Button>
```

### Avatar (`components/ui/avatar.tsx`)

Componente de avatar com imagem e fallback:

```tsx
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

<Avatar>
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

## 💡 Dicas de Boas Práticas

### 1. Quando usar layout.tsx

✅ **Use layout.tsx quando:**
- Precisa de elementos que persistem entre páginas
- Quer compartilhar uma estrutura comum
- Deseja manter estado durante navegação
- Precisa de sidebars, headers ou footers fixos

❌ **Não use layout.tsx quando:**
- O conteúdo muda completamente entre páginas
- Cada página tem estrutura totalmente diferente
- Precisa resetar estado a cada navegação

### 2. Layouts Aninhados

Você pode ter múltiplos níveis de layouts:

```
app/layout.tsx (global)
  └── app/dashboard/layout.tsx (dashboard comum)
      └── app/dashboard/settings/layout.tsx (settings específico)
          └── app/dashboard/settings/profile/page.tsx
```

### 3. Client vs Server Components

- **Layouts:** Geralmente Server Components (padrão)
- **Quando usar "use client":**
  - Precisa de hooks (useState, useEffect)
  - Precisa de interatividade
  - Usa event handlers

Neste projeto:
- `app-layout.tsx` e `mobile-layout.tsx` são Client Components ("use client")
- Páginas são Server Components por padrão

### 4. Organização de Componentes

```
components/
├── ui/              # Componentes UI primitivos (button, input)
├── app-layout.tsx   # Layouts específicos do app
└── mobile-layout.tsx
```

### 5. Styling com Tailwind

Use classes utilitárias:
- `flex`, `grid`: Layouts
- `p-4`, `m-4`: Espaçamento
- `bg-blue-600`, `text-white`: Cores
- `rounded-lg`, `shadow-lg`: Bordas e sombras
- `md:`, `lg:`: Responsividade

### 6. TypeScript

Sempre defina tipos para props:

```tsx
interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  // ...
}
```

## 🎓 Exercícios Práticos

### Nível Iniciante

1. Mude as cores do tema no `globals.css`
2. Adicione um novo item no menu lateral
3. Crie uma nova página `/sobre` usando o AppLayout

### Nível Intermediário

1. Adicione um tema dark/light switcher
2. Implemente roteamento real no assistente
3. Crie uma nova página com layout customizado

### Nível Avançado

1. Adicione autenticação e proteja rotas
2. Implemente internacionalização (i18n)
3. Adicione animações com Framer Motion

## 📖 Recursos Adicionais

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)

## 🤝 Contribuindo

Este é um projeto educacional. Sinta-se livre para:
- Fazer fork do repositório
- Criar suas próprias variações
- Compartilhar melhorias
- Abrir issues com dúvidas

## 📝 Licença

Este projeto é open source e está sob a licença especificada no arquivo LICENSE.

---

**Criado para fins educacionais** - Tutorial completo sobre layouts no Next.js com as melhores práticas do mercado.
