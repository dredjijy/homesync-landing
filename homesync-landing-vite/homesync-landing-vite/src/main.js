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
    final_l2a: "Sans engagement, ni frais cachés",
    final_l2b: "Résiliable en un clic, à tout moment",
    final_trust_a: "🔒 Paiement sécurisé par Stripe",
    final_trust_b: "Vos données restent privées, exportables et supprimables à tout moment",
    cta_final: "Essayer gratuitement 7 jours",
    ask_question: "Posez-nous vos questions →",
    ask_question_short: "Une question ?",
    nav_ambassador: "🤝 Devenir ambassadeur",
    amb_login_title: "Espace ambassadeur",
    amb_login_sub: "Connectez-vous pour accéder à votre tableau de bord.",
    amb_app_user_hint: "Déjà un compte HomeSync ? Connectez-vous directement avec — votre profil ambassadeur se crée automatiquement.",
    amb_login_submit: "Se connecter",
    amb_register_title: "Devenir ambassadeur",
    amb_register_sub: "Créez votre compte pour recevoir votre lien de parrainage.",
    amb_register_submit: "Créer mon compte",
    amb_switch_to_register: "Pas encore ambassadeur ? S'inscrire",
    amb_switch_to_login: "Déjà inscrit ? Se connecter",
    amb_name_lbl: "Nom",
    amb_email_lbl: "Email",
    amb_pass_lbl: "Mot de passe",
    amb_err_name: "Merci de renseigner votre nom.",
    amb_err_email: "Merci de renseigner un email valide.",
    amb_err_pass: "Le mot de passe doit faire au moins 6 caractères.",
    amb_err_generic: "Un souci est survenu — réessayez dans un instant.",
    amb_signout: "Déconnexion",
    amb_link_lbl: "Votre lien de parrainage",
    amb_share_btn: "Partager",
    amb_share_text: "J'utilise HomeSync pour organiser mon foyer — je te le recommande :",
    amb_stat_pending: "Commissions en attente",
    amb_stat_active: "Abonnés actifs",
    amb_stat_total: "Clients apportés",
    amb_stat_earned: "Gagné au total",
    amb_bank_title: "💳 Coordonnées bancaires",
    amb_iban_lbl: "IBAN",
    amb_iban_holder_lbl: "Nom du titulaire",
    amb_bank_save: "Enregistrer",
    amb_history_title: "🧾 Historique des commissions",
    amb_history_empty: "Aucune commission pour l'instant.",
    amb_status_active: "Actif",
    amb_status_pending: "En attente de validation",
    amb_status_suspended: "Suspendu",
    amb_voided: "Annulée",
    ask_form_title: "Une question ?",
    ask_form_sub: "On vous répond rapidement, directement par email.",
    ask_form_subject_label: "Sujet",
    ask_form_subject_ph: "Ex : Combien de personnes par foyer ?",
    ask_form_message_label: "Votre message",
    ask_form_message_ph: "Écrivez votre question ici…",
    ask_form_send: "Envoyer",
    ask_form_hint: "Ouvre votre application email, avec tout déjà rempli.",
    pm_title: "Sur quel appareil ?",
    pm_sub: "Choisissez votre appareil pour l'installer en quelques secondes",
    pm_pc_lbl: "Ordinateur",
    pm_direct_login: "Connexion / Inscription",
    pm_direct_hint: "Déjà décidé ? Passez directement à l'app, sans les étapes d'installation.",
    pm_download_lbl: "Installer l'application",
    pm_or: "ou",
    pm_desktop_title: "Installer sur ordinateur",
    pm_desktop_sub: "Chrome, Edge, Opera, Brave...",
    pm_d_step1_t: "Appuyez sur \"Continuer\" ci-dessous", pm_d_step1_d: "Vous arrivez directement sur HomeSync",
    pm_d_step2_t: "Repérez l'icône d'installation", pm_d_step2_d: "Dans la barre d'adresse, à droite — une icône ⊕ ou un écran avec une flèche",
    pm_d_step3_t: "Cliquez dessus, confirmez", pm_d_step3_d: "HomeSync s'installe comme une vraie application",
    pm_desktop_note: "Sur Firefox ou Safari (Mac), l'installation n'est pas proposée — vous pouvez utiliser HomeSync directement dans le navigateur, sans rien installer.",
    pm_android_lbl: "Android", pm_iphone_lbl: "iPhone",
    pm_skip: "Je suis sur ordinateur →",
    pm_skip_direct: "Se connecter sans installer →",
    pm_back: "← Retour",
    pm_android_title: "Installer sur Android",
    pm_android_sub: "3 étapes, moins de 10 secondes",
    pm_a_step1_t: "Appuyez sur \"Continuer\" ci-dessous", pm_a_step1_d: "Vous arrivez directement sur HomeSync",
    pm_a_step2_t: "Ouvrez le menu ⋮ de Chrome", pm_a_step2_d: "En haut à droite de l'écran",
    pm_a_step3_t: "Appuyez sur \"Installer\"", pm_a_step3_d: "HomeSync s'ajoute à votre écran d'accueil",
    pm_continue: "Commencer mon essai gratuit →",
    pm_iphone_title: "Installer sur iPhone",
    pm_iphone_sub: "Ouvrez bien le lien dans Safari",
    pm_i_step1_t: "Appuyez sur Partager", pm_i_step1_d: "Le carré avec une flèche vers le haut, en bas de Safari",
    pm_i_step2_t: "Choisissez \"Sur l'écran d'accueil\"", pm_i_step2_d: "Faites défiler la liste si besoin",
    pm_i_step3_t: "Appuyez sur \"Ajouter\"", pm_i_step3_d: "HomeSync s'ajoute à votre écran d'accueil",
    fb1_q: "Qu'est-ce qu'il reste à la maison ?", fb1_title: "Ne rachetez plus ce que vous avez déjà.", fb1_text: "Consultez votre stock en temps réel et sachez immédiatement ce qu'il reste chez vous.",
    fb2_q: "Combien vais-je payer à la caisse ?", fb2_title: "Connaissez le total avant d'arriver en caisse.", fb2_text: "Ajoutez les prix pendant vos courses et gardez votre budget sous contrôle.",
    fb3_q: "Qui fait quoi cette semaine ?", fb3_title: "Toute la famille sait quoi faire.", fb3_text: "Rendez-vous, tâches et événements sont synchronisés automatiquement.",

    forwho_title: "Ça, c'est peut-être vous",
    forwho1_title: "Parents qui jonglent",
    forwho1_text: "Entre le travail, les enfants et les courses de dernière minute — plus besoin de tout garder en tête.",
    forwho2_title: "Colocataires",
    forwho2_text: "Qui a payé quoi, qui doit acheter le sopalin — les charges partagées sans prise de tête.",
    forwho3_title: "Familles recomposées",
    forwho3_text: "Plusieurs foyers à coordonner, plusieurs plannings — un seul endroit pour tout suivre.",

    founder_quote: "On l'a créé parce qu'on en avait besoin nous-mêmes. On était mal organisés entre le travail de chacun, on faisait les courses en vitesse en oubliant la moitié, on rachetait en double des trucs qu'on avait déjà — et le budget était toujours serré à la fin du mois. HomeSync, c'est ce qu'on aurait voulu avoir depuis le début.",
    founder_sign: "— Minzri",

    faq_title: "Encore une question ?",
    faq1_q: "Mes données sont-elles vraiment privées ?",
    faq1_a: "Oui. Vos données ne sont jamais vendues ni partagées. Vous pouvez les exporter ou supprimer votre compte à tout moment, directement depuis l'application.",
    faq2_q: "C'est facile d'annuler ?",
    faq2_a: "En un clic, depuis l'application, à tout moment. Aucun engagement, aucun frais caché, aucun appel à passer.",
    faq3_q: "Combien de personnes peuvent rejoindre le foyer ?",
    faq3_a: "Jusqu'à 6 membres, avec un seul abonnement — pas de prix par personne.",
    faq4_q: "Un enfant peut avoir son propre accès ?",
    faq4_a: "Oui, chaque membre du foyer a son propre compte et se connecte depuis son propre appareil.",
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
    final_l2a: "No commitment, no hidden fees",
    final_l2b: "Cancel anytime, in one click",
    final_trust_a: "🔒 Secure payment via Stripe",
    final_trust_b: "Your data stays private, exportable and deletable anytime",
    cta_final: "Try free for 7 days",
    ask_question: "Ask us your questions →",
    ask_question_short: "Got a question?",
    nav_ambassador: "🤝 Become an ambassador",
    amb_login_title: "Ambassador space",
    amb_login_sub: "Log in to access your dashboard.",
    amb_app_user_hint: "Already have a HomeSync account? Log in directly with it — your ambassador profile is created automatically.",
    amb_login_submit: "Log in",
    amb_register_title: "Become an ambassador",
    amb_register_sub: "Create your account to get your referral link.",
    amb_register_submit: "Create my account",
    amb_switch_to_register: "Not an ambassador yet? Sign up",
    amb_switch_to_login: "Already signed up? Log in",
    amb_name_lbl: "Name",
    amb_email_lbl: "Email",
    amb_pass_lbl: "Password",
    amb_err_name: "Please enter your name.",
    amb_err_email: "Please enter a valid email.",
    amb_err_pass: "Password must be at least 6 characters.",
    amb_err_generic: "Something went wrong — try again in a moment.",
    amb_signout: "Log out",
    amb_link_lbl: "Your referral link",
    amb_share_btn: "Share",
    amb_share_text: "I use HomeSync to organize my household — I recommend it:",
    amb_stat_pending: "Pending commissions",
    amb_stat_active: "Active subscribers",
    amb_stat_total: "Customers brought in",
    amb_stat_earned: "Total earned",
    amb_bank_title: "💳 Banking details",
    amb_iban_lbl: "IBAN",
    amb_iban_holder_lbl: "Account holder name",
    amb_bank_save: "Save",
    amb_history_title: "🧾 Commission history",
    amb_history_empty: "No commission yet.",
    amb_status_active: "Active",
    amb_status_pending: "Pending validation",
    amb_status_suspended: "Suspended",
    amb_voided: "Voided",
    ask_form_title: "Got a question?",
    ask_form_sub: "We'll get back to you quickly, directly by email.",
    ask_form_subject_label: "Subject",
    ask_form_subject_ph: "E.g. How many people per household?",
    ask_form_message_label: "Your message",
    ask_form_message_ph: "Write your question here…",
    ask_form_send: "Send",
    ask_form_hint: "Opens your email app, with everything pre-filled.",
    pm_title: "Which device?",
    pm_sub: "Pick your device to install it in a few seconds",
    pm_pc_lbl: "Computer",
    pm_direct_login: "Log in / Sign up",
    pm_direct_hint: "Already decided? Skip straight to the app, no install steps.",
    pm_download_lbl: "Install the app",
    pm_or: "or",
    pm_desktop_title: "Install on computer",
    pm_desktop_sub: "Chrome, Edge, Opera, Brave...",
    pm_d_step1_t: "Tap \"Continue\" below", pm_d_step1_d: "You'll land directly on HomeSync",
    pm_d_step2_t: "Look for the install icon", pm_d_step2_d: "In the address bar, on the right — an ⊕ icon or a screen with an arrow",
    pm_d_step3_t: "Click it, confirm", pm_d_step3_d: "HomeSync installs as a real application",
    pm_desktop_note: "On Firefox or Safari (Mac), installation isn't available — you can use HomeSync directly in the browser, no install needed.",
    pm_android_lbl: "Android", pm_iphone_lbl: "iPhone",
    pm_skip: "I'm on a computer →",
    pm_skip_direct: "Log in without installing →",
    pm_back: "← Back",
    pm_android_title: "Install on Android",
    pm_android_sub: "3 steps, less than 10 seconds",
    pm_a_step1_t: "Tap \"Continue\" below", pm_a_step1_d: "You'll land directly on HomeSync",
    pm_a_step2_t: "Open Chrome's ⋮ menu", pm_a_step2_d: "Top-right corner of the screen",
    pm_a_step3_t: "Tap \"Install\"", pm_a_step3_d: "HomeSync is added to your home screen",
    pm_continue: "Start my free trial →",
    pm_iphone_title: "Install on iPhone",
    pm_iphone_sub: "Make sure to open the link in Safari",
    pm_i_step1_t: "Tap Share", pm_i_step1_d: "The square with an arrow pointing up, at the bottom of Safari",
    pm_i_step2_t: "Choose \"Add to Home Screen\"", pm_i_step2_d: "Scroll the list if needed",
    pm_i_step3_t: "Tap \"Add\"", pm_i_step3_d: "HomeSync is added to your home screen",
    fb1_q: "What's left at home?", fb1_title: "Stop buying what you already have.", fb1_text: "Check your stock in real time and know instantly what's left at home.",
    fb2_q: "How much will I pay at checkout?", fb2_title: "Know the total before you reach the register.", fb2_text: "Add prices as you shop and keep your budget under control.",
    fb3_q: "Who's doing what this week?", fb3_title: "The whole family knows what to do.", fb3_text: "Appointments, tasks and events sync automatically.",

    forwho_title: "This might be you",
    forwho1_title: "Parents juggling it all",
    forwho1_text: "Between work, the kids, and last-minute grocery runs — no need to keep it all in your head anymore.",
    forwho2_title: "Roommates",
    forwho2_text: "Who paid for what, who's buying paper towels — shared expenses without the headache.",
    forwho3_title: "Blended families",
    forwho3_text: "Several households to coordinate, several schedules — one single place to track it all.",

    founder_quote: "We built this because we needed it ourselves. We were poorly organized between everyone's work schedules, we'd rush through grocery shopping and forget half of it, we'd buy duplicates of things we already had — and the budget was always tight by the end of the month. HomeSync is what we wish we'd had from the start.",
    founder_sign: "— Minzri",

    faq_title: "Still have a question?",
    faq1_q: "Is my data really private?",
    faq1_a: "Yes. Your data is never sold or shared. You can export it or delete your account at any time, directly from the app.",
    faq2_q: "Is it easy to cancel?",
    faq2_a: "One click, from the app, anytime. No commitment, no hidden fees, no call to make.",
    faq3_q: "How many people can join the household?",
    faq3_a: "Up to 6 members, with a single subscription — no per-person pricing.",
    faq4_q: "Can a child have their own access?",
    faq4_a: "Yes, each household member has their own account and logs in from their own device.",
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

