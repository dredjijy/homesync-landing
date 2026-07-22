// Récupère les globals posés par vendor/gsap.min.js et vendor/ScrollTrigger.min.js
// (chargés en scripts classiques avant ce module, donc disponibles sur window)
const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;

// ═══════════════════════════════════════════════════════════════
// I18N — traduction FR / EN de la landing page
// ═══════════════════════════════════════════════════════════════
const TRANSLATIONS = {
  fr: {
    cta: "Rejoindre HomeSync",
    intro_answer: "HomeSync répond à toutes ces questions.",
    scroll_hint: "CONTINUER",
    modules_kicker: "Une seule application",
    modules_title: "Ce qui change vraiment, au quotidien.",
    mc_more: "En savoir plus",
    final_hook: "Arrêtez de gérer votre foyer sur des bouts de papier volants — ou dans votre tête.",
    intro_trust: "🎁 7 jours d'essai gratuit · Sans engagement · Résiliable à tout moment",
    trial_badge: "🎁 7 jours d'essai gratuit",
    final_l1: "Un seul abonnement pour toute la famille, jusqu'à 6 membres — pas un prix par personne.",
    final_l2: "Sans engagement, ni frais cachés · Résiliable en un clic, à tout moment",
    final_trust: "🔒 Paiement sécurisé par Stripe · Vos données restent privées, exportables et supprimables à tout moment",
    cta_final: "Essayer gratuitement 7 jours",
    ask_question: "Posez-nous vos questions →",
    ask_question_short: "Une question ?",
    ask_form_title: "Une question ?",
    ask_form_sub: "On vous répond rapidement, directement par email.",
    ask_form_subject_label: "Sujet",
    ask_form_subject_ph: "Ex : Combien de personnes par foyer ?",
    ask_form_message_label: "Votre message",
    ask_form_message_ph: "Écrivez votre question ici…",
    ask_form_send: "Envoyer",
    ask_form_hint: "Ouvre votre application email, avec tout déjà rempli.",
    pm_title: "Sur quel appareil ?",
    pm_sub: "Pour démarrer votre essai gratuit du bon côté",
    pm_pc_lbl: "Ordinateur",
    pm_android_lbl: "Android", pm_iphone_lbl: "iPhone",
    pm_skip: "Je suis sur ordinateur →",
    pm_skip_direct: "Se connecter sans installer →",
    pm_back: "← Retour",
    pm_android_title: "Installer sur Android",
    pm_android_sub: "3 étapes, moins de 10 secondes",
    pm_a_step1_t: "Appuyez sur \"Continuer\"", pm_a_step1_d: "Vous arrivez sur HomeSync",
    pm_a_step2_t: "Une bannière \"Installer\" apparaît", pm_a_step2_d: "En haut de l'écran de connexion",
    pm_a_step3_t: "Appuyez dessus, confirmez", pm_a_step3_d: "HomeSync s'ajoute à votre écran d'accueil",
    pm_continue: "Commencer mon essai gratuit →",
    pm_iphone_title: "Installer sur iPhone",
    pm_iphone_sub: "Ouvrez bien le lien dans Safari",
    pm_i_step1_t: "Appuyez sur Partager", pm_i_step1_d: "Le carré avec une flèche vers le haut, en bas de Safari",
    pm_i_step2_t: "Choisissez \"Sur l'écran d'accueil\"", pm_i_step2_d: "Faites défiler la liste si besoin",
    pm_i_step3_t: "Appuyez sur \"Ajouter\"", pm_i_step3_d: "HomeSync apparaît comme une vraie app",
    fb1_q: "Qu'est-ce qu'il reste à la maison ?", fb1_title: "Ne rachetez plus ce que vous avez déjà.", fb1_text: "Consultez votre stock en temps réel et sachez immédiatement ce qu'il reste chez vous.",
    fb2_q: "Combien vais-je payer à la caisse ?", fb2_title: "Connaissez le total avant d'arriver en caisse.", fb2_text: "Ajoutez les prix pendant vos courses et gardez votre budget sous contrôle.",
    fb3_q: "Qui fait quoi cette semaine ?", fb3_title: "Toute la famille sait quoi faire.", fb3_text: "Rendez-vous, tâches et événements sont synchronisés automatiquement.",
    mc_stock_tag: "Stock", mc_stock_q: "Qu'est-ce qu'il me reste à la maison ?", mc_stock_a: ["Chaque produit affiche sa date de péremption, pour ne jamais être pris de court.", "Cuisinez une recette et le stock se met à jour tout seul.", "Presque vide ? L'article part directement dans vos courses."],
    mc_courses_tag: "Courses", mc_courses_q: "Qu'est-ce qu'il faut racheter ?", mc_courses_a: ["Ajoutez un article en tapant, ou collez toute une liste d'un coup.", "Cochez au fur et à mesure — une fois validée, la liste rejoint automatiquement le stock.", "Vos listes types se sauvegardent pour la semaine suivante."],
    mc_budget_tag: "Budget", mc_budget_q: "Combien vais-je dépenser ce mois-ci ?", mc_budget_a: ["Le total se calcule pendant vos courses, avant même la caisse.", "Connecté directement aux courses et aux charges récurrentes comme le loyer.", "Un résumé s'exporte en PDF à tout moment."],
    mc_recettes_tag: "Recettes", mc_recettes_q: "Qu'est-ce qu'on mange ce soir… et si je planifie pour toute la semaine ?", mc_recettes_a: ["Cuisinez un plat, et les ingrédients sont déduits automatiquement de votre stock.", "Il vous manque quelque chose ? Un bouton l'ajoute directement aux courses.", "Planifiez la semaine, la liste se génère toute seule."],
    mc_agenda_tag: "Agenda", mc_agenda_q: "Qui fait quoi, et quand ?", mc_agenda_a: ["Les dates de péremption du stock y apparaissent automatiquement, tout comme vos charges récurrentes.", "Toute la famille voit les mêmes rendez-vous, en temps réel.", "Un rappel arrive automatiquement avant l'échéance."],
    mc_membres_tag: "Membres", mc_membres_q: "Comment toute la famille reste connectée ?", mc_membres_a: ["Chaque membre se connecte depuis son propre appareil.", "Ce que l'un ajoute, les autres le voient à l'instant.", "Invitez en un clic, avec un simple code ou un QR code.", "Un seul abonnement suffit pour jusqu'à 6 membres — personne ne paie de son côté."],

    gallery_title: "HomeSync, en vrai",
    gallery_sub: "Un aperçu réel de l'application, telle qu'elle est aujourd'hui.",
    gallery_disclaimer: "Les captures d'écran peuvent différer de la version actuelle de l'application, qui évolue régulièrement.",
    gallery_home_title: "Un coup d'œil, toute la situation",
    gallery_home_text: "Budget du mois, courses en attente, produits qui périment bientôt — tout est là dès l'ouverture.",
    gallery_stock_title: "Le stock, jamais de surprise",
    gallery_stock_text: "Fini le lait qui manque au petit-déjeuner — chaque produit est suivi, avec alerte avant la rupture.",
    gallery_shopping_title: "Les courses, partagées en temps réel",
    gallery_shopping_text: "Chacun coche ce qu'il a acheté, le prix se calcule automatiquement, tout le monde voit la même liste.",
    gallery_budget_title: "Le budget, sans tableur",
    gallery_budget_text: "Qui a dépensé quoi, combien il reste, les charges fixes du mois — clair en un coup d'œil.",
    gallery_recipes_title: "Les repas de la semaine, planifiés",
    gallery_recipes_text: "Un menu par jour, et la liste de courses se remplit automatiquement avec ce qui manque.",
    gallery_tasks_title: "Les tâches, réparties équitablement",
    gallery_tasks_text: "Qui sort les poubelles cette semaine ? Attribuez une tâche, et faites-la tourner automatiquement si besoin.",
    page_title: "HomeSync by Minzri — L'application qui organise votre foyer, en famille",
    page_desc: "Fini les 'on n'a plus de lait', les additions de courses qui explosent le budget et les rendez-vous oubliés. HomeSync synchronise stock, budget, recettes et agenda pour toute la famille, en temps réel. 3,99€/mois, sans engagement.",
    questions: ["Qu'est-ce qu'il reste à la maison… et quand ça périme ?", "Avant de passer en caisse… combien vais-je payer ?", "Qui fait quoi cette semaine ?"],
  },
  en: {
    cta: "Join HomeSync",
    intro_answer: "HomeSync answers all these questions.",
    scroll_hint: "CONTINUE",
    modules_kicker: "One single app",
    modules_title: "What really changes, every day.",
    mc_more: "Learn more",
    final_hook: "Stop managing your household on scattered pieces of paper — or in your head.",
    intro_trust: "🎁 7-day free trial · No commitment · Cancel anytime",
    trial_badge: "🎁 7-day free trial",
    final_l1: "One subscription for the whole family, up to 6 members — not a price per person.",
    final_l2: "No commitment, no hidden fees · Cancel anytime, in one click",
    final_trust: "🔒 Secure payment via Stripe · Your data stays private, exportable and deletable anytime",
    cta_final: "Try free for 7 days",
    ask_question: "Ask us your questions →",
    ask_question_short: "Got a question?",
    ask_form_title: "Got a question?",
    ask_form_sub: "We'll get back to you quickly, directly by email.",
    ask_form_subject_label: "Subject",
    ask_form_subject_ph: "E.g. How many people per household?",
    ask_form_message_label: "Your message",
    ask_form_message_ph: "Write your question here…",
    ask_form_send: "Send",
    ask_form_hint: "Opens your email app, with everything pre-filled.",
    pm_title: "Which device?",
    pm_sub: "To start your free trial the right way",
    pm_pc_lbl: "Computer",
    pm_android_lbl: "Android", pm_iphone_lbl: "iPhone",
    pm_skip: "I'm on a computer →",
    pm_skip_direct: "Log in without installing →",
    pm_back: "← Back",
    pm_android_title: "Install on Android",
    pm_android_sub: "3 steps, less than 10 seconds",
    pm_a_step1_t: "Tap \"Continue\"", pm_a_step1_d: "You'll land on HomeSync",
    pm_a_step2_t: "An \"Install\" banner appears", pm_a_step2_d: "At the top of the login screen",
    pm_a_step3_t: "Tap it, confirm", pm_a_step3_d: "HomeSync is added to your home screen",
    pm_continue: "Start my free trial →",
    pm_iphone_title: "Install on iPhone",
    pm_iphone_sub: "Make sure to open the link in Safari",
    pm_i_step1_t: "Tap Share", pm_i_step1_d: "The square with an arrow pointing up, at the bottom of Safari",
    pm_i_step2_t: "Choose \"Add to Home Screen\"", pm_i_step2_d: "Scroll the list if needed",
    pm_i_step3_t: "Tap \"Add\"", pm_i_step3_d: "HomeSync appears as a real app",
    fb1_q: "What's left at home?", fb1_title: "Stop buying what you already have.", fb1_text: "Check your stock in real time and know instantly what's left at home.",
    fb2_q: "How much will I pay at checkout?", fb2_title: "Know the total before you reach the register.", fb2_text: "Add prices as you shop and keep your budget under control.",
    fb3_q: "Who's doing what this week?", fb3_title: "The whole family knows what to do.", fb3_text: "Appointments, tasks and events sync automatically.",
    mc_stock_tag: "Stock", mc_stock_q: "What's left at home?", mc_stock_a: ["Every product shows its expiry date, so you're never caught off guard.", "Cook a recipe and the stock updates itself.", "Almost empty? The item goes straight to your shopping list."],
    mc_courses_tag: "Shopping", mc_courses_q: "What do I need to buy?", mc_courses_a: ["Add an item by typing, or paste a whole list at once.", "Check items off as you go — once validated, the list automatically joins the stock.", "Save your usual lists for next week."],
    mc_budget_tag: "Budget", mc_budget_q: "How much will I spend this month?", mc_budget_a: ["The total is calculated as you shop, before you even reach the register.", "Directly connected to shopping and recurring charges like rent.", "Export a summary as PDF anytime."],
    mc_recettes_tag: "Recipes", mc_recettes_q: "What's for dinner tonight… and what about planning the whole week?", mc_recettes_a: ["Cook a dish, and ingredients are automatically deducted from your stock.", "Missing something? A button adds it straight to your shopping list.", "Plan the week, the list builds itself."],
    mc_agenda_tag: "Calendar", mc_agenda_q: "Who's doing what, and when?", mc_agenda_a: ["Stock expiry dates appear here automatically, along with your recurring charges.", "The whole family sees the same events, in real time.", "A reminder arrives automatically before the deadline."],
    mc_membres_tag: "Members", mc_membres_q: "How does the whole family stay connected?", mc_membres_a: ["Each member logs in from their own device.", "What one adds, the others see instantly.", "Invite in one click, with a simple code or QR code.", "One subscription covers up to 6 members — no one pays individually."],

    gallery_title: "HomeSync, for real",
    gallery_sub: "A real look at the app, as it stands today.",
    gallery_disclaimer: "Screenshots may differ from the current version of the app, which is updated regularly.",
    gallery_home_title: "One glance, the whole picture",
    gallery_home_text: "This month's budget, pending shopping, products expiring soon — all there as soon as you open it.",
    gallery_stock_title: "Stock, never a surprise",
    gallery_stock_text: "No more running out of milk at breakfast — every product is tracked, with an alert before it runs out.",
    gallery_shopping_title: "Shopping, shared in real time",
    gallery_shopping_text: "Everyone checks off what they bought, the price adds up automatically, everyone sees the same list.",
    gallery_budget_title: "Budget, without a spreadsheet",
    gallery_budget_text: "Who spent what, how much is left, this month's fixed charges — clear at a glance.",
    gallery_recipes_title: "This week's meals, planned",
    gallery_recipes_text: "One meal per day, and the shopping list fills up automatically with what's missing.",
    gallery_tasks_title: "Chores, shared fairly",
    gallery_tasks_text: "Whose turn is it to take out the trash this week? Assign a task, and let it rotate automatically if needed.",
    page_title: "HomeSync by Minzri — The app that organizes your household, as a family",
    page_desc: "No more 'we're out of milk', grocery totals that blow the budget, or forgotten appointments. HomeSync syncs stock, budget, recipes and calendar for the whole family, in real time. $3.99/month, no commitment.",
    questions: ["What's left at home… and when does it expire?", "Before I check out… how much will I pay?", "Who's doing what this week?"],
  }
};

