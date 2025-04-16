// Seleciona todos os itens de contato
const contatoItens = document.querySelectorAll('.contato-lista li');

// Adiciona um evento de clique a cada item
contatoItens.forEach(item => {
    item.addEventListener('click', () => {
        // Verifica o tipo de item
        const tipo = item.textContent.toLowerCase();
        const textoParaCopiar = item.getAttribute('data-copy');

        if (tipo.includes('telefone') || tipo.includes('endereço')) {
            // Copia o conteúdo do atributo data-copy para a área de transferência
            navigator.clipboard.writeText(textoParaCopiar)
                .then(() => {
                    alert(`"${textoParaCopiar}" copiado para a área de transferência!`);
                })
                .catch(err => {
                    console.error('Erro ao copiar o texto: ', err);
                });
        } else if (tipo.includes('email') || tipo.includes('linkedin')) {
            // Abre o link correspondente
            const link = item.querySelector('a');
            window.open(link, '_blank');
        }
    });
});