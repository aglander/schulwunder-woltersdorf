
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
  }
];
