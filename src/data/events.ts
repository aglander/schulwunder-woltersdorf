
export interface Event {
  summary: string;
  description?: string;
  start: Date;
  end: Date;
  location?: string;
  tags: ('schulgruendungswunder' | 'schulbauwunder' | 'schulinnovationswunder')[];
}

export const events: Event[] = [
  {
    summary: "Baueinsatz",
    description: "Gemeinsamer Baueinsatz am Schulgebäude",
    start: new Date(2024, 3, 15, 9, 0),
    end: new Date(2024, 3, 15, 16, 0),
    location: "Schulgelände Woltersdorf",
    tags: ["schulbauwunder"]
  },
  {
    summary: "Planungstreffen",
    description: "Besprechung der nächsten Bauphase",
    start: new Date(2024, 3, 20, 18, 0),
    end: new Date(2024, 3, 20, 20, 0),
    location: "Online",
    tags: ["schulbauwunder", "schulgruendungswunder"]
  },
  {
    summary: "Info-Abend Oberschule",
    description: "Informationsveranstaltung für Eltern zur geplanten Oberschule",
    start: new Date(2024, 4, 5, 19, 0),
    end: new Date(2024, 4, 5, 21, 0),
    location: "Freie Schule Woltersdorf, Aula",
    tags: ["schulgruendungswunder"]
  },
  {
    summary: "Konzeptionstreffen",
    description: "Weiterentwicklung des pädagogischen Konzepts für die Oberschule",
    start: new Date(2024, 4, 12, 18, 0),
    end: new Date(2024, 4, 12, 20, 30),
    location: "Online",
    tags: ["schulgruendungswunder"]
  },
  {
    summary: "Grundstücksbegehung",
    description: "Begehung des zu entwickelnden Grundstücks mit potenziellen Partnern",
    start: new Date(2024, 4, 18, 14, 0),
    end: new Date(2024, 4, 18, 16, 0),
    location: "Grundstück Woltersdorf",
    tags: ["schulinnovationswunder"]
  },
  {
    summary: "Arbeitsgruppentreffen",
    description: "Treffen der Arbeitsgruppe zur Grundstücksentwicklung",
    start: new Date(2024, 4, 25, 19, 0),
    end: new Date(2024, 4, 25, 21, 0),
    location: "Online",
    tags: ["schulinnovationswunder"]
  }
];