function detectLang() {
  try {
    const saved = localStorage.getItem('homesync_landing_lang');
    if (saved === 'fr' || saved === 'en') return saved;
  } catch {}
  return (navigator.language || 'fr').toLowerCase().startsWith('en') ? 'en' : 'fr';
}

let currentLang = detectLang();

function applyLang(lang) {
  currentLang = lang;
  try { localStorage.setItem('homesync_landing_lang', lang); } catch {}
  const dict = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });
  // Panneaux de modules — chaque phrase de la réponse sur sa propre ligne, aérée
  document.querySelectorAll('.mc-panel-inner[data-mc]').forEach(el => {
    const mod = el.getAttribute('data-mc');
    const sentences = dict[`mc_${mod}_a`];
    if (Array.isArray(sentences)) {
      el.innerHTML = sentences.map(s => `<p>${s}</p>`).join('');
    }
  });
  document.title = dict.page_title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', dict.page_desc);
  document.documentElement.lang = lang;
  // Le prix mélange texte et balise imbriquée — géré à part de la boucle générique data-i18n
  const priceEl = document.getElementById('priceDisplay');
  if (priceEl) {
    priceEl.innerHTML = lang === 'en'
      ? '€3.99 <span class="per">/ month</span>'
      : '3,99€ <span class="per">/ mois</span>';
  }
  // Locale Open Graph — reflète la langue actuellement affichée
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', lang === 'en' ? 'en_US' : 'fr_FR');
  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  // Les libellés d'accessibilité des modules dépendent du texte traduit
  document.querySelectorAll('.module-card').forEach(card => {
    const q = card.querySelector('.mc-q');
    if (q) card.setAttribute('aria-label', (lang==='en'?'See the answer: ':'Voir la réponse : ') + q.textContent);
  });
}
applyLang(currentLang);
document.querySelectorAll('.lang-toggle button').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// ── Modules cliquables : ouvre/ferme le détail au clic, un seul ouvert à la fois ──
document.querySelectorAll('.module-card').forEach(card => {
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-expanded', 'false');
  const q = card.querySelector('.mc-q');
  if (q) card.setAttribute('aria-label', 'Voir la réponse : ' + q.textContent);

  const toggle = () => {
    const wasOpen = card.classList.contains('open');
    document.querySelectorAll('.module-card.open').forEach(c => { c.classList.remove('open'); c.setAttribute('aria-expanded', 'false'); });
    if (!wasOpen) { card.classList.add('open'); card.setAttribute('aria-expanded', 'true'); }
    if (window.ScrollTrigger) setTimeout(() => ScrollTrigger.refresh(), 500);
  };
  card.addEventListener('click', toggle);
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
});

