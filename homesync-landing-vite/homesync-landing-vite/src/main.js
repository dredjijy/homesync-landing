// Récupère les globals posés par vendor/gsap.min.js et vendor/ScrollTrigger.min.js
// (chargés en scripts classiques avant ce module, donc disponibles sur window)
const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;

const APP_URL = "https://home-sync-git-main-dredjis-projects.vercel.app";

// ── Modale de choix plateforme — interceptée sur les 3 CTA "Commencer" ──
const pmOverlay = document.getElementById('pmOverlay');
const pmChoiceScreen = document.getElementById('pmChoiceScreen');
const pmStepsAndroid = document.getElementById('pmStepsAndroid');
const pmStepsIphone  = document.getElementById('pmStepsIphone');

function pmShowChoice() {
  pmChoiceScreen.style.display = 'block';
  pmStepsAndroid.classList.remove('show');
  pmStepsIphone.classList.remove('show');
}
function pmOpen() { pmOverlay.classList.add('show'); pmShowChoice(); }
function pmClose() { pmOverlay.classList.remove('show'); }

document.querySelectorAll('#ctaNav,#introCta,#ctaFinal').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    pmOpen();
  });
});

document.getElementById('pmAndroid').addEventListener('click', () => {
  pmChoiceScreen.style.display = 'none';
  pmStepsAndroid.classList.add('show');
});
document.getElementById('pmIphone').addEventListener('click', () => {
  pmChoiceScreen.style.display = 'none';
  pmStepsIphone.classList.add('show');
});
document.getElementById('pmBack1').addEventListener('click', pmShowChoice);
document.getElementById('pmBack2').addEventListener('click', pmShowChoice);
document.getElementById('pmSkip').addEventListener('click', () => { window.location.href = APP_URL; });
document.getElementById('pmGoAndroid').addEventListener('click', (e) => { e.preventDefault(); window.location.href = APP_URL; });
document.getElementById('pmGoIphone').addEventListener('click', (e) => { e.preventDefault(); window.location.href = APP_URL; });
pmOverlay.addEventListener('click', (e) => { if (e.target === pmOverlay) pmClose(); });

const gsapReady = (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (gsapReady && !reduced) {
  gsap.registerPlugin(ScrollTrigger);

  /* ── séquence d'ouverture (autoplay, indépendante du scroll) ── */
  const qLines = document.querySelectorAll('.q-line');
  qLines.forEach(el => { el.style.display='block'; }); // réactive les 3 questions (display:none par défaut pour q1/q2)

  const tl = gsap.timeline({ delay:0.3 });
  tl.set('#introGlow', { opacity:0 })
    .to('#introGlow', { opacity:1, duration:1.2 }, 0)
    .set(qLines[0], { opacity:1 })
    .to(qLines[0], { opacity:0, y:-14, duration:0.35, ease:'power1.in' }, 1.5)
    .fromTo(qLines[1], { opacity:0, y:14 }, { opacity:1, y:0, duration:0.45 }, 1.85)
    .to(qLines[1], { opacity:0, y:-14, duration:0.35, ease:'power1.in' }, 3.35)
    .fromTo(qLines[2], { opacity:0, y:14 }, { opacity:1, y:0, duration:0.45 }, 3.7)
    .to(qLines[2], { opacity:0, y:-14, duration:0.35, ease:'power1.in' }, 4.9)
    .add(()=> document.getElementById('introPhone').classList.add('show'), 5.15)
    .add(()=>{
      document.querySelectorAll('.sync-ic').forEach((el,i)=>{
        gsap.delayedCall(i*0.16, ()=> el.classList.add('show'));
      });
    }, 5.75)
    .add(()=> document.getElementById('introAnswer').classList.add('show'), 6.9)
    .add(()=> document.getElementById('introCta').classList.add('show'), 7.5)
    .add(()=>{
      document.getElementById('scrollHint').classList.add('show');
      document.getElementById('nav').classList.add('show');
    }, 7.9);

  /* ── reveal des micro-sections au scroll ── */
  document.querySelectorAll('.rv').forEach(el=>{
    ScrollTrigger.create({
      trigger:el, start:'top 75%',
      onEnter:()=>el.classList.add('in'),
      once:true
    });
  });

  /* ── micro 2 : compteur budget ── */
  ScrollTrigger.create({
    trigger:'#m2', start:'top 65%', once:true,
    onEnter:()=>{
      const el = document.getElementById('budgetTotal');
      const obj = { v:0 };
      gsap.to(obj, { v:7.30, duration:1.2, delay:0.3, ease:'power2.out',
        onUpdate:()=> el.textContent = obj.v.toFixed(2).replace('.',',')+'€' });
    }
  });

  /* ── micro 3 : sync entre 2 téléphones ── */
  ScrollTrigger.create({
    trigger:'#m3', start:'top 60%', once:true,
    onEnter:()=>{
      gsap.delayedCall(0.6, ()=>{
        const row = document.getElementById('famRow');
        row.style.transition='background .5s ease';
        row.style.background='#EAF9EE';
        gsap.delayedCall(0.9, ()=> row.style.background='#fff');
      });
    }
  });

  /* ── nav visible après l'intro, même sans scroll (déjà géré dans la timeline) ── */
  window.addEventListener('load', ()=> ScrollTrigger.refresh());
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(()=> ScrollTrigger.refresh());

} else {
  /* GSAP indisponible ou reduced-motion : tout reste visible statiquement, rien de caché */
  document.querySelectorAll('.q-line[data-q="1"],.q-line[data-q="2"]').forEach(el=> el.style.display='none');
  document.getElementById('introPhone').classList.add('show');
  document.querySelectorAll('.sync-ic').forEach(el=> el.classList.add('show'));
  document.getElementById('introAnswer').classList.add('show');
  document.getElementById('introCta').classList.add('show');
  document.getElementById('nav').classList.add('show');
  document.querySelectorAll('.rv').forEach(el=> el.classList.add('in'));
}
