export function initVeiculosModal(){
    const buttonsConhecerModelo = document.querySelectorAll('.btn-bordaPreta');
    const modalIconFechar       = document.querySelector('.modalIconFechar');
    const fundoEscuroModal      = document.querySelector('#modalFundoEscuro'); // Fundo escuro por trás do modal
    
    // Abrir modal
    buttonsConhecerModelo.forEach(buttonConhecerModelo => {
        buttonConhecerModelo.addEventListener('click', ()=> {
            fundoEscuroModal.style.display = 'block';
        })
    });
    
    // Fechar modal
    modalIconFechar.addEventListener('click', ()=> {
        fundoEscuroModal.style.display = 'none';
    })
}

