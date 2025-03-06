# ReposList

Este projeto consiste em uma aplicação React que permite buscar os repositórios públicos de um usuário no GitHub. A aplicação utiliza a API do GitHub para buscar os repositórios e exibi-los de forma organizada. Em caso de erro, como um usuário inexistente, a aplicação exibe uma mensagem de erro informando o problema.

## Funcionalidades

- Pesquisa de repositórios de um usuário no GitHub.
- Exibição de nome e linguagem dos repositórios.
- Link direto para os repositórios no GitHub.
- Exibição de mensagem de erro caso o usuário não exista.

## Como Usar

1. Clone este repositório para sua máquina local:

    ```bash
    git clone https://github.com/SEU_USUARIO/reposlist.git
    ```

2. Navegue até a pasta do projeto:

    ```bash
    cd reposlist
    ```

3. Instale as dependências do projeto:

    ```bash
    npm install
    ```

4. Inicie a aplicação:

    ```bash
    npm start
    ```

5. Abra a aplicação no navegador (`http://localhost:3000`) e pesquise um usuário GitHub para ver os repositórios públicos.

## Exemplo de Uso

Quando o nome de um usuário válido é digitado, os repositórios serão exibidos com seu nome, linguagem de programação e um link para acessar diretamente o repositório no GitHub. Caso o nome de usuário seja inválido ou o usuário não exista, uma mensagem de erro será exibida.

## Tecnologias Utilizadas

- React
- CSS Modules (para estilização)
- API GitHub (para busca dos repositórios)

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.