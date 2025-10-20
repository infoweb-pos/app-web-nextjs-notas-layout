# Estrutura do Projeto - Guia Visual

Este documento explica a estrutura de diretórios e arquivos do projeto tutorial.

## 🗂️ Árvore de Arquivos

```
app-web-nextjs-notas-layout/
│
├── 📄 README.md                 # Guia rápido (PT/EN)
├── 📄 TUTORIAL.md               # Tutorial completo em português
├── 📄 STRUCTURE.md              # Este arquivo - guia visual
│
├── 📦 package.json              # Dependências do projeto
├── 📦 package-lock.json         # Lock de dependências
│
├── ⚙️ next.config.ts            # Configuração do Next.js
├── ⚙️ tsconfig.json             # Configuração do TypeScript
├── ⚙️ eslint.config.mjs         # Configuração do ESLint
├── ⚙️ postcss.config.mjs        # Configuração do PostCSS
├── 📝 .gitignore                # Arquivos ignorados pelo Git
│
├── 📂 app/                      # Diretório principal de rotas (App Router)
│   │
│   ├── 📄 layout.tsx            # ⭐ Layout raiz (global)
│   ├── 📄 page.tsx              # ⭐ Página inicial (/)
│   ├── 🎨 globals.css           # Estilos globais + Tailwind
│   ├── 🖼️ favicon.ico           # Ícone do site
│   │
│   ├── 📂 landing/              # Rota: /landing
│   │   ├── 📄 layout.tsx        # Layout da landing page
│   │   └── 📄 page.tsx          # Conteúdo da landing
│   │
│   ├── 📂 assistente/           # Rota: /assistente
│   │   └── 📄 page.tsx          # Página do assistente
│   │
│   └── 📂 aluno/                # Rota: /aluno
│       ├── 📄 layout.tsx        # Layout das páginas do aluno
│       ├── 📄 page.tsx          # Portal do aluno (/aluno)
│       │
│       └── 📂 perfil/           # Rota: /aluno/perfil
│           └── 📄 page.tsx      # Página de perfil
│
├── 📂 components/               # Componentes React reutilizáveis
│   │
│   ├── 📄 app-layout.tsx        # ⭐ Layout desktop (sidebar, header, footer)
│   ├── 📄 mobile-layout.tsx     # ⭐ Layout mobile (header fixo, sidebar escondida)
│   │
│   └── 📂 ui/                   # Componentes UI básicos (shadcn/ui)
│       ├── 📄 button.tsx        # Componente Button
│       └── 📄 avatar.tsx        # Componente Avatar
│
├── 📂 lib/                      # Bibliotecas e utilitários
│   └── 📄 utils.ts              # Função cn() para merge de classes
│
└── 📂 public/                   # Arquivos públicos estáticos
    ├── 🖼️ next.svg              # Logo Next.js
    ├── 🖼️ vercel.svg            # Logo Vercel
    ├── 🖼️ file.svg              # Ícone de arquivo
    ├── 🖼️ globe.svg             # Ícone de globo
    └── 🖼️ window.svg            # Ícone de janela
```

## 📋 Explicação dos Arquivos Principais

### Arquivos de Configuração

| Arquivo | Descrição |
|---------|-----------|
| `package.json` | Define dependências (Next.js, React, Tailwind, etc.) e scripts |
| `tsconfig.json` | Configura o TypeScript (aliases, paths, etc.) |
| `next.config.ts` | Configurações do Next.js |
| `eslint.config.mjs` | Regras de linting para código limpo |
| `postcss.config.mjs` | Processamento CSS (Tailwind) |

### App Directory (Rotas)

| Arquivo/Pasta | Rota | Descrição |
|---------------|------|-----------|
| `app/layout.tsx` | Todas | Layout global (HTML, body) |
| `app/page.tsx` | `/` | Dashboard principal |
| `app/landing/` | `/landing` | Landing page com layout próprio |
| `app/assistente/` | `/assistente` | Assistente virtual |
| `app/aluno/` | `/aluno` | Portal do aluno |
| `app/aluno/perfil/` | `/aluno/perfil` | Perfil do aluno |

### Componentes

| Componente | Tipo | Usado em | Descrição |
|------------|------|----------|-----------|
| `app-layout.tsx` | Client | `/`, `/assistente` | Layout desktop completo |
| `mobile-layout.tsx` | Client | `/aluno/*` | Layout mobile otimizado |
| `ui/button.tsx` | UI | Todas | Botão com variantes |
| `ui/avatar.tsx` | UI | Layouts | Avatar de usuário |

## 🎯 Fluxo de Layouts

### 1. Landing Page Flow

```
app/layout.tsx (Root)
  └── app/landing/layout.tsx
      └── app/landing/page.tsx
```

**Características:**
- Layout minimalista
- Sem sidebars ou elementos fixos
- Todo conteúdo na página

