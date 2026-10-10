// Experience page. Each list is shown in the order written here.
// `org.mark` is the short monogram on the badge; `org.color` tints it.
export const industry = [
  {
    role: "Senior Software Engineer",
    org: { name: "Samsung Research Bangladesh (SRBD)", mark: "SRBD", color: "#1428a0", url: "https://research.samsung.com/srbd" },
    period: "Jun 2023 - Aug 2025",
    location: "Dhaka, Bangladesh",
    points: [
      "Built an **AI-powered assistant** using **RAG** and **AI-agent** techniques, enabling smart content creation, contextual search, and video-to-note generation.",
      "Member of the Windows **Samsung Notes** team; reduced text input time by **10%**, improving overall efficiency.",
      "Developed an extension converter that upgrades old file formats to the latest version for long-time users.",
      "Designed a user-friendly **quick tool** for easy access to essential and frequently used functions.",
    ],
    highlights: ["Icon Engineer Award (2024)", "AI PoC Contest, 2nd Runner-Up (2025)"],
    tags: ["C#", ".NET", "UWP", "SQLite", "Python", "RAG", "LLM Agents"],
  },
];

export const research = [
  {
    role: "Graduate Research Assistant",
    org: { name: "Cyber Guard Research Lab, UT Arlington", mark: "UTA", color: "#0064b1", url: "https://fhshezan.github.io/" },
    period: "Aug 2026 - Present",
    location: "Arlington, TX",
    current: true,
    points: [
      "Research on **vision-language models**, **3D reconstruction**, **audio generative models**, and the **security of AI models**.",
      "Investigating vulnerabilities in *4D Gaussian Splatting* and developing adversarial defenses.",
      "Designing techniques to protect music from unauthorized use by *audio generation models*.",
    ],
    tags: ["VLMs", "3D Gaussian Splatting", "Audio GenAI", "Adversarial ML", "PyTorch"],
  },
];

export const service = [
  {
    role: "Graduate Teaching Assistant",
    detail: "UT Arlington · CSE 4380: Information Security · CSE 5315/4345: Numerical Methods",
    year: "2025 - 2026",
  },
  { role: "Reviewer", detail: "Conference on Neural Information Processing Systems (NeurIPS)", year: "2026" },
  { role: "Reviewer", detail: "International AAAI Conference on Web and Social Media (ICWSM)", year: "2027" },
];

export const awards = [
  { title: "Graduate Dean's Research Assistantship", org: "UT Arlington", year: "2026" },
  { title: "AI Proof-of-Concept Contest, 2nd Runner-Up", org: "Samsung Research Bangladesh", year: "2025" },
  { title: "Icon Engineer Award", org: "Samsung Research Bangladesh", year: "2024", note: "For outstanding contribution" },
  { title: "Excellence in SW Certificate Test", org: "Samsung Electronics", year: "2023" },
  { title: "National Cyber Drill, 20th Position", year: "2021" },
  { title: "Dean's List Scholarship", org: "BUET", year: "2018 - 2022" },
  { title: "Merit Talent Scholarship", org: "HSC, Dhaka Board", year: "2017" },
];

// Affiliations shown on the About page. `color` tints the monogram badge.
export const affiliations = [
  {
    name: "The University of Texas at Arlington",
    mark: "UTA",
    color: "#0064b1",
    role: "Ph.D. in Computer Science",
    period: "2025 - Present",
    detail: "Cyber Guard Research Lab · Advisor: Dr. Faysal Hossain Shezan",
    url: "https://www.uta.edu/",
  },
  {
    name: "Samsung Research Bangladesh",
    mark: "SRBD",
    color: "#1428a0",
    role: "Senior Software Engineer",
    period: "2023 - 2025",
    detail: "Samsung Notes for Windows · AI assistant (RAG, agents)",
    url: "https://research.samsung.com/srbd",
  },
  {
    name: "Bangladesh University of Engineering and Technology",
    mark: "BUET",
    color: "#8a1c2b",
    role: "B.Sc. in Computer Science and Engineering",
    period: "2018 - 2023",
    url: "https://cse.buet.ac.bd/",
  },
];
