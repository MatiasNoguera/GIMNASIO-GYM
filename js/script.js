// Menú móvil
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
navToggle?.addEventListener('click', ()=>{
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

// Header sticky — mantener visible y añadir sombra al hacer scroll
const header = document.querySelector('.site-header');
const handleHeaderScroll = () => {
  if(!header) return;
  if(window.scrollY > 20) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
window.addEventListener('scroll', handleHeaderScroll);
window.addEventListener('load', handleHeaderScroll);

// Año en footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll suave a enlaces internos (opcional)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href && href.length>1){
      e.preventDefault();
      const target = document.querySelector(href);
      if(target){
        target.scrollIntoView({behavior:'smooth',block:'start'});
        // si llegamos a contacto, dar foco al primer campo para facilitar que el usuario complete los datos
        if(href === '#contacto'){
          setTimeout(()=>{
            const first = target.querySelector('input, textarea, select, button, [tabindex]');
            if(first) first.focus();
          }, 350);
        }
      }
      // cerrar nav en mobile
      if(nav.classList.contains('open')){nav.classList.remove('open');navToggle.setAttribute('aria-expanded','false')}
    }
  })
});