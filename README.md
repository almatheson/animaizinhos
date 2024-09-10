Este projeto foi feito durante o curso da Alura de Imersão Dev com Google Gemini em Setembro de 2024.
Foi utilizado no projeto HTML 5, javaScript e Css.
@almatheson@gmail.com.

Abaixo read me pelo Gemini

Entendendo o Código:

O código fornecido implementa duas funções principais:

pesquisar(): Realiza uma busca por animais em um conjunto de dados, filtrando os resultados com base em um termo de pesquisa. A busca é case-insensitive e considera o nome do animal, sua descrição e tags associadas.
pesquisar_todos(): Exibe todos os resultados da pesquisa, sem aplicar nenhum filtro.
Estrutura do README.md:

Markdown
## Motor de Busca de Animais

### Descrição
Este repositório contém o código JavaScript para um simples motor de busca de animais. O usuário pode pesquisar por um animal específico ou por palavras-chave relacionadas, e os resultados são exibidos em uma lista dinâmica.

### Funcionalidades
* **Busca por nome:** Permite pesquisar por parte do nome do animal.
* **Busca por descrição:** Permite pesquisar por palavras-chave presentes na descrição do animal.
* **Busca por tags:** Permite pesquisar por tags associadas ao animal (ex: mamífero, ave, réptil).
* **Exibição de resultados:** Apresenta os resultados da pesquisa em um formato amigável, com nome, nome científico, descrição e link para mais informações.
* **Busca completa:** Exibe todos os animais cadastrados.

### Como Usar
1. **Estrutura de Dados:**
   * **dados:** Um array de objetos, onde cada objeto representa um animal e possui as seguintes propriedades:
     * `nome`: Nome comum do animal
     * `nome_cientifico`: Nome científico do animal
     * `descricao`: Descrição detalhada do animal
     * `link`: Link para mais informações sobre o animal
     * `tags`: Array de tags associadas ao animal

2. **Funções:**
   * **pesquisar():** Chama essa função quando o usuário realizar uma pesquisa. Ela recebe o termo de pesquisa como entrada e exibe os resultados correspondentes.
   * **pesquisar_todos():** Chama essa função para exibir todos os animais cadastrados.

### Exemplo de Uso
```javascript
// Supondo que você tenha um botão com o ID "btnPesquisar"
document.getElementById("btnPesquisar").addEventListener("click", pesquisar);
Use o código com cuidado.

Tecnologias Utilizadas
JavaScript: Linguagem de programação utilizada para implementar a lógica da busca.
HTML: Estrutura da página web onde os resultados são exibidos.
Contribuições
Contribuições são bem-vindas! Se você encontrar algum bug ou tiver alguma sugestão, por favor, abra um issue.

Licença
[Insira aqui a licença utilizada, por exemplo, MIT]
