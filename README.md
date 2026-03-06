# 🏠 HOMEIA — PLATAFORMA SAAS REVOLUCIONÁRIA

Repositório: [https://github.com/doutorizze-ux/homeia](https://github.com/doutorizze-ux/homeia)

---

## 1. Requisitos de Sistema
*   **Node.js:** v20.x ou superior
*   **Docker & Docker Compose:** Versão atual estável
*   **Gerenciador de Pacotes:** NPM

---

## 2. Instalação e Setup

### Passo 1: Instalar dependências do Monorepo
Na raiz do projeto, execute:
```bash
npm install
```

### Passo 2: Subir a Infraestrutura (Docker)
Inicie os bancos de dados e mensageria:
```bash
docker-compose up -d
```
**Serviços iniciados:**
*   **PostgreSQL:** Porta `5432` (Dados do sistema)
*   **Redis:** Porta `6379` (Cache e Sessões)
*   **RabbitMQ:** Portas `5672` e `15672` (Fila de Tarefas)

### Passo 3: Configurar Banco de Dados
No diretório `apps/auth-service`:
```bash
npx prisma migrate dev --name init
npm run seed  # Popula com as contas de teste abaixo
```

---

## 3. Contas de Teste (Usuários Padrão)
| Tipo | Email | Senha |
| :--- | :--- | :--- |
| **Administrador** | `admin@homeia.com` | `homeia123` |
| **Engenheiro** | `eng@homeia.com` | `homeia123` |
| **Arquiteto** | `arq@homeia.com` | `homeia123` |
| **Usuário Comum** | `user@homeia.com` | `homeia123` |

---

## 4. Executando o Sistema

### Iniciar Backend (Microserviços)
Abra terminais separados ou use os comandos de workspace:
```bash
npm run start:dev -w apps/auth-service
npm run start:dev -w apps/project-service
npm run start:dev -w apps/api-gateway
```

### Iniciar Frontend
```bash
npm run dev -w apps/web
```
Acesse em: [http://localhost:3000](http://localhost:3000)

---

## 5. Teste do Fluxo Principal (Workflow)

1.  **Login:** Acesse `/login` com uma das contas de teste.
2.  **Geração:** Vá em `/generate`.
3.  **Parâmetros:** Preencha 360m², 3 Quartos, 2 Banheiros.
4.  **IA:** Clique em "Gerar Projeto IA".
5.  **Visualização:** O **BIM Viewer** renderizará o modelo 3D básico.
6.  **Orçamento:** O custo estimado aparecerá no dashboard lateral (Etapa 7).

### Teste de API (Endpoint Direto)
**POST** `http://localhost:3003/projects/generate-house`
```json
{
  "lotWidth": 10,
  "lotDepth": 20,
  "bedrooms": 3,
  "bathrooms": 2
}
```
**Resposta Esperada:** Um JSON contendo o layout arquitetônico (paredes e regiões) gerado via Gemini.

---

## 6. Logs e Monitoramento
*   **Logs Docker:** `docker-compose logs -f`
*   **Logs Microserviços:** O output aparecerá direto no terminal onde o serviço foi iniciado.

---

## 7. Deploy em Produção (Coolify)
1.  Conecte seu GitHub/GitLab ao painel do **Coolify**.
2.  Crie um novo **Recurso Docker Compose**.
3.  Utilize o `docker-compose.yml` da raiz, mas aponte os `build paths` para cada microserviço.
4.  Configure as Env Vars (`DATABASE_URL`, `GEMINI_API_KEY`) no painel do Coolify.
5.  O Coolify gerenciará automaticamente o certificado SSL e subdomínios.

---

© 2026 Homeia — Engenharia Inteligente
