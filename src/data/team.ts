
export interface TeamMember {
  filename: string;
  name: string;
  desc: string;
  tags: ('schulgruendungswunder' | 'schulbauwunder' | 'schulinnovationswunder')[];
}

export const team: TeamMember[] = [
  {
    filename: "johannes-wilk.jpg",
    name: "Johannes Wilk",
    desc: "Organisation",
    tags: ["schulgruendungswunder", "schulinnovationswunder", "schulbauwunder"]
  },
  {
    filename: "catherine-grote.jpg",
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
    filename: "philip-preuss.jpg",
    name: "Philip Preuß",
    desc: "Social Media",
    tags: ["schulbauwunder"]
  },
  {
    filename: "johann-schindler.jpg",
    name: "Johann Schindler",
    desc: "Praktische Ausführung",
    tags: ["schulbauwunder"]
  },
  {
    filename: "",
    name: "Ludwig Gölling",
    desc: "Bau und Infrastruktur",
    tags: ["schulinnovationswunder"]
  },
  {
    filename: "tim-fronzek.jpg",
    name: "Tim Fronzek",
    desc: "",
    tags: ["schulinnovationswunder"]
  }
];
