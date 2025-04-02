export interface TeamMember {
  filename: string;
  name: string;
  contact?: {
    email?: string;
    phone?: string;
  };
  desc: string;
  tags: (
    | "schulgruendungswunder"
    | "schulbauwunder"
    | "schulinnovationswunder"
  )[];
  career?: string[];
  skills?: string[];
  bio?: string[];
  hobbies?: string[];
  quote?: string;
  funFacts?: string;
}

export const team: TeamMember[] = [
  {
    filename: "johannes-wilk.jpg",
    name: "Johannes Wilk",
    desc: "Organisation",
    tags: ["schulgruendungswunder", "schulbauwunder", "schulinnovationswunder"],
  },
  {
    filename: "catherine-grote.jpg",
    name: "Dr. Cathérine Grote",
    contact: {
      email: "catherine.grote@freie-schule-woltersdorf.de",
    },
    desc: "Pädagogik",
    tags: ["schulgruendungswunder"],
    career: [
      "2009-2015: Studium der Agrarwissenschaften",
      "2015-2018: Promotion (Dr. sc. agr.)",
      "2021-2024: Lehrkraft (NAWI, Biologie, Chemie, Mathe) an zwei Berliner Gemeinschaftsschulen",
      "seit SJ 2024/25: Mitarbeiterin der Freien Schule Woltersdorf",
    ],
    skills: [
      "Mir ist persönliches Wachstum unfassbar wichtig.",
      "Ich liebe es zu lernen und mich zu vernetzen.",
      "Mich findet man regelmäßig auf einer Fort- oder Weiterbildung.",
      "Und ich bin der Meinung, dass ich zu jedem Zeitpunkt alles lernen kann, was ich brauche.",
      "Ich habe Fortbildungen im Bereich Kinderschutz besucht.",
      "Ich habe an Seminaren zur rassismuskritischen Bildungsarbeit teilgenommen.",
      "Ich bin Naturtrainerin.",
      "Ich habe mehrere Jahre Erfahrungen in Schulgründungsinitiativen gesammelt. ",
      "Aktuell befinde ich mich im Montessori-Grundlagen-Diplomkurs und die nächste Fortbildung wartet bereits auf mich.",
    ],
    bio: [
      "Meine Liebe für freie Schulen habe ich während meines Masterstudiums entdeckt. Ich war auf der Suche nach einer Schule für meine Kinder und besichtigte an einem Tag der offenen Tür zum ersten Mal in meinem Leben eine reformpädagogische Bildungsstätte. Noch auf dem Schulgelände wurde mir klar: Hier gehöre ich hin und ich brauche eine Lehrgenehmigung!",
      "Ich schloss mein Studium ab und begann eine dreijährige Promotion. Parallel beschäftigte ich mich intensiv mit Schulen in freier Trägerschaft und wurde in zwei Gründungsinitiativen aktiv.",
      "Im Jahr 2021 nahm ich die Arbeit als Lehrkraft an einer freien Schule auf und mein Gefühl bestätigte sich: Hier gehöre ich hin.",
    ],
    hobbies:
      ["Sport, Sport und Sport", "Naturpädagogik", "sowie alle Themen, die mit Nachhaltigkeit und Gerechtigkeit zu tun haben"],
    quote:
      "Das habe ich noch nie vorher versucht. Also bin ich völlig sicher, dass ich das schaffe. (Pippi Langstrumpf)",
    funFacts:
      "Ich habe noch als 24-Jährige „Die Drei ???“ zum Einschlafen gehört. Und ich finde Entenfüße richtig süß.",
  },
  {
    filename: "philip-preuss.jpg",
    name: "Philip Preuß",
    contact: {
      email: "philip.preuss@freie-schule-woltersdorf.de",
      phone: "0151 43 100 201",
    },
    desc: "Social Media",
    tags: ["schulbauwunder"],
    career: [
      "Kaufmann im Einzelhandel (Möbel Kraft)",
      "Projektkoordinator (BBQ)",
      "Campusmanager DCI",
      "Social-Media Beauftragter GalaBau Johann Schindler",
      "freiberuflicher Photograph",
    ],
    skills: [
      "Bildbearbeitung (Adobe Photosuit)",
      "Videoschnitt (FinalCut X)",
      "Microsoft Office",
      "Photo & Video",
    ],
    bio: [
      "Ich bin ausgebildeter Kaufmann im Einzelhandel und habe in meinem Berufsleben zahlreiche Facetten der Arbeitswelt kennengelernt. Vom klassischen Einzelhandel über administrative Tätigkeiten im Büro bis hin zum Management eines gesamten Campus – jede Station hat mich geprägt und meine Erfahrung bereichert.",
      "Seit über sechs Jahren folge ich meiner Leidenschaft für die Fotografie und begleite als nebenberuflicher Fotograf vor allem Hochzeiten und Familienshootings. Dank des „Schulbauwunders“ hatte ich das große Glück, meine Passion zum Beruf zu machen – ein Privileg, das mich täglich erfüllt.",
      "Musik spielt eine essenzielle Rolle in meinem Leben. Ohne sie wäre es farblos und eintönig. Viele Jahre saß ich als Schlagzeuger in einer Band, und noch heute begleitet mich Musik durch meinen Alltag – sie ist mein ständiger Begleiter und eine unerschöpfliche Inspirationsquelle.",
      "Neben all diesen Leidenschaften ist meine Familie mein größter Schatz. Ich bin verheiratet und stolzer Vater von drei Kindern, die mein Leben Tag für Tag bereichern.",
    ],
    hobbies: [
      "Musik",
      "Autos",
      "Videospiele",
      "Computer allgemein",
      "Schlagzeug",
    ],
    quote: "„Ohne Musik wäre das Leben ein Irrtum“ - Friedrich Nietzsche",
    funFacts: "Ohne Kappe ohne mich! :D",
  },
  {
    filename: "johann-schindler.jpg",
    name: "Johann Schindler",
    desc: "Praktische Ausführung",
    tags: ["schulbauwunder"],
  },
  {
    filename: "ludwig-goelling.jpg",
    name: "Ludwig Gölling",
    desc: "Bau und Infrastruktur",
    tags: ["schulbauwunder", "schulinnovationswunder"],
  },
  {
    filename: "tim-fronzek.jpg",
    name: "Tim Fronzek",
    desc: "Finanzvorstand",
    tags: ["schulinnovationswunder"],
  },
];
