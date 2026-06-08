// Dados dos veículos
const veiculos = [
  {
    id: 0,
    consorcio: true,
    veiculoNome: 'IBEX-450',
    veiculoPreco: 'R$ 429,42',
    veiculoImg: 'assets/img/section-veiculos/modelos-consorcios/IBEX-450.webp',
    veiculoImgTextoAlt: 'IBEX-450',
    veiculolCaracteristica:
      'A IBEX 450 foi criada para quem busca liberdade em qualquer caminho. Com visual aventureiro, presença marcante e tecnologia pensada para elevar a experiência de pilotagem, ela combina versatilidade, conforto e performance para encarar a cidade, a estrada e novas rotas com confiança.',
    veiculoDestaques: [
      'Tanque de 17.5L',
      'Potência de 44CV',
      '3 Anos de Garantia',
    ],
  },
  {
    id: 1,
    consorcio: true,
    veiculoNome: 'IBEX-700',
    veiculoPreco: 'R$ 536,79',
    veiculoImg: 'assets/img/section-veiculos/modelos-consorcios/IBEX-700.webp',
    veiculoImgTextoAlt: 'IBEX-700',
    veiculolCaracteristica:
      'A IBEX 700 foi criada para quem quer viajar mais longe, com mais conforto e muito mais potência. Uma moto pronta para enfrentar longas distâncias, terrenos variados e qualquer desafio da estrada. Um novo patamar de tecnologia e desempenho na categoria touring de média/alta cilindrada.',
    veiculoDestaques: ['Tanque 20L', 'Potência 68 cv', 'Altura do solo 192 mm'],
  },
  {
    id: 2,
    consorcio: true,
    veiculoNome: '450 CL-C',
    veiculoPreco: 'R$ 393,00',
    veiculoImg: 'assets/img/section-veiculos/modelos-consorcios/450-CL-C.webp',
    veiculoImgTextoAlt: '450 CL-C',
    veiculolCaracteristica:
      'A 450CL-C combina personalidade, estilo e presença em uma motocicleta criada para quem valoriza cada detalhe da pilotagem. Com design marcante, acabamento premium e uma proposta que une atitude e conforto, ela entrega uma experiência única para transformar qualquer trajeto em algo memorável.',
    veiculoDestaques: [
      'Potência de 44cv',
      'Transmissão por Correia',
      'Refrigeração Líquida',
    ],
  },
  {
    id: 3,
    consorcio: true,
    veiculoNome: '450 CL-C BOBBER',
    veiculoPreco: 'R$ 405,44',
    veiculoImg:
      'assets/img/section-veiculos/modelos-consorcios/450-CL-C-BOBBER.webp',
    veiculoImgTextoAlt: '450 CL-C BOBBER',
    veiculolCaracteristica:
      'A 450CL-C BOBBER foi feita para quem quer presença e autenticidade em cada trajeto. Com visual marcante, linhas minimalistas e atitude única, ela combina estilo, personalidade e uma experiência de pilotagem envolvente para transformar cada saída em uma declaração de liberdade.',
    veiculoDestaques: [
      'Potência de 44cv',
      'Assento Individual',
      'Transmissão por Correia',
    ],
  },
  {
    id: 4,
    veiculoNome: 'ZFORCE 950 SPORT-4',
    veiculoPreco: 'R$ 149.990,00',
    veiculoImg:
      'assets/img/section-veiculos/modelos-zforce/ZFORCE-950SPORT4.png',
    veiculoImgTextoAlt: 'ZFORCE 950 SPORT-4',
    veiculolCaracteristica:
      'Com design moderno e componentes premium, tem desempenho excepcional em qualquer terreno. Equipado com 4 lugares, controle variável de EPS, suspensão dianteira com dois braços em A, suspensão traseira Multi-link e modos NORMAL/SPORT.',
    veiculoDestaques: [
      'Rodas com Beadlock',
      'Guincho de 2.050 kg',
      '3 Anos de Garantia',
    ],
  },
  {
    id: 5,
    veiculoNome: 'TERROX 400L',
    veiculoPreco: 'R$ 44.990,00',
    veiculoImg: 'assets/img/section-veiculos/modelos-goes/TERROX-400L.png',
    veiculoImgTextoAlt: 'Modelo terrox 400L',
    veiculolCaracteristica:
      'Equipado com um motor de 400cc, câmbio CVT, suspensão independente nas quatro rodas, garantindo uma condução segura e confortável.',
    veiculoDestaques: [
      '30 HP a 7.200 rpm',
      '3 Anos de Garantia',
      'Injeção Eletrônica',
    ],
  },
  {
    id: 6,
    veiculoNome: 'CFORCE 110',
    veiculoPreco: 'R$ 20.790,00',
    veiculoImg: 'assets/img/section-veiculos/modelos-youth/CFORCE-110.png',
    veiculoImgTextoAlt: 'Modelo Cforce 110',
    veiculolCaracteristica:
      'Quadriciclo ideal para jovens pilotos. Com motor de 110cc, suspensão independente e freios a disco, oferece pilotagem ágil e controlada. Recursos como limitador de velocidade e faróis de LED garantem mais segurança.',
    veiculoDestaques: [
      'Freio a Disco',
      'Limitador de velocidade mecânico',
      '3 Anos de garantia total',
    ],
  },
  {
    id: 7,
    veiculoNome: 'CFORCE 100 LV',
    veiculoPreco: 'R$ 16.790,00',
    veiculoImg: 'assets/img/section-veiculos/modelos-youth/CFORCE-110LV.png',
    veiculoImgTextoAlt: 'Modelo CFORCE 100 LV',
    veiculolCaracteristica:
      'Sendo a versão de entrada do CFORCE 110, ele possui um tamanho perfeito para crianças a partir de 10 anos e é ideal para quem está em busca de um mini-quadriciclo com ótimo custo-benefício. Enfrenta qualquer terreno, ajudando jovens pilotos a ganharem confiança.',
    veiculoDestaques: [
      'FMotor de 107cc',
      'Limitador de velocidade mecânico',
      '3 anos de garantia total',
    ],
  },
  {
    id: 8,
    veiculoNome: 'CFORCE 450L EPS',
    veiculoPreco: 'R$ 58.990,00',
    veiculoImg: 'assets/img/section-veiculos/modelos-cforce/CFORCE-450L.png',
    veiculoImgTextoAlt: 'Modelo CFORCE 450L EPS',
    veiculolCaracteristica:
      'Possui estrutura de aço de alta resistência, motor SOHC monocilíndrico, refrigeração líquida e transmissão CVT. Ideal para iniciantes no off-road, oferece suspensão independente, tração 4×2/4×4 com bloqueio, assento duplo 40% maior, guincho e protetores de mão.',
    veiculoDestaques: [
      'Suspensão independente',
      '31 cavalos de potência',
      '3 anos de garantia total',
    ],
  },
  {
    id: 9,
    veiculoNome: 'CFORCE 520L EPS',
    veiculoPreco: 'R$ 68.990,00',
    veiculoImg: 'assets/img/section-veiculos/modelos-cforce/CFORCE-520l.png',
    veiculoImgTextoAlt: 'Modelo CFORCE 520L EPS',
    veiculolCaracteristica:
      'O seu motor de 495cc oferece mais potência e versatilidade. Com direção elétrica (EPS), maior torque, rodas de liga leve e pneus off-road de 25". Equipado com guincho elétrico de 1.134kg, protetores de mão, bagageiros CF CONNECT e uma gama de acessórios.',
    veiculoDestaques: [
      'Rodas de liga leve',
      'Produzido no Brasil',
      '3 anos de garantia total',
    ],
  },
  {
    id: 10,
    veiculoNome: 'SHARK 125',
    veiculoPreco: 'R$ 14.990,00',
    veiculoImg:
      'assets/img/section-veiculos/modelos-funMotors/modal-SHARK-125.png',
    veiculoImgTextoAlt: 'SHARK 125',
    veiculolCaracteristica:
      'Mini-quadriciclo ideal para jovens a partir de 12 anos. Equipado com motor monocilíndrico, 4 tempos de 8,5CC, refrigerado a ar e câmbio totalmente automático. Além disso, conta com partida elétrica, rack dianteiro e traseiro, freio a disco e limitador de velocidade.',
    veiculoDestaques: [
      'Partida elétrica',
      'Limitador de velocidade',
      'Câmbio automático com ré',
    ],
  },
  {
    id: 11,
    veiculoNome: 'RHINO 110',
    veiculoPreco: 'R$ 11.990,00',
    veiculoImg: 'assets/img/section-veiculos/modelos-funMotors/RHINO-110.png',
    veiculoImgTextoAlt: 'RHINO 110',
    veiculolCaracteristica:
      'Perfeita para explorar novas aventuras em família. Seu design inovador e dirigibilidade moderna tornam-no não apenas um veículo de desempenho excepcional, mas também um meio envolvente para desfrutar momentos emocionantes com a família.',
    veiculoDestaques: [
      'Limitador de velocidade',
      'Freio a disco',
      'Câmbio automático com ré',
    ],
  },
];

