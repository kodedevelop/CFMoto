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
            modalNome: 'CFORCE 100 LV',
            modalImg: 'assets/img/modelos-youth/modal-CFORCE-100LV.png',
            modalImgTextoAlt: 'Modelo Cforce 100LV',
            modalCaracteristica: 'Sendo a versão de entrada do CFORCE 110, ele possui um tamanho perfeito para crianças a partir de 10 anos e é ideal para quem está em busca de um mini-quadriciclo com ótimo custo-benefício. Enfrenta qualquer terreno, ajudando jovens pilotos a ganharem confiança.',
            destaques: [
                'Freio a Disco',
                'Limitador de velocidade mecânico',
                '3 Anos de garantia total'
            ]
        },
        {
            id: 2,
            modalNome: 'CFORCE 100',
            modalImg: 'assets/img/modelos-youth/modal-CFORCE-100.png',
            modalImgTextoAlt: 'Modelo CFORCE 100',
            modalCaracteristica: 'Quadriciclo ideal para jovens pilotos. Com motor de 110cc, suspensão independente e freios a disco, oferece pilotagem ágil e controlada. Recursos como limitador de velocidade e faróis de LED garantem mais segurança.',
            destaques: [
                'FMotor de 107cc',
                'Limitador de velocidade mecânico',
                '3 anos de garantia total'
            ]
        },
        {
            id: 3,
            modalNome: 'CFORCE EV110',
            modalImg: 'assets/img/modelos-youth/modal-CFORCE-EV110.png',
            modalImgTextoAlt: 'Modelo CFOCE EV110',
            modalCaracteristica: 'Quadriciclo 100% elétrico, com até 60 km de autonomia, resistência à água e poeira (IP67) e modos “Sport” e “Eco”, garante uma experiência off-road empolgante. O App CFMOTO RIDE permite monitoramento em tempo real.',
            destaques: [
                'Velocidade Máxima de 45km/h',
                'Modo Sport e Eco',
                '3 anos de garantia Total'
            ]
        },
        {
            id: 4,
            modalNome: 'MINI-MOTO CX-5E',
            modalImg: 'assets/img/modelos-youth/MINI-MOTO-CX-5E.webp',
            modalImgTextoAlt: 'Modelo MINI-MOTO CX-5E',
            modalCaracteristica: 'Mini moto 100% elétrica para pilotos de 8 a 12 anos. Com bateria de 48V, carrega em 5h e atinge 46 km/h, possui três modos de condução, controle de velocidade, amortecedor ajustável, freios a disco e painel com indicadores.',
            destaques: [
                '3 modos de condução',
                'Velocidade máxima de 46km/h',
                '3 Anos de garantia total'
            ]
        },
        {
            id: 5,
            modalNome: 'MINI-MOTO CX-2E',
            modalImg: 'assets/img/modelos-youth/modal-MINI-MOTO-CX-2E.png',
            modalImgTextoAlt: 'Modelo MINI-MOTO CX-2E',
            modalCaracteristica: 'Mini moto elétrica para pilotos de 4 a 7 anos. Com design moderno e três modos de potência, atinge até 36 km/h e recarrega em 5h, é equipada com bateria de 48V, amortecedor ajustável, freios a disco e painel com indicadores, é a introdução ideal ao mundo das duas rodas.',
            destaques: [
                '100% elétrica',
                '3 modos de velocidade',
                '3 anos de garantia total'
            ]
        },
        {
            id: 6,
            modalNome: 'CFORCE 450L EPS',
            modalImg: 'assets/img/modelos-cforce/CFORCE-450L.webp',
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
            modalImg: 'assets/img/modelos-cforce/CFORCE-520L.webp',
            modalImgTextoAlt: 'Modelo CFORCE 520L EPS',
            modalCaracteristica: 'O motor de 495cc do CFORCE 520L oferece mais potência e versatilidade. Com direção elétrica (EPS), maior torque, rodas de liga leve e pneus off-road de 25". Equipado com guincho elétrico de 1.134kg, protetores de mão, bagageiros CF CONNECT e uma gama de acessórios.',
            destaques: [
                'Rodas de liga leve',
                'Produzido no Brasil',
                '3 anos de garantia total'
            ]
        },
        {
            id: 8,
            modalNome: 'CFORCE 625 EPS',
            modalImg: 'assets/img/modelos-cforce/CFORCE-625.webp',
            modalImgTextoAlt: 'Modelo CFORCE 625 EPS',
            modalCaracteristica: 'Equipado com motor de 580 cc, suspensão independente, painel digital multifuncional, freios a disco e iluminação em LED, oferecendo desempenho, conforto e controle para qualquer tipo de terreno.',
            destaques: [
                'Alto desempenho em terrenos difíceis',
                'Painel digital multifuncional',
                'Assento ergonômico com encosto'
            ]
        },
        {
            id: 9,
            modalNome: 'CFORCE 1000LX',
            modalImg: 'assets/img/modelos-cforce/CFORCE-1000LX.webp',
            modalImgTextoAlt: 'Modelo CFORCE 1000LX',
            modalCaracteristica: 'É um utilitário premium para até 6 pessoas, com cabine climatizada, vidros elétricos vedados e para-brisa basculante, equipado com motor 998cc de 3 cilindros, entrega conforto, potência e desempenho para qualquer desafio.',
            destaques: [
                'Direção elétrica (EPS)',
                'Apple Car Play',
                '3 anos de garantia total'
            ]
        },
        {
            id: 10,
            modalNome: 'U10 PRO HIGHLAND',
            modalImg: 'assets/img/modelos-uforce/modal-U10-PRO-HIGHLAND.png',
            modalImgTextoAlt: 'Modelo U10 PRO HIGHLAND',
            modalCaracteristica: 'Redefine o conceito de UTV, oferecendo potência, capacidade e tecnologia de ponta. Com um interior mais silencioso, design elevado e recursos completos, incluindo ar-condicionado. Entrega desempenho excepcional tanto para trabalho quanto para lazer.',
            destaques: [
                'Transmissão automática CVT',
                'Direção elétrica (EPS)',
                '3 anos de garantia total'
            ]
        },
        {
            id: 11,
            modalNome: 'U10 XL PRO',
            modalImg: 'assets/img/modelos-uforce/modal-U10-XL-PRO.png',
            modalImgTextoAlt: 'Modelo U10 XL PRO',
            modalCaracteristica: 'Essa versão é a versão ampliada do UFORCE U10 PRO, com espaço para até 6 pessoas. Ideal para trabalho ou aventuras, seu motor de 998cc e transmissão CVT OmniDrive garantem potência, suavidade e controle em qualquer terreno e é perfeito para transportar família ou equipe com desempenho e versatilidade.',
            destaques: [
                'Caçamba para 454 kg',
                'Direção elétrica (EPS)',
                '3 anos de garantia total'
            ]
        },
        {
            id: 12,
            modalNome: 'U10 PRO',
            modalImg: 'assets/img/modelos-uforce/modal-U10-PRO.png',
            modalImgTextoAlt: 'Modelo U10 PRO',
            modalCaracteristica: 'Entrega potência e desempenho com motor de 998cc e 90HP, com uma suspensão de alto desempenho, pneus de 29”, caçamba elétrica de 454 kg e reboque de 1.134 kg, garante estabilidade e eficiência. Possui uma tela MMI de 8” com Apple CarPlay e áudio integrado.',
            destaques: [
                'Suspensão independente',
                'Direção elétrica (EPS)',
                'Appe Car Play'
            ]
        },
        {
            id: 13,
            modalNome: 'SHARK 125 AUTOMATIC',
            modalImg: 'assets/img/modelos-funMotors/modal-SHARK-125.png',
            modalImgTextoAlt: 'SHARK 125 AUTOMATIC',
            modalCaracteristica: 'Mini-quadriciclo ideal para jovens a partir de 12 anos, ele combina emoção e segurança em cada trilha. Equipado com motor monocilíndrico, 4 tempos de 8,5CC, refrigerado a ar e câmbio totalmente automático. Além disso, conta com partida elétrica, rack dianteiro e traseiro, freio a disco e limitador de velocidade.',
            destaques: [
                'Partida elétrica',
                'Limitador de velocidade',
                'Câmbio automático com ré'
            ]
        },
        {
            id: 14,
            modalNome: 'DAKAR 300',
            modalImg: 'assets/img/modelos-funMotors/modal-DARK-300.png',
            modalImgTextoAlt: 'DAKAR 300',
            modalCaracteristica: 'O Dakar 300 entrega mais força e durabilidade, equipado com eixo cardan para máxima confiabilidade. Um quadriciclo robusto, estável e pronto para o trabalho pesado em qualquer tipo de terreno.',
            destaques: [
                'Injeção eletrônica BOSCH',
                'Painel digital',
                'Câmbio automática CVT (P, N, R, H e L)'
            ]
        },
        {
            id: 15,
            modalNome: 'Farm 200',
            modalImg: 'assets/img/modelos-funMotors/modal-FARM-200.png',
            modalImgTextoAlt: 'Farm 200',
            modalCaracteristica: 'Possui um painel de LCD com diversas funções, câmbio automático CVT, freios a disco, faróis com acabamento em LED e um encosto para que tenha mais conforto. Um novo farol traseiro que confere um toque de modernidade autêntica a esse quadriciclo.',
            destaques: [
                'Painel LCD',
                'Encosto',
                'Partida elétrica'
            ]
        },
        {
            id: 16,
            modalNome: 'TERROX 400L',
            modalImg: 'assets/img/modelos-goes/TERROX-400L.webp',
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