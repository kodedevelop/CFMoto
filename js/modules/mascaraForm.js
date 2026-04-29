export function initMascaraForm() {
  if (typeof $ === 'undefined') return;

  const campoTelefone = document.getElementById('telefone');
  if (!campoTelefone) return;

  $('#telefone').mask('(00) 00000-0000');
}