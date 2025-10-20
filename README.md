# Tutorial Next.js - Layouts e Páginas

> 🇧🇷 **Português** | 🇬🇧 [English](#english-version)

## Sobre o Projeto

Este é um tutorial completo para iniciantes sobre como criar e organizar **layouts** e **páginas** no Next.js 15 usando TypeScript, Tailwind CSS e shadcn/ui.

### 📚 O que você vai aprender

- Como usar `layout.tsx` e `page.tsx`
- Criar layouts compartilhados e aninhados
- Implementar layouts responsivos (desktop e mobile)
- Usar componentes shadcn/ui
- Organizar rotas no Next.js App Router
- Boas práticas com TypeScript e Tailwind CSS

### 🎯 Páginas Implementadas

1. **Landing Page** (`/landing`) - Layout de marketing com hero, features e CTA
2. **Dashboard** (`/`) - Layout com sidebar, header, footer e chat flutuante
3. **Assistente** (`/assistente`) - Interface de chat compartilhando layout do dashboard
4. **Portal do Aluno** (`/aluno`) - Layout mobile com menu lateral escondido
5. **Perfil do Aluno** (`/aluno/perfil`) - Página de perfil com header fixo e avatar

### 🚀 Tecnologias

- **Next.js 15** - Framework React
- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones

## 📖 Documentação Completa

👉 **[Leia o tutorial completo aqui: TUTORIAL.md](./TUTORIAL.md)**

O tutorial inclui:
- Explicação detalhada de cada conceito
- Estrutura completa do projeto
- Exemplos de código comentados
- Exercícios práticos
- Boas práticas e dicas

## ⚡ Início Rápido

```bash
# Clone o repositório
git clone https://github.com/infoweb-pos/app-web-nextjs-notas-layout.git

# Entre no diretório
cd app-web-nextjs-notas-layout

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📁 Estrutura do Projeto

```
app/
├── layout.tsx              # Layout raiz (global)
├── page.tsx                # Dashboard principal
├── landing/
│   ├── layout.tsx          # Layout da landing page
│   └── page.tsx
├── assistente/
│   └── page.tsx            # Página do assistente
└── aluno/
    ├── layout.tsx          # Layout do aluno
    ├── page.tsx            # Portal do aluno
    └── perfil/
        └── page.tsx        # Perfil do aluno

components/
├── app-layout.tsx          # Layout desktop com sidebar
├── mobile-layout.tsx       # Layout mobile otimizado
└── ui/                     # Componentes UI (button, avatar)
```

## 🎨 Layouts Implementados

### Layout Desktop (AppLayout)
- ✅ Sidebar retrátil com navegação
- ✅ Header com título e notificações
- ✅ Footer com links
- ✅ Botão de chat flutuante

### Layout Mobile (MobileLayout)
- ✅ Header fixo no topo
- ✅ Menu lateral escondido (hamburger)
- ✅ Avatar do aluno sempre visível
- ✅ Otimizado para dispositivos móveis

### Layout Landing
- ✅ Hero section com gradiente
- ✅ Features grid
- ✅ Call-to-action
- ✅ Footer customizado

## 📚 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Linter
```

## 🤝 Contribuindo

Este é um projeto educacional. Contribuições são bem-vindas!

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença especificada no arquivo [LICENSE](./LICENSE).

---

## English Version

# Next.js Tutorial - Layouts and Pages

A comprehensive beginner tutorial on creating and organizing **layouts** and **pages** in Next.js 15 using TypeScript, Tailwind CSS, and shadcn/ui.

### 📖 Full Documentation

👉 **[Read the complete tutorial: TUTORIAL.md](./TUTORIAL.md)** (in Portuguese)

### 🎯 Implemented Pages

1. **Landing Page** (`/landing`) - Marketing layout with hero, features, and CTA
2. **Dashboard** (`/`) - Layout with sidebar, header, footer, and floating chat
3. **Assistant** (`/assistente`) - Chat interface sharing dashboard layout
4. **Student Portal** (`/aluno`) - Mobile layout with hidden sidebar
5. **Student Profile** (`/aluno/perfil`) - Profile page with fixed header and avatar

### ⚡ Quick Start

```bash
git clone https://github.com/infoweb-pos/app-web-nextjs-notas-layout.git
cd app-web-nextjs-notas-layout
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 🚀 Technologies

- Next.js 15 - React Framework
- React 19 - UI Library
- TypeScript - Static Typing
- Tailwind CSS 4 - CSS Framework
- shadcn/ui - UI Components
- Lucide React - Icons

---

**Created for educational purposes** - Learn Next.js layouts with industry best practices.