### 2. Dashboard Flow (Desktop)

```
app/layout.tsx (Root)
  └── app/page.tsx
      └── <AppLayout> (componente)
          ├── Sidebar (retrátil)
          ├── Header (fixo)
          ├── Main (rolável)
          ├── Footer
          └── Floating Chat Button
```

**Características:**
- Sidebar com navegação
- Header com notificações
- Footer com links
- Botão flutuante

### 3. Assistente Flow (Desktop)

```
app/layout.tsx (Root)
  └── app/assistente/page.tsx
      └── <AppLayout> (componente compartilhado)
          └── Interface de chat
```

**Características:**
- Mesmo layout do dashboard
- Conteúdo específico de chat

### 4. Aluno Flow (Mobile)

```
app/layout.tsx (Root)
  └── app/aluno/layout.tsx
      └── app/aluno/page.tsx
          └── <MobileLayout> (componente)
              ├── Header fixo (com avatar)
              ├── Sidebar escondida (hamburger)
              └── Main (rolável)
```

**Características:**
- Mobile-first
- Menu lateral escondido
- Header sempre visível

### 5. Perfil Flow (Mobile)

```
app/layout.tsx (Root)
  └── app/aluno/layout.tsx
      └── app/aluno/perfil/page.tsx
          └── <MobileLayout> (componente compartilhado)
              └── Conteúdo do perfil
```

**Características:**
- Compartilha layout com /aluno
- Conteúdo específico de perfil

## 🔄 Hierarquia de Componentes

```
RootLayout (app/layout.tsx)
├── html
│   └── body
│       ├── LandingPage
│       │   └── LandingLayout
│       │       └── Conteúdo
│       │
│       ├── Dashboard / Assistente
│       │   └── AppLayout (Client Component)
│       │       ├── Sidebar
│       │       ├── Header
│       │       ├── Main (conteúdo da página)
│       │       ├── Footer
│       │       └── FloatingButton
│       │
│       └── Aluno / Perfil
│           └── AlunoLayout
│               └── MobileLayout (Client Component)
│                   ├── Header Fixo
│                   ├── Sidebar Escondida
│                   └── Main (conteúdo)
```

## 📱 Responsividade

### Breakpoints Tailwind

```css
/* Mobile first */
base:  min-width: 0px      /* Padrão */
sm:    min-width: 640px    /* Tablets pequenos */
md:    min-width: 768px    /* Tablets */
lg:    min-width: 1024px   /* Desktops */
xl:    min-width: 1280px   /* Desktops grandes */
2xl:   min-width: 1536px   /* Telas muito grandes */
```

### Estratégia de Layout

| Página | < 768px | ≥ 768px |
|--------|---------|---------|
| Landing | Stack vertical | Grid/Flex horizontal |
| Dashboard | ❌ Não otimizado | ✅ Sidebar + conteúdo |
| Assistente | ❌ Não otimizado | ✅ Sidebar + chat |
| Aluno | ✅ Mobile-first | ✅ Funciona em ambos |
| Perfil | ✅ Mobile-first | ✅ Funciona em ambos |

## 🎨 Sistema de Cores (Tailwind)

```css
/* Definidos em app/globals.css */
--primary: azul (#3b82f6)
--secondary: cinza
--background: branco / preto escuro (dark mode)
--foreground: preto / branco (dark mode)
```

## 📦 Dependências Principais

```json
{
  "dependencies": {
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "next": "15.5.6",
    "lucide-react": "ícones",
    "class-variance-authority": "variantes",
    "clsx": "classes condicionais",
    "tailwind-merge": "merge classes"
  },
  "devDependencies": {
    "typescript": "^5",
    "tailwindcss": "^4",
    "eslint": "^9"
  }
}
```

## 🚀 Scripts NPM

```bash
npm run dev      # Inicia servidor desenvolvimento (port 3000)
npm run build    # Cria build de produção (.next/)
npm run start    # Serve build de produção
npm run lint     # Executa ESLint
```

## 📚 Recursos Úteis

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **TypeScript Handbook**: https://www.typescriptlang.org/docs
- **shadcn/ui**: https://ui.shadcn.com
- **Lucide Icons**: https://lucide.dev

## 💡 Próximos Passos Sugeridos

1. ✅ Adicionar autenticação (NextAuth.js)
2. ✅ Conectar a uma API ou banco de dados
3. ✅ Implementar tema dark/light
4. ✅ Adicionar mais páginas (configurações, ajuda)
5. ✅ Melhorar acessibilidade (a11y)
6. ✅ Adicionar testes (Jest, React Testing Library)
7. ✅ Implementar i18n (internacionalização)
8. ✅ Otimizar imagens com next/image
9. ✅ Adicionar animações (Framer Motion)
10. ✅ Deploy em Vercel ou outro host

---

**Dica**: Use este guia junto com o TUTORIAL.md para entender completamente a estrutura do projeto!
