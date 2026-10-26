// programs.js: Stores program information in plain objects, shared by the overview and detail pages.
// Content is paraphrased from the college's published program pages.
// Course highlights are topic summaries, not an official semester-by-semester prospectus.
export const programs = [
  {
    id: "bsit",
    code: "BSIT",
    shortName: "Information Technology",
    name: "Bachelor of Science in Information Technology",
    tagline: "Make technology work for people.",
    intro:
      "Connect systems, solve practical problems, and build the technology that organizations rely on.",
    overview:
      "BSIT focuses on selecting, developing, integrating, and managing computing technologies for organizational needs. It covers the planning and maintenance of hardware, software, and information infrastructure.",
    icon: "network",
    color: "#186e67",
    light: "#e8f3ef",
    areas: ["Networks", "Systems", "Security"],
    objectives: [
      "Understand user needs and translate them into computing solutions.",
      "Integrate and maintain reliable information systems.",
      "Work responsibly in teams and communicate technical ideas.",
    ],
    curriculum: [
      {
        title: "Infrastructure & networks",
        topics: [
          "Networking",
          "Platform technologies",
          "Systems administration and maintenance",
        ],
      },
      {
        title: "Applications & information",
        topics: [
          "Web systems and technologies",
          "Integrative programming",
          "Information management",
        ],
      },
      {
        title: "People & protection",
        topics: [
          "Human-computer interaction",
          "Information assurance and security",
          "Social and professional issues",
        ],
      },
    ],
    careers: [
      "Network administrator",
      "Systems administrator",
      "Database administrator",
      "IT support specialist",
      "Information security practitioner",
    ],
    careerNote:
      "Possible paths based on the published program scope; roles depend on experience and employer requirements.",
    source: "https://ccs.cpu.edu.ph/information-technology/",
  },
  {
    id: "bscs",
    code: "BSCS",
    shortName: "Computer Science",
    name: "Bachelor of Science in Computer Science",
    tagline: "Turn big questions into better solutions.",
    intro:
      "Explore the ideas behind computing and learn to design software with purpose.",
    overview:
      "BSCS develops foundations in computing theory, algorithms, and software design. Students learn to analyze complex problems and create efficient computing solutions, connecting mathematical reasoning with practical development.",
    icon: "code",
    color: "#245cb0",
    light: "#eaf0fb",
    areas: ["Algorithms", "Software", "Computing theory"],
    objectives: [
      "Apply mathematics and computing principles to complex problems.",
      "Design and evaluate algorithms and software systems.",
      "Practice ethical teamwork, communication, and continued learning.",
    ],
    curriculum: [
      {
        title: "Computing foundations",
        topics: [
          "Algorithms and complexity",
          "Discrete structures",
          "Architecture and organization",
        ],
      },
      {
        title: "Software & systems",
        topics: [
          "Programming languages",
          "Software engineering",
          "Operating systems",
        ],
      },
      {
        title: "Human & connected computing",
        topics: [
          "Human-computer interaction",
          "Networks and communications",
          "Information assurance and security",
        ],
      },
    ],
    careers: [
      "Software developer",
      "Software engineer",
      "Systems analyst",
      "Computing researcher",
    ],
    careerNote:
      "Illustrative paths aligned with the program’s scope; some research positions require further study.",
    source: "https://ccs.cpu.edu.ph/computer-science/",
  },
  {
    id: "bsdmia",
    code: "BSDMIA",
    shortName: "Digital Media & Interactive Arts",
    name: "Bachelor of Science in Digital Media and Interactive Arts",
    tagline: "Create at the intersection of art and technology.",
    intro: "Bring stories, visual worlds, and interactive experiences to life.",
    overview:
      "BSDMIA combines creative practice, applied arts, and digital technology. Its collaborative approach develops visual communication and media-production skills for entertainment, education, advertising, and corporate communication.",
    icon: "spark",
    color: "#9a4e69",
    light: "#f8ecf1",
    areas: ["Design", "Animation", "Interactive media"],
    objectives: [
      "Connect traditional art with digital media.",
      "Create and evaluate experiences around audience needs.",
      "Use contemporary tools with professional and ethical judgment.",
    ],
    curriculum: [
      {
        title: "Visual storytelling",
        topics: ["Graphic design", "Photography", "Digital storytelling"],
      },
      {
        title: "Motion & production",
        topics: ["Animation", "3D modeling", "Video editing"],
      },
      {
        title: "Interactive experiences",
        topics: ["Video game design", "Virtual reality", "Interactive media"],
      },
    ],
    careers: [
      "Animator",
      "Graphic designer",
      "Game designer",
      "Multimedia artist",
      "Web designer",
    ],
    careerNote:
      "The college identifies creative opportunities in studios, agencies, publishing, games, and web design.",
    source: "https://ccs.cpu.edu.ph/digital-media-and-interactive-arts/",
  },
  {
    id: "blis",
    code: "BLIS",
    shortName: "Library & Information Science",
    name: "Bachelor of Library and Information Science",
    tagline: "Connect people with the knowledge they need.",
    intro:
      "Organize information, support discovery, and serve communities in a digital world.",
    overview:
      "BLIS is a four-year program covering information resources in print, electronic, and digital formats. It prepares students to organize collections, understand users, and apply technology to library and information services.",
    icon: "book",
    color: "#976a22",
    light: "#fbf2df",
    areas: ["Information", "Research", "Digital collections"],
    objectives: [
      "Select, evaluate, organize, and share information resources.",
      "Develop services responsive to users’ needs.",
      "Apply research, ethical judgment, and technology to information work.",
    ],
    curriculum: [
      {
        title: "Information organization",
        topics: [
          "Resource evaluation",
          "Collection organization",
          "Information access",
        ],
      },
      {
        title: "Digital services",
        topics: [
          "Library automation",
          "Digital resources",
          "Information technology solutions",
        ],
      },
      {
        title: "Research & communities",
        topics: [
          "User-needs assessment",
          "Research projects",
          "Information ethics",
        ],
      },
    ],
    careers: [
      "Library professional",
      "Information services specialist",
      "Digital collections assistant",
      "Research support staff",
    ],
    careerNote:
      "Illustrative paths inferred from the program’s competencies. Ask the college about professional qualification requirements.",
    source: "https://ccs.cpu.edu.ph/library-information-science/",
  },
];

// Find one program by checking IDs in order; return null when the ID is unknown.
export function getProgram(programId) {
  for (const program of programs) {
    if (program.id === programId) {
      return program;
    }
  }
  return null;
}
