
# Meat App - Projeto Personalizado

Este projeto foi baseado no projeto **Meat App Starter**, utilizado no curso de Angular da [**Cod3r Cursos**](https://github.com/cod3rcursos/meat-app-starter) , e expandido para incluir novos recursos e configurações.

A aplicação simula um sistema de pedidos para restaurantes, integrando um backend para fornecer dados por meio de APIs REST.

---

## 🎯 Finalidade do Projeto

O objetivo principal deste projeto é:
- **Explorar o framework Angular:** criando componentes, serviços, rotas e integrações.
- **Simular um backend com JSON Server:** utilizando APIs REST para manipular dados.
- **Aprender sobre Docker:** criando contêineres para facilitar o deploy e a execução do projeto.

## 📂 Estrutura do Projeto

- **Frontend:** Angular para construção da interface e comunicação com APIs.
- **Backend Fake:** JSON Server para simular operações CRUD.
- **Banco de Dados:** Configuração no arquivo db.json.
- **Docker:** Configuração de contêiner para execução simplificada.

🚀 Instruções para Executar com Docker

	1.	Clone este repositório:

``git clone https://github.com/ventu-ra/meat-app && cd meat-app
``

	2.	🐳 Construa a imagem Docker:

``docker build -t meat-app .
``

	3.	Execute o contêiner:

``
docker run -p 4200:4200 -p 3000:3000 meat-app
``

- **Frontend:** http://localhost:3000

## 📜 Créditos

Este projeto foi inspirado no curso de Angular da Cod3r Cursos. O repositório base utilizado foi:

[Meat App Starter - GitHub](https://github.com/cod3rcursos/meat-app-starter)

Sinta-se à vontade para colaborar ou enviar sugestões! Este projeto é uma iniciativa de aprendizado contínuo.

