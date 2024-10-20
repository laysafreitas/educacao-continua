# Educação Continuada

## Descrição
**Educação Continuada** é uma plataforma educacional focada em saúde sexual e reprodutiva. Desenvolvida com **Node.js** e **Express.js** no backend, e **React** com **TypeScript** no frontend, esta aplicação oferece uma experiência interativa e informativa para os usuários.

## Stack de Desenvolvimento
- **Front-end:** React, TypeScript
- **Back-end:** Node.js, Express.js
- **Banco de Dados:** MongoDB
- **Hospedagem e Implantação:** GitHub Pages

## Funcionalidades
- **Recomendações Personalizadas:** Fornece artigos, quizzes e vídeos com base nas interações e preferências dos usuários.
- **Conteúdo Educativo:** 
  - Módulos abrangentes sobre saúde sexual, relacionamentos, DSTs e gravidez.
  - Variedade de formatos, incluindo artigos, vídeos e podcasts.
- **Interatividade e Gamificação:** Oferece quizzes, simulações e um sistema de recompensas para engajar os usuários.
- **Suporte e Comunidade:** Espaços para fóruns, grupos de apoio e eventos educacionais.

## Estrutura do Banco de Dados
### Usuário
- **id:** INT, PK, AUTO INCREMENT
- **name:** VARCHAR(100)
- **idade:** INT
- **email:** VARCHAR(100)

### Tópico
- **id:** INT, PK, AUTO INCREMENT
- **titulo:** VARCHAR(100)
- **descricao:** TEXT

### Quiz
- **id:** INT, PK, AUTO INCREMENT
- **topico_id:** INT, FK -> topico.id
- **texto:** TEXT
- **tipo:** ENUM('multipla', 'verdadeiro_falso')

### Quiz-Resposta
- **id:** INT, PK, AUTO INCREMENT
- **pergunta_id:** INT, FK -> pergunta.id
- **texto:** TEXT
- **correta:** BOOLEAN

## Como Executar o Projeto

### Pré-requisitos
Antes de executar o projeto, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/)
- [Mysql]

### Passos para Executar
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/diego-humberto/educacao-continua
   cd educacao-continua
