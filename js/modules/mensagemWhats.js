export function initMensagemWhats() {
  const formulario = document.querySelector('.formulario-contato form');

  if (!formulario) return;

  formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    if (typeof grecaptcha !== 'undefined') {
      const captchaResponse = grecaptcha.getResponse();

      if (captchaResponse.length === 0) {
        alert('Por favor, preencha o reCAPTCHA!');
        return;
      }
    }

    enviarParaWhatsApp();
  });
}

function enviarParaWhatsApp() {
  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const email = document.getElementById('email').value.trim();

  const numeroWhatsApp = '558183335505';

  const texto = `*Nome:* ${nome}\n*Telefone:* ${telefone}\n*E-mail:* ${email}`;

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank');
}