// ── Programme ambassadeurs — capture du code de parrainage ──
// Si quelqu'un arrive via un lien du type homesync.app/?ref=JEAN123, on
// conserve ce code en localStorage (30 jours) pour qu'il survive une visite
// ultérieure, puis on l'ajoute à chaque lien vers l'app — c'est ce qui permet
// à create-checkout-session de le transmettre à Stripe au moment de l'abonnement.
(function captureReferralCode() {
  try {
    const params = new URLSearchParams(location.search);
    const ref = params.get('ref');
    if (ref) {
      localStorage.setItem('homesync_ref_code', ref.trim().toUpperCase());
      localStorage.setItem('homesync_ref_captured_at', String(Date.now()));
    }
  } catch {}
})();
function getAppUrlWithRef(baseParams = '') {
  let ref = '';
  try {
    const stored = localStorage.getItem('homesync_ref_code');
    const capturedAt = Number(localStorage.getItem('homesync_ref_captured_at') || 0);
    const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;
    if (stored && (Date.now() - capturedAt) < THIRTY_DAYS) ref = stored;
  } catch {}
  const params = new URLSearchParams(baseParams);
  if (ref) params.set('ref', ref);
  const qs = params.toString();
  return APP_URL + (qs ? '?' + qs : '');
}

// ── Modale de choix plateforme — interceptée sur les 3 CTA "Commencer" ──
const pmOverlay = document.getElementById('pmOverlay');
const pmChoiceScreen = document.getElementById('pmChoiceScreen');
const pmStepsAndroid = document.getElementById('pmStepsAndroid');
const pmStepsIphone  = document.getElementById('pmStepsIphone');
const pmStepsDesktop = document.getElementById('pmStepsDesktop');

