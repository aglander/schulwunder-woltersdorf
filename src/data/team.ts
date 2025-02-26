
export interface TeamMember {
  filename: string;
  name: string;
  desc: string;
  tags: ('schulgruendungswunder' | 'schulbauwunder' | 'schulinnovationswunder')[];
}

export const team: TeamMember[] = [
  {
    filename: "johannes-wilk.jpeg",
    name: "Johannes Wilk",
    desc: "Organisation",
    tags: ["schulgruendungswunder", "schulinnovationswunder", "schulbauwunder"]
  },
  {
    filename: "",
    name: "Dr. Cathérine Grote",
    desc: "Pädagogik",
    tags: ["schulgruendungswunder"]
  },
  {
    filename: "",
    name: "Ludwig Gölling",
    desc: "Bau und Infrastruktur",
    tags: ["schulgruendungswunder"]
  },
  {
    filename: "",
    name: "Susann Tröger",
    desc: "Personalplanung",
    tags: ["schulgruendungswunder"]
  },
  {
    filename: "",
    name: "Philip Preuß",
    desc: "Social Media",
    tags: ["schulbauwunder"]
  },
  {
    filename: "",
    name: "Johann Schindler",
    desc: "Praktische Ausführung",
    tags: ["schulbauwunder"]
  },
  {
    filename: "",
    name: "Ludwig Gölling",
    desc: "Bau und Infrastruktur",
    tags: ["schulinnovationswunder"]
  }
];
