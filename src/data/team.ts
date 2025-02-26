
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
    tags: ["schulgruendungswunder"]
  },
  {
    filename: "catherine-grote.jpeg",
    name: "Dr. Cathérine Grote",
    desc: "Pädagogik",
    tags: ["schulgruendungswunder"]
  },
  {
    filename: "ludwig-goelling.jpeg",
    name: "Ludwig Gölling",
    desc: "Bau und Infrastruktur",
    tags: ["schulgruendungswunder"]
  },
  {
    filename: "susann-troeger.jpeg",
    name: "Susann Tröger",
    desc: "Personalplanung",
    tags: ["schulgruendungswunder"]
  }
];