function pmShowChoice() {
  pmChoiceScreen.style.display = 'block';
  pmStepsAndroid.classList.remove('show');
  pmStepsIphone.classList.remove('show');
  pmStepsDesktop.classList.remove('show');
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
document.getElementById('pmSkip').addEventListener('click', () => {
  pmChoiceScreen.style.display = 'none';
  pmStepsDesktop.classList.add('show');
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
document.getElementById('pmBack3').addEventListener('click', pmShowChoice);
document.getElementById('pmDirectLogin').addEventListener('click', (e) => { e.preventDefault(); window.location.href = getAppUrlWithRef('start=login'); });
document.getElementById('pmGoAndroid').addEventListener('click', (e) => { e.preventDefault(); window.location.href = getAppUrlWithRef('start=login'); });
document.getElementById('pmGoIphone').addEventListener('click', (e) => { e.preventDefault(); window.location.href = getAppUrlWithRef('start=login'); });
document.getElementById('pmGoDesktop').addEventListener('click', (e) => { e.preventDefault(); window.location.href = getAppUrlWithRef('start=login'); });
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

  // Zoom au clic sur une image — lightbox plein écran
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const openLightbox = (src, alt) => {
    lightboxImg.src = src; lightboxImg.alt = alt;
    lightbox.classList.add('show');
  };
  const closeLightbox = () => lightbox.classList.remove('show');
  slides.forEach(slide => {
    const img = slide.querySelector('img');
    if (img) img.addEventListener('click', () => { pauseAuto(); openLightbox(img.src, img.alt); });
  });
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
})();

// ── FAQ — accordéon simple, un seul item ouvert à la fois ──
(function initFaq() {
  const items = Array.from(document.querySelectorAll('.faq-item'));
  items.forEach(item => {
    const btn = item.querySelector('.faq-q');
    btn.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      items.forEach(i => { i.classList.remove('open'); i.querySelector('.faq-q').setAttribute('aria-expanded', 'false'); });
      if (!wasOpen) { item.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
    });
  });
})();

