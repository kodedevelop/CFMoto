export function initVeiculosModal(){
    // Variáveis
    const buttonsConhecerModelo = document.querySelectorAll('.btn-bordaPreta');
    const modalIconFechar       = document.querySelector('.modalIconFechar');
    const fundoEscuroModal      = document.querySelector('#modalFundoEscuro');
    
    const modalTitulo     = document.querySelector('.modalTitulo');
    const modalImg        = document.querySelector('.modalImg');
    const modalParagrafo  = document.querySelector('.modalParagrafo');
    const modalListaItens = document.querySelectorAll('.modalListaItem');
    
    
    // Dados dos veículos
    const veiculos = [
        {
            id: 1,
            modalNome: 'CFORCE 100LV',
            modalImg: 'assets/img/modelos-youth/CFORCE-100LV.webp',
            modalImgTextoAlt: 'Modelo Cforce 100LV',
            modalCaracteristica: 'Sendo a versão de entrada do CFORCE 110, ele possui um tamanho perfeito para crianças a partir de 10 anos e é ideal para quem está em busca de um mini-quadriciclo com ótimo custo-benefício. Enfrenta qualquer terreno, ajudando jovens pilotos a ganharem confiança.',
            destaques: [
                'Freio a Disco',
                'Limitador de Velocidade Mecânico',
                '3 Anos de Garantia Total'
            ]
        },
        {
            id: 2,
            modalNome: 'CFORCE 100',
            modalImg: 'assets/img/modelos-youth/CFORCE-100.webp',
            modalImgTextoAlt: 'Modelo CFORCE 100',
            modalCaracteristica: 'Quadriciclo ideal para jovens pilotos. Com motor de 110cc, suspensão independente e freios a disco, oferece pilotagem ágil e controlada. Recursos como limitador de velocidade e faróis de LED garantem mais segurança.',
            destaques: [
                'FMotor de 107cc',
                'Limitador de Velocidade Mecânico',
                '3 Anos de Garantia Total'
            ]
        }
    ];

    
    // Preenche o modal com as informações do veículos
    function preencherModal(veiculo) {
        modalTitulo.textContent = veiculo.modalNome;
    
        modalImg.src = veiculo.modalImg;
        modalImg.alt = veiculo.modalImgTextoAlt;
    
        modalParagrafo.textContent = veiculo.modalCaracteristica;
    
        modalListaItens.forEach((item, index) => {
            item.innerHTML = `<i class="bi bi-check-square"></i> ${veiculo.destaques[index]}`;
        });
    }
    
    // Exibe o modal
    function abrirModal() { fundoEscuroModal.style.display = 'block'; }
    
    // Oculta o modal
    function fecharModal() { fundoEscuroModal.style.display = 'none'; }
    
    // Abre o modal
    buttonsConhecerModelo.forEach(button => {
        button.addEventListener('click', () => {
            // Lê o data-id do botão clicado
            const id = Number(button.dataset.id);
    
            // Percorre o array veiculos e retorna o primeiro objeto que tenha id igual ao clicado
            const veiculoSelecionado = veiculos.find(veiculo => veiculo.id === id);
    
            // Verifica se encontrou algum veículo, se não encontrou interrompe a execução
            if (!veiculoSelecionado) return;
    
            // Envia o objeto encontrado para a função e a função injeta os dados no DOM
            preencherModal(veiculoSelecionado);
            abrirModal();
        });
    });
    
    // Fecha o modal clicando no "X"
    modalIconFechar.addEventListener('click', fecharModal);
    
    // Fecha o modal clicando fora dele
    fundoEscuroModal.addEventListener('click', (e) => {
        if (e.target === fundoEscuroModal) {
            fecharModal();
        }
    });
}
