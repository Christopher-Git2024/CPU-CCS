// news.js: Stores archived articles and formats their publication dates.
// Archived, verified stories. Dates have not been relabeled as current events.
export const news = [
  {
    id: "community-partnership",
    category: "Community",
    date: "2021-12-08",
    title: "Building connections beyond the classroom",
    originalTitle: "Community Engagement MOA Signing Ceremony",
    excerpt:
      "A partnership with Mandurriao Elementary School brings technology learning into the wider community.",
    image: "/images/news-community.webp",
    imageAlt: "CPU CCS community engagement partnership announcement",
    paragraphs: [
      "On December 7, 2021, CPU College of Computer Studies and Mandurriao Elementary School signed an agreement beginning an institutional partnership.",
      "The college’s Adopt a School initiative planned an initial online session for December 9. CCS faculty would introduce participating MES teachers to learning management tools, including Canvas, Google Classroom, and Facebook Groups.",
    ],
    source:
      "https://ccs.cpu.edu.ph/2021/12/08/community-engagement-moa-signing-ceremony/",
  },
  {
    id: "new-librarians",
    category: "Achievements",
    date: "2021-11-23",
    title: "Celebrating a new chapter for our librarians",
    originalTitle: "Congratulations to our New Librarians!",
    excerpt:
      "The college recognizes its graduates following the September 2021 librarians’ board examination.",
    image: "/images/news-librarians.webp",
    imageAlt:
      "College announcement celebrating the 2021 librarians examination passers",
    paragraphs: [
      "The college celebrated its successful candidates in the September 2021 Librarians Licensure Board Examination.",
      "Its published announcement reported a 60% passing rate for CPU first-time takers and a 50% overall rate for CPU takers. These figures refer specifically to that examination, not the current year.",
    ],
    source:
      "https://ccs.cpu.edu.ph/2021/11/23/congratulations-to-our-new-librarians/",
  },
  {
    id: "graduates-in-industry",
    category: "Careers",
    date: "2021-11-23",
    title: "From CCS to a career in technology",
    originalTitle: "Kation Technologies hires CCS graduates",
    excerpt:
      "An archived college announcement highlights CCS graduates joining Kation Technologies.",
    image: "/images/news-careers.webp",
    imageAlt: "Kation Technologies announcement about CCS graduates",
    paragraphs: [
      "In November 2021, the college shared that Kation Technologies had hired CCS graduates.",
      "This archived item records a graduate milestone. It is not a current job advertisement or a claim that the company is recruiting today.",
    ],
    source:
      "https://ccs.cpu.edu.ph/2021/11/23/kation-technologies-hires-ccs-graduates/",
  },
];
export function formatDate(value) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value + "T12:00:00Z"));
}
