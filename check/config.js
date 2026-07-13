// ─────────────────────────────────────────────────────────────────────────────
// AI-kansencheck — inhoud & scoring (v1.0)
// Alle vragen, teksten en drempelwaarden staan hier, gescheiden van de logica
// in index.html. Teksten bijstellen kan dus zonder de code aan te raken.
// ─────────────────────────────────────────────────────────────────────────────
window.CHECK_CONFIG = {

  // Web3Forms access key — zelfde key als het contactformulier op de homepage.
  // Leads komen binnen op het adres dat aan deze key gekoppeld is.
  web3formsKey: 'a97cea64-7e74-4ceb-8703-4d62f5d8ab09',
  web3formsSubject: 'Nieuwe lead via de AI-kansencheck',

  intro: {
    badge: 'Gratis · 5 vragen · 2 minuten',
    title: 'Waar liggen de AI-kansen in jouw bedrijf?',
    text: 'Beantwoord vijf korte vragen over je werkweek. Je ziet direct waar AI jou tijd kan opleveren — per onderdeel van je bedrijf, met een concrete aanbeveling.',
    button: 'Start de check',
  },

  domains: {
    A: { name: 'Reserveren & boeken', icon: '📅' },
    B: { name: 'Klantcontact',        icon: '💬' },
    C: { name: 'Backoffice',          icon: '🧾' },
    D: { name: 'Marketing & content', icon: '✦' },
  },

  questions: [
    {
      id: 'q1',
      type: 'multi',
      maxChoices: 2,
      title: 'Waar verlies jij of je team elke week de meeste tijd aan?',
      hint: 'Kies er maximaal twee.',
      options: [
        { id: '1a', label: 'Afspraken, boekingen of aanvragen inplannen en bevestigen', domain: 'A', score: 2 },
        { id: '1b', label: 'Klantvragen beantwoorden via mail, telefoon of WhatsApp',   domain: 'B', score: 2 },
        { id: '1c', label: 'Administratie: offertes, facturen, urenregistratie',        domain: 'C', score: 2 },
        { id: '1d', label: 'Marketing: social media, nieuwsbrief, website bijhouden',   domain: 'D', score: 2 },
        { id: '1e', label: 'Iets anders, namelijk…', open: true },
      ],
      openPlaceholder: 'Vertel kort waar de tijd naartoe gaat…',
    },
    {
      id: 'q2',
      type: 'single',
      domain: 'A',
      title: 'Hoe komt een afspraak, boeking of aanvraag nu meestal binnen?',
      options: [
        { id: '2a', label: 'Via telefoon of mail, met heen-en-weer over datum en tijd', score: 3 },
        { id: '2b', label: 'Via een formulier of mail, maar wij verwerken het handmatig', score: 2 },
        { id: '2c', label: 'Klanten boeken of plannen volledig zelf online', score: 0 },
      ],
    },
    {
      id: 'q3',
      type: 'single',
      domain: 'B',
      title: 'Hoe snel krijgt een klant antwoord op een vraag?',
      options: [
        { id: '3a', label: 'Vrijwel direct, dat hebben we goed geregeld', score: 0 },
        { id: '3b', label: 'Meestal binnen een dag of twee', score: 2 },
        { id: '3c', label: 'Wisselend. In drukke periodes schiet het erbij in', score: 3 },
      ],
    },
    {
      id: 'q4',
      type: 'single',
      domain: 'C',
      title: 'Hoe vaak typ je dezelfde informatie over van het ene systeem naar het andere?',
      hint: 'Denk aan mail naar agenda, of offerte naar factuur.',
      options: [
        { id: '4a', label: 'Dagelijks, het hoort er gewoon bij', score: 3 },
        { id: '4b', label: 'Wekelijks wel een paar keer', score: 2 },
        { id: '4c', label: 'Zelden, onze systemen praten met elkaar', score: 0 },
      ],
    },
    {
      id: 'q5',
      type: 'single',
      domain: 'D',
      title: 'Hoe vaak verschijnt er iets nieuws van je bedrijf online?',
      hint: 'Denk aan social media, nieuwsbrief of website.',
      options: [
        { id: '5a', label: 'Wekelijks of vaker, we hebben een vast ritme', score: 0 },
        { id: '5b', label: 'Af en toe, als er tijd over is', score: 2 },
        { id: '5c', label: 'Eigenlijk nooit. Geen tijd voor', score: 3 },
      ],
    },
  ],

  // Kansindicatie per bouwsteen op basis van de score (0–5).
  levels: [
    { max: 1, key: 'laag',      label: 'Loopt al lekker' },
    { max: 3, key: 'gemiddeld', label: 'Hier valt wat te winnen' },
    { max: 5, key: 'hoog',      label: 'Hier ligt je grootste kans' },
  ],

  // Toonprofiel op basis van de totaalscore.
  profiles: [
    { max: 4,  key: 'koploper',        title: 'Koploper',
      intro: 'Je hebt je zaken goed op orde. AI is voor jou verfijning, geen redding.' },
    { max: 10, key: 'gerichte-kansen', title: 'Gerichte kansen',
      intro: 'Je bedrijf draait, maar op een paar plekken lekt tijd weg. Daar kan AI direct helpen.' },
    { max: 99, key: 'veel-te-winnen',  title: 'Veel te winnen',
      intro: 'Er zit veel handwerk in je week. Goed nieuws: juist dat soort werk kan AI grotendeels overnemen.' },
  ],

  results: {
    A: {
      hoog: 'Elke afspraak die via telefoon of mail heen-en-weer gaat, kost je zo 10 tot 15 minuten. Een slim online boekingssysteem plant, bevestigt en herinnert automatisch. Klanten regelen het zelf, ook ’s avonds.',
      gemiddeld: 'Aanvragen komen al digitaal binnen, maar de verwerking is nog handwerk. Dat stuk is prima te automatiseren: van aanvraag tot bevestiging in de agenda, zonder tussenkomst.',
      laag: 'Boeken en plannen heb je goed staan. Hier hoef je weinig aan te doen.',
    },
    B: {
      hoog: 'Klanten die lang op antwoord wachten, haken af of bellen nog een keer. Een AI-assistent kan de veelgestelde vragen direct beantwoorden en alleen de echte vragen aan jou doorgeven. Jij houdt de regie, de klant krijgt snel antwoord.',
      gemiddeld: 'Je klantcontact loopt redelijk, maar het leunt op jouw beschikbaarheid. Met AI vang je de standaardvragen af, zodat jij alleen de vragen ziet die er echt toe doen.',
      laag: 'Snel antwoord, tevreden klanten. Hier zit je goed.',
    },
    C: {
      hoog: 'Dagelijks informatie overtypen is precies het werk waar AI en slimme koppelingen voor bestaan. Van mail naar agenda, van offerte naar factuur: dat kan automatisch. Reken op uren per week terug.',
      gemiddeld: 'Een paar keer per week overtypen lijkt weinig, maar het tikt aan. Eén of twee slimme koppelingen tussen je systemen halen dat weg.',
      laag: 'Je systemen werken al samen. Netjes.',
    },
    D: {
      hoog: 'Onzichtbaar zijn kost klanten, ook als je werk goed is. Met AI maak je in een uurtje per maand content voor weken: posts, nieuwsbrief, websiteteksten in jouw toon.',
      gemiddeld: 'Je doet al iets aan zichtbaarheid, maar zonder vast ritme. AI kan het voorbereidende werk doen, zodat regelmaat haalbaar wordt zonder extra uren.',
      laag: 'Je hebt een vast contentritme. Dat is meer dan de meeste mkb’ers kunnen zeggen.',
    },
  },

  gate: {
    title: 'Je persoonlijke uitkomst staat klaar',
    text: 'Vul je e-mailadres in en je ziet direct waar jouw grootste AI-kansen liggen. Je krijgt de uitkomst ook per mail, handig om terug te lezen.',
    placeholder: 'jij@bedrijf.nl',
    button: 'Toon mijn uitkomst',
    sending: 'Momentje…',
    privacy: 'We gebruiken je e-mailadres alleen voor je uitkomst en maximaal twee opvolgmails. Geen nieuwsbrief, geen gespam.',
    error: 'Er ging iets mis bij het versturen. Controleer je internetverbinding en probeer het opnieuw.',
    fallbackLink: 'Lukt het niet? Bekijk je uitkomst direct →',
  },

  cta: {
    title: 'Benieuwd wat dit concreet voor jouw bedrijf betekent?',
    text: 'Deze check geeft een eerste beeld. Met de AI-processcan lopen we één werkweek met je mee en krijg je een concreet rapport: welke taken je kunt automatiseren, wat dat oplevert en waar je begint. Geen verplichtingen daarna.',
    button: 'Plan een kennismaking',
    href: 'https://oosthoek.ai/#contact',
  },
};
