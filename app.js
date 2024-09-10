  // Busca e exibe os resultados da pesquisa, filtrando os dados.
  // A função itera sobre o array 'dados' e constrói o HTML para cada resultado.
  // O resultado final é inserido na seção com o ID "resultados-pesquisa".

function pesquisar() {

    // Cria um elemento HTML para cada resultado da pesquisa
    let section = document.getElementById("resultados-pesquisa")

    let termoPesquisa = document.getElementById("txtPesquisar").value

    termoPesquisa = termoPesquisa.toLowerCase(); 
    let resultados = "";
    let nome = "";
    let descricao = "";
    let tags = "";

    if (!termoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Informe um animal desejado ou uma característica desejada.</p>"
        return
    }

    for (let dado of dados) {

        nome = dado.nome.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()

        if (nome.includes(termoPesquisa) || descricao.includes(termoPesquisa) || tags.includes(termoPesquisa)) {
            // Cria um novo elemento
            resultados += `
                <div class="item-resultado">
                    <h2><a href="#" target="_blank">${dado.nome}</a></h2><b>nome científico: ${dado.nome_cientifico}</b> 
                    <p class="descricao-meta" >
                        ${dado.descricao} 
                    </p>
                    <a href="${dado.link}" target="_blank">Continuar...</a>
                </div>
            `
        
        } // fecha o if
        
    } // fecha  o for

    if (resultados == "") {
        resultados = "<p>Nada foi encontrado</p>"
    }

    section.innerHTML = resultados


}

function pesquisar_todos() {
    // Exibe todos os resultados da pesquisa, sem filtragem.
    // A lógica é semelhante à função 'pesquisar', mas sem a filtragem.    
    let section = document.getElementById("resultados-pesquisa")
    let resultados = ""

    for (let dado of dados) {
        resultados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.nome}</a></h2><b>nome científico: ${dado.nome_cientifico}</b>
                <p class="descricao-meta" >
                    ${dado.descricao} 
                </p>
                <a href="${dado.link}" target="_blank">Continuar...</a>
            </div>
        `
    }

    section.innerHTML = resultados
}