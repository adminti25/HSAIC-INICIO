(function () {
  var NS = 'http://www.w3.org/2000/svg';
  var ALTO = 64;
  var K = 1.3;
  var BASE = 52;
  var ANCHO_SW = 84;
  var ALTO_SW = 24;
  var COLORES = ['#1e88ff', '#ffc928', '#ff7a1a', '#2fcf7a', '#e5484d', '#dfe6f1', '#a070ff', '#19d3ff'];
  var ACENTOS = ['#19d3ff', '#3dff9b', '#ffb020', '#6aa8ff', '#c68bff'];
  var semilla = 1;

  function azar() {
    semilla = (semilla * 16807) % 2147483647;
    return (semilla - 1) / 2147483646;
  }

  function el(tag, attrs, padre) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (padre) padre.appendChild(e);
    return e;
  }

  function suave(p) {
    var d = 'M' + p[0][0].toFixed(1) + ',' + p[0][1].toFixed(1);
    for (var i = 0; i < p.length - 1; i++) {
      var p0 = p[i - 1] || p[i];
      var p1 = p[i];
      var p2 = p[i + 1];
      var p3 = p[i + 2] || p2;
      var c = [
        p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6,
        p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6,
        p2[0], p2[1]
      ];
      d += 'C' + c.map(function (n) { return n.toFixed(1); }).join(',');
    }
    return d;
  }

  function cable(g, puntos, color) {
    var d = suave(puntos);
    var base = { fill: 'none', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' };
    function trazo(extra) {
      var a = {};
      for (var k in base) a[k] = base[k];
      for (var j in extra) a[j] = extra[j];
      return el('path', Object.assign({ d: d }, a), g);
    }
    trazo({ stroke: 'rgba(0,0,0,.28)', 'stroke-width': 4.4, transform: 'translate(0,2)' });
    trazo({ stroke: '#0a1019', 'stroke-width': 4.6 });
    trazo({ stroke: color, 'stroke-width': 3.1 });
    trazo({ stroke: 'rgba(255,255,255,.5)', 'stroke-width': 0.8, transform: 'translate(0,-.9)' });
  }

  function onda(x0, x1, carril, amp, frec, fase, paso) {
    var pts = [];
    for (var x = x0; x < x1; x += paso) pts.push([x, carril + Math.sin(x * frec + fase) * amp]);
    pts.push([x1, carril + Math.sin(x1 * frec + fase) * amp]);
    return pts;
  }

  function enchufe(g, x, y, color) {
    el('rect', { x: x - 3.2, y: y - 1.5, width: 6.4, height: 6.4, rx: 1, fill: '#dfe6f1', stroke: '#1a2230', 'stroke-width': 0.6 }, g);
    el('rect', { x: x - 2.5, y: y + 4, width: 5, height: 3.4, rx: 1, fill: color, stroke: '#0a1019', 'stroke-width': 0.5 }, g);
  }

  function conmutador(g, sx, sy, acento, nombre) {
    el('ellipse', { cx: sx + ANCHO_SW / 2, cy: sy + ALTO_SW + 1, rx: ANCHO_SW * 0.56, ry: 3.2, fill: 'rgba(0,0,0,.3)' }, g);
    el('rect', { x: sx, y: sy, width: ANCHO_SW, height: ALTO_SW, rx: 3, fill: 'url(#pi-cuerpo)', stroke: '#0a1019', 'stroke-width': 0.9 }, g);
    el('rect', { x: sx + 1.5, y: sy + 1.2, width: ANCHO_SW - 3, height: 2, rx: 1, fill: acento, opacity: 0.9 }, g);
    el('rect', { x: sx + 1, y: sy + ALTO_SW - 2.5, width: ANCHO_SW - 2, height: 1.4, rx: 0.7, fill: 'rgba(255,255,255,.08)' }, g);
    var t = el('text', { x: sx + 5, y: sy + 13, fill: acento, 'font-size': 5.6, 'font-weight': 700, 'font-family': 'Consolas,"Courier New",monospace', 'letter-spacing': 0.4 }, g);
    t.textContent = nombre;
    led(g, sx + 6.5, sy + 18.5, '#3dff9b', false);
    led(g, sx + 11.5, sy + 18.5, '#ffb020', true);
    for (var r = 0; r < 2; r++) {
      for (var c = 0; c < 6; c++) {
        var px = sx + 24 + c * 9.4;
        var py = sy + 6 + r * 9;
        el('rect', { x: px, y: py, width: 7, height: 6, rx: 1, fill: '#0b1018', stroke: '#5b6679', 'stroke-width': 0.5 }, g);
        el('rect', { x: px + 1.2, y: py + 3.4, width: 4.6, height: 1.3, fill: '#b8892b', opacity: 0.75 }, g);
        led(g, px + 5.8, py - 1.8, azar() > 0.3 ? '#3dff9b' : '#ffb020', true);
      }
    }
  }

  function led(g, x, y, color, parpadea) {
    var c = el('circle', { cx: x, cy: y, r: 0.95, fill: color }, g);
    if (parpadea) {
      c.setAttribute('class', 'pi-led');
      c.style.animationDuration = (0.9 + azar() * 1.6).toFixed(2) + 's';
      c.style.animationDelay = '-' + (azar() * 2).toFixed(2) + 's';
    }
  }

  function puertoX(sx, col) {
    return sx + 24 + col * 9.4 + 3.5;
  }

  var svg = el('svg', { 'class': 'pi-piso', preserveAspectRatio: 'xMinYMin slice', 'aria-hidden': 'true' });

  var estilo = document.createElement('style');
  estilo.textContent = [
    '.pi-piso{position:fixed;left:0;bottom:0;width:100%;height:' + Math.round(ALTO * K) + 'px;z-index:9996;pointer-events:none;overflow:visible}',
    '.pi-led{animation:pi-led 1.3s steps(1,end) infinite}',
    '@keyframes pi-led{0%{opacity:1}35%{opacity:.15}55%{opacity:1}75%{opacity:.4}}'
  ].join('');
  document.head.appendChild(estilo);
  document.body.appendChild(svg);

  function construir() {
    semilla = 11;
    var W = window.innerWidth / K;
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + ALTO);

    var defs = el('defs', {}, svg);
    var grad = el('linearGradient', { id: 'pi-cuerpo', x1: 0, y1: 0, x2: 0, y2: 1 }, defs);
    el('stop', { offset: '0', 'stop-color': '#4a586c' }, grad);
    el('stop', { offset: '0.45', 'stop-color': '#2b3441' }, grad);
    el('stop', { offset: '1', 'stop-color': '#1b222d' }, grad);

    var arbol = document.querySelector('.nav-arbol');
    var anchoArbol = arbol ? arbol.offsetWidth / K : W * 0.3;
    var limite = W - anchoArbol - 12;
    var n = Math.max(1, Math.min(5, Math.floor((limite - 20) / 170)));
    var xs = [];
    for (var i = 0; i < n; i++) {
      xs.push(Math.round(14 + (n === 1 ? 0 : (limite - ANCHO_SW - 28) * i / (n - 1))));
    }
    var sy = BASE - ALTO_SW;

    var libres = el('g', {}, svg);
    var carriles = [61.5, 58.2, 55.6, 60, 57];
    for (var f = 0; f < 5; f++) {
      cable(libres, onda(-24, W + 24, carriles[f], 1.3 + azar() * 1.1, 0.008 + azar() * 0.02, azar() * 6.28, 30), COLORES[Math.floor(azar() * COLORES.length)]);
    }

    var equipos = el('g', {}, svg);
    for (var s = 0; s < n; s++) conmutador(equipos, xs[s], sy, ACENTOS[s % ACENTOS.length], 'TI-0' + (s + 1));

    var uniones = el('g', {}, svg);
    var salida = sy + 22;

    for (var a = 0; a < n - 1; a++) {
      var m = 2 + (azar() > 0.5 ? 1 : 0);
      for (var k = 0; k < m; k++) {
        var color = COLORES[Math.floor(azar() * COLORES.length)];
        var xa = puertoX(xs[a], 3 + k);
        var xb = puertoX(xs[a + 1], k);
        var carril = 55.8 + k * 2.9 + azar() * 0.6;
        var pts = [[xa, salida], [xa, salida + 4]].concat(onda(xa + 6, xb - 6, carril, 1.1, 0.03 + azar() * 0.02, azar() * 6, 28)).concat([[xb, salida + 4], [xb, salida]]);
        cable(uniones, pts, color);
        enchufe(uniones, xa, salida - 7.4, color);
        enchufe(uniones, xb, salida - 7.4, color);
      }
    }

    [0, 1].forEach(function (k) {
      var color = COLORES[Math.floor(azar() * COLORES.length)];
      var xa = puertoX(xs[0], k);
      var carril = 56 + k * 3;
      var pts = [[xa, salida], [xa, salida + 4], [xa - 8, carril]].concat(onda(-24, xa - 14, carril, 1.1, 0.03, azar() * 6, 28).reverse());
      cable(uniones, pts, color);
      enchufe(uniones, xa, salida - 7.4, color);
    });

    var ult = xs[n - 1];
    [4, 5].forEach(function (col, j) {
      var color = COLORES[Math.floor(azar() * COLORES.length)];
      var xa = puertoX(ult, col);
      var carril = 56.2 + j * 3;
      var pts = [[xa, salida], [xa, salida + 4]].concat(onda(xa + 6, W + 24, carril, 1.1, 0.025, azar() * 6, 28));
      cable(uniones, pts, color);
      enchufe(uniones, xa, salida - 7.4, color);
    });
  }

  var temporizador = null;
  window.addEventListener('resize', function () {
    clearTimeout(temporizador);
    temporizador = setTimeout(construir, 150);
  });

  construir();
  window.addEventListener('load', construir);
})();
