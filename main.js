// La barra fija de consulta (celular) aparece cuando el botón del hero sale de pantalla.
const cta = document.getElementById('hero-cta');
const sticky = document.getElementById('sticky');
if (cta && sticky && 'IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => {
    sticky.classList.toggle('is-on', !entry.isIntersecting && entry.boundingClientRect.top < 0);
  }).observe(cta);
}
