(function () {
  var MENSAJES = [
    '¡Hola! De parte del área de TI te deseamos una excelente Navidad y un próspero Año Nuevo',
    'Levantar tu ticket sería un buen regalo de Navidad',
    'Santa no tiene acceso a producción, pero TI sí. ¡Feliz Navidad!',
    'Mi lista de deseos: contraseñas seguras y cero "se me olvidó mi clave".',
    '¿Ya reiniciaste tu equipo? Es el mejor regalo para el área de TI.',
    'Que tu Navidad no tenga caídas de red ni pantallas azules',
    'Año nuevo, contraseña nueva. ¡Cámbiala y no la compartas!',
    'Tu red está más estable que el árbol de Navidad. ¡Felices fiestas!',
    'Respalda tus archivos: el mejor propósito de Año Nuevo',
    'Ni Santa te pide tu contraseña. No abras correos sospechosos'
  ];

  var INTERVALO = 10000;
  var DURACION = 8000;
  var VELOCIDAD = 28;
  var INICIO = 800;

  var TOPES = {
    1: 19, 2: 24, 3: 21, 4: 19, 5: 24, 6: 21, 7: 24, 8: 30, 9: 31, 10: 25, 11: 28, 12: 28,
    13: 32, 14: 31, 15: 32, 16: 41, 17: 42, 18: 47, 19: 57, 20: 63, 21: 73, 22: 28, 23: 28,
    24: 28, 25: 29, 26: 49, 27: 50, 28: 49, 29: 53, 30: 26, 31: 29, 32: 31, 33: 30, 34: 29,
    35: 34, 36: 40
  };

  var css = [
    '.ti-msg{position:fixed;left:0;top:0;z-index:10000;width:max-content;min-width:176px;max-width:min(264px,calc(100vw - 16px));padding-bottom:10px;pointer-events:none;font-family:"Cascadia Mono","SF Mono","Consolas","Roboto Mono","Courier New",monospace;will-change:transform}',
    '.ti-msg.ti-abajo{padding-bottom:0;padding-top:10px}',
    '.ti-card{position:relative;opacity:0;transform:translateY(8px) scale(.94);transform-origin:50% 100%;transition:opacity .22s ease,transform .22s cubic-bezier(.2,.9,.3,1.2);filter:drop-shadow(0 0 7px rgba(0,214,255,.45)) drop-shadow(0 6px 10px rgba(0,0,0,.4))}',
    '.ti-abajo .ti-card{transform-origin:50% 0;transform:translateY(-8px) scale(.94)}',
    '.ti-msg.ti-on .ti-card{opacity:1;transform:none}',
    '.ti-frame{background:linear-gradient(135deg,#27e0ff,#1b7cff 60%,#27e0ff);padding:1px;clip-path:polygon(11px 0,100% 0,100% calc(100% - 11px),calc(100% - 11px) 100%,0 100%,0 11px)}',
    '.ti-inner{position:relative;background:linear-gradient(180deg,#0c1d33,#07111f);clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px);overflow:hidden}',
    '.ti-inner::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(39,224,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(39,224,255,.06) 1px,transparent 1px);background-size:12px 12px;pointer-events:none}',
    '.ti-inner::after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(180deg,rgba(255,255,255,.035) 0,rgba(255,255,255,.035) 1px,transparent 1px,transparent 3px);pointer-events:none}',
    '.ti-head{position:relative;display:flex;align-items:center;gap:6px;padding:4px 10px 4px 14px;background:rgba(39,224,255,.12);border-bottom:1px solid rgba(39,224,255,.35);font-size:9.5px;letter-spacing:1.6px;font-weight:700;color:#27e0ff;text-transform:uppercase}',
    '.ti-dot{width:6px;height:6px;border-radius:50%;background:#3dff9b;box-shadow:0 0 6px #3dff9b;animation:ti-pulso 1.2s ease-in-out infinite}',
    '.ti-tag{margin-left:auto;color:rgba(160,225,255,.5);font-weight:400;letter-spacing:1px}',
    '.ti-body{position:relative;padding:9px 13px 11px 14px;font-size:12.5px;line-height:1.5;color:#d9f7ff;text-shadow:0 0 6px rgba(39,224,255,.35);overflow-wrap:anywhere}',
    '.ti-body::before{content:"> ";color:#27e0ff;font-weight:700}',
    '.ti-resto{visibility:hidden}',
    '.ti-cursor{display:inline-block;width:7px;height:13px;margin:0 1px -2px;background:#27e0ff;box-shadow:0 0 6px #27e0ff;animation:ti-parpadeo .9s steps(2,start) infinite}',
    '.ti-tail{position:absolute;bottom:-9px;left:var(--ti-tx,50%);width:16px;height:10px;margin-left:-8px}',
    '.ti-tail::before,.ti-tail::after{content:"";position:absolute;left:50%;transform:translateX(-50%)}',
    '.ti-tail::before{top:0;width:16px;height:10px;background:#1b9dff;clip-path:polygon(0 0,100% 0,50% 100%)}',
    '.ti-tail::after{top:0;width:12px;height:7.5px;background:#07111f;clip-path:polygon(0 0,100% 0,50% 100%)}',
    '.ti-abajo .ti-tail{bottom:auto;top:-9px;transform:rotate(180deg)}',
    '@keyframes ti-parpadeo{to{opacity:0}}',
    '@keyframes ti-pulso{50%{opacity:.35}}',
    '@media (max-width:768px){.ti-body{font-size:11.5px}}'
  ].join('');

  var estilo = document.createElement('style');
  estilo.textContent = css;
  document.head.appendChild(estilo);

  var caja = document.createElement('div');
  caja.className = 'ti-msg';
  caja.innerHTML =
    '<div class="ti-card"><div class="ti-frame"><div class="ti-inner">' +
    '<div class="ti-head"><span class="ti-dot"></span><span>Área de TI</span><span class="ti-tag">// msg</span></div>' +
    '<div class="ti-body"><span class="ti-escrito"></span><span class="ti-cursor"></span><span class="ti-resto"></span></div>' +
    '</div></div><div class="ti-tail"></div></div>';
  document.body.appendChild(caja);

  var escrito = caja.querySelector('.ti-escrito');
  var resto = caja.querySelector('.ti-resto');
  var indice = 0;
  var escritor = null;
  var ocultador = null;
  var abajo = false;
  var yActual = null;

  function mostrar() {
    var letras = Array.from(MENSAJES[indice % MENSAJES.length]);
    indice++;
    var n = 0;
    clearInterval(escritor);
    clearTimeout(ocultador);
    escrito.textContent = '';
    resto.textContent = letras.join('');
    caja.classList.add('ti-on');
    escritor = setInterval(function () {
      n++;
      escrito.textContent = letras.slice(0, n).join('');
      resto.textContent = letras.slice(n).join('');
      if (n >= letras.length) clearInterval(escritor);
    }, VELOCIDAD);
    ocultador = setTimeout(function () {
      caja.classList.remove('ti-on');
    }, DURACION);
  }

  function posicionar() {
    var cont = document.querySelector('.webmeji-container');
    if (cont) {
      var r = cont.getBoundingClientRect();
      var img = cont.querySelector('img');
      var m = img && /shime(\d+)/.exec(img.getAttribute('src') || '');
      var escala = r.width / ((img && img.naturalWidth) || 280);
      var tope = r.top + (m && TOPES[m[1]] ? TOPES[m[1]] : 20) * escala;
      var w = caja.offsetWidth;
      var h = caja.offsetHeight;
      var cx = r.left + r.width / 2;
      var x = Math.max(8, Math.min(cx - w / 2, window.innerWidth - w - 8));
      var y = tope - h - 2;
      var flip = y < 4;
      if (flip) y = Math.min(r.bottom + 2, window.innerHeight - h - 4);
      if (flip !== abajo) {
        abajo = flip;
        caja.classList.toggle('ti-abajo', flip);
        yActual = null;
      }
      yActual = yActual === null ? y : yActual + (y - yActual) * 0.35;
      var tx = Math.max(18, Math.min(cx - x, w - 18));
      caja.style.setProperty('--ti-tx', tx + 'px');
      caja.style.transform = 'translate(' + Math.round(x) + 'px,' + Math.round(yActual) + 'px)';
    }
    requestAnimationFrame(posicionar);
  }

  requestAnimationFrame(posicionar);
  var iniciado = false;

  function iniciar() {
    if (iniciado) return;
    iniciado = true;
    setTimeout(function () {
      mostrar();
      setInterval(mostrar, INTERVALO);
    }, INICIO);
  }

  window.addEventListener('ingeniero-listo', iniciar);
  setTimeout(iniciar, window.NAVIDAD_INTRO ? 12000 : 0);
})();
