(() => {
  const raiz = document.documentElement;

  const barra = document.createElement('div');
  barra.className = 'progreso';
  barra.setAttribute('aria-hidden', 'true');
  document.body.appendChild(barra);

  let pendiente = false;

  const pintar = () => {
    pendiente = false;

    const y = window.scrollY;
    const max = raiz.scrollHeight - window.innerHeight;

    barra.style.setProperty('--p', max > 0 ? Math.min(1, Math.max(0, y / max)).toFixed(4) : '0');
    barra.classList.toggle('visible', y > 12);
  };

  const pedir = () => {
    if (pendiente) return;
    pendiente = true;
    requestAnimationFrame(pintar);
  };

  addEventListener('scroll', pedir, { passive: true });
  addEventListener('resize', pedir);
  pintar();

  const buscador = document.getElementById('searchInput');
  const tabla = document.querySelector('.tw');

  if (buscador && tabla) {
    let temporizador;

    buscador.addEventListener('input', () => {
      let k = 0;

      tabla.querySelectorAll('tbody tr').forEach(fila => {
        if (fila.style.display === 'none') return;
        fila.style.setProperty('--k', k++);
      });

      tabla.scrollTop = 0;
      tabla.classList.remove('filtrando');
      void tabla.offsetWidth;
      tabla.classList.add('filtrando');

      clearTimeout(temporizador);
      temporizador = setTimeout(() => tabla.classList.remove('filtrando'), 800);
    });
  }
})();
