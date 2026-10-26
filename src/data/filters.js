// filters.js: Provides step-by-step search and form validation functions.
// filters.js: Search the shared data and validate a demonstration inquiry.

// Make searches case-insensitive and accent-insensitive by cleaning both input and stored text.
export function normalize(value) {
  const separatedLetters = value.normalize("NFD");
  // This regular expression removes accent marks after Unicode separates them.
  const withoutAccents = separatedLetters.replace(/[\u0300-\u036f]/g, "");
  return withoutAccents.toLowerCase().trim();
}

// Find people matching the name/role search and the chosen program using an ordinary loop.
export function filterFaculty(people, searchText, selectedProgram = "all") {
  const searchTerm = normalize(searchText);
  const matchingPeople = [];
  // Check each person separately so both filtering steps are easy to follow.
  for (const person of people) {
    let matchesProgram = false;
    // All includes everyone; Staff includes staff and leadership; a program checks its ID.
    if (selectedProgram === "all") {
      matchesProgram = true;
    } else if (selectedProgram === "staff") {
      matchesProgram =
        person.group === "Staff" || person.group === "Leadership";
    } else {
      matchesProgram = person.programs.includes(selectedProgram);
    }
    const searchableText =
      person.name +
      " " +
      person.qualification +
      " " +
      person.role +
      " " +
      person.programs.join(" ");
    const matchesSearch = normalize(searchableText).includes(searchTerm);
    // Include the person only when both the search and program conditions match.
    if (matchesProgram && matchesSearch) {
      matchingPeople.push(person);
    }
  }
  return matchingPeople;
}

// Find stories matching the selected category and search words, preserving their original order.
export function filterNews(
  articles,
  searchText,
  selectedCategory = "All stories",
) {
  const searchTerm = normalize(searchText);
  const matchingArticles = [];
  // Read each article once and test its category and searchable text.
  for (const article of articles) {
    const matchesCategory =
      selectedCategory === "All stories" ||
      article.category === selectedCategory;
    const searchableText =
      article.title + " " + article.excerpt + " " + article.originalTitle;
    const matchesSearch = normalize(searchableText).includes(searchTerm);
    if (matchesCategory && matchesSearch) {
      matchingArticles.push(article);
    }
  }
  return matchingArticles;
}

// Return one message per invalid field; an empty object means all four checks passed.
export function validateContact(form) {
  const errors = {};
  // Trim spaces before checking the minimum name length.
  if (form.name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }
  // Require text before and after @, followed by a dot and more text, with no spaces.
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  // The initial dropdown value is empty, so it fails until a topic is chosen.
  if (!form.topic) {
    errors.topic = "Please choose an inquiry topic.";
  }
  // Count only meaningful message characters by removing outside spaces.
  if (form.message.trim().length < 10) {
    errors.message = "Please write at least 10 characters.";
  }
  return errors;
}
