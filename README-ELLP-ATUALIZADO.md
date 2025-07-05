# 📅 Módulo de Gerenciamento de Eventos e Voluntários – ELLP

## 📌 Visão Geral

Este repositório contém o módulo complementar do projeto de CCI para o projeto de extensão **ELLP**, com foco na **visualização e gerenciamento interno de eventos e voluntários**.

O sistema não permite criação ou cadastro de novos dados — apenas consulta, organização e paginação das informações já existentes, integrando-se ao site principal.

🔗 Protótipo: [Framer](https://framer.com/projects/Agentic-copy--2cVt3sbPaoouJ0pz4GDh-hDNfe?node=augiA20Il)  
🔗 GitHub principal: [Certificadora Identitária](https://github.com/LuizaNakahira/CertificadoraIdentitaria)  
🔗 Trello de Planejamento: [Trello - CCI](https://trello.com/b/pRYz3RRj/cci)

---

## 🛠️ Para Compilar e Executar o Sistema

### ⚙️ Ferramentas Utilizadas

- **Editor**: [Visual Studio Code](https://code.visualstudio.com/) (v1.90+)
- **Front-End**: HTML5, CSS3, JavaScript ES6+  
- **Back-End**: [Node.js](https://nodejs.org/) v20.x (LTS)  
- **Banco de Dados**: [MongoDB Atlas](https://www.mongodb.com/atlas/database) (leitura apenas)
- **Gerenciador de Pacotes**: [npm](https://www.npmjs.com/) v10+

---

### 📚 Bibliotecas Complementares

- `mongoose` – integração com MongoDB
- `express` – servidor backend simples (se utilizado)
- `dotenv` – gerenciamento de variáveis de ambiente
- `nodemon` – atualização automática do servidor durante o dev
- `uuid` – geração de IDs únicos

---

### 🧱 Como Executar Localmente

#### 1. Clone o Projeto

```bash
git clone https://github.com/LuizaNakahira/CertificadoraIdentitaria.git
cd CertificadoraIdentitaria
```

#### 2. Instale as Dependências

```bash
npm install
```

#### 3. Configure as Variáveis de Ambiente

Crie o arquivo `.env` com os dados de conexão:

```env
MONGODB_URI=mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/ellp_db
PORT=3000
```

#### 4. Execute o Servidor

```bash
npm start
```

---

## 🧪 Para Testar o Sistema

### 👥 Equipe

**Equipe Projeto CCI**  
Participantes: KAUAN FELIPE A DE LIMA, LUIZA XAVIER NAKAHIRA, MARCIO GUSTAVO DA SILVA, JOÃO VICTOR G DA SILVA, WILSON DE OLIVEIRA SANTOS  


---

### 🎯 Objetivo

Facilitar a navegação e organização interna dos dados de eventos e voluntários do projeto **ELLP**, otimizando a interface para as equipes administrativas.

---

### ✅ Funcionalidades Desenvolvidas

- Visualização paginada de eventos
- Consulta dos voluntários inscritos
- Organização por filtros e busca
- Integração com o sistema principal via botões no site existente

---

### 🔁 Roteiro para Testes

1. Acesse o módulo via botões inseridos no site principal.
2. Teste a visualização dos **eventos** com paginação.
3. Acesse o módulo de **voluntários** e utilize filtros.
4. Verifique se os dados estão sendo carregados corretamente via MongoDB Atlas.
5. Teste responsividade e desempenho da navegação.

---


## 🔀 GitHub – Organização e Padronização

### 🌿 Estrutura de Branches

- `main`: Versão final e estável do sistema.
- `dev-front`: Desenvolvimento do front-end.
- `dev-back`: Desenvolvimento do back-end.


### 📏 Regras de Uso

- Crie branches a partir de `dev-front` ou `dev-back`
- Após finalizar:
  - Teste localmente
  - Crie um Pull Request
  - Após o merge, delete a branch

---



## 📄 Licença

MIT © 2025 – Projeto ELLP