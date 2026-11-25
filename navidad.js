(function () {
  if (typeof Creature === 'undefined') return;

  window.NAVIDAD_INTRO = true;

  var IMAGEN = 'arbol.png';
  var LUCES_A = 'luces_a.png';
  var LUCES_B = 'luces_b.png';
  var DURACION = 1900;
  var CONTACTO = 0.5;
  var PAUSA = 250;
  var MAXIMO = 6000;
  var TIEMPO_LUCES = 10000;
  var ESPERA_LUCES = 20000;
  var ESPERA_INICIAL = 8000;
  var FRAME_LUCES = /shime21\.png$/;

  var css = [
    '.nav-arbol{position:fixed;right:0;bottom:0;width:clamp(200px,min(32vw,56vh),500px);z-index:9998;pointer-events:none;user-select:none;-webkit-user-select:none;transform-origin:50% 100%;visibility:hidden}',
    '.nav-base{display:block;width:100%;height:auto;position:relative;z-index:1;-webkit-user-drag:none}',
    '.nav-arbol.nav-cae{visibility:visible;animation:nav-cae ' + DURACION + 'ms linear both}',
    '.nav-halo{position:absolute;left:48.75%;top:8.4%;width:46%;aspect-ratio:1;border-radius:50%;transform:translate(-50%,-50%) scale(.6);background:radial-gradient(circle,rgba(255,238,190,.95) 0,rgba(255,226,150,.45) 32%,rgba(255,226,150,0) 68%);opacity:0;transition:opacity .9s ease,transform .9s ease;z-index:0;pointer-events:none}',
    '.nav-on .nav-halo{opacity:1;transform:translate(-50%,-50%) scale(1);transition:opacity .35s ease,transform .6s ease}',
    '.nav-luces{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;transition:opacity .9s ease;z-index:2;pointer-events:none}',
    '.nav-on .nav-luces{opacity:1;transition:opacity .25s ease}',
    '.nav-luces-in{position:absolute;left:0;top:0;width:100%;height:100%}',
    '.nav-on .nav-luces-in{animation:nav-enciende .9s linear both}',
    '.nav-luces img{position:absolute;left:0;top:0;width:100%;height:100%;-webkit-user-drag:none}',
    '.nav-on .nav-luces .nav-a{animation:nav-brillo 1.6s ease-in-out infinite}',
    '.nav-on .nav-luces .nav-b{animation:nav-brillo 1.6s ease-in-out -.8s infinite}',
    '.nav-polvo{position:absolute;left:-14%;bottom:-6px;width:128%;height:44px;border-radius:50%;background:radial-gradient(ellipse at center,rgba(255,255,255,.9) 0%,rgba(205,222,245,.5) 45%,rgba(205,222,245,0) 72%);opacity:0;pointer-events:none;z-index:3}',
    '.nav-cae .nav-polvo{animation:nav-polvo 800ms ease-out ' + Math.round(DURACION * CONTACTO) + 'ms forwards}',
    '@keyframes nav-cae{',
    '0%{transform:translateY(calc(-100vh - 110%)) rotate(-2deg);animation-timing-function:cubic-bezier(.5,0,.9,.55)}',
    '50%{transform:translateY(0) rotate(0) scale(1,1);animation-timing-function:ease-out}',
    '54%{transform:translateY(0) scale(1.07,.9);animation-timing-function:ease-out}',
    '66%{transform:translateY(-7%) scale(.98,1.03);animation-timing-function:ease-in}',
    '76%{transform:translateY(0) scale(1.03,.96);animation-timing-function:ease-out}',
    '86%{transform:translateY(-2%) scale(.995,1.01);animation-timing-function:ease-in}',
    '100%{transform:translateY(0) scale(1,1)}}',
    '@keyframes nav-polvo{0%{opacity:.9;transform:scale(.45,.3)}100%{opacity:0;transform:scale(1.15,1)}}',
    '@keyframes nav-brillo{0%,100%{opacity:.4}50%{opacity:1}}',
    '@keyframes nav-enciende{0%{opacity:0}10%{opacity:1}20%{opacity:.2}32%{opacity:1}44%{opacity:.45}58%,100%{opacity:1}}',
    '@media (max-width:768px){.nav-arbol{width:clamp(150px,42vw,240px)}}'
  ].join('');

  var estilo = document.createElement('style');
  estilo.textContent = css;
  document.head.appendChild(estilo);

  function imagen(clase, src) {
    var i = document.createElement('img');
    i.className = clase;
    i.alt = '';
    i.draggable = false;
    if (src) i.src = src;
    return i;
  }

  var arbol = document.createElement('div');
  arbol.className = 'nav-arbol';
  var halo = document.createElement('span');
  halo.className = 'nav-halo';
  var base = imagen('nav-base');
  var luces = document.createElement('div');
  luces.className = 'nav-luces';
  var lucesIn = document.createElement('div');
  lucesIn.className = 'nav-luces-in';
  lucesIn.appendChild(imagen('nav-a', LUCES_A));
  lucesIn.appendChild(imagen('nav-b', LUCES_B));
  luces.appendChild(lucesIn);
  var polvo = document.createElement('span');
  polvo.className = 'nav-polvo';
  arbol.appendChild(halo);
  arbol.appendChild(base);
  arbol.appendChild(luces);
  arbol.appendChild(polvo);
  document.body.appendChild(arbol);

  var criatura = null;
  var aterrizado = false;
  var arrancado = false;
  var encendido = false;
  var apagador = null;
  var instalador = null;

  function programar(espera) {
    clearTimeout(instalador);
    var retraso = criatura ? criatura.retrasoLuces() : 0;
    instalador = setTimeout(intentarInstalar, Math.max(0, espera - retraso));
  }

  function intentarInstalar() {
    if (encendido) return;
    if (criatura && criatura.forzarInstalar()) return;
    instalador = setTimeout(intentarInstalar, 500);
  }

  function encender() {
    clearTimeout(instalador);
    if (encendido) return;
    encendido = true;
    arbol.classList.add('nav-on');
    clearTimeout(apagador);
    apagador = setTimeout(function () {
      encendido = false;
      arbol.classList.remove('nav-on');
      programar(ESPERA_LUCES);
    }, TIEMPO_LUCES);
  }

  function intentarSoltar() {
    if (aterrizado && criatura) criatura.soltar();
  }

  function aterrizar() {
    aterrizado = true;
    intentarSoltar();
  }

  function caer() {
    if (arrancado) return;
    arrancado = true;
    requestAnimationFrame(function () {
      arbol.classList.add('nav-cae');
      setTimeout(aterrizar, Math.round(DURACION * CONTACTO) + PAUSA);
    });
  }

  base.addEventListener('load', caer);
  base.addEventListener('error', aterrizar);
  base.src = IMAGEN;
  if (base.complete && base.naturalWidth) caer();
  setTimeout(aterrizar, MAXIMO);

  var Base = Creature;

  Creature = class extends Base {
    constructor(id, cfg) {
      super(id, cfg);
      var yo = this;
      this.resetAnimation();
      this.isFalling = true;
      this.soltado = false;
      this.avisado = false;
      this.container.style.visibility = 'hidden';
      new MutationObserver(function () {
        if (FRAME_LUCES.test(yo.img.getAttribute('src') || '')) encender();
      }).observe(this.img, { attributes: true, attributeFilter: ['src'] });
      criatura = this;
      intentarSoltar();
    }

    soltar() {
      if (this.soltado) return;
      this.soltado = true;
      var tope = window.innerWidth - this.containerWidth;
      var izquierda = arbol.getBoundingClientRect().left - this.containerWidth - 10;
      this.positionX = Math.max(0, Math.min(izquierda, tope));
      this.positionY = -this.containerHeight;
      this.direction = -1;
      this.facing = 'left';
      this.updateImageDirection();
      this.container.style.left = this.positionX + 'px';
      this.container.style.top = this.positionY + 'px';
      this.container.style.visibility = 'visible';
      this.isFalling = false;
      this.fallToBottom(Math.max(900, window.innerHeight * 1.15));
    }

    retrasoLuces() {
      var cfg = this.spriteConfig.install;
      if (!cfg) return 0;
      for (var i = 0; i < cfg.frames.length; i++) {
        if (FRAME_LUCES.test(cfg.frames[i])) return i * cfg.interval;
      }
      return 0;
    }

    forzarInstalar() {
      if (!this.spriteConfig.install) return false;
      if (this.isDragging || this.isFalling || this.isPetting || this.isJumping) return false;
      if (this.currentEdge !== 'bottom') return false;
      this.startAction('install');
      return true;
    }

    resumeAfterFallen() {
      super.resumeAfterFallen();
      if (!this.avisado && !this.isFalling && !this.isDragging) {
        this.avisado = true;
        window.dispatchEvent(new Event('ingeniero-listo'));
        programar(ESPERA_INICIAL);
      }
    }
  };
})();
