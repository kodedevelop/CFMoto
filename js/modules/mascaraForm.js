export function initMascaraForm() {
  if (typeof $ === 'undefined') return;

  const campoTelefone = document.getElementById('telefone');
  if (!campoTelefone) return;

  $('#telefone').mask('(00) 00000-0000');

  const validar = () => {
    const apenasDigitos = campoTelefone.value.replace(/\D/g, '');
    if (apenasDigitos.length < 11) {
      campoTelefone.setCustomValidity('Digite um telefone completo com DDD.');
    } else {
      campoTelefone.setCustomValidity('');
    }
  };

  $('#telefone').on('input keyup paste', validar);

  campoTelefone.closest('form')?.addEventListener('submit', (e) => {
    validar();
    if (!campoTelefone.checkValidity()) {
      campoTelefone.reportValidity();
      e.preventDefault();
    }
  });
}