const APP_URL = "https://home-sync-beta.vercel.app";

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

// ── Formulaire "Posez-nous vos questions" ──
const askOverlay = document.getElementById('askOverlay');
const askForm = document.getElementById('askForm');
const CONTACT_EMAIL = 'part.kobbaz@outlook.fr';

function askOpen() { askOverlay.classList.add('show'); document.getElementById('askSubject').focus(); }
function askClose() { askOverlay.classList.remove('show'); }

document.getElementById('askBtnNav').addEventListener('click', askOpen);
document.getElementById('askBtnFinal').addEventListener('click', askOpen);
document.getElementById('askClose').addEventListener('click', askClose);
askOverlay.addEventListener('click', (e) => { if (e.target === askOverlay) askClose(); });

askForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const subject = document.getElementById('askSubject').value.trim();
  const message = document.getElementById('askMessage').value.trim();
  if (!subject || !message) return;
  const mailSubject = encodeURIComponent(`HomeSync — ${subject}`);
  const mailBody = encodeURIComponent(message);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${mailSubject}&body=${mailBody}`;
  askClose();
  askForm.reset();
});

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
// Accessibilité clavier pour tous les éléments agissant comme des boutons (role="button")
document.querySelectorAll('[role="button"]').forEach(el => {
  el.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && !el.classList.contains('module-card')) {
      e.preventDefault();
      el.click();
    }
  });
});
document.getElementById('pmBack1').addEventListener('click', pmShowChoice);
document.getElementById('pmBack2').addEventListener('click', pmShowChoice);
document.getElementById('pmSkip').addEventListener('click', () => { window.location.href = APP_URL; });
document.getElementById('pmSkipAndroid').addEventListener('click', () => { window.location.href = APP_URL; });
document.getElementById('pmSkipIphone').addEventListener('click', () => { window.location.href = APP_URL; });
document.getElementById('pmGoAndroid').addEventListener('click', (e) => { e.preventDefault(); window.location.href = APP_URL; });
document.getElementById('pmGoIphone').addEventListener('click', (e) => { e.preventDefault(); window.location.href = APP_URL; });
pmOverlay.addEventListener('click', (e) => { if (e.target === pmOverlay) pmClose(); });

const gsapReady = (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (gsapReady && !reduced) {
  gsap.registerPlugin(ScrollTrigger);

  /* ── séquence d'ouverture (autoplay, indépendante du scroll) ── */
  const QUESTIONS = TRANSLATIONS[currentLang].questions;
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
    await wait(450);
    document.getElementById('introBy').classList.add('show');
    await wait(350);
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
  document.getElementById('introBy').classList.add('show');
  document.getElementById('introCta').classList.add('show');
  document.getElementById('nav').classList.add('show');
  document.querySelectorAll('.rv').forEach(el=> el.classList.add('in'));
}

// ── Fond "verre dépoli" de la nav dès qu'on a scrollé un peu — indépendant de GSAP ──
const navEl = document.getElementById('nav');
const updateNavBg = () => { navEl.classList.toggle('scrolled', window.scrollY > 40); };
window.addEventListener('scroll', updateNavBg, { passive:true });
updateNavBg();

// ── Galerie de captures d'écran — carrousel simple, sans dépendance ──
(function initGallery() {
  const slides = Array.from(document.querySelectorAll('.gallery-slide'));
  const dotsWrap = document.getElementById('galleryDots');
  const prevBtn = document.getElementById('galleryPrev');
  const nextBtn = document.getElementById('galleryNext');
  if (!slides.length || !dotsWrap || !prevBtn || !nextBtn) return;

  let current = 0;
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'gallery-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function goTo(i) {
    current = (i + slides.length) % slides.length;
    slides.forEach((s, idx) => s.classList.toggle('active', idx === current));
    dots.forEach((d, idx) => d.classList.toggle('active', idx === current));
  }
  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  // Défilement automatique discret, en pause si l'utilisateur interagit
  let autoTimer = setInterval(() => goTo(current + 1), 5000);
  const pauseAuto = () => { clearInterval(autoTimer); autoTimer = null; };
  [prevBtn, nextBtn, ...dots].forEach(el => el.addEventListener('click', pauseAuto));
})();
