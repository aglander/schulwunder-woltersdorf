export interface TeamMember {
  filename: string;
  name: string;
  contact?: {
    email: string;
    phone: string;
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
    tags: ["schulgruendungswunder", "schulinnovationswunder", "schulbauwunder"],
  },
  {
    filename: "catherine-grote.jpg",
    name: "Dr. Cathérine Grote",
    desc: "Pädagogik",
    tags: ["schulgruendungswunder"],
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
    tags: ["schulinnovationswunder", "schulbauwunder"],
  },
  {
    filename: "tim-fronzek.jpg",
    name: "Tim Fronzek",
    desc: "Finanzvorstand",
    tags: ["schulinnovationswunder"],
  },
];
