const headerConsultation = document.querySelector('.header__consultation');
const buttonsConsultation = document.querySelectorAll('.product__button_more');
const overlayConsultation = document.querySelector('.overlay_consultation');
const consultation = overlayConsultation.querySelector('.consultation__order');

headerConsultation.addEventListener('click', () => {
  overlayConsultation.classList.add('overlay_active');
});

buttonsConsultation.forEach(buttonConsultation => {
  buttonConsultation.addEventListener('click', () => {
    overlayConsultation.classList.add('overlay_active');
    order.value = buttonConsultation.dataset.order;
  });
});

overlayConsultation.addEventListener('click', event => {
  const target = event.target;

  if (target === overlayConsultation || target.closest('.consultation__close')) {
    overlayConsultation.classList.remove('overlay_active');
  }
});