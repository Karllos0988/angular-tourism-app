# 🏖️ Passeio App - Guia e Gestão de Turismo

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)

O **Passeio App** é uma plataforma web responsiva voltada para o turismo, permitindo que usuários cadastrem, organizem e busquem por **lugares turísticos** e suas respectivas **categorias**.

Este projeto foi desenvolvido como um portfólio Fullstack (simulado) para consolidar conhecimentos avançados em **Angular (NgModules)**, integração com APIs, autenticação OAuth2 e orquestração de containers com **Docker**.

## 🎯 Objetivo e Arquitetura

Embora o ecossistema Angular moderno tenda aos *Standalone Components*, este projeto foi **intencionalmente arquitetado utilizando NgModules**.

O objetivo foi demonstrar domínio sobre a estrutura clássica e robusta do framework, habilidade essencial para atuar em grandes projetos corporativos e manutenção de sistemas legados, compreendendo profundamente a injeção de dependências, lazy loading e modularização.

## 🚀 Funcionalidades Principais

-   **Gestão de Lugares:** Cadastro completo de pontos turísticos com descrições e detalhes.
-   **Categorização:** Organização dos passeios por categorias (ex: Praias, Museus, Parques).
-   **Busca Inteligente:** Filtros para encontrar lugares específicos rapidamente.
-   **Autenticação Google:** Login seguro e rápido via OAuth 2.0.
-   **Interface Responsiva:** Layout fluido adaptável a celulares e desktops (Angular Material + FlexLayout).
-   **Guards de Rota:** Proteção de áreas administrativas apenas para usuários logados.

## 🛠️ Tecnologias Utilizadas

-   **Frontend:** Angular (v20), Angular Material, RxJS.
-   **Estilização:** SCSS, Taildwind.
-   **Backend (Simulado):** JSON Server (API RESTful).
-   **Infraestrutura:** Docker, Docker Compose, Nginx (Alpine Linux).
-   **Auth:** angular-oauth2-oidc.

## 🐳 Como Rodar com Docker Compose (Recomendado)

A forma mais simples de testar a aplicação é utilizando o Docker, que sobe o ambiente completo (Frontend + API) com um único comando, sem necessidade de instalar Node.js ou dependências locais.

### Pré-requisitos
-   Ter o [Docker](https://www.docker.com/) e o [Docker Compose](https://docs.docker.com/compose/install/) instalados.

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU-USUARIO/NOME-DO-REPO.git](https://github.com/SEU-USUARIO/NOME-DO-REPO.git)
    cd NOME-DO-REPO
    ```

2.  **Suba os containers:**
    Execute o comando abaixo na raiz do projeto (onde está o arquivo `docker-compose.yml`):
    ```bash
    docker compose up --build
    ```
    *Aguarde o build terminar. Pode levar alguns instantes na primeira vez.*

3.  **Acesse a Aplicação:**
    -   🖥️ **Frontend (Site):** Abra [http://localhost](http://localhost) no seu navegador.
    -   ⚙️ **Backend (API):** Disponível em [http://localhost:4000](http://localhost:4000).


4.  **Para parar a aplicação:**
    Pressione `Ctrl + C` no terminal ou rode:
    ```bash
    docker compose down
    ```

## 💻 Como Rodar Localmente (Desenvolvimento)

Caso queira rodar sem Docker para editar o código:

1.  **Instale as dependências:**
    ```bash
    npm install
    ```
2.  **Inicie a API:**
    ```bash
    npm run api
    ```
3.  **Inicie o Angular:**
    ```bash
    ng serve
    ```
4.  **Acesse:** `http://localhost:4200`

