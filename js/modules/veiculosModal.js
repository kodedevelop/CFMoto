export function initVeiculosModal(){
    // Variáveis
    const buttonsConhecerModelo = document.querySelectorAll('.btn-bordaPreta');
    const modalIconFechar       = document.querySelector('.modalIconFechar');
    const fundoEscuroModal      = document.querySelector('#modalFundoEscuro');
    
    const modalTitulo     = document.querySelector('.modalTitulo');
    const modalImg        = document.querySelector('.modalImg');
    const modalParagrafo  = document.querySelector('.modalParagrafo');
    const modalListaItens = document.querySelectorAll('.modalListaItem');
    
    const modalButtonWhatsApp = document.querySelector('.btn-bordaAzulCiano');
    let veiculoAtual = null;

    // Dados dos veículos
    const veiculos = [
        {
            id: 1,
            modalNome: 'CFORCE 110',
            modalImg: 'assets/img/section-veiculos/modelos-youth/CFORCE-110.png',
            modalImgTextoAlt: 'Modelo Cforce 110',
            modalCaracteristica: 'Quadriciclo ideal para jovens pilotos. Com motor de 110cc, suspensão independente e freios a disco, oferece pilotagem ágil e controlada. Recursos como limitador de velocidade e faróis de LED garantem mais segurança.',
            destaques: [
                'Freio a Disco',
                'Limitador de velocidade mecânico',
                '3 Anos de garantia total'
            ]
        },
        {
            id: 2,
            modalNome: 'CFORCE 100 LV',
            modalImg: 'assets/img/section-veiculos/modelos-youth/CFORCE-110LV.png',
            modalImgTextoAlt: 'Modelo CFORCE 100 LV',
            modalCaracteristica: 'Sendo a versão de entrada do CFORCE 110, ele possui um tamanho perfeito para crianças a partir de 10 anos e é ideal para quem está em busca de um mini-quadriciclo com ótimo custo-benefício. Enfrenta qualquer terreno, ajudando jovens pilotos a ganharem confiança.',
            destaques: [
                'FMotor de 107cc',
                'Limitador de velocidade mecânico',
                '3 anos de garantia total'
            ]
        },
        {
            id: 4,
            modalNome: 'MINI-MOTO CX-5E',
            modalImg: 'assets/img/section-veiculos/modelos-youth/MINI-MOTO-CX-5E.webp',
            modalImgTextoAlt: 'Modelo MINI-MOTO CX-5E',
            modalCaracteristica: 'Mini moto 100% elétrica para pilotos de 8 a 12 anos. Com bateria de 48V, carrega em 5h e atinge 46 km/h, possui três modos de condução, controle de velocidade, amortecedor ajustável, freios a disco e painel com indicadores.',
            destaques: [
                '3 modos de condução',
                'Velocidade máxima de 46km/h',
                '3 Anos de garantia total'
            ]
        },
        {
            id: 6,
            modalNome: 'CFORCE 450L EPS',
            modalImg: 'assets/img/section-veiculos/modelos-cforce/CFORCE-450L.png',
            modalImgTextoAlt: 'Modelo CFORCE 450L EPS',
            modalCaracteristica: 'Máquina de médio porte acessível com estrutura de aço de alta resistência, motor SOHC monocilíndrico, refrigeração líquida e transmissão CVT. Ideal para iniciantes no off-road, oferece suspensão independente, tração 4×2/4×4 com bloqueio, assento duplo 40% maior, guincho e protetores de mão.',
            destaques: [
                'Suspensão independente',
                '31 cavalos de potência',
                '3 anos de garantia total'
            ]
        },
        {
            id: 7,
            modalNome: 'CFORCE 520L EPS',
            modalImg: 'assets/img/section-veiculos/modelos-cforce/CFORCE-520L.png',
            modalImgTextoAlt: 'Modelo CFORCE 520L EPS',
            modalCaracteristica: 'O motor de 495cc do CFORCE 520L oferece mais potência e versatilidade. Com direção elétrica (EPS), maior torque, rodas de liga leve e pneus off-road de 25". Equipado com guincho elétrico de 1.134kg, protetores de mão, bagageiros CF CONNECT e uma gama de acessórios.',
            destaques: [
                'Rodas de liga leve',
                'Produzido no Brasil',
                '3 anos de garantia total'
            ]
        },
        {
            id: 13,
            modalNome: 'SHARK 125 AUTOMATIC',
            modalImg: 'assets/img/section-veiculos/modelos-funMotors/modal-SHARK-125.png',
            modalImgTextoAlt: 'SHARK 125',
            modalCaracteristica: 'Mini-quadriciclo ideal para jovens a partir de 12 anos, ele combina emoção e segurança em cada trilha. Equipado com motor monocilíndrico, 4 tempos de 8,5CC, refrigerado a ar e câmbio totalmente automático. Além disso, conta com partida elétrica, rack dianteiro e traseiro, freio a disco e limitador de velocidade.',
            destaques: [
                'Partida elétrica',
                'Limitador de velocidade',
                'Câmbio automático com ré'
            ]
        },
        {
            id: 14,
            modalNome: 'RHINO 110',
            modalImg: 'assets/img/section-veiculos/modelos-funMotors/RHINO-110.png',
            modalImgTextoAlt: 'RHINO 110',
            modalCaracteristica: 'O RHINO 110 e.',
            destaques: [
                'item',
                'item',
                'item'
            ]
        },
        {
            id: 16,
            modalNome: 'TERROX 400L',
            modalImg: 'assets/img/section-veiculos/modelos-goes/TERROX-400L.png',
            modalImgTextoAlt: 'Modelo terrox 400L',
            modalCaracteristica: 'Equipado com um motor de 400cc, câmbio CVT, suspensão independente nas quatro rodas, garantindo uma condução segura e confortável.',
            destaques: [
                '30 HP a 7.200 rpm',
                '3 Anos de Garantia',
                'Injeção Eletrônica'
            ]
        }
    ];


    // Preenche o modal com as informações do veículos
    function preencherModal(veiculo) {
        veiculoAtual = veiculo; // salva o veículo atual
        
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


    // Envia mensagem para o whatsapp com o modelo respectivo
    const telefone = '5581994253143';

    // Função para enviar mensagem
    function gerarLinkWhatsApp(nomeVeiculo) {
        const mensagem = `Olá! Vim pelo site e fiquei interessado pelo modelo: *${nomeVeiculo}*.`;

        const mensagemCodificada = encodeURIComponent(mensagem);

        return `https://wa.me/${telefone}?text=${mensagemCodificada}`;
    }

    modalButtonWhatsApp.addEventListener('click', () => {
        if (!veiculoAtual) return;

        const link = gerarLinkWhatsApp(veiculoAtual.modalNome);

        window.open(link, '_blank');
    });
}