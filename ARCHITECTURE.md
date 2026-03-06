# Documentação da Arquitetura - Homeia

Este documento detalha as decisões técnicas e a estrutura da plataforma Homeia, conforme solicitado na **ETAPA 1**.

## 1. Visão Geral
A Homeia é uma plataforma SaaS escalável projetada para modernizar a engenharia civil e arquitetura. O sistema utiliza uma arquitetura de **microserviços** para garantir que módulos como o processamento de modelos 3D e geração de plantas não sobrecarreguem o sistema principal.

## 2. Tecnologias (The Stack)
- **Frontend:** Next.js (App Router) + Tailwind CSS + Lucide Icons.
- **Backend:** NestJS (Node.js framework).
- **Comunicação:** REST (externo), RabbitMQ (assíncrono entre serviços).
- **Banco de Dados:** PostgreSQL (Relacional) + Redis (Cache/Sessão).
- **Inteligência Artificial:** Google Gemini (Planejamento de layout, Arquiteta IA, Urbanismo).
- **DevOps:** Docker, Docker Compose, Coolify.

## 3. Microserviços
A separação lógica dos serviços será:
1. **API Gateway:** Única porta de entrada. Faz o roteamento e rate-limiting.
2. **Auth Service:** Gerenciamento de usuários (Engenheiro, Arquiteto, etc.) e RBAC (Role Based Access Control).
3. **Project Engine:** Lógica de geração de plantas e integração com Gemini.
4. **BIM & Asset Service:** Gestão de arquivos DWG/PDF e visualização 3D.
5. **Billing Service:** Integração com Stripe e Mercado Pago.

## 4. Fluxo de Dados (Exemplo: Geração de Planta)
1. O usuário solicita uma planta no **Frontend**.
2. O **API Gateway** recebe e valida o token.
3. A requisição é enviada para o **Project Engine**.
4. O Engine consulta o **Gemini** para otimizar o layout.
5. Um job é enviado para o **RabbitMQ** para gerar os arquivos exportáveis.
6. O **BIM Service** processa o arquivo e salva no storage.
7. O usuário recebe a notificação de "Projeto Pronto".

## 5. Estrutura de Pastas
```text
/apps/           # Aplicativos e Microserviços
/packages/       # Código compartilhado entre serviços
/docker/         # Arquivos de imagem Docker específicos
/infra/          # Scripts de configuração de infra (Terraform/Ansible/Coolify)
```

## 6. Deploy (Coolify)
Cada microserviço terá seu próprio `Dockerfile` e será configurado como um recurso dentro do Coolify, apontando para o repositório git principal mas filtrando pelo diretório do serviço.