// Função dos cards
export function initVeiculosCard() {
  const cardsTitulo = document.querySelectorAll('.veiculo h3');
  const cardsPreco = document.querySelectorAll('.veiculo p');
  const cardsImg = document.querySelectorAll('.veiculoImg');

  // Percorre cada card e aplica as informações de acordo que aparece no array veiculos
  // OBS: A ordem do HTML tem que ser igual à do array (o 1º card representa o index 0 e o 1º objeto representa o index 0 de veiculos, etc...)
  veiculos.forEach((veiculo, index) => {
    cardsTitulo[index].textContent = veiculo.veiculoNome;
    cardsImg[index].src = veiculo.veiculoImg;

    cardsPreco[index].innerHTML = veiculo.consorcio
      ? `<span class="texto-consorcio">Parcelas a partir de</span> ${veiculo.veiculoPreco}`
      : veiculo.veiculoPreco;
  });
}

// Função do modal
export function initVeiculosModal() {
  // Variáveis
  const buttonsConhecerModelo = document.querySelectorAll('.btn-bordaPreta');
  const modalIconFechar = document.querySelector('.modalIconFechar');
  const fundoEscuroModal = document.querySelector('#modalFundoEscuro');

  const modalTitulo = document.querySelector('.modalTitulo');
  const modalImg = document.querySelector('.modalImg');
  const modalParagrafo = document.querySelector('.modalParagrafo');
  const modalListaItens = document.querySelectorAll('.modalListaItem');

  const modalButtonWhatsApp = document.querySelector('.btn-bordaAzulCiano');
  let veiculoAtual = null;

  // Preenche o modal com as informações do veículo
  function preencherModal(veiculo) {
    veiculoAtual = veiculo; // salva o veículo atual

    modalTitulo.textContent = veiculo.veiculoNome;
    modalImg.src = veiculo.veiculoImg;
    modalImg.alt = veiculo.veiculoImgTextoAlt;
    modalParagrafo.textContent = veiculo.veiculolCaracteristica;

    modalListaItens.forEach((item, index) => {
      item.innerHTML = `<i class="bi bi-check-square"></i> ${veiculo.veiculoDestaques[index]}`;
    });
  }

  // Função para exibir o modal
  function abrirModal() {
    fundoEscuroModal.style.display = 'block';
  }

  // Função para ocultar o modal
  function fecharModal() {
    fundoEscuroModal.style.display = 'none';
  }

  // Abre o modal
  buttonsConhecerModelo.forEach((button) => {
    button.addEventListener('click', () => {
      // Lê o data-id do botão clicado
      const id = Number(button.dataset.id);

      // Percorre o array veiculos e retorna o primeiro objeto que tenha id igual ao clicado
      const veiculoSelecionado = veiculos.find((veiculo) => veiculo.id === id);

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
  const telefone = '558131254455';

  // Função para enviar mensagem
  function mensagemWhatsapp(nomeVeiculo) {
    const mensagem = `Olá! Vim pelo site e fiquei interessado pelo modelo: *${nomeVeiculo}*.`;

    const mensagemCodificada = encodeURIComponent(mensagem);

    return `https://wa.me/${telefone}?text=${mensagemCodificada}`;
  }

  modalButtonWhatsApp.addEventListener('click', () => {
    if (!veiculoAtual) return;

    const link = mensagemWhatsapp(veiculoAtual.veiculoNome);

    window.open(link, '_blank');
  });
}
