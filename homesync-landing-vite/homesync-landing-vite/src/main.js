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
    cta_nav: "Rejoindre",
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
    nav_ambassador: "Devenir ambassadeur",
    amb_login_title: "Espace ambassadeur",
    amb_welcome_title: "Bienvenue, futur ambassadeur !",
    amb_welcome_sub: "Partagez votre lien HomeSync, et gagnez un revenu récurrent — simplement.",
    amb_explain_commission: "à chaque paiement Stripe réussi d'une personne que vous avez parrainée — tant qu'elle reste abonnée.",
    amb_explain_payout_when: "Versé chaque mois (le 5)",
    amb_explain_payout: "dès que votre solde atteint 15 €. En dessous, il s'accumule simplement au mois suivant.",
    amb_explain_payout_cutoff: "Le 5 est une photo à un instant précis : seules les commissions déjà enregistrées à cette date sont comptées. Si un filleul s'abonne juste avant ou après le 5, sa commission peut apparaître un mois plus tard que prévu — rien n'est jamais perdu, elle attend juste le calcul suivant.",
    amb_explain_transfer: "Le virement est fait à la main par notre équipe une fois le calcul effectué — comptez quelques jours après le 5 pour recevoir l'argent sur votre compte.",
    amb_faq_title: "❓ Comment ça marche",
    amb_faq_q1: "Combien je gagne ?",
    amb_faq_q2: "Quand je suis payé ?",
    amb_faq_q3: "C'est automatique ?",
    amb_faq_q4: "Pourquoi \"en attente\" ?",
    amb_faq_q5: "Comment je suis payé ?",
    amb_faq_q6: "Lien ou QR code ?",
    amb_faq_q7: "Et s'il annule et se réabonne ?",
    amb_explain_onetime: "Un client ne peut être crédité qu'une seule fois, à sa toute première souscription — s'il annule puis se réabonne avec un autre lien, ça ne change jamais l'ambassadeur d'origine.",
    amb_explain_pending: "Un compte \"en attente\" est en cours de vérification — votre lien fonctionne déjà, les commissions s'activent dès la validation.",
    amb_explain_iban: "Pour recevoir vos commissions, renseignez votre IBAN dans l'onglet \"Gestion\" — sans lui, impossible de vous verser l'argent.",
    amb_explain_link_qr: "Vous avez 2 façons de partager : le lien (à coller dans un message ou une story), ou le QR code (à montrer directement à quelqu'un pour qu'il scanne avec son téléphone). Les deux mènent au même endroit.",
    amb_copy_btn: "Copier",
    amb_qr_btn: "QR code",
    amb_copied: "Copié !",
    amb_presentation_title: "📱 Présenter l'application",
    amb_presentation_intro: "Appuyez sur un module pour voir un argumentaire détaillé, avec des exemples concrets et à qui ça peut parler.",
    amb_pres_what_title: "C'est quoi, HomeSync ?",
    amb_pres_what_text: "Une application pour gérer sa maison en famille. Fini les post-it, les listes oubliées, ou les messages \"tu as pensé à...\" — tout est au même endroit, partagé par tout le monde.",
    amb_pres_stock_title: "Le stock de la maison",
    amb_pres_stock_text: "On sait toujours ce qu'il reste à la maison, sans avoir à ouvrir le frigo pour vérifier. Cuisiner une recette met le stock à jour tout seul.",
    amb_pres_shopping_title: "La liste de courses",
    amb_pres_shopping_text: "Toute la famille voit et modifie la même liste, en temps réel. Plus besoin de demander \"t'as pris le lait ?\".",
    amb_pres_budget_title: "Le budget",
    amb_pres_budget_text: "On voit combien on a dépensé ce mois-ci, sans attendre la fin du mois pour le découvrir.",
    amb_pres_recipes_title: "Les recettes",
    amb_pres_recipes_text: "On enregistre ses recettes, on planifie les repas de la semaine, et l'appli propose même une idée au hasard les soirs sans inspiration.",
    amb_pres_calendar_title: "L'agenda familial",
    amb_pres_calendar_text: "Rendez-vous, tâches de la maison réparties entre tout le monde — chacun voit le même calendrier.",
    amb_pres_vacation_title: "Les vacances",
    amb_pres_vacation_text: "Un budget dédié pour préparer un voyage, avec les dépenses partagées entre participants et qui doit combien à qui.",
    amb_pres_members_title: "Les membres",
    amb_pres_members_text: "Chaque personne du foyer a son propre accès, depuis son téléphone — tout ce que l'un ajoute, les autres le voient à l'instant.",
    amb_pres_theme_title: "L'apparence",
    amb_pres_theme_text: "Plusieurs thèmes de couleur au choix, pour personnaliser l'application à son goût.",
    amb_pres_help_title: "Le centre d'aide",
    amb_pres_help_text: "Des réponses simples directement dans l'app pour chaque fonctionnalité, en cas de doute.",
    amb_pres_price_title: "Le prix",
    amb_pres_price_text: "3,99€ par mois, pour toute la famille jusqu'à 6 personnes — pas un prix par personne. 7 jours d'essai gratuit, résiliable en un clic, sans engagement.",
    amb_pres_who_lbl: "👉 Ça peut plaire à :",
    amb_pres_ex_lbl: "💬 Exemple :",
    amb_pres_what_who: "toute personne qui gère un foyer, seule ou à plusieurs — familles, couples, colocataires.",
    amb_pres_what_ex: "\"Tu sais quand tu dois répéter 3 fois la même chose à toute la famille ? Avec HomeSync, tout le monde voit la même info, plus besoin de répéter.\"",
    amb_pres_stock_who: "ceux qui rachètent souvent en double, ou qui font les courses \"à l'aveugle\" sans savoir ce qu'il reste.",
    amb_pres_stock_ex: "\"Tu te souviens la dernière fois où t'as racheté du riz alors qu'il y en avait déjà un paquet ? Ça n'arrive plus.\"",
    amb_pres_shopping_who: "les couples ou colocataires où chacun fait les courses de son côté, ou les parents qui envoient un ado faire une course.",
    amb_pres_shopping_ex: "\"Ton conjoint est au magasin et toi tu penses à un truc à ajouter ? Tu l'ajoutes depuis ton canapé, ça apparaît direct sur son téléphone.\"",
    amb_pres_budget_who: "ceux qui veulent mieux suivre leurs dépenses du quotidien, sans utiliser un tableur compliqué.",
    amb_pres_budget_ex: "\"Fini la surprise le 30 du mois — tu vois en direct combien il reste sur ton budget courses.\"",
    amb_pres_recipes_who: "ceux qui galèrent chaque soir à trouver une idée de repas, ou qui veulent mieux organiser leurs menus de la semaine.",
    amb_pres_recipes_ex: "\"Le fameux 'on mange quoi ce soir ?' — un bouton te propose une recette au hasard, et ajoute direct ce qu'il manque à ta liste de courses.\"",
    amb_pres_calendar_who: "les familles avec enfants (rendez-vous, activités), ou les foyers qui veulent répartir équitablement les tâches ménagères.",
    amb_pres_calendar_ex: "\"Qui sort les poubelles cette semaine ? La tâche tourne automatiquement entre les membres de la famille, plus besoin d'y penser.\"",
    amb_pres_vacation_who: "les groupes d'amis ou familles qui partent ensemble et qui galèrent toujours à calculer qui doit combien après.",
    amb_pres_vacation_ex: "\"Fini la calculette à la fin du voyage entre amis — l'app dit exactement qui doit rembourser qui.\"",
    amb_pres_members_who: "les familles jusqu'à 6 personnes, où chacun veut son propre accès sans dépendre du téléphone d'un seul.",
    amb_pres_members_ex: "\"Chaque membre de la famille se connecte depuis son propre téléphone, avec son propre nom — pas besoin de partager un seul compte.\"",
    amb_pres_theme_who: "ceux qui aiment personnaliser leurs apps, ou simplement changer d'ambiance visuelle.",
    amb_pres_theme_ex: "\"Chacun peut choisir son thème préféré, ça reste propre à chaque personne, pas imposé à toute la famille.\"",
    amb_pres_help_who: "ceux qui hésitent à essayer une nouvelle app par peur de ne pas savoir s'en servir.",
    amb_pres_help_ex: "\"Un doute sur une fonctionnalité ? La réponse est directement dans l'app, pas besoin de chercher ailleurs.\"",
    amb_pres_price_who: "tout le monde — c'est justement l'argument qui rassure ceux qui hésitent sur le prix des abonnements en général.",
    amb_pres_price_ex: "\"Ça revient à moins de 70 centimes par personne et par mois si vous êtes 6 — et tu peux tester gratuitement avant de payer quoi que ce soit.\"",
    amb_community_title: "📢 Actualités",
    amb_leaderboard_lbl: "Votre position",
    amb_leaderboard_empty: "Pas encore de classement disponible.",
    amb_admin_no_iban: "Pas encore d'IBAN renseigné",
    amb_admin_to_pay: "À verser",
    amb_admin_active_subs: "Abonnés actifs",
    amb_admin_tab_rank: "Classement",
    amb_news_empty: "Aucune actualité pour l'instant.",
    amb_my_rank_label: "Votre position",
    amb_lb_customers_suffix: "clients",
    amb_contact_btn: "📨 Nous contacter",
    amb_admin_tab_pending: "En attente",
    amb_admin_tab_all: "Tous",
    amb_admin_tab_post: "Publier",
    amb_admin_tab_activity: "Activité app",
    amb_activity_sessions: "ouvertures",
    amb_activity_days_active: "jours entre 1ère et dernière visite",
    amb_activity_empty: "Aucune donnée d'activité pour l'instant.",
    amb_activity_unknown: "Nom inconnu",
    amb_activity_landing_total: "Visiteurs uniques landing",
    amb_activity_landing_7d: "Landing — 7 derniers jours",
    amb_activity_app_total: "Visiteurs uniques app",
    amb_activity_app_7d: "App — 7 derniers jours",
    amb_activity_households_lbl: "Foyers inscrits",
    amb_admin_post_title_lbl: "Titre",
    amb_admin_post_body_lbl: "Message",
    amb_admin_post_image_lbl: "Photo (optionnelle)",
    amb_admin_post_submit: "Publier l'actualité",
    amb_admin_approve: "✅ Accepter",
    amb_admin_reject: "✕ Refuser",
    amb_admin_no_pending: "Aucun candidat pour l'instant.",
    amb_admin_reactivate: "Réactiver",
    amb_admin_suspend: "Suspendre",
    amb_admin_tab_payouts: "Versements",
    amb_admin_no_payouts: "Aucun versement pour l'instant.",
    amb_admin_mark_paid: "Marquer comme payé",
    amb_admin_existing_posts_lbl: "Actualités publiées",
    amb_admin_new_post_lbl: "Nouvelle actualité",
    amb_admin_delete_post: "🗑️ Supprimer",
    amb_admin_delete_confirm: "Supprimer cette actualité ?",
    amb_forgot_pass: "Mot de passe oublié ?",
    amb_reset_sent: "Email envoyé — vérifiez votre boîte de réception.",
    amb_newpass_title: "Nouveau mot de passe",
    amb_newpass_sub: "Choisissez un nouveau mot de passe pour votre compte.",
    amb_newpass_submit: "Enregistrer le nouveau mot de passe",
    amb_newpass_done: "Mot de passe mis à jour ! Vous pouvez maintenant vous connecter avec.",
    amb_stat_clicks: "Clics sur votre lien",
    amb_accepted_banner: "Bonne nouvelle — votre candidature a été acceptée ! Votre lien est actif, les commissions commencent à s'enregistrer.",
    amb_privacy_title: "🔒 Mes données",
    amb_export_btn: "📤 Exporter mes données",
    amb_delete_btn: "🗑️ Supprimer mon compte",
    amb_delete_confirm1: "Voulez-vous vraiment supprimer votre compte ambassadeur ? Cette action est irréversible.",
    amb_delete_confirm2: "Pour confirmer, tapez SUPPRIMER ci-dessous :",
    amb_delete_keyword: "SUPPRIMER",
    amb_delete_blocked_pending: "Impossible de supprimer votre compte tant que des commissions sont en attente de versement. Contactez-nous.",
    amb_delete_done: "Votre compte a été supprimé.",
    amb_iban_already_saved: "IBAN déjà enregistré — retapez-le pour le modifier",
    amb_terms_label_1: "Je certifie avoir 18 ans ou plus et j'accepte les",
    amb_terms_label_link: "conditions du programme Ambassadeur",
    amb_age_lbl: "Votre âge",
    amb_err_age: "Le programme est réservé aux personnes de 18 ans ou plus.",
    amb_complete_title: "Encore une étape",
    amb_complete_sub: "Avant de créer votre profil ambassadeur, confirmez ces 2 points.",
    amb_complete_submit: "Continuer",
    amb_terms_page_title: "Conditions du programme Ambassadeur",
    amb_terms_1_title: "Âge minimum",
    amb_terms_1_body: "Le programme Ambassadeur Minzri est réservé aux personnes âgées de 18 ans ou plus. En vous inscrivant, vous certifiez avoir au moins 18 ans à la date de votre inscription.",
    amb_terms_2_title: "Commission",
    amb_terms_2_body: "Vous recevez 0,50 € pour chaque paiement Stripe réussi d'une personne que vous avez parrainée, tant qu'elle reste abonnée à HomeSync.",
    amb_terms_3_title: "Versement",
    amb_terms_3_body: "Les commissions en attente sont calculées le 5 de chaque mois. Un versement est déclenché dès que votre solde atteint 15 € ; en dessous, il est reporté au mois suivant. Le virement bancaire est effectué manuellement par notre équipe, sous quelques jours.",
    amb_terms_4_title: "Un client, un ambassadeur",
    amb_terms_4_body: "Chaque client ne peut être rattaché qu'à un seul ambassadeur, définitivement fixé à sa toute première souscription — un désabonnement puis réabonnement ne change jamais l'ambassadeur d'origine.",
    amb_terms_5_title: "Validation du compte",
    amb_terms_5_body: "Votre candidature est examinée manuellement avant validation. Minzri se réserve le droit d'accepter, de refuser, ou de suspendre un compte ambassadeur à tout moment, notamment en cas de fraude ou d'abus constaté.",
    amb_terms_6_title: "Auto-parrainage interdit",
    amb_terms_6_body: "Un ambassadeur ne peut pas utiliser son propre lien pour s'abonner lui-même — ces cas sont automatiquement détectés et bloqués.",
    amb_admin_age_lbl: "Âge déclaré",
    amb_admin_certified: "Certifié 18+",
    amb_admin_not_certified: "Non certifié",
    amb_admin_search_ph: "Rechercher un nom ou un email…",
    amb_err_terms: "Merci d'accepter les conditions pour continuer.",
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
    amb_code_lbl: "Ou juste votre code (à donner de vive voix)",
    amb_tab_dashboard: "📊 Tableau de bord",
    amb_tab_news: "📢 Actualités",
    amb_tab_manage: "⚙️ Gestion",
    amb_share_btn: "Partager",
    amb_share_text: "J'utilise HomeSync pour organiser mon foyer — je te le recommande :",
    amb_qr_title: "Votre QR code",
    amb_qr_sub: "Montrez-le ou téléchargez-le pour le partager.",
    amb_qr_download: "⬇️ Télécharger l'image",
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
    footer_cgu: "Conditions générales",
    footer_contact: "Contact",
    footer_privacy: "Politique de confidentialité",
    footer_ambassador: "Devenir ambassadeur",
    footer_blogger: "Espace blogueur",
    blogger_login_title: "Espace blogueur",
    blogger_login_sub: "Connectez-vous pour gérer les Conseils & Astuces.",
    blogger_login_btn: "Se connecter",
    blogger_dash_title: "Conseils & Astuces",
    blogger_new_tip_btn: "+ Nouveau conseil",
    blogger_field_title: "Titre",
    blogger_field_desc: "Description courte",
    blogger_field_category: "Catégorie",
    blogger_field_source_name: "Nom du créateur / de la source",
    blogger_field_source_url: "Lien (YouTube, TikTok, Instagram, article…)",
    blogger_field_thumbnail: "Style de miniature",
    blogger_save_draft: "Enregistrer en brouillon",
    blogger_publish: "Publier",
    blogger_submit_review: "Soumettre pour publication",
    blogger_toggle_to_signup: "Pas encore de compte blogueur ?",
    blogger_toggle_link_signup: "S'inscrire",
    blogger_pending_title: "Demande envoyée",
    blogger_pending_sub: "Votre inscription est en attente de validation par l'administrateur. Revenez un peu plus tard.",
    blogger_rejected_title: "Demande non retenue",
    blogger_rejected_sub: "Votre demande n'a pas été validée cette fois-ci.",
    amb_admin_tab_bloggers: "Blogueurs",
    amb_admin_tab_tips: "Conseils",
    amb_admin_tab_promo: "Portes ouvertes",
    promo_field_label: "Nom de la période (interne)",
    promo_field_start: "Date de début",
    promo_field_end: "Date de fin",
    promo_create_btn: "+ Créer cette période gratuite",
    landing_amb_code_link: "🤝 Vous avez un code ambassadeur ?",
    landing_amb_code_ph: "PRENOM1234",
    landing_amb_code_saved: "✓ Code enregistré — il sera utilisé lors de votre abonnement.",
    cgu_1_title: "Le service",
    cgu_1_body: "HomeSync est une application de gestion du foyer (courses, stock, budget, recettes, agenda) éditée par Minzri, accessible par abonnement.",
    cgu_2_title: "Abonnement et essai gratuit",
    cgu_2_body: "L'abonnement inclut 7 jours d'essai gratuit (14 jours via un lien d'ambassadeur), puis 3,99€/mois, résiliable à tout moment en un clic depuis l'application, sans engagement ni frais cachés.",
    cgu_3_title: "Un abonnement, plusieurs membres",
    cgu_3_body: "Un seul abonnement couvre jusqu'à 6 membres d'un même foyer, sans coût additionnel par personne.",
    cgu_4_title: "Paiement",
    cgu_4_body: "Les paiements sont traités de façon sécurisée par Stripe. Minzri ne stocke jamais vos coordonnées bancaires complètes.",
    cgu_5_title: "Résiliation",
    cgu_5_body: "Vous pouvez résilier votre abonnement à tout moment depuis l'application. L'accès reste actif jusqu'à la fin de la période déjà payée.",
    privacy_1_title: "Données collectées",
    privacy_1_body: "Nom, email, et les données que vous saisissez dans l'application (courses, stock, budget, recettes, agenda) — uniquement pour faire fonctionner le service.",
    privacy_2_title: "Vos droits",
    privacy_2_body: "Vous pouvez exporter ou supprimer l'ensemble de vos données à tout moment, directement depuis les paramètres de l'application.",
    privacy_3_title: "Partage des données",
    privacy_3_body: "Vos données ne sont jamais vendues. Elles sont uniquement partagées avec les prestataires techniques nécessaires au fonctionnement du service (hébergement, paiement).",
    privacy_4_title: "Contact",
    privacy_4_body: "Pour toute question sur vos données, utilisez le bouton Contact en bas de page.",
    pm_title: "Sur quel appareil ?",
    pm_sub: "Choisissez votre appareil pour l'installer en quelques secondes",
    pm_pc_lbl: "Ordinateur",
    pm_direct_login: "Commencer mon essai",
    pm_direct_hint: "Déjà décidé ? Passez directement à l'app, sans les étapes d'installation.",
    pm_download_btn: "📥 Télécharger l'application",
    pm_download_sub: "Choisissez votre appareil",
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
    fb1_q: "On a déjà ça à la maison, non ?", fb1_title: "Ne rachetez plus ce que vous avez déjà.", fb1_text: "Consultez votre stock en temps réel et sachez immédiatement ce qu'il reste chez vous.",
    fb2_q: "Combien vais-je payer à la caisse ?", fb2_title: "Connaissez le total avant d'arriver en caisse.", fb2_text: "Ajoutez les prix pendant vos courses et gardez votre budget sous contrôle.",
    fb3_q: "Qui fait quoi cette semaine ?", fb3_title: "Toute la famille sait quoi faire.", fb3_text: "Rendez-vous, tâches et événements sont synchronisés automatiquement.",

    forwho_bridge: "Si une de ces situations vous parle, HomeSync a été pensé pour vous.",
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
    mc_stock_tag: "📦 Stock", mc_stock_q: "Qu'est-ce qu'il me reste à la maison ?", mc_stock_a: ["Chaque produit affiche sa date de péremption, pour ne jamais être pris de court.", "Cuisinez une recette et le stock se met à jour tout seul.", "Presque vide ? L'article part directement dans vos courses.", "Je ne fais plus l'inventaire du frigo dans ma tête — un coup d'œil et je sais s'il reste des œufs."],
    mc_courses_tag: "🛒 Courses", mc_courses_q: "Qu'est-ce qu'il faut racheter ?", mc_courses_a: ["Ajoutez un article en tapant, ou collez toute une liste d'un coup.", "Cochez au fur et à mesure — une fois validée, la liste rejoint automatiquement le stock.", "Vos listes types se sauvegardent pour la semaine suivante.", "Je ne me demande plus ce qu'on a oublié — la liste est déjà là, mise à jour par toute la famille."],
    mc_budget_tag: "💰 Budget", mc_budget_q: "Combien vais-je dépenser ce mois-ci ?", mc_budget_a: ["Le total se calcule pendant vos courses, avant même la caisse.", "Connecté directement aux courses et aux charges récurrentes comme le loyer.", "Un résumé s'exporte en PDF à tout moment.", "Je ne découvre plus le montant à la fin du mois — je vois où part chaque euro, en temps réel."],
    mc_recettes_tag: "🍳 Recettes", mc_recettes_q: "Qu'est-ce qu'on mange ce soir… et si je planifie pour toute la semaine ?", mc_recettes_a: ["Cuisinez un plat, et les ingrédients sont déduits automatiquement de votre stock.", "Il vous manque quelque chose ? Un bouton l'ajoute directement aux courses.", "Planifiez la semaine, la liste se génère toute seule.", "Je ne fais pas que juste enregistrer mes recettes — je planifie les repas de chaque personne, ça m'évite de réfléchir à quoi manger."],
    mc_agenda_tag: "📅 Agenda", mc_agenda_q: "Qui fait quoi, et quand ?", mc_agenda_a: ["Les dates de péremption du stock y apparaissent automatiquement, tout comme vos charges récurrentes.", "Toute la famille voit les mêmes rendez-vous, en temps réel.", "Un rappel arrive automatiquement avant l'échéance.", "Je n'ai plus à rappeler à tout le monde qui doit faire quoi — chacun voit son planning, sans que j'aie à répéter."],
    mc_membres_tag: "👥 Membres", mc_membres_q: "Comment toute la famille reste connectée ?", mc_membres_a: ["Chaque membre se connecte depuis son propre appareil.", "Ce que l'un ajoute, les autres le voient à l'instant.", "Invitez en un clic, avec un simple code ou un QR code.", "Un seul abonnement suffit pour jusqu'à 6 membres — personne ne paie de son côté.", "Je n'ai plus à envoyer 10 messages pour dire la même chose — tout le monde voit la même info, au même moment."],

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
    cta_nav: "Join",
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
    nav_ambassador: "Become an ambassador",
    amb_login_title: "Ambassador space",
    amb_welcome_title: "Welcome, future ambassador!",
    amb_welcome_sub: "Share your HomeSync link, and earn a recurring income — simply.",
    amb_explain_commission: "for every successful Stripe payment from someone you referred — for as long as they stay subscribed.",
    amb_explain_payout_when: "Paid out every month (on the 5th)",
    amb_explain_payout: "as soon as your balance reaches 15 €. Below that, it simply carries over to the next month.",
    amb_explain_payout_cutoff: "The 5th is a snapshot at a precise moment: only commissions already recorded by that date are counted. If a referral subscribes just before or after the 5th, their commission might show up a month later than expected — nothing is ever lost, it just waits for the next calculation.",
    amb_explain_transfer: "The transfer is made by hand by our team once the calculation is done — allow a few days after the 5th to receive the money in your account.",
    amb_faq_title: "❓ How it works",
    amb_faq_q1: "How much do I earn?",
    amb_faq_q2: "When do I get paid?",
    amb_faq_q3: "Is it automatic?",
    amb_faq_q4: "Why \"pending\"?",
    amb_faq_q5: "How do I get paid?",
    amb_faq_q6: "Link or QR code?",
    amb_faq_q7: "What if they cancel and resubscribe?",
    amb_explain_onetime: "A customer can only ever be credited once, at their very first subscription — if they cancel and resubscribe with a different link, it never changes the original ambassador.",
    amb_explain_pending: "A \"pending\" account is being reviewed — your link already works, commissions activate once approved.",
    amb_explain_iban: "To receive your commissions, add your IBAN in the \"Manage\" tab — without it, we can't pay you.",
    amb_explain_link_qr: "You have 2 ways to share: the link (paste it in a message or a story), or the QR code (show it directly to someone so they can scan it with their phone). Both lead to the same place.",
    amb_copy_btn: "Copy",
    amb_qr_btn: "QR code",
    amb_copied: "Copied!",
    amb_presentation_title: "📱 Present the app",
    amb_presentation_intro: "Tap a module to see a detailed pitch, with concrete examples and who it might appeal to.",
    amb_pres_what_title: "What is HomeSync?",
    amb_pres_what_text: "An app to manage your household as a family. No more sticky notes, forgotten lists, or \"did you remember to...\" messages — everything is in one place, shared by everyone.",
    amb_pres_stock_title: "Household stock",
    amb_pres_stock_text: "You always know what's left at home, without opening the fridge to check. Cooking a recipe updates the stock on its own.",
    amb_pres_shopping_title: "The shopping list",
    amb_pres_shopping_text: "The whole family sees and edits the same list, in real time. No more asking \"did you get the milk?\".",
    amb_pres_budget_title: "The budget",
    amb_pres_budget_text: "You see how much you've spent this month, without waiting until the end of the month to find out.",
    amb_pres_recipes_title: "Recipes",
    amb_pres_recipes_text: "Save your recipes, plan the week's meals, and the app even suggests a random idea on nights when you're out of inspiration.",
    amb_pres_calendar_title: "Family calendar",
    amb_pres_calendar_text: "Appointments, household chores shared among everyone — everyone sees the same calendar.",
    amb_pres_vacation_title: "Vacations",
    amb_pres_vacation_text: "A dedicated budget to plan a trip, with expenses shared between participants and who owes what to whom.",
    amb_pres_members_title: "Members",
    amb_pres_members_text: "Each household member has their own access, from their own phone — whatever one person adds, the others see instantly.",
    amb_pres_theme_title: "Appearance",
    amb_pres_theme_text: "Several color themes to choose from, to customize the app to your taste.",
    amb_pres_help_title: "Help center",
    amb_pres_help_text: "Simple answers right in the app for every feature, whenever in doubt.",
    amb_pres_price_title: "The price",
    amb_pres_price_text: "€3.99 a month, for the whole family up to 6 people — not a per-person price. 7-day free trial, cancel anytime in one tap, no commitment.",
    amb_pres_who_lbl: "👉 Good fit for:",
    amb_pres_ex_lbl: "💬 Example:",
    amb_pres_what_who: "anyone managing a household, alone or with others — families, couples, roommates.",
    amb_pres_what_ex: "\"You know when you have to repeat the same thing 3 times to the whole family? With HomeSync, everyone sees the same info, no more repeating yourself.\"",
    amb_pres_stock_who: "those who often buy duplicates, or shop 'blindly' without knowing what's left at home.",
    amb_pres_stock_ex: "\"Remember that time you bought rice when there was already a bag? That doesn't happen anymore.\"",
    amb_pres_shopping_who: "couples or roommates who shop separately, or parents sending a teen to run an errand.",
    amb_pres_shopping_ex: "\"Your partner is at the store and you think of something to add? Add it from your couch, it shows up instantly on their phone.\"",
    amb_pres_budget_who: "those who want to better track daily spending, without using a complicated spreadsheet.",
    amb_pres_budget_ex: "\"No more surprise on the 30th — you see in real time how much is left in your shopping budget.\"",
    amb_pres_recipes_who: "those who struggle every night to find a meal idea, or want to better organize their weekly menus.",
    amb_pres_recipes_ex: "\"The classic 'what's for dinner?' — a button suggests a random recipe, and adds what's missing straight to your shopping list.\"",
    amb_pres_calendar_who: "families with kids (appointments, activities), or households wanting to fairly split chores.",
    amb_pres_calendar_ex: "\"Who's taking out the trash this week? The chore rotates automatically between family members, no need to think about it.\"",
    amb_pres_vacation_who: "groups of friends or families traveling together who always struggle to calculate who owes what afterward.",
    amb_pres_vacation_ex: "\"No more calculator at the end of a trip with friends — the app tells you exactly who owes whom.\"",
    amb_pres_members_who: "families up to 6 people, where everyone wants their own access without depending on one shared phone.",
    amb_pres_members_ex: "\"Each family member logs in from their own phone, with their own name — no need to share a single account.\"",
    amb_pres_theme_who: "those who like personalizing their apps, or simply changing the visual mood.",
    amb_pres_theme_ex: "\"Everyone can pick their favorite theme, it stays personal to each person, not imposed on the whole family.\"",
    amb_pres_help_who: "those hesitant to try a new app for fear of not knowing how to use it.",
    amb_pres_help_ex: "\"Unsure about a feature? The answer is right there in the app, no need to look elsewhere.\"",
    amb_pres_price_who: "everyone — it's precisely the argument that reassures those hesitant about subscription prices in general.",
    amb_pres_price_ex: "\"It comes down to less than 70 cents per person per month if there are 6 of you — and you can try it free before paying anything.\"",
    amb_community_title: "📢 News",
    amb_leaderboard_lbl: "Your position",
    amb_leaderboard_empty: "No leaderboard available yet.",
    amb_admin_no_iban: "No IBAN provided yet",
    amb_admin_to_pay: "To pay",
    amb_admin_active_subs: "Active subscribers",
    amb_admin_tab_rank: "Leaderboard",
    amb_news_empty: "No news yet.",
    amb_my_rank_label: "Your position",
    amb_lb_customers_suffix: "customers",
    amb_contact_btn: "📨 Contact us",
    amb_admin_tab_pending: "Pending",
    amb_admin_tab_all: "All",
    amb_admin_tab_post: "Post",
    amb_admin_tab_activity: "App activity",
    amb_activity_sessions: "sessions",
    amb_activity_days_active: "days between 1st and last visit",
    amb_activity_empty: "No activity data yet.",
    amb_activity_unknown: "Unknown name",
    amb_activity_landing_total: "Unique landing visitors",
    amb_activity_landing_7d: "Landing — last 7 days",
    amb_activity_app_total: "Unique app visitors",
    amb_activity_app_7d: "App — last 7 days",
    amb_activity_households_lbl: "Registered households",
    amb_admin_post_title_lbl: "Title",
    amb_admin_post_body_lbl: "Message",
    amb_admin_post_submit: "Publish news",
    amb_admin_post_image_lbl: "Photo (optional)",
    amb_admin_approve: "✅ Approve",
    amb_admin_reject: "✕ Reject",
    amb_admin_no_pending: "No candidates yet.",
    amb_admin_reactivate: "Reactivate",
    amb_admin_suspend: "Suspend",
    amb_admin_tab_payouts: "Payouts",
    amb_admin_no_payouts: "No payouts yet.",
    amb_admin_mark_paid: "Mark as paid",
    amb_admin_existing_posts_lbl: "Published news",
    amb_admin_new_post_lbl: "New post",
    amb_admin_delete_post: "🗑️ Delete",
    amb_admin_delete_confirm: "Delete this news post?",
    amb_forgot_pass: "Forgot password?",
    amb_reset_sent: "Email sent — check your inbox.",
    amb_newpass_title: "New password",
    amb_newpass_sub: "Choose a new password for your account.",
    amb_newpass_submit: "Save new password",
    amb_newpass_done: "Password updated! You can now log in with it.",
    amb_stat_clicks: "Clicks on your link",
    amb_accepted_banner: "Good news — your application has been accepted! Your link is active, commissions are starting to record.",
    amb_privacy_title: "🔒 My data",
    amb_export_btn: "📤 Export my data",
    amb_delete_btn: "🗑️ Delete my account",
    amb_delete_confirm1: "Do you really want to delete your ambassador account? This action is irreversible.",
    amb_delete_confirm2: "To confirm, type DELETE below:",
    amb_delete_keyword: "DELETE",
    amb_delete_blocked_pending: "Your account can't be deleted while commissions are still pending payout. Please contact us.",
    amb_delete_done: "Your account has been deleted.",
    amb_iban_already_saved: "IBAN already saved — retype it to change it",
    amb_terms_label_1: "I certify that I am 18 or older and I accept the",
    amb_terms_label_link: "Ambassador program terms",
    amb_age_lbl: "Your age",
    amb_err_age: "The program is reserved for people aged 18 or older.",
    amb_complete_title: "One more step",
    amb_complete_sub: "Before creating your ambassador profile, confirm these 2 points.",
    amb_complete_submit: "Continue",
    amb_terms_page_title: "Ambassador Program Terms",
    amb_terms_1_title: "Minimum age",
    amb_terms_1_body: "The Minzri Ambassador program is reserved for people aged 18 or older. By signing up, you certify that you are at least 18 years old on the date of your registration.",
    amb_terms_2_title: "Commission",
    amb_terms_2_body: "You receive 0.50 € for each successful Stripe payment from someone you referred, for as long as they remain subscribed to HomeSync.",
    amb_terms_3_title: "Payout",
    amb_terms_3_body: "Pending commissions are calculated on the 5th of each month. A payout is triggered once your balance reaches 15 €; below that, it carries over to the next month. The bank transfer is done manually by our team, within a few days.",
    amb_terms_4_title: "One customer, one ambassador",
    amb_terms_4_body: "Each customer can only ever be linked to one ambassador, permanently fixed at their very first subscription — canceling and resubscribing never changes the original ambassador.",
    amb_terms_5_title: "Account approval",
    amb_terms_5_body: "Your application is reviewed manually before approval. Minzri reserves the right to accept, reject, or suspend an ambassador account at any time, particularly in case of fraud or detected abuse.",
    amb_terms_6_title: "Self-referral not allowed",
    amb_terms_6_body: "An ambassador cannot use their own link to subscribe themselves — these cases are automatically detected and blocked.",
    amb_admin_age_lbl: "Declared age",
    amb_admin_certified: "18+ certified",
    amb_admin_not_certified: "Not certified",
    amb_admin_search_ph: "Search a name or email…",
    amb_err_terms: "Please accept the terms to continue.",
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
    amb_code_lbl: "Or just your code (to share out loud)",
    amb_tab_dashboard: "📊 Dashboard",
    amb_tab_news: "📢 News",
    amb_tab_manage: "⚙️ Manage",
    amb_share_btn: "Share",
    amb_share_text: "I use HomeSync to organize my household — I recommend it:",
    amb_qr_title: "Your QR code",
    amb_qr_sub: "Show it or download it to share.",
    amb_qr_download: "⬇️ Download image",
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
    footer_cgu: "Terms and conditions",
    footer_contact: "Contact",
    footer_privacy: "Privacy policy",
    footer_ambassador: "Become an ambassador",
    footer_blogger: "Blogger space",
    blogger_login_title: "Blogger space",
    blogger_login_sub: "Sign in to manage Tips & Tricks.",
    blogger_login_btn: "Sign in",
    blogger_dash_title: "Tips & Tricks",
    blogger_new_tip_btn: "+ New tip",
    blogger_field_title: "Title",
    blogger_field_desc: "Short description",
    blogger_field_category: "Category",
    blogger_field_source_name: "Creator / source name",
    blogger_field_source_url: "Link (YouTube, TikTok, Instagram, article…)",
    blogger_field_thumbnail: "Thumbnail style",
    blogger_save_draft: "Save as draft",
    blogger_publish: "Publish",
    blogger_submit_review: "Submit for publication",
    blogger_toggle_to_signup: "No blogger account yet?",
    blogger_toggle_link_signup: "Sign up",
    blogger_pending_title: "Request sent",
    blogger_pending_sub: "Your signup is pending approval by the administrator. Check back later.",
    blogger_rejected_title: "Request not approved",
    blogger_rejected_sub: "Your request wasn't approved this time.",
    amb_admin_tab_bloggers: "Bloggers",
    amb_admin_tab_tips: "Tips",
    amb_admin_tab_promo: "Open house",
    promo_field_label: "Period name (internal)",
    promo_field_start: "Start date",
    promo_field_end: "End date",
    promo_create_btn: "+ Create this free period",
    landing_amb_code_link: "🤝 Have an ambassador code?",
    landing_amb_code_ph: "FIRSTNAME1234",
    landing_amb_code_saved: "✓ Code saved — it will be used with your subscription.",
    cgu_1_title: "The service",
    cgu_1_body: "HomeSync is a household management app (shopping, stock, budget, recipes, calendar) published by Minzri, available by subscription.",
    cgu_2_title: "Subscription and free trial",
    cgu_2_body: "The subscription includes a 7-day free trial (14 days via an ambassador link), then €3.99/month, cancellable anytime in one tap from the app, with no commitment or hidden fees.",
    cgu_3_title: "One subscription, several members",
    cgu_3_body: "A single subscription covers up to 6 members of the same household, at no extra cost per person.",
    cgu_4_title: "Payment",
    cgu_4_body: "Payments are securely processed by Stripe. Minzri never stores your full banking details.",
    cgu_5_title: "Cancellation",
    cgu_5_body: "You can cancel your subscription at any time from the app. Access remains active until the end of the already-paid period.",
    privacy_1_title: "Data collected",
    privacy_1_body: "Name, email, and the data you enter in the app (shopping, stock, budget, recipes, calendar) — only to make the service work.",
    privacy_2_title: "Your rights",
    privacy_2_body: "You can export or delete all your data at any time, directly from the app's settings.",
    privacy_3_title: "Data sharing",
    privacy_3_body: "Your data is never sold. It is only shared with the technical providers necessary for the service to work (hosting, payment).",
    privacy_4_title: "Contact",
    privacy_4_body: "For any question about your data, use the Contact button at the bottom of the page.",
    pm_title: "Which device?",
    pm_sub: "Pick your device to install it in a few seconds",
    pm_pc_lbl: "Computer",
    pm_direct_login: "Start my trial",
    pm_direct_hint: "Already decided? Skip straight to the app, no install steps.",
    pm_download_btn: "📥 Install the app",
    pm_download_sub: "Choose your device",
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
    fb1_q: "Didn't we already have that?", fb1_title: "Stop buying what you already have.", fb1_text: "Check your stock in real time and know instantly what's left at home.",
    fb2_q: "How much will I pay at checkout?", fb2_title: "Know the total before you reach the register.", fb2_text: "Add prices as you shop and keep your budget under control.",
    fb3_q: "Who's doing what this week?", fb3_title: "The whole family knows what to do.", fb3_text: "Appointments, tasks and events sync automatically.",

    forwho_bridge: "If any of these sound like you, HomeSync was built with you in mind.",
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
    mc_stock_tag: "📦 Stock", mc_stock_q: "What's left at home?", mc_stock_a: ["Every product shows its expiry date, so you're never caught off guard.", "Cook a recipe and the stock updates itself.", "Almost empty? The item goes straight to your shopping list.", "I no longer take stock of the fridge in my head — one glance tells me if we're out of eggs."],
    mc_courses_tag: "🛒 Shopping", mc_courses_q: "What do I need to buy?", mc_courses_a: ["Add an item by typing, or paste a whole list at once.", "Check items off as you go — once validated, the list automatically joins the stock.", "Save your usual lists for next week.", "I no longer wonder what we forgot — the list is already there, updated by the whole family."],
    mc_budget_tag: "💰 Budget", mc_budget_q: "How much will I spend this month?", mc_budget_a: ["The total is calculated as you shop, before you even reach the register.", "Directly connected to shopping and recurring charges like rent.", "Export a summary as PDF anytime.", "I no longer find out the total at the end of the month — I see where every euro goes, in real time."],
    mc_recettes_tag: "🍳 Recipes", mc_recettes_q: "What's for dinner tonight… and what about planning the whole week?", mc_recettes_a: ["Cook a dish, and ingredients are automatically deducted from your stock.", "Missing something? A button adds it straight to your shopping list.", "Plan the week, the list builds itself.", "I don't just save recipes — I plan meals for each person, so I never have to think about what to cook."],
    mc_agenda_tag: "📅 Calendar", mc_agenda_q: "Who's doing what, and when?", mc_agenda_a: ["Stock expiry dates appear here automatically, along with your recurring charges.", "The whole family sees the same events, in real time.", "A reminder arrives automatically before the deadline.", "I no longer have to remind everyone who's doing what — everyone sees their own schedule, without me repeating myself."],
    mc_membres_tag: "👥 Members", mc_membres_q: "How does the whole family stay connected?", mc_membres_a: ["Each member logs in from their own device.", "What one adds, the others see instantly.", "Invite in one click, with a simple code or QR code.", "One subscription covers up to 6 members — no one pays individually.", "I no longer send 10 messages to say the same thing — everyone sees the same info, at the same time."],

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
      const code = ref.trim().toUpperCase();
      localStorage.setItem('homesync_ref_code', code);
      localStorage.setItem('homesync_ref_captured_at', String(Date.now()));
      // Un seul clic compté par code, par visiteur (pas à chaque page vue)
      const alreadyLogged = sessionStorage.getItem('homesync_ref_click_logged_' + code);
      if (!alreadyLogged) {
        fetch('https://jkiofmoqwvcgbabmqosn.supabase.co/rest/v1/rpc/log_referral_click', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': 'sb_publishable_wB-lYIAitkLuo6ARwX6tKw_ZY3ZmLRT',
            'Authorization': 'Bearer sb_publishable_wB-lYIAitkLuo6ARwX6tKw_ZY3ZmLRT',
          },
          body: JSON.stringify({ p_code: code }),
        }).catch(() => {});
        sessionStorage.setItem('homesync_ref_click_logged_' + code, '1');
      }
    }
  } catch {}
})();

