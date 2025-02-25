
export interface Supporter {
  filename: string;
  title: string;
  url: string;
  tags: ('schulgruendungswunder' | 'schulbauwunder' | 'schulinnovationswunder')[];
}

export const supporters: Supporter[] = [
  {
    filename: "agfs.png",
    title: "Arbeitsgemeinschaft Freier Schulen im Land Brandenburg e.V.",
    url: "https://agfs-brb.org/",
    tags: ["schulgruendungswunder"]
  },
  {
    filename: "atw.png",
    title: "ATW Management GmbH",
    url: "https://www.atw-management.de/",
    tags: ["schulbauwunder"]
  },
  {
    filename: "berding-beton.png",
    title: "Berding Beton",
    url: "https://www.berdingbeton.de/",
    tags: ["schulbauwunder"]
  },
  {
    filename: "blumen-anders.png",
    title: "Blumen Anders",
    url: "https://g.co/kgs/GBNgQmE",
    tags: ["schulbauwunder"]
  },
  {
    filename: "bfas.png",
    title: "Bundesverband der Freien Alternativschulen",
    url: "https://www.freie-alternativschulen.de/",
    tags: ["schulgruendungswunder"]
  },
  {
    filename: "goelling-goetzelmann.png",
    title: "Gölling Götzelmann Architekten",
    url: "https://www.ggai.de/",
    tags: ["schulbauwunder"]
  },
  {
    filename: "graf-recycling-baustoffe.png",
    title: "Graf Baustoffe GmbH",
    url: "https://www.grafbaustoffe.de/",
    tags: ["schulbauwunder"]
  },
  {
    filename: "gregs-pizza.png",
    title: "Gregs Pizza",
    url: "https://www.gregspizza.de/",
    tags: ["schulbauwunder"]
  },
  {
    filename: "heizung-und-sanitaer-woltersdorf.png",
    title: "Heizung und Sanitär Woltersdorf e.G.",
    url: "https://www.hsweg.de/",
    tags: ["schulbauwunder"]
  },
  {
    filename: "hkl.png",
    title: "HKL Baumaschinen",
    url: "https://www.hkl-baumaschinen.de/",
    tags: ["schulbauwunder"]
  },
  {
    filename: "johann-schnindler.png",
    title: "Johann Schindler Garten- und Landschaftsbau",
    url: "https://schindler-garten.de/",
    tags: ["schulbauwunder"]
  },
  {
    filename: "lpe.png",
    title: "LPE Versicherungs- & Finanzmakler",
    url: "https://www.lpe.de/",
    tags: ["schulbauwunder"]
  },
  {
    filename: "mls.png",
    title: "Mobil Logistik Service",
    url: "http://mls-online.de/",
    tags: ["schulbauwunder"]
  },
  {
    filename: "mobau.png",
    title: "Mobau Baustoff Union",
    url: "https://www.bun-neuenhagen.de/",
    tags: ["schulbauwunder"]
  },
  {
    filename: "muenker.png",
    title: "Münker Metallprofile GmbH",
    url: "https://www.muenker.com/",
    tags: ["schulbauwunder"]
  },
  {
    filename: "philipp-preuss-photographie.png",
    title: "Philipp Preuß Photographie",
    url: "http://philippreuss.de/",
    tags: ["schulbauwunder"]
  }
];
