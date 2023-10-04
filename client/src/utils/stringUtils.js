// utils/stringUtils.js

export function toTitleCase(str) {
  // List of words to be excluded from title case
  const excludeWords = [
    "a",
    "an",
    "the",
    "of",
    "and",
    "in",
    "on",
    "to",
    "with",
  ];

  // Split the string into words
  const words = str.split(" ");

  // Capitalize the first letter of each word, excluding excluded words
  const titleCaseWords = words.map((word, index) => {
    if (index === 0 || !excludeWords.includes(word.toLowerCase())) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word.toLowerCase();
  });

  // Join the words back together
  return titleCaseWords.join(" ");
}
