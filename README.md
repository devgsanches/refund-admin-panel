# 💰 Refund Admin Panel

Um painel administrativo moderno e intuitivo para gerenciamento de solicitações de reembolso, desenvolvido com React, TypeScript e TailwindCSS.

## 📱 Funcionalidades

### Para Funcionários

- ✅ **Criar solicitações de reembolso** com categorias específicas
- 📎 **Upload de comprovantes** (imagens, PDFs, documentos)
- ✨ **Interface intuitiva** para preenchimento de dados
- 📋 **Validação de formulários** em tempo real
- ✅ **Confirmação de envio** com feedback visual

### Para Gerentes

- 📊 **Dashboard centralizado** com todas as solicitações
- 🔍 **Sistema de busca** por nome do solicitante
- 📄 **Paginação** para navegar entre registros
- 👁️ **Visualização detalhada** de cada solicitação
- 📎 **Acesso aos comprovantes** enviados

### Funcionalidades Gerais

- 🔐 **Sistema de autenticação** baseado em roles
- 🎨 **Interface responsiva** e moderna
- 🚀 **Performance otimizada** com React 19
- 🔄 **Navegação fluida** com React Router

## 🏗️ Categorias de Reembolso

- 🍽️ **Alimentação** - Despesas com refeições e alimentação
- 🚗 **Transporte** - Passagens, combustível, estacionamento
- 🏨 **Hospedagem** - Hotéis, pousadas, acomodações
- 🛠️ **Serviços** - Serviços profissionais e consultorias
- 📦 **Outros** - Demais despesas não categorizadas

## 🛠️ Tecnologias

### Frontend

- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool moderna e rápida
- **TailwindCSS** - Framework CSS utilitário
- **React Router** - Roteamento para SPAs

### Formulários & Validação

- **React Hook Form** - Gerenciamento de formulários performático
- **Zod** - Validação de esquemas TypeScript-first
- **@hookform/resolvers** - Integração entre Hook Form e Zod

### Requisições & Estado

- **Axios** - Cliente HTTP para requisições à API
- **React Context** - Gerenciamento de estado global

### UI & Ícones

- **Lucide React** - Ícones SVG modernos e customizáveis

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/refund-admin-panel.git
cd refund-admin-panel
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

```bash
cp .env.example .env
```

Edite o arquivo `.env` com as configurações da sua API.

4. **Execute em modo de desenvolvimento**

```bash
npm run dev
```

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint
```

## 🏗️ Estrutura do Projeto

```
src/
├── 📁 assets/          # Imagens, ícones e recursos estáticos
├── 📁 components/      # Componentes reutilizáveis
│   ├── Button/
│   ├── Container/
│   ├── Form/
│   ├── Input/
│   ├── Loading/
│   ├── Pagination/
│   ├── Refund/
│   ├── Search/
│   └── Select/
├── 📁 contexts/        # Context API do React
├── 📁 dtos/           # Tipos TypeScript
├── 📁 hooks/          # Custom hooks
├── 📁 layouts/        # Layouts da aplicação
├── 📁 pages/          # Páginas da aplicação
│   ├── auth/          # Páginas de autenticação
│   ├── notFound/      # Página 404
│   └── refunds/       # Páginas de reembolso
├── 📁 providers/      # Providers do Context
├── 📁 routes/         # Configuração de rotas
├── 📁 services/       # Serviços (API, etc.)
├── 📁 utils/          # Funções utilitárias
├── App.tsx
└── main.tsx
```

## 🔐 Sistema de Autenticação

O sistema possui dois tipos de usuários:

### 👤 Funcionário (Employee)

- Acesso às rotas de criação de reembolso
- Pode criar e acompanhar suas solicitações

### 👨‍💼 Gerente (Manager)

- Acesso ao dashboard administrativo
- Visualiza todas as solicitações da empresa
- Pode analisar detalhes e comprovantes

## 🎨 Design System

O projeto utiliza uma paleta de cores consistente:

- **Verde Principal**: `#1F8459` - Botões, links e elementos ativos
- **Verde Secundário**: `#E4ECE9` - Backgrounds e áreas secundárias
- **Cinza Escuro**: `#1F2523` - Textos principais
- **Cinza Médio**: `#4D5C57` - Textos secundários e labels
- **Cinza Claro**: `#CDD5D2` - Bordas e separadores

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona perfeitamente em:

- 📱 **Mobile** (320px+)
- 📱 **Tablet** (768px+)
- 💻 **Desktop** (1024px+)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 👨‍💻 Autor

Desenvolvido com ❤️ por devgsanches