// ── Champ "code ambassadeur" sur la landing (près du héros) — capte le code
// le plus tôt possible dans le parcours, pour ceux qui connaissent un code de
// vive voix sans avoir cliqué de lien (ex: installation directe depuis un store).
// Ce bloc HTML existait déjà mais n'avait jamais été branché — corrigé ici. ──
// ── Suivi de visite anonyme — juste pour compter les visiteurs uniques,
// jamais lié à une identité réelle, un seul enregistrement par jour. ──
(function trackLandingVisit() {
  try {
    let visitorId = localStorage.getItem('homesync_visitor_id');
    if (!visitorId) {
      visitorId = crypto.randomUUID();
      localStorage.setItem('homesync_visitor_id', visitorId);
    }
    fetch('https://jkiofmoqwvcgbabmqosn.supabase.co/rest/v1/rpc/log_visit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'sb_publishable_wB-lYIAitkLuo6ARwX6tKw_ZY3ZmLRT',
        'Authorization': 'Bearer sb_publishable_wB-lYIAitkLuo6ARwX6tKw_ZY3ZmLRT',
      },
      body: JSON.stringify({ p_visitor_id: visitorId, p_page: 'landing' }),
    }).catch(() => {});
  } catch {}
})();

(function initLandingAmbCode() {
  const toggle = document.getElementById('landingAmbCodeLink');
  const wrap = document.getElementById('landingAmbCodeWrap');
  const input = document.getElementById('landingAmbCode');
  const savedEl = document.getElementById('landingAmbCodeSaved');
  if (!toggle || !wrap || !input) return;

  toggle.addEventListener('click', () => {
    wrap.style.display = wrap.style.display === 'none' ? '' : 'none';
    if (wrap.style.display !== 'none') input.focus();
  });

  input.addEventListener('input', () => {
    const code = input.value.trim().toUpperCase();
    input.value = code;
    if (!code) { savedEl.style.display = 'none'; return; }

    localStorage.setItem('homesync_ref_code', code);
    localStorage.setItem('homesync_ref_captured_at', String(Date.now()));
    savedEl.style.display = '';

    const alreadyLogged = sessionStorage.getItem('homesync_ref_click_logged_' + code);
    if (!alreadyLogged) {
      fetch('https://jkiofmoqwvcgbabmqosn.supabase.co/rest/v1/rpc/log_referral_click', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'sb_publishable_wB-lYIAitkLuo6ARwX6tKw_ZY3ZmLRT',
          'Authorization': 'Bearer sb_publishable_wB-lYIAitkLuo6ARwX6tKw_ZY3ZmLRT',
        },
        body: JSON.stringify({ p_code: code }),
      }).catch(() => {});
      sessionStorage.setItem('homesync_ref_click_logged_' + code, '1');
    }
  });
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
const pmDownloadScreen = document.getElementById('pmDownloadScreen');
const pmStepsAndroid = document.getElementById('pmStepsAndroid');
const pmStepsIphone  = document.getElementById('pmStepsIphone');
const pmStepsDesktop = document.getElementById('pmStepsDesktop');

