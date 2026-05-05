# User e-Courses API

## Visão Geral
Este projeto é uma API para e-Cursos, permitindo a gestão de cursos online com um sistema de permissões de administrador.

## Recursos
- Gestão de usuários
- Criação e gerenciamento de cursos
- Sistema de permissões para administradores

## Stack Tecnológica
- Node.js
- Express
- MongoDB
- JWT para autenticação

## Passos de Instalação
1. Clone este repositório: `git clone https://github.com/lucas429a/User-e-Courses-Permissao-de-Administrador.git`
2. Navegue até o diretório do projeto: `cd User-e-Courses-Permissao-de-Administrador`
3. Instale as dependências: `npm install`

## Endpoints da API
- `GET /api/cursos`: Retorna a lista de cursos.
- `POST /api/cursos`: Cria um novo curso.
- `GET /api/usuarios`: Retorna a lista de usuários.

## Detalhes da Autenticação
A autenticação é feita através de JWT. O token deve ser enviado no cabeçalho de autorização.



## Testes
Utilize `npm test` para rodar os testes unitários e de integração.

## Instrucões de Build/Deploy
Use `npm start` para iniciar a aplicação em modo de produção.

## Diretrizes de Contribuição
- Faça um fork deste repositório.
- Crie um branch com a sua feature: `git checkout -b feature/MinhaFeature`
- Commit suas mudanças: `git commit -m 'Adicionando MinhaFeature'`
- Push para o branch: `git push origin feature/MinhaFeature`
- Abra um Pull Request.

## Licença
Este projeto está licenciado sob a Licença MIT.
