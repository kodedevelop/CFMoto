import { initVeiculosCard, initVeiculosModal } from './modules/veiculosModal.js';
import { initMascaraForm } from './modules/mascaraForm.js';
import { initMensagemWhats } from './modules/mensagemWhats.js';

document.addEventListener('DOMContentLoaded', () => {
  initVeiculosCard();
  initVeiculosModal();
  initMascaraForm();
  initMensagemWhats();
});