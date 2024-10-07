function sorteaNumero() {
    // Capturar os valores dos inputs
    const quantidade = parseInt(document.querySelector('.box__input--qtdnumero').value);
    const numeroInicial = parseInt(document.querySelector('.box__input--donumero').value);
    const numeroFinal = parseInt(document.querySelector('.box__input--ate_o_numero').value);
    
    // Verificar se os valores são válidos
    if (isNaN(quantidade) || isNaN(numeroInicial) || isNaN(numeroFinal)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    if (quantidade <= 0 || numeroInicial >= numeroFinal) {
        alert("A quantidade deve ser positiva e o número inicial deve ser menor que o final.");
        return;
    }

    if (quantidade > (numeroFinal - numeroInicial + 1)) {
        alert("A quantidade de números solicitados é maior que o intervalo disponível.");
        return;
    }

    // Array para armazenar os números sorteados
    let numerosSorteados = [];

    // Gerar números únicos aleatórios
    while (numerosSorteados.length < quantidade) {
        let numero = Math.floor(Math.random() * (numeroFinal - numeroInicial + 1)) + numeroInicial;

        // Evitar números repetidos
        if (!numerosSorteados.includes(numero)) {
            numerosSorteados.push(numero);
        }
    }

    // Exibir os números sorteados
    document.querySelector('.box__resultado--text').textContent = numerosSorteados.join(', ');
}

// Adicionar o evento de clique ao botão Sortear
document.querySelector('.box__form--btn--sortear').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário
    sorteaNumero();
});
