export type SkillSeedItem = {
  name: string;
  displayOrder: number;
};

export type SkillCategorySeedItem = {
  name: string;
  displayOrder: number;
  skills: SkillSeedItem[];
};

export const skillsSeedData: SkillCategorySeedItem[] = [
  {
    name: "Frontend",
    displayOrder: 1,
    skills: [
      { name: "Next.js", displayOrder: 1 },
      { name: "TypeScript", displayOrder: 2 },
      { name: "React", displayOrder: 3 },
      { name: "Tailwind CSS", displayOrder: 4 },
    ],
  },
  {
    name: "Backend",
    displayOrder: 2,
    skills: [
      { name: "Node.js", displayOrder: 1 },
      { name: "Express", displayOrder: 2 },
      { name: "PostgreSQL", displayOrder: 3 },
    ],
  },
  {
    name: "Database",
    displayOrder: 3,
    skills: [
      { name: "Prisma", displayOrder: 1 },
      { name: "SQL", displayOrder: 2 },
    ],
  },
  {
    name: "Tools",
    displayOrder: 4,
    skills: [
      { name: "Git", displayOrder: 1 },
      { name: "Docker", displayOrder: 2 },
      { name: "VS Code", displayOrder: 3 },
    ],
  },
];