function pmShowChoice() {
  pmChoiceScreen.style.display = 'block';
  pmDownloadScreen.style.display = 'none';
  pmStepsAndroid.classList.remove('show');
  pmStepsIphone.classList.remove('show');
  pmStepsDesktop.classList.remove('show');
}
function pmShowDownload() {
  pmChoiceScreen.style.display = 'none';
  pmDownloadScreen.style.display = 'block';
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

// ── Pied de page — CGU / Contact / Politique / Devenir ambassadeur ──
document.getElementById('footerContact').addEventListener('click', askOpen);
document.getElementById('footerAmbassador').addEventListener('click', () => {
  document.getElementById('ctaAmbassador').click();
});
const cguOverlay = document.getElementById('cguOverlay');
document.getElementById('footerCgu').addEventListener('click', () => cguOverlay.classList.add('show'));
document.getElementById('cguClose').addEventListener('click', () => cguOverlay.classList.remove('show'));
cguOverlay.addEventListener('click', (e) => { if (e.target === cguOverlay) cguOverlay.classList.remove('show'); });
const privacyOverlay = document.getElementById('privacyOverlay');
document.getElementById('footerPrivacy').addEventListener('click', () => privacyOverlay.classList.add('show'));
document.getElementById('privacyClose').addEventListener('click', () => privacyOverlay.classList.remove('show'));
privacyOverlay.addEventListener('click', (e) => { if (e.target === privacyOverlay) privacyOverlay.classList.remove('show'); });
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

document.getElementById('pmShowDownload').addEventListener('click', (e) => { e.preventDefault(); pmShowDownload(); });
document.getElementById('pmBackDownload').addEventListener('click', pmShowChoice);

document.getElementById('pmAndroid').addEventListener('click', () => {
  pmDownloadScreen.style.display = 'none';
  pmStepsAndroid.classList.add('show');
});
document.getElementById('pmIphone').addEventListener('click', () => {
  pmDownloadScreen.style.display = 'none';
  pmStepsIphone.classList.add('show');
});
document.getElementById('pmSkip').addEventListener('click', () => {
  pmDownloadScreen.style.display = 'none';
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
document.getElementById('pmBack1').addEventListener('click', pmShowDownload);
document.getElementById('pmBack2').addEventListener('click', pmShowDownload);
document.getElementById('pmBack3').addEventListener('click', pmShowDownload);
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
    // La barre de navigation (avec le bouton ambassadeur) n'a aucune raison
    // d'attendre la fin de toute l'animation — elle apparaît tout de suite,
    // indépendamment du reste, pour que la navigation soit toujours possible
    // sans devoir patienter (utile pour les visiteurs qui reviennent ou
    // connaissent déjà le site).
    document.getElementById('nav').classList.add('show');

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

// Le "CONTINUER" est en position fixe (pour ne jamais chevaucher le contenu
// du héros, cf. correctif précédent) — mais rien ne le masquait une fois
// qu'on avait vraiment défilé plus bas, il restait affiché indéfiniment.
// On le cache dès qu'on quitte la zone du héros.
const updateScrollHintVisibility = () => {
  const hint = document.getElementById('scrollHint');
  if (!hint) return;
  const introEl = document.getElementById('intro');
  const introBottom = introEl ? introEl.getBoundingClientRect().bottom : 0;
  hint.style.opacity = (introBottom > 100) ? '' : '0';
  hint.style.pointerEvents = (introBottom > 100) ? '' : 'none';
};
window.addEventListener('scroll', updateScrollHintVisibility, { passive:true });
window.addEventListener('scroll', updateNavBg, { passive:true });
updateNavBg();
updateScrollHintVisibility();

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

  // Même zoom pour les images ajoutées dans "Présenter l'application" (espace ambassadeur)
  document.querySelectorAll('.amb-pres-img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });
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
  const APP_ORIGIN = "https://minzri.com";

  function translate(key) {
    try { return TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS.fr[key] || key; }
    catch { return key; }
  }

  // ── Complète le circuit "mot de passe oublié" — sans ça, cliquer le lien
  // reçu par email ne menait nulle part : Supabase renvoie ici avec un état
  // spécial "PASSWORD_RECOVERY", qu'il faut détecter pour proposer de définir
  // un nouveau mot de passe.
  const newPassOverlay = document.getElementById('ambNewPassOverlay');
  const newPassInput = document.getElementById('ambNewPass');
  const newPassError = document.getElementById('ambNewPassError');
  const newPassSubmit = document.getElementById('ambNewPassSubmit');

  supabase.auth.onAuthStateChange((event) => {
    if (event === 'PASSWORD_RECOVERY') {
      newPassOverlay.classList.add('show');
    }
  });

  newPassSubmit.addEventListener('click', async () => {
    const newPass = newPassInput.value;
    if (!newPass || newPass.length < 6) { newPassError.textContent = translate('amb_err_pass'); return; }
    newPassError.textContent = '';
    newPassSubmit.disabled = true;
    const original = newPassSubmit.textContent;
    newPassSubmit.textContent = '…';
    const { error } = await supabase.auth.updateUser({ password: newPass });
    newPassSubmit.textContent = original;
    newPassSubmit.disabled = false;
    if (error) { newPassError.textContent = translate('amb_err_generic'); return; }
    newPassOverlay.classList.remove('show');
    alert(translate('amb_newpass_done'));
  });

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
    document.getElementById('ambTermsField').style.display = isRegister ? '' : 'none';
    document.getElementById('ambAgeField').style.display = isRegister ? '' : 'none';
    errorEl.textContent = '';
  }
  switchToRegister.addEventListener('click', () => setMode('register'));
  switchToLogin.addEventListener('click', () => setMode('login'));

  document.getElementById('ambForgotPass').addEventListener('click', async () => {
    const email = emailInput.value.trim();
    if (!email || !emailRe.test(email)) { errorEl.textContent = translate('amb_err_email'); return; }
    errorEl.textContent = '';
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) { errorEl.textContent = translate('amb_err_generic'); return; }
    errorEl.style.color = 'var(--mint)';
    errorEl.textContent = translate('amb_reset_sent');
    setTimeout(() => { errorEl.style.color = ''; }, 4000);
  });

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
    if (mode === 'register' && !document.getElementById('ambTerms').checked) return errorEl.textContent = translate('amb_err_terms');
    const ageValue = parseInt(document.getElementById('ambAge').value, 10);
    if (mode === 'register' && (!ageValue || ageValue < 18)) return errorEl.textContent = translate('amb_err_age');
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
            age_at_signup: ageValue, terms_accepted_at: new Date().toISOString(),
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

  // Au chargement de la page (y compris après un rafraîchissement), si une
  // session existe déjà, on rouvre directement le tableau de bord — sans ça,
  // chaque F5 renvoyait vers la landing et obligeait à recliquer le bouton.
  (async () => {
    const { data } = await supabase.auth.getSession();
    if (data.session) { await loadDashboard(); }
  })();

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
  let pendingCompleteUser = null;

  // ── Modale Conditions Générales du programme ──
  const termsOverlay = document.getElementById('ambTermsOverlay');
  const openTermsModal = (e) => { e.preventDefault(); e.stopPropagation(); termsOverlay.classList.add('show'); };
  document.getElementById('ambTermsLink').addEventListener('click', openTermsModal);
  document.getElementById('ambTermsLink2').addEventListener('click', openTermsModal);
  document.getElementById('ambTermsClose').addEventListener('click', () => termsOverlay.classList.remove('show'));
  termsOverlay.addEventListener('click', (e) => { if (e.target === termsOverlay) termsOverlay.classList.remove('show'); });

  document.getElementById('ambCompleteSubmit').addEventListener('click', async () => {
    const errEl = document.getElementById('ambCompleteError');
    const age = parseInt(document.getElementById('ambCompleteAge').value, 10);
    const termsChecked = document.getElementById('ambCompleteTerms').checked;
    errEl.textContent = '';
    if (!age || age < 18) { errEl.textContent = translate('amb_err_age'); return; }
    if (!termsChecked) { errEl.textContent = translate('amb_err_terms'); return; }
    if (!pendingCompleteUser) return;

    const btn = document.getElementById('ambCompleteSubmit');
    btn.disabled = true; const original = btn.textContent; btn.textContent = '…';
    const user = pendingCompleteUser;
    const fallbackName = (user.user_metadata?.name || user.email.split('@')[0]);
    const code = genCode(fallbackName);
    const { data: created, error: createErr } = await supabase.from('ambassadors')
      .insert({
        user_id: user.id, name: fallbackName, email: user.email, code, status: 'pending',
        age_at_signup: age, terms_accepted_at: new Date().toISOString(),
      })
      .select().single();
    btn.textContent = original; btn.disabled = false;
    if (createErr) { errEl.textContent = translate('amb_err_generic'); return; }

    document.getElementById('ambCompleteOverlay').classList.remove('show');
    currentAmbassador = created;
    await loadDashboard();
  });

  async function loadDashboard() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return openAuthModal();

    let { data: ambassador } = await supabase.from('ambassadors').select('*').eq('user_id', user.id).maybeSingle();

    if (!ambassador) {
      // Compte déjà existant (ex: même email que l'app HomeSync) mais sans
      // profil ambassadeur — avant de le créer, on demande son âge et sa
      // certification des conditions (obligatoire, même pour ce chemin).
      pendingCompleteUser = user;
      document.getElementById('ambCompleteAge').value = '';
      document.getElementById('ambCompleteTerms').checked = false;
      document.getElementById('ambCompleteError').textContent = '';
      document.getElementById('ambCompleteOverlay').classList.add('show');
      return;
    }
    currentAmbassador = ambassador;

    dashName.textContent = ambassador.name.split(' ')[0];
    const statusLabels = { active: translate('amb_status_active'), pending: translate('amb_status_pending'), suspended: translate('amb_status_suspended') };
    statusBadge.textContent = (ambassador.status === 'active' ? '🟢 ' : ambassador.status === 'pending' ? '🟡 ' : '🔴 ') + (statusLabels[ambassador.status] || ambassador.status);
    statusBadge.className = 'amb-status ' + ambassador.status;

    // Pas de service d'email configuré — on détecte localement le passage
    // "en attente" → "actif" depuis la dernière visite, et on l'affiche une
    // seule fois avec une bannière, plutôt que de laisser passer inaperçu.
    const acceptedBanner = document.getElementById('ambAcceptedBanner');
    try {
      const lastSeenStatus = localStorage.getItem('homesync_amb_last_status_' + ambassador.id);
      if (lastSeenStatus === 'pending' && ambassador.status === 'active') {
        acceptedBanner.style.display = '';
      } else {
        acceptedBanner.style.display = 'none';
      }
      localStorage.setItem('homesync_amb_last_status_' + ambassador.id, ambassador.status);
    } catch { acceptedBanner.style.display = 'none'; }

    referralLink = `${APP_ORIGIN}/?ref=${ambassador.code}`;
    linkBox.textContent = referralLink;
    document.getElementById('ambCodeBox').textContent = ambassador.code;

    ibanInput.value = '';
    ibanInput.placeholder = ambassador.iban ? translate('amb_iban_already_saved') : 'FR76 XXXX XXXX XXXX XXXX XXXX XXX';
    ibanHolderInput.value = ambassador.iban_holder_name || '';

    const { data: stats } = await supabase.from('ambassador_stats').select('*').eq('ambassador_id', ambassador.id).maybeSingle();
    statPending.textContent = (stats?.pending_commission ?? 0).toFixed(2) + ' €';
    statActive.textContent = stats?.active_subscribers ?? 0;
    statTotal.textContent = stats?.total_customers ?? 0;
    statEarned.textContent = (stats?.total_earned ?? 0).toFixed(2) + ' €';
    const { count: clickCount } = await supabase.from('referral_clicks').select('*', { count: 'exact', head: true }).eq('ambassador_id', ambassador.id);
    document.getElementById('ambStatClicks').textContent = clickCount ?? 0;

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
    switchAmbTab('dash');
    loadCommunity();
    checkAdmin(user);
  }

  copyLinkBtn.addEventListener('click', () => {
    navigator.clipboard?.writeText(referralLink).then(() => {
      copyLinkBtn.innerHTML = '✓ ' + translate('amb_copied');
      setTimeout(() => copyLinkBtn.innerHTML = '📋 <span>' + translate('amb_copy_btn') + '</span>', 2000);
    });
  });
  document.getElementById('ambCopyCode').addEventListener('click', () => {
    const btn = document.getElementById('ambCopyCode');
    navigator.clipboard?.writeText(currentAmbassador?.code || '').then(() => {
      btn.innerHTML = '✓ ' + translate('amb_copied');
      setTimeout(() => btn.innerHTML = '📋 <span>' + translate('amb_copy_btn') + '</span>', 2000);
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

  // ── QR code du lien de parrainage ──
  const qrOverlay = document.getElementById('ambQrOverlay');
  document.getElementById('ambShowQr').addEventListener('click', () => {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(referralLink)}`;
    document.getElementById('ambQrImg').src = qrUrl;
    document.getElementById('ambQrCodeText').textContent = referralLink;
    qrOverlay.classList.add('show');
  });
  document.getElementById('ambQrClose').addEventListener('click', () => qrOverlay.classList.remove('show'));
  qrOverlay.addEventListener('click', (e) => { if (e.target === qrOverlay) qrOverlay.classList.remove('show'); });
  document.getElementById('ambQrDownload').addEventListener('click', async () => {
    try {
      const res = await fetch(document.getElementById('ambQrImg').src);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = `homesync-qr-${currentAmbassador?.code || 'parrainage'}.png`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      window.open(document.getElementById('ambQrImg').src, '_blank');
    }
  });

  saveBankBtn.addEventListener('click', async () => {
    if (!currentAmbassador) return;
    saveBankBtn.disabled = true;
    const original = saveBankBtn.textContent;
    saveBankBtn.textContent = '…';
    await callSelfServiceAction({ action: 'save_bank_info', iban: ibanInput.value.trim(), iban_holder_name: ibanHolderInput.value.trim() });
    saveBankBtn.textContent = '✓';
    setTimeout(() => saveBankBtn.textContent = original, 2000);
    saveBankBtn.disabled = false;
  });

  document.getElementById('ambDashClose').addEventListener('click', () => {
    dashOverlay.classList.remove('show');
  });

  // ── Onglets du tableau de bord ambassadeur ──
  const ambTabs = {
    dash: { btn: document.getElementById('ambTabDash'), panel: document.getElementById('ambPanelDash') },
    news: { btn: document.getElementById('ambTabNews'), panel: document.getElementById('ambPanelNews') },
    manage: { btn: document.getElementById('ambTabManage'), panel: document.getElementById('ambPanelManage') },
  };
  function switchAmbTab(key) {
    Object.entries(ambTabs).forEach(([k, t]) => {
      t.btn.classList.toggle('active', k === key);
      t.panel.style.display = k === key ? '' : 'none';
    });
  }
  ambTabs.dash.btn.addEventListener('click', () => switchAmbTab('dash'));
  ambTabs.news.btn.addEventListener('click', () => switchAmbTab('news'));
  ambTabs.manage.btn.addEventListener('click', () => switchAmbTab('manage'));

  signOutBtn.addEventListener('click', async () => {
    await supabase.auth.signOut();
    dashOverlay.classList.remove('show');
    currentAmbassador = null;
  });

  // ── Nous contacter ──
  const contactBtn = document.getElementById('ambContactBtn');
  const CONTACT_EMAIL = "contact@homesync-app.com"; // ⚠️ remplace par ta vraie adresse
  contactBtn.addEventListener('click', () => {
    const name = currentAmbassador?.name || '';
    const email = currentAmbassador?.email || '';
    const subject = encodeURIComponent('HomeSync Ambassadeurs — Question');
    const body = encodeURIComponent(`Nom : ${name}\nEmail : ${email}\n\n`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });

  async function callSelfServiceAction(payload) {
    const { data: { session } } = await supabase.auth.getSession();
    const res = await fetch(`${SUPA_URL}/functions/v1/ambassador-self-service`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${session.access_token}` },
      body: JSON.stringify(payload),
    });
    return res.json();
  }

  document.getElementById('ambExportData').addEventListener('click', async (e) => {
    const btn = e.currentTarget;
    btn.disabled = true; const original = btn.textContent; btn.textContent = '…';
    const result = await callSelfServiceAction({ action: 'export_data' });
    btn.textContent = original; btn.disabled = false;
    if (result.error) return alert(translate('amb_err_generic'));
    const blob = new Blob([JSON.stringify(result, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'homesync-ambassadeur-donnees.json';
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById('ambDeleteAccount').addEventListener('click', async () => {
    if (!confirm(translate('amb_delete_confirm1'))) return;
    const typed = prompt(translate('amb_delete_confirm2'));
    if ((typed || '').trim().toLowerCase() !== translate('amb_delete_keyword').toLowerCase()) return;
    const btn = document.getElementById('ambDeleteAccount');
    btn.disabled = true; const original = btn.textContent; btn.textContent = '…';
    const result = await callSelfServiceAction({ action: 'delete_account' });
    if (result.error === 'pending_commissions') {
      alert(translate('amb_delete_blocked_pending'));
      btn.textContent = original; btn.disabled = false;
      return;
    }
    if (result.error) {
      alert(translate('amb_err_generic'));
      btn.textContent = original; btn.disabled = false;
      return;
    }
    await supabase.auth.signOut();
    dashOverlay.classList.remove('show');
    alert(translate('amb_delete_done'));
  });

  // ── Communauté — actualités + classement ──
  const newsList = document.getElementById('ambNewsList');
  const leaderboardList = document.getElementById('ambLeaderboard');

  // ── FAQ accordéon — un seul item ouvert à la fois, replié par défaut ──
  document.querySelectorAll('.amb-faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.amb-faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.amb-faq-item.open').forEach(o => o.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  async function loadCommunity() {
    const { data: posts } = await supabase.from('ambassador_posts').select('*').order('created_at', { ascending: false }).limit(10);
    if (posts && posts.length) {
      newsList.innerHTML = posts.map(p => {
        const d = new Date(p.created_at).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
        const imgHtml = p.image_url ? `<img src="${p.image_url}" style="width:100%; border-radius:10px; margin-bottom:10px; display:block;"/>` : '';
        return `<div class="amb-news-card">${imgHtml}<div class="amb-news-title">${escapeHtml(p.title)}</div><div class="amb-news-body">${escapeHtml(p.body)}</div><div class="amb-news-date">${d}</div></div>`;
      }).join('');
    } else {
      newsList.innerHTML = `<p class="amb-empty">${translate('amb_news_empty')}</p>`;
    }

    // Seule SA PROPRE position est demandée — jamais la liste des autres,
    // ni même techniquement envoyée au navigateur (calculée côté serveur).
    const { data: myRank, error: rankErr } = await supabase.rpc('get_my_ambassador_rank');
    if (!rankErr && myRank && myRank.length) {
      const r = myRank[0];
      leaderboardList.innerHTML = `<div class="amb-leaderboard-row"><span class="amb-lb-rank">#${r.rank}</span><span class="amb-lb-name">${translate('amb_my_rank_label')}</span><span class="amb-lb-count">${r.active_customers} ${translate('amb_lb_customers_suffix')}</span></div>`;
    } else {
      leaderboardList.innerHTML = `<p class="amb-empty">${translate('amb_leaderboard_empty')}</p>`;
    }
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ── Panneau admin — visible seulement pour l'email admin, sécurité réelle côté serveur ──
  const ADMIN_EMAILS = ["part.kobbaz@outlook.fr"]; // ⚠️ doit correspondre à l'Edge Function
  const adminSection = document.getElementById('ambAdminSection');
  const adminTabPending = document.getElementById('ambAdminTabPending');
  const adminTabAll = document.getElementById('ambAdminTabAll');
  const adminTabRank = document.getElementById('ambAdminTabRank');
  const adminTabPayouts = document.getElementById('ambAdminTabPayouts');
  const adminTabPost = document.getElementById('ambAdminTabPost');
  const adminTabActivity = document.getElementById('ambAdminTabActivity');
  const adminTabBloggers = document.getElementById('ambAdminTabBloggers');
  const adminTabTips = document.getElementById('ambAdminTabTips');
  const adminTabPromo = document.getElementById('ambAdminTabPromo');
  const adminPendingList = document.getElementById('ambAdminPendingList');
  const adminAllList = document.getElementById('ambAdminAllList');
  const adminPostForm = document.getElementById('ambAdminPostForm');

  async function callAdminAction(payload) {
    const { data: { session } } = await supabase.auth.getSession();
    const res = await fetch(`${SUPA_URL}/functions/v1/admin-ambassador-actions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${session.access_token}` },
      body: JSON.stringify(payload),
    });
    return res.json();
  }

  async function checkAdmin(user) {
    if (!ADMIN_EMAILS.includes((user.email || '').toLowerCase())) { adminSection.style.display = 'none'; return; }
    adminSection.style.display = '';
    await loadPendingList();
  }

  let pendingItemsCache = [];
  let allItemsCache = [];

  function matchesSearch(a, query) {
    if (!query) return true;
    const q = query.toLowerCase();
    return (a.name||'').toLowerCase().includes(q) || (a.email||'').toLowerCase().includes(q) || (a.code||'').toLowerCase().includes(q);
  }

  function renderPendingList(items) {
    adminPendingList.innerHTML = items.length ? items.map(a => `
      <div class="amb-admin-card">
        <div class="amb-admin-card-row">
          <div>
            <div class="amb-admin-card-name">${escapeHtml(a.name)}</div>
            <div class="amb-admin-card-email">${escapeHtml(a.email)}</div>
            <div class="amb-admin-card-email">🎂 ${translate('amb_admin_age_lbl')} : <b>${a.age_at_signup ?? '—'}</b> · ${a.terms_accepted_at ? `✅ ${translate('amb_admin_certified')}` : `⚠️ ${translate('amb_admin_not_certified')}`}</div>
          </div>
        </div>
        <div class="amb-admin-actions">
          <button class="amb-btn-approve" data-id="${a.id}" data-action="approve">${translate('amb_admin_approve')}</button>
          <button class="amb-btn-reject" data-id="${a.id}" data-action="reject">${translate('amb_admin_reject')}</button>
        </div>
      </div>
    `).join('') : `<p class="amb-empty">${translate('amb_admin_no_pending')}</p>`;

    adminPendingList.querySelectorAll('button[data-action]').forEach(btn => {
      btn.addEventListener('click', async () => {
        btn.disabled = true;
        await callAdminAction({ action: btn.dataset.action, ambassador_id: btn.dataset.id });
        await loadPendingList();
      });
    });
  }

  async function loadPendingList() {
    const result = await callAdminAction({ action: 'list_pending' });
    pendingItemsCache = result.ambassadors || [];
    const query = document.getElementById('ambAdminSearch').value.trim();
    renderPendingList(pendingItemsCache.filter(a => matchesSearch(a, query)));
  }

  function renderAllList(items) {
    adminAllList.innerHTML = items.length ? items.map(a => `
      <div class="amb-admin-card">
        <div class="amb-admin-card-row">
          <div style="cursor:pointer;" data-toggle="${a.id}">
            <div class="amb-admin-card-name">${escapeHtml(a.name)} — ${a.status} <span style="color:var(--mist); font-weight:400;">▾</span></div>
            <div class="amb-admin-card-email">${escapeHtml(a.email)} · ${escapeHtml(a.code)}</div>
          </div>
        </div>
        <div id="ambDetail-${a.id}" style="display:none; margin-top:10px; padding-top:10px; border-top:1px dashed var(--line);">
          <div class="amb-admin-card-email" style="margin-bottom:5px;">💰 ${translate('amb_admin_to_pay')} : <b style="color:var(--mint);">${Number(a.pending_commission||0).toFixed(2)} €</b></div>
          <div class="amb-admin-card-email" style="margin-bottom:5px;">👥 ${translate('amb_admin_active_subs')} : <b>${a.active_subscribers||0}</b></div>
          <div class="amb-admin-card-email" style="margin-bottom:5px;">🎂 ${translate('amb_admin_age_lbl')} : <b>${a.age_at_signup ?? '—'}</b></div>
          <div class="amb-admin-card-email" style="margin-bottom:5px;">${a.terms_accepted_at ? `✅ ${translate('amb_admin_certified')}` : `⚠️ ${translate('amb_admin_not_certified')}`}</div>
          <div class="amb-admin-card-email">${a.iban ? `💳 ${escapeHtml(a.iban)} — ${escapeHtml(a.iban_holder_name||'')}` : translate('amb_admin_no_iban')}</div>
        </div>
        <div class="amb-admin-actions" style="margin-top:10px;">
          ${a.status === 'suspended'
            ? `<button class="amb-btn-approve" data-id="${a.id}" data-action="reactivate">${translate('amb_admin_reactivate')}</button>`
            : `<button class="amb-btn-reject" data-id="${a.id}" data-action="suspend">${translate('amb_admin_suspend')}</button>`}
        </div>
      </div>
    `).join('') : `<p class="amb-empty">${translate('amb_admin_no_pending')}</p>`;

    adminAllList.querySelectorAll('[data-toggle]').forEach(el => {
      el.addEventListener('click', () => {
        const detail = document.getElementById('ambDetail-' + el.dataset.toggle);
        detail.style.display = detail.style.display === 'none' ? '' : 'none';
      });
    });

    adminAllList.querySelectorAll('button[data-action]').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        btn.disabled = true;
        await callAdminAction({ action: btn.dataset.action, ambassador_id: btn.dataset.id });
        await loadAllList();
      });
    });
  }

  async function loadAllList() {
    const result = await callAdminAction({ action: 'list_all' });
    allItemsCache = result.ambassadors || [];
    const query = document.getElementById('ambAdminSearch').value.trim();
    renderAllList(allItemsCache.filter(a => matchesSearch(a, query)));
  }

  document.getElementById('ambAdminSearch').addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (adminPendingList.style.display !== 'none') renderPendingList(pendingItemsCache.filter(a => matchesSearch(a, query)));
    if (adminAllList.style.display !== 'none') renderAllList(allItemsCache.filter(a => matchesSearch(a, query)));
  });

  async function loadAdminLeaderboard() {
    const result = await callAdminAction({ action: 'list_leaderboard' });
    const items = result.leaderboard || [];
    const rankList = document.getElementById('ambAdminRankList');
    rankList.innerHTML = items.length ? items.map(l => `
      <div class="amb-leaderboard-row">
        <span class="amb-lb-rank">#${l.rank}</span>
        <span class="amb-lb-name">${escapeHtml(l.name)}</span>
        <span class="amb-lb-count">${l.active_customers} ${translate('amb_lb_customers_suffix')}</span>
      </div>
    `).join('') : `<p class="amb-empty">${translate('amb_leaderboard_empty')}</p>`;
  }

  async function loadAppActivity() {
    const statsResult = await callAdminAction({ action: 'list_visitor_stats' });
    const s = statsResult.stats || {};
    const list = document.getElementById('ambAdminActivityList');

    const statsHtml = `
      <div class="amb-stat-grid" style="margin-bottom:16px;">
        <div class="amb-stat-card">
          <div class="amb-stat-val">${s.landing?.total_unique ?? 0}</div>
          <div class="amb-stat-lbl">${translate('amb_activity_landing_total')}</div>
        </div>
        <div class="amb-stat-card">
          <div class="amb-stat-val">${s.landing?.last_7_days ?? 0}</div>
          <div class="amb-stat-lbl">${translate('amb_activity_landing_7d')}</div>
        </div>
        <div class="amb-stat-card">
          <div class="amb-stat-val">${s.app?.total_unique ?? 0}</div>
          <div class="amb-stat-lbl">${translate('amb_activity_app_total')}</div>
        </div>
        <div class="amb-stat-card">
          <div class="amb-stat-val">${s.app?.last_7_days ?? 0}</div>
          <div class="amb-stat-lbl">${translate('amb_activity_app_7d')}</div>
        </div>
      </div>
      <div class="amb-leaderboard-lbl">${translate('amb_activity_households_lbl')}</div>
    `;

    const result = await callAdminAction({ action: 'list_app_activity' });
    const items = result.activity || [];
    const householdsHtml = items.length ? items.map(a => {
      const daysActive = Math.round((new Date(a.last_seen_at) - new Date(a.first_seen_at)) / 86400000);
      const inscrit = new Date(a.first_seen_at).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'fr-FR', { day: 'numeric', month: 'short' });
      const derniere = new Date(a.last_seen_at).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'fr-FR', { day: 'numeric', month: 'short' });
      const oneSessionOnly = a.session_count <= 1;
      return `
        <div class="amb-admin-card">
          <div class="amb-admin-card-row">
            <div>
              <div class="amb-admin-card-name">${escapeHtml(a.admin_name || translate('amb_activity_unknown'))} ${oneSessionOnly ? '⚠️' : ''}</div>
              <div class="amb-admin-card-email">${escapeHtml(a.admin_email || '—')}</div>
              <div class="amb-admin-card-email">${inscrit} → ${derniere} · ${a.session_count} ${translate('amb_activity_sessions')} · ${daysActive} ${translate('amb_activity_days_active')}</div>
            </div>
          </div>
        </div>
      `;
    }).join('') : `<p class="amb-empty">${translate('amb_activity_empty')}</p>`;

    list.innerHTML = statsHtml + householdsHtml;
  }

  async function loadPayouts() {
    const result = await callAdminAction({ action: 'list_payouts' });
    const items = result.payouts || [];
    const list = document.getElementById('ambAdminPayoutsList');
    list.innerHTML = items.length ? items.map(p => {
      const amb = p.ambassadors || {};
      const d = new Date(p.created_at).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
      return `
        <div class="amb-admin-card">
          <div class="amb-admin-card-row">
            <div>
              <div class="amb-admin-card-name">${escapeHtml(amb.name || '—')} — ${p.amount} € (${p.period})</div>
              <div class="amb-admin-card-email">${amb.iban ? `💳 ${escapeHtml(amb.iban)} — ${escapeHtml(amb.iban_holder_name||'')}` : translate('amb_admin_no_iban')}</div>
              <div class="amb-admin-card-email">${d} — ${p.status}</div>
            </div>
          </div>
          ${p.status !== 'paid' ? `<div class="amb-admin-actions"><button class="amb-btn-approve" data-id="${p.id}" data-action="mark_payout_paid">${translate('amb_admin_mark_paid')}</button></div>` : ''}
        </div>
      `;
    }).join('') : `<p class="amb-empty">${translate('amb_admin_no_payouts')}</p>`;

    list.querySelectorAll('button[data-action]').forEach(btn => {
      btn.addEventListener('click', async () => {
        btn.disabled = true;
        await callAdminAction({ action: btn.dataset.action, payout_id: btn.dataset.id });
        await loadPayouts();
      });
    });
  }

  async function loadExistingPosts() {
    const { data: posts } = await supabase.from('ambassador_posts').select('*').order('created_at', { ascending: false }).limit(20);
    const list = document.getElementById('ambAdminExistingPosts');
    const items = posts || [];
    list.innerHTML = items.length ? items.map(p => `
      <div class="amb-admin-card">
        <div class="amb-admin-card-row">
          <div><div class="amb-admin-card-name">${escapeHtml(p.title)}</div></div>
          <button class="amb-btn-reject" data-id="${p.id}" style="flex:none; padding:6px 12px;">${translate('amb_admin_delete_post')}</button>
        </div>
      </div>
    `).join('') : `<p class="amb-empty">${translate('amb_news_empty')}</p>`;

    list.querySelectorAll('button[data-id]').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!confirm(translate('amb_admin_delete_confirm'))) return;
        btn.disabled = true;
        await callAdminAction({ action: 'delete_news', post_id: btn.dataset.id });
        await loadExistingPosts();
        loadCommunity();
      });
    });
  }

  function switchAdminTab(tab) {
    [adminTabPending, adminTabAll, adminTabRank, adminTabPayouts, adminTabPost, adminTabActivity, adminTabBloggers, adminTabTips, adminTabPromo].forEach(t => t.classList.remove('active'));
    adminPendingList.style.display = 'none';
    adminAllList.style.display = 'none';
    document.getElementById('ambAdminRankList').style.display = 'none';
    document.getElementById('ambAdminPayoutsList').style.display = 'none';
    adminPostForm.style.display = 'none';
    document.getElementById('ambAdminActivityList').style.display = 'none';
    document.getElementById('ambAdminBloggersList').style.display = 'none';
    document.getElementById('ambAdminTipsList').style.display = 'none';
    document.getElementById('ambAdminPromoList').style.display = 'none';
    document.getElementById('ambAdminSearch').value = '';
    const searchWrap = document.getElementById('ambAdminSearchWrap');
    searchWrap.style.display = (tab === 'pending' || tab === 'all') ? '' : 'none';
    if (tab === 'pending') { adminTabPending.classList.add('active'); adminPendingList.style.display = ''; loadPendingList(); }
    if (tab === 'all') { adminTabAll.classList.add('active'); adminAllList.style.display = ''; loadAllList(); }
    if (tab === 'rank') { adminTabRank.classList.add('active'); document.getElementById('ambAdminRankList').style.display = ''; loadAdminLeaderboard(); }
    if (tab === 'payouts') { adminTabPayouts.classList.add('active'); document.getElementById('ambAdminPayoutsList').style.display = ''; loadPayouts(); }
    if (tab === 'post') { adminTabPost.classList.add('active'); adminPostForm.style.display = ''; loadExistingPosts(); }
    if (tab === 'activity') { adminTabActivity.classList.add('active'); document.getElementById('ambAdminActivityList').style.display = ''; loadAppActivity(); }
    if (tab === 'bloggers') { adminTabBloggers.classList.add('active'); document.getElementById('ambAdminBloggersList').style.display = ''; loadPendingBloggers(); }
    if (tab === 'tips') { adminTabTips.classList.add('active'); document.getElementById('ambAdminTipsList').style.display = ''; loadPendingTips(); }
    if (tab === 'promo') { adminTabPromo.classList.add('active'); document.getElementById('ambAdminPromoList').style.display = ''; loadPromoPeriods(); }
  }
  adminTabPending.addEventListener('click', () => switchAdminTab('pending'));
  adminTabAll.addEventListener('click', () => switchAdminTab('all'));
  adminTabRank.addEventListener('click', () => switchAdminTab('rank'));
  adminTabPayouts.addEventListener('click', () => switchAdminTab('payouts'));
  adminTabPost.addEventListener('click', () => switchAdminTab('post'));
  adminTabActivity.addEventListener('click', () => switchAdminTab('activity'));
  adminTabBloggers.addEventListener('click', () => switchAdminTab('bloggers'));
  adminTabTips.addEventListener('click', () => switchAdminTab('tips'));
  adminTabPromo.addEventListener('click', () => switchAdminTab('promo'));

  // ── Journées "portes ouvertes" — créer/supprimer des périodes gratuites globales ──
  async function loadPromoPeriods() {
    const list = document.getElementById('promoPeriodsList');
    list.innerHTML = '<p style="color:var(--mist);">Chargement…</p>';
    const { data: periods, error } = await supabase.from('promo_periods').select('*').order('start_date', { ascending:false });
    if (error) { list.innerHTML = '<p style="color:var(--mist);">Impossible de charger.</p>'; return; }
    if (!periods || periods.length === 0) { list.innerHTML = '<p style="color:var(--mist);">Aucune période créée pour l\'instant.</p>'; return; }
    list.innerHTML = '';
    const todayStr = new Date().toISOString().slice(0,10);
    periods.forEach(p => {
      const isActive = p.start_date <= todayStr && p.end_date >= todayStr;
      const card = document.createElement('div');
      card.style.cssText = "background:rgba(255,255,255,0.03); border-radius:14px; padding:14px; margin-bottom:10px;";
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">
          <div style="color:var(--paper); font-weight:700; font-size:14px;">${p.label}</div>
          ${isActive ? '<span style="background:rgba(110,190,138,0.2); color:#6EBE8A; font-size:10px; font-weight:700; padding:3px 8px; border-radius:99px;">Active</span>' : ''}
        </div>
        <div style="color:var(--mist); font-size:12px; margin-bottom:10px;">${p.start_date} → ${p.end_date}</div>
        <button class="btn btn-ghost promo-delete-btn" style="font-size:12px; padding:6px 12px; color:var(--rose);" data-id="${p.id}">Supprimer</button>
      `;
      list.appendChild(card);
      card.querySelector('.promo-delete-btn').addEventListener('click', async () => {
        if (!confirm('Supprimer cette période gratuite ?')) return;
        await supabase.rpc('admin_delete_promo_period', { p_id: p.id });
        loadPromoPeriods();
      });
    });
  }

  document.getElementById('promoCreateBtn').addEventListener('click', async () => {
    const label = document.getElementById('promoLabel').value.trim();
    const startDate = document.getElementById('promoStartDate').value;
    const endDate = document.getElementById('promoEndDate').value;
    if (!label || !startDate || !endDate) { alert('Merci de remplir tous les champs.'); return; }
    const { data: result } = await supabase.rpc('admin_create_promo_period', { p_label:label, p_start_date:startDate, p_end_date:endDate });
    if (!result || !result.ok) { alert(result?.error || 'Erreur.'); return; }
    document.getElementById('promoLabel').value = '';
    document.getElementById('promoStartDate').value = '';
    document.getElementById('promoEndDate').value = '';
    loadPromoPeriods();
  });

  // ── Modération : blogueurs en attente ──
  async function loadPendingBloggers() {
    const list = document.getElementById('ambAdminBloggersList');
    list.innerHTML = '<p style="color:var(--mist);">Chargement…</p>';
    const { data: bloggers, error } = await supabase.rpc('admin_list_pending_bloggers');
    if (error) { list.innerHTML = '<p style="color:var(--mist);">Impossible de charger.</p>'; return; }
    if (!bloggers || bloggers.length === 0) { list.innerHTML = '<p style="color:var(--mist);">Aucune demande en attente.</p>'; return; }
    list.innerHTML = '';
    bloggers.forEach(b => {
      const card = document.createElement('div');
      card.style.cssText = "background:rgba(255,255,255,0.03); border-radius:14px; padding:14px; margin-bottom:10px;";
      card.innerHTML = `
        <div style="color:var(--paper); font-weight:700; font-size:14px; margin-bottom:4px;">${b.name}</div>
        <div style="color:var(--mist); font-size:12px; margin-bottom:10px;">${b.email}</div>
        <div style="display:flex; gap:8px;">
          <button class="btn btn-primary blogger-approve-btn" style="flex:1; font-size:12px; padding:8px;" data-id="${b.id}">Approuver</button>
          <button class="btn btn-ghost blogger-reject-btn" style="flex:1; font-size:12px; padding:8px; color:var(--rose);" data-id="${b.id}">Refuser</button>
        </div>
      `;
      list.appendChild(card);
      card.querySelector('.blogger-approve-btn').addEventListener('click', async () => {
        await supabase.rpc('admin_set_blogger_status', { p_blogger_id: b.id, p_status: 'approved' });
        loadPendingBloggers();
      });
      card.querySelector('.blogger-reject-btn').addEventListener('click', async () => {
        await supabase.rpc('admin_set_blogger_status', { p_blogger_id: b.id, p_status: 'rejected' });
        loadPendingBloggers();
      });
    });
  }

  // ── Modération : conseils en attente de publication ──
  async function loadPendingTips() {
    const list = document.getElementById('ambAdminTipsList');
    list.innerHTML = '<p style="color:var(--mist);">Chargement…</p>';
    const { data: tips, error } = await supabase.rpc('admin_list_pending_tips');
    if (error) { list.innerHTML = '<p style="color:var(--mist);">Impossible de charger.</p>'; return; }
    if (!tips || tips.length === 0) { list.innerHTML = '<p style="color:var(--mist);">Aucun conseil en attente.</p>'; return; }
    list.innerHTML = '';
    tips.forEach(tip => {
      const card = document.createElement('div');
      card.style.cssText = "background:rgba(255,255,255,0.03); border-radius:14px; padding:14px; margin-bottom:10px;";
      card.innerHTML = `
        <div style="color:var(--paper); font-weight:700; font-size:14px; margin-bottom:4px;">${tip.title}</div>
        <div style="color:var(--mist); font-size:12px; margin-bottom:8px;">${tip.category} · ${tip.source_name}</div>
        <p style="color:var(--mist); font-size:12px; margin-bottom:10px;">${tip.description}</p>
        <a href="${tip.source_url}" target="_blank" rel="noopener noreferrer" style="color:var(--mint); font-size:12px; display:block; margin-bottom:10px;">Voir le lien d'origine →</a>
        <div style="display:flex; gap:8px;">
          <button class="btn btn-primary tip-approve-btn" style="flex:1; font-size:12px; padding:8px;" data-id="${tip.id}">Approuver et publier</button>
          <button class="btn btn-ghost tip-reject-btn" style="flex:1; font-size:12px; padding:8px; color:var(--rose);" data-id="${tip.id}">Refuser</button>
        </div>
      `;
      list.appendChild(card);
      card.querySelector('.tip-approve-btn').addEventListener('click', async () => {
        await supabase.rpc('admin_review_tip', { p_tip_id: tip.id, p_approve: true });
        loadPendingTips();
      });
      card.querySelector('.tip-reject-btn').addEventListener('click', async () => {
        await supabase.rpc('admin_review_tip', { p_tip_id: tip.id, p_approve: false });
        loadPendingTips();
      });
    });
  }


  document.getElementById('ambAdminPostImage').addEventListener('change', (e) => {
    const file = e.target.files[0];
    const preview = document.getElementById('ambAdminPostImagePreview');
    if (!file) { preview.style.display = 'none'; return; }
    const reader = new FileReader();
    reader.onload = (ev) => { preview.src = ev.target.result; preview.style.display = ''; };
    reader.readAsDataURL(file);
  });

  document.getElementById('ambAdminPostSubmit').addEventListener('click', async () => {
    const title = document.getElementById('ambAdminPostTitle').value.trim();
    const postBody = document.getElementById('ambAdminPostBody').value.trim();
    if (!title || !postBody) return;
    const btn = document.getElementById('ambAdminPostSubmit');
    btn.disabled = true; const original = btn.textContent; btn.textContent = '…';

    const payload = { action: 'post_news', title, post_body: postBody };
    const imageFile = document.getElementById('ambAdminPostImage').files[0];
    if (imageFile) {
      const base64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = reject;
        reader.readAsDataURL(imageFile);
      });
      payload.image_base64 = base64;
      payload.image_ext = imageFile.type.includes('png') ? 'png' : 'jpg';
    }

    await callAdminAction(payload);
    document.getElementById('ambAdminPostTitle').value = '';
    document.getElementById('ambAdminPostBody').value = '';
    document.getElementById('ambAdminPostImage').value = '';
    document.getElementById('ambAdminPostImagePreview').style.display = 'none';
    btn.textContent = original; btn.disabled = false;
    loadCommunity();
    loadExistingPosts();
  });
})();

// ═══════════════════════════════════════════════════════════════════════════
// ESPACE BLOGUEUR — gestion des Conseils & Astuces
// Bloc autonome, indépendant du reste — n'interfère avec aucune autre
// fonctionnalité existante du site.
// ═══════════════════════════════════════════════════════════════════════════
(function () {
  const openBtn  = document.getElementById('footerBlogger');
  const overlay  = document.getElementById('bloggerOverlay');
  const closeBtn = document.getElementById('bloggerClose');
  if (!openBtn || !overlay || !closeBtn) return;

  const SUPA_URL = "https://jkiofmoqwvcgbabmqosn.supabase.co";
  const SUPA_KEY = "sb_publishable_wB-lYIAitkLuo6ARwX6tKw_ZY3ZmLRT";
  const supabase = window.supabase.createClient(SUPA_URL, SUPA_KEY);

  const authWrap  = document.getElementById('bloggerAuthWrap');
  const dashWrap  = document.getElementById('bloggerDashWrap');
  const authError = document.getElementById('bloggerAuthError');
  const tipForm   = document.getElementById('bloggerTipForm');
  const tipsList  = document.getElementById('bloggerTipsList');

  let editingTipId = null; // null = création d'un nouveau conseil
  let selectedThumbStyle = 'glow';

  const TIP_CAT_META = {
    'budget':          { icon:'💰', color:'#4BBEAA' },
    'economies':       { icon:'🪙', color:'#F2C14E' },
    'courses':         { icon:'🛒', color:'#6EA8E8' },
    'cuisine':         { icon:'🍳', color:'#F28C6B' },
    'maison':          { icon:'🏠', color:'#B8A9E3' },
    'organisation':    { icon:'📋', color:'#E8617A' },
    'anti-gaspillage': { icon:'♻️', color:'#6EBE8A' },
    'quotidien':       { icon:'✨', color:'#E8A8C8' },
  };

  function updateThumbPreviews() {
    const cat = TIP_CAT_META[document.getElementById('tipCategory').value] || TIP_CAT_META['budget'];
    document.querySelectorAll('.thumb-style-opt').forEach(el => { el.style.background = `linear-gradient(135deg, ${cat.color}, ${cat.color}99)`; });
    ['Glow','Dots','Waves'].forEach(suffix => {
      const el = document.getElementById('thumbPreviewIcon' + suffix);
      if (el) el.textContent = cat.icon;
    });
    const dotsSvg = document.getElementById('thumbPreviewDots');
    if (dotsSvg) {
      dotsSvg.innerHTML = Array.from({length:8}).map((_,i)=>
        `<circle cx="${(i*37+10)%100}%" cy="${(i*53+15)%100}%" r="${2+(i%3)}" fill="#fff"/>`
      ).join('');
    }
  }
  document.getElementById('tipCategory').addEventListener('change', updateThumbPreviews);

  function selectThumbStyle(style) {
    selectedThumbStyle = style;
    document.querySelectorAll('.thumb-style-opt').forEach(el => el.classList.toggle('selected', el.dataset.style === style));
  }
  document.querySelectorAll('.thumb-style-opt').forEach(el => {
    el.addEventListener('click', () => selectThumbStyle(el.dataset.style));
  });
  updateThumbPreviews();
  selectThumbStyle('glow');

  const pendingWrap = document.getElementById('bloggerPendingWrap');
  const rejectedWrap = document.getElementById('bloggerRejectedWrap');
  let isSignupMode = false;

  function setBloggerMode(signup) {
    isSignupMode = signup;
    document.getElementById('bloggerNameField').style.display = signup ? '' : 'none';
    document.getElementById('bloggerAuthTitle').textContent = signup ? 'Inscription blogueur' : 'Espace blogueur';
    document.getElementById('bloggerAuthSub').textContent = signup
      ? "Créez votre compte — votre demande sera examinée avant validation."
      : "Connectez-vous pour gérer les Conseils & Astuces.";
    document.getElementById('bloggerLoginBtn').textContent = signup ? "S'inscrire" : "Se connecter";
    document.getElementById('bloggerToggleText').textContent = signup ? "Déjà un compte blogueur ?" : "Pas encore de compte blogueur ?";
    document.getElementById('bloggerToggleMode').textContent = signup ? "Se connecter" : "S'inscrire";
    authError.style.display = 'none';
  }
  document.getElementById('bloggerToggleMode').addEventListener('click', (e) => {
    e.preventDefault();
    setBloggerMode(!isSignupMode);
  });

  openBtn.addEventListener('click', () => { overlay.classList.add('show'); checkSession(); });
  closeBtn.addEventListener('click', () => overlay.classList.remove('show'));

  function showAuthState(state) {
    authWrap.style.display = state === 'auth' ? '' : 'none';
    pendingWrap.style.display = state === 'pending' ? '' : 'none';
    rejectedWrap.style.display = state === 'rejected' ? '' : 'none';
    dashWrap.style.display = state === 'dash' ? '' : 'none';
  }

  async function checkSession() {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) { await enterDashboard(); }
    else { showAuthState('auth'); }
  }

  document.getElementById('bloggerForgotPass').addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('bloggerEmail').value.trim();
    authError.style.display = 'none';
    if (!email) { authError.textContent = "Entrez d'abord votre email ci-dessus."; authError.style.display = 'block'; return; }
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) { authError.textContent = "Une erreur est survenue, réessayez."; authError.style.display = 'block'; return; }
    authError.style.color = 'var(--mint)';
    authError.textContent = "Un email de réinitialisation a été envoyé.";
    authError.style.display = 'block';
    setTimeout(() => { authError.style.color = ''; }, 4000);
  });

  document.getElementById('bloggerLoginBtn').addEventListener('click', async () => {
    const email = document.getElementById('bloggerEmail').value.trim();
    const pass  = document.getElementById('bloggerPass').value;
    authError.style.display = 'none';

    if (isSignupMode) {
      const name = document.getElementById('bloggerName').value.trim();
      if (!name || !email || !pass) { authError.textContent = "Merci de remplir tous les champs."; authError.style.display = 'block'; return; }
      const { data: signupData, error: signupError } = await supabase.auth.signUp({ email, password: pass });
      if (signupError) { authError.textContent = signupError.message; authError.style.display = 'block'; return; }
      // La ligne blogger_accounts est créée en 'pending' — jamais auto-approuvée.
      await supabase.from('blogger_accounts').insert({ user_id: signupData.user.id, email, name, status: 'pending' });
      showAuthState('pending');
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password: pass });
    if (error) { authError.textContent = "Email ou mot de passe incorrect."; authError.style.display = 'block'; return; }
    await enterDashboard();
  });

  async function enterDashboard() {
    const { data: { user } } = await supabase.auth.getUser();
    const isSiteAdmin = (user.email || '').toLowerCase() === 'part.kobbaz@outlook.fr'; // ⚠️ doit correspondre à is_site_admin() côté SQL
    if (isSiteAdmin) { showAuthState('dash'); loadMyTips(); return; }
    const { data: blogger } = await supabase.from('blogger_accounts').select('status').eq('user_id', user.id).maybeSingle();
    if (!blogger) {
      authError.textContent = "Ce compte n'est pas inscrit comme blogueur.";
      authError.style.display = 'block';
      showAuthState('auth');
      await supabase.auth.signOut();
      return;
    }
    if (blogger.status === 'pending') { showAuthState('pending'); return; }
    if (blogger.status === 'rejected') { showAuthState('rejected'); return; }
    showAuthState('dash');
    loadMyTips();
  }

  async function loadMyTips() {
    const { data: { user } } = await supabase.auth.getUser();
    const { data: tips, error } = await supabase.from('tips').select('*').eq('created_by', user.id).order('created_at', { ascending:false });
    tipsList.innerHTML = '';
    if (error || !tips) { tipsList.innerHTML = '<p style="color:var(--mist);">Impossible de charger vos conseils.</p>'; return; }
    if (tips.length === 0) { tipsList.innerHTML = '<p style="color:var(--mist);">Aucun conseil pour l\'instant.</p>'; return; }
    tips.forEach(tip => {
      const card = document.createElement('div');
      card.style.cssText = "background:rgba(255,255,255,0.03); border-radius:14px; padding:14px; margin-bottom:10px;";
      const badges = {
        published:      '<span style="background:rgba(110,190,138,0.2); color:#6EBE8A; font-size:10px; font-weight:700; padding:3px 8px; border-radius:99px;">Publié</span>',
        pending_review: '<span style="background:rgba(242,193,78,0.2); color:#F2C14E; font-size:10px; font-weight:700; padding:3px 8px; border-radius:99px;">En attente de validation</span>',
        rejected:       '<span style="background:rgba(232,97,122,0.2); color:#E8617A; font-size:10px; font-weight:700; padding:3px 8px; border-radius:99px;">Refusé</span>',
        draft:          '<span style="background:rgba(255,255,255,0.1); color:var(--mist); font-size:10px; font-weight:700; padding:3px 8px; border-radius:99px;">Brouillon</span>',
      };
      const statusBadge = badges[tip.status] || badges.draft;
      const canSubmit = tip.status === 'draft' || tip.status === 'rejected';
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">
          <div style="color:var(--paper); font-weight:700; font-size:14px;">${tip.title}</div>
          ${statusBadge}
        </div>
        <div style="color:var(--mist); font-size:12px; margin-bottom:10px;">${tip.category} · ${tip.source_name}</div>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button class="btn btn-ghost tip-edit-btn" style="font-size:12px; padding:6px 12px;" data-id="${tip.id}">Modifier</button>
          ${canSubmit ? `<button class="btn btn-ghost tip-toggle-btn" style="font-size:12px; padding:6px 12px;" data-id="${tip.id}">Soumettre pour publication</button>` : ''}
          ${tip.status === 'published' ? `<button class="btn btn-ghost tip-unpublish-btn" style="font-size:12px; padding:6px 12px;" data-id="${tip.id}">Retirer de la publication</button>` : ''}
          <button class="btn btn-ghost tip-delete-btn" style="font-size:12px; padding:6px 12px; color:var(--rose);" data-id="${tip.id}">Supprimer</button>
        </div>
      `;
      tipsList.appendChild(card);
      card.querySelector('.tip-edit-btn').addEventListener('click', () => openEditForm(tip));
      const toggleBtn = card.querySelector('.tip-toggle-btn');
      if (toggleBtn) toggleBtn.addEventListener('click', async () => {
        await supabase.rpc('set_tip_published', { p_id: tip.id, p_published: true });
        loadMyTips();
      });
      const unpublishBtn = card.querySelector('.tip-unpublish-btn');
      if (unpublishBtn) unpublishBtn.addEventListener('click', async () => {
        await supabase.rpc('set_tip_published', { p_id: tip.id, p_published: false });
        loadMyTips();
      });
      card.querySelector('.tip-delete-btn').addEventListener('click', async () => {
        if (!confirm('Supprimer ce conseil définitivement ?')) return;
        await supabase.rpc('delete_tip', { p_id: tip.id });
        loadMyTips();
      });
    });
  }

  function openEditForm(tip) {
    editingTipId = tip.id;
    document.getElementById('tipTitle').value = tip.title;
    document.getElementById('tipDescription').value = tip.description;
    document.getElementById('tipCategory').value = tip.category;
    document.getElementById('tipSourceName').value = tip.source_name;
    document.getElementById('tipSourceUrl').value = tip.source_url;
    updateThumbPreviews();
    selectThumbStyle(tip.thumbnail_style || 'glow');
    tipForm.style.display = '';
    tipForm.scrollIntoView({ behavior:'smooth' });
  }

  function resetForm() {
    editingTipId = null;
    document.getElementById('tipTitle').value = '';
    document.getElementById('tipDescription').value = '';
    document.getElementById('tipCategory').value = 'budget';
    document.getElementById('tipSourceName').value = '';
    document.getElementById('tipSourceUrl').value = '';
    updateThumbPreviews();
    selectThumbStyle('glow');
    tipForm.style.display = 'none';
  }

  document.getElementById('bloggerNewTipBtn').addEventListener('click', () => {
    resetForm();
    tipForm.style.display = '';
    tipForm.scrollIntoView({ behavior:'smooth' });
  });
  document.getElementById('tipCancelBtn').addEventListener('click', resetForm);

  async function saveTip(publish) {
    const title       = document.getElementById('tipTitle').value.trim();
    const description  = document.getElementById('tipDescription').value.trim();
    const category     = document.getElementById('tipCategory').value;
    const sourceName   = document.getElementById('tipSourceName').value.trim();
    const sourceUrl    = document.getElementById('tipSourceUrl').value.trim();
    if (!title || !description || !sourceName || !sourceUrl) { alert('Merci de remplir tous les champs.'); return; }

    if (editingTipId) {
      await supabase.rpc('update_tip', { p_id: editingTipId, p_title:title, p_description:description, p_category:category, p_source_name:sourceName, p_source_url:sourceUrl, p_thumbnail_style:selectedThumbStyle });
      if (publish) await supabase.rpc('set_tip_published', { p_id: editingTipId, p_published: true });
    } else {
      await supabase.rpc('create_tip', { p_title:title, p_description:description, p_category:category, p_source_name:sourceName, p_source_url:sourceUrl, p_publish:publish, p_thumbnail_style:selectedThumbStyle });
    }
    resetForm();
    loadMyTips();
  }

  document.getElementById('tipSaveDraftBtn').addEventListener('click', () => saveTip(false));
  document.getElementById('tipPublishBtn').addEventListener('click', () => saveTip(true));
})();
