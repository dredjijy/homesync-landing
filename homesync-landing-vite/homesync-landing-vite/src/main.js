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
  const QUESTIONS = [
    "Qu'est-ce qu'il reste à la maison ?",
    "Avant de passer en caisse… combien vais-je payer ?",
    "Qui fait quoi cette semaine ?"
  ];
  const typedEl = document.getElementById('typedText');
  const wait = (ms) => new Promise(r => setTimeout(r, ms));

  async function typeQuestion(text) {
    for (let i = 0; i <= text.length; i++) {
      typedEl.textContent = text.slice(0, i);
      await wait(32);
    }
    await wait(2000); // reste affichée ~2s
    for (let i = text.length; i >= 0; i--) {
      typedEl.textContent = text.slice(0, i);
      await wait(16);
    }
    await wait(250); // petite pause avant la question suivante
  }

  async function runIntroSequence() {
    gsap.to('#introGlow', { opacity:1, duration:1.2 });
    await wait(300);
    for (const q of QUESTIONS) await typeQuestion(q);

    // La barre de recherche a fini son rôle — elle s'efface avant que le téléphone arrive
    await gsap.to('#searchStage', { opacity:0, duration:0.5, ease:'power1.in' });

    await wait(200);
    document.getElementById('introPhone').classList.add('show');
    await wait(600);
    document.querySelectorAll('.sync-ic').forEach((el,i)=>{
      gsap.delayedCall(i*0.16, ()=> el.classList.add('show'));
    });
    await wait(600 + 5*160 + 200);
    document.getElementById('introAnswer').classList.add('show');
    await wait(600);
    document.getElementById('introCta').classList.add('show');
    await wait(400);
    document.getElementById('scrollHint').classList.add('show');
    document.getElementById('nav').classList.add('show');
  }
  runIntroSequence();

  /* ── reveal des sections (final, etc.) ── */
  document.querySelectorAll('.rv').forEach(el=>{
    ScrollTrigger.create({
      trigger:el, start:'top 75%',
      onEnter:()=>el.classList.add('in'),
      once:true
    });
  });

  /* ── FEATURES : téléphone sticky, écran + texte synchronisés au scroll ── */
  const featScreens = {
    fb1: document.getElementById('featScreenStock'),
    fb2: document.getElementById('featScreenBudget'),
    fb3: document.getElementById('featScreenFamille'),
  };
  function activateFeatScreen(key) {
    Object.values(featScreens).forEach(s => s.classList.remove('active'));
    featScreens[key].classList.add('active');
  }

  ['fb1','fb2','fb3'].forEach((id) => {
    const block = document.getElementById(id);
    const dir = block.dataset.dir === 'left' ? -60 : 60;
    const title = block.querySelector('.fb-title');
    const text  = block.querySelector('.fb-text');
    gsap.set([title, text], { opacity:0, x:dir }); // état initial (JS actif uniquement)

    ScrollTrigger.create({
      trigger: block, start: 'top 65%', end: 'bottom 35%',
      onEnter: () => {
        activateFeatScreen(id);
        gsap.to(title, { opacity:1, x:0, duration:0.6, ease:'power2.out' });
        gsap.to(text,  { opacity:1, x:0, duration:0.6, delay:0.1, ease:'power2.out' });
      },
      onEnterBack: () => {
        activateFeatScreen(id);
        gsap.to(title, { opacity:1, x:0, duration:0.4 });
        gsap.to(text,  { opacity:1, x:0, duration:0.4 });
      },
    });
  });

  /* ── bloc budget : compteur du total ── */
  ScrollTrigger.create({
    trigger:'#fb2', start:'top 65%', once:true,
    onEnter:()=>{
      const el = document.getElementById('budgetTotal');
      const obj = { v:0 };
      gsap.to(obj, { v:7.30, duration:1.2, delay:0.3, ease:'power2.out',
        onUpdate:()=> el.textContent = obj.v.toFixed(2).replace('.',',')+'€' });
    }
  });

  /* ── bloc famille : flash de synchronisation ── */
  ScrollTrigger.create({
    trigger:'#fb3', start:'top 65%', once:true,
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
  document.getElementById('typedText').textContent = "Qu'est-ce qu'il reste à la maison ?";
  document.getElementById('introPhone').classList.add('show');
  document.querySelectorAll('.sync-ic').forEach(el=> el.classList.add('show'));
  document.getElementById('introAnswer').classList.add('show');
  document.getElementById('introCta').classList.add('show');
  document.getElementById('nav').classList.add('show');
  document.querySelectorAll('.rv').forEach(el=> el.classList.add('in'));
}
