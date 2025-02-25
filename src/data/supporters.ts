
export interface Supporter {
  filename: string;
  title: string;
  url: string;
  type: 'schulgruendungswunder' | 'schulbauwunder' | 'schulinnovationswunder';
}

export const supporters: Supporter[] = [
  {
    filename: "atw.png",
    title: "ATW Management GmbH",
    url: "https://www.atw-management.de/",
    type: "schulbauwunder"
  },
  {
    filename: "berding-beton.png",
    title: "Berding Beton",
    url: "https://www.berdingbeton.de/",
    type: "schulbauwunder"
  },
  {
    filename: "blumen-anders.png",
    title: "Blumen Anders",
    url: "https://g.co/kgs/GBNgQmE",
    type: "schulbauwunder"
  },
  {
    filename: "goelling-goetzelmann.png",
    title: "Gölling Götzelmann Architekten",
    url: "https://www.ggai.de/",
    type: "schulbauwunder"
  },
  {
    filename: "graf-recycling-baustoffe.png",
    title: "Graf Baustoffe GmbH",
    url: "https://www.grafbaustoffe.de/",
    type: "schulbauwunder"
  },
  {
    filename: "gregs-pizza.png",
    title: "Gregs Pizza",
    url: "https://www.gregspizza.de/",
    type: "schulgruendungswunder"
  },
  {
    filename: "heizung-und-sanitaer-woltersdorf.png",
    title: "Heizung und Sanitär Woltersdorf e.G.",
    url: "https://www.hsweg.de/",
    type: "schulbauwunder"
  },
  {
    filename: "hkl.png",
    title: "HKL Baumaschinen",
    url: "https://www.hkl-baumaschinen.de/",
    type: "schulbauwunder"
  },
  {
    filename: "johann-schnindler.png",
    title: "Johann Schindler Garten- und Landschaftsbau",
    url: "https://schindler-garten.de/",
    type: "schulbauwunder"
  },
  {
    filename: "lpe.png",
    title: "LPE Versicherungs- & Finanzmakler",
    url: "https://www.lpe.de/",
    type: "schulinnovationswunder"
  },
  {
    filename: "mls.png",
    title: "Mobil Logistik Service",
    url: "http://mls-online.de/",
    type: "schulbauwunder"
  },
  {
    filename: "mobau.png",
    title: "Mobau Baustoff Union",
    url: "https://www.bun-neuenhagen.de/",
    type: "schulbauwunder"
  },
  {
    filename: "muenker.png",
    title: "Münker Metallprofile GmbH",
    url: "https://www.muenker.com/",
    type: "schulbauwunder"
  },
  {
    filename: "philipp-preuss-photographie.png",
    title: "Philipp Preuß Photographie",
    url: "http://philippreuss.de/",
    type: "schulgruendungswunder"
  }
];