// ── Espace ambassadeur — connexion/inscription réelle + tableau de bord ──
(function initAmbassadorSpace() {
  const openBtn = document.getElementById('ctaAmbassador');
  const overlay = document.getElementById('ambOverlay');
  const closeBtn = document.getElementById('ambClose');
  const dashOverlay = document.getElementById('ambDashOverlay');
  if (!openBtn || !overlay || !dashOverlay) return;

  const SUPA_URL = "https://jkiofmoqwvcgbabmqosn.supabase.co";
  const SUPA_KEY = "sb_publishable_wB-lYIAitkLuo6ARwX6tKw_ZY3ZmLRT";
  const supabase = window.supabase.createClient(SUPA_URL, SUPA_KEY);
  const APP_ORIGIN = "https://homesync-landing-seven.vercel.app";

  function translate(key) {
    try { return TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS.fr[key] || key; }
    catch { return key; }
  }

  // ── Éléments du formulaire de connexion/inscription ──
  const nameField = document.getElementById('ambNameField');
  const nameInput = document.getElementById('ambName');
  const emailInput = document.getElementById('ambEmail');
  const passInput = document.getElementById('ambPass');
  const errorEl = document.getElementById('ambError');
  const submitBtn = document.getElementById('ambSubmit');
  const authTitle = document.getElementById('ambAuthTitle');
  const authSub = document.getElementById('ambAuthSub');
  const appUserHint = document.getElementById('ambAppUserHint');
  const switchToRegister = document.getElementById('ambSwitchToRegister');
  const switchToLogin = document.getElementById('ambSwitchToLogin');

  let mode = 'login'; // 'login' | 'register'

  function setMode(m) {
    mode = m;
    const isRegister = m === 'register';
    nameField.style.display = isRegister ? '' : 'none';
    authTitle.setAttribute('data-i18n', isRegister ? 'amb_register_title' : 'amb_login_title');
    authTitle.textContent = translate(isRegister ? 'amb_register_title' : 'amb_login_title');
    authSub.setAttribute('data-i18n', isRegister ? 'amb_register_sub' : 'amb_login_sub');
    authSub.textContent = translate(isRegister ? 'amb_register_sub' : 'amb_login_sub');
    submitBtn.setAttribute('data-i18n', isRegister ? 'amb_register_submit' : 'amb_login_submit');
    submitBtn.textContent = translate(isRegister ? 'amb_register_submit' : 'amb_login_submit');
    switchToRegister.style.display = isRegister ? 'none' : '';
    switchToLogin.style.display = isRegister ? '' : 'none';
    appUserHint.style.display = isRegister ? 'none' : '';
    errorEl.textContent = '';
  }
  switchToRegister.addEventListener('click', () => setMode('register'));
  switchToLogin.addEventListener('click', () => setMode('login'));

  function openAuthModal() {
    setMode('login');
    nameInput.value = ''; emailInput.value = ''; passInput.value = '';
    overlay.classList.add('show');
  }
  function closeAuthModal() { overlay.classList.remove('show'); }
  closeBtn.addEventListener('click', closeAuthModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeAuthModal(); });

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function genCode(name) {
    const base = (name.trim().split(' ')[0] || 'AMBASS').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 8) || 'AMBASS';
    const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
    return base + suffix;
  }

  submitBtn.addEventListener('click', async () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const pass = passInput.value;
    errorEl.textContent = '';
    if (mode === 'register' && !name) return errorEl.textContent = translate('amb_err_name');
    if (!email || !emailRe.test(email)) return errorEl.textContent = translate('amb_err_email');
    if (!pass || pass.length < 6) return errorEl.textContent = translate('amb_err_pass');

    submitBtn.disabled = true;
    const original = submitBtn.textContent;
    submitBtn.textContent = '…';
    try {
      if (mode === 'register') {
        const { data, error } = await supabase.auth.signUp({ email, password: pass });
        if (error) throw error;
        if (data.user) {
          const code = genCode(name);
          await supabase.from('ambassadors').insert({
            user_id: data.user.id, name, email, code, status: 'pending',
          });
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password: pass });
        if (error) throw error;
      }
      closeAuthModal();
      await loadDashboard();
    } catch (err) {
      errorEl.textContent = err?.message || translate('amb_err_generic');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = original;
    }
  });

  openBtn.addEventListener('click', async () => {
    const { data } = await supabase.auth.getSession();
    if (data.session) { await loadDashboard(); }
    else { openAuthModal(); }
  });

  // ── Tableau de bord ──
  const dashName = document.getElementById('ambDashName');
  const statusBadge = document.getElementById('ambStatusBadge');
  const linkBox = document.getElementById('ambLinkBox');
  const copyLinkBtn = document.getElementById('ambCopyLink');
  const shareLinkBtn = document.getElementById('ambShareLink');
  const statPending = document.getElementById('ambStatPending');
  const statActive = document.getElementById('ambStatActive');
  const statTotal = document.getElementById('ambStatTotal');
  const statEarned = document.getElementById('ambStatEarned');
  const ibanInput = document.getElementById('ambIban');
  const ibanHolderInput = document.getElementById('ambIbanHolder');
  const saveBankBtn = document.getElementById('ambSaveBank');
  const historyList = document.getElementById('ambHistoryList');
  const signOutBtn = document.getElementById('ambSignOut');

  let currentAmbassador = null;
  let referralLink = '';

  async function loadDashboard() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return openAuthModal();

    let { data: ambassador } = await supabase.from('ambassadors').select('*').eq('user_id', user.id).maybeSingle();

    if (!ambassador) {
      // Compte déjà existant (ex: même email que l'app HomeSync) mais sans
      // profil ambassadeur — on le crée automatiquement à la connexion,
      // plutôt que de bloquer avec un écran de connexion qui boucle sans rien expliquer.
      const fallbackName = (user.user_metadata?.name || user.email.split('@')[0]);
      const code = genCode(fallbackName);
      const { data: created, error: createErr } = await supabase.from('ambassadors')
        .insert({ user_id: user.id, name: fallbackName, email: user.email, code, status: 'pending' })
        .select().single();
      if (createErr) {
        errorEl.textContent = translate('amb_err_generic');
        return openAuthModal();
      }
      ambassador = created;
    }
    currentAmbassador = ambassador;

    dashName.textContent = ambassador.name.split(' ')[0];
    const statusLabels = { active: translate('amb_status_active'), pending: translate('amb_status_pending'), suspended: translate('amb_status_suspended') };
    statusBadge.textContent = (ambassador.status === 'active' ? '🟢 ' : ambassador.status === 'pending' ? '🟡 ' : '🔴 ') + (statusLabels[ambassador.status] || ambassador.status);
    statusBadge.className = 'amb-status ' + ambassador.status;

    referralLink = `${APP_ORIGIN}/?ref=${ambassador.code}`;
    linkBox.textContent = referralLink;

    ibanInput.value = ambassador.iban || '';
    ibanHolderInput.value = ambassador.iban_holder_name || '';

    const { data: stats } = await supabase.from('ambassador_stats').select('*').eq('ambassador_id', ambassador.id).maybeSingle();
    statPending.textContent = (stats?.pending_commission ?? 0).toFixed(2) + ' €';
    statActive.textContent = stats?.active_subscribers ?? 0;
    statTotal.textContent = stats?.total_customers ?? 0;
    statEarned.textContent = (stats?.total_earned ?? 0).toFixed(2) + ' €';

    const { data: commissions } = await supabase.from('commissions').select('*').eq('ambassador_id', ambassador.id).order('created_at', { ascending: false }).limit(20);
    if (commissions && commissions.length) {
      historyList.innerHTML = commissions.map(c => {
        const d = new Date(c.created_at).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
        const amtColor = c.status === 'paid' ? 'var(--mint)' : c.status === 'voided' ? 'var(--mist)' : '#C8971E';
        const amtText = c.status === 'voided' ? translate('amb_voided') : `+${Number(c.amount).toFixed(2)} €`;
        return `<div class="amb-history-row"><span>${d}</span><span style="color:${amtColor}; font-weight:700;">${amtText}</span></div>`;
      }).join('');
    } else {
      historyList.innerHTML = `<p class="amb-empty">${translate('amb_history_empty')}</p>`;
    }

    dashOverlay.classList.add('show');
  }

  copyLinkBtn.addEventListener('click', () => {
    navigator.clipboard?.writeText(referralLink).then(() => {
      copyLinkBtn.textContent = '✓';
      setTimeout(() => copyLinkBtn.textContent = '📋', 2000);
    });
  });
  shareLinkBtn.addEventListener('click', async () => {
    const shareData = { title: 'HomeSync', text: translate('amb_share_text'), url: referralLink };
    if (navigator.share && navigator.canShare?.(shareData)) {
      try { await navigator.share(shareData); } catch {}
    } else {
      navigator.clipboard?.writeText(referralLink);
    }
  });

  saveBankBtn.addEventListener('click', async () => {
    if (!currentAmbassador) return;
    saveBankBtn.disabled = true;
    const original = saveBankBtn.textContent;
    saveBankBtn.textContent = '…';
    await supabase.from('ambassadors').update({ iban: ibanInput.value.trim(), iban_holder_name: ibanHolderInput.value.trim() }).eq('id', currentAmbassador.id);
    saveBankBtn.textContent = '✓';
    setTimeout(() => saveBankBtn.textContent = original, 2000);
    saveBankBtn.disabled = false;
  });

  signOutBtn.addEventListener('click', async () => {
    await supabase.auth.signOut();
    dashOverlay.classList.remove('show');
    currentAmbassador = null;
  });
})();
