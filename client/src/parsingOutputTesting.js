import { contentArray } from "./constants";

function removeLeadingWhitespaces(contentArray) {
  return contentArray.map((item) => item.replace(/^\s+/, ""));
}
const trimmedContentArray = removeLeadingWhitespaces(contentArray);
console.log(trimmedContentArray);

function parseContentArray(contentArray) {
  const contentData = [];
  let currentSection = contentData;
  let stack = [contentData];

  contentArray.forEach((item) => {
    const sectionMatch = item.match(/^(\d+(?:\.\d+)*)(.*)/);
    if (sectionMatch) {
      const [_, sectionNumber, sectionTitle] = sectionMatch;
      const sectionDepth = sectionNumber.split(".").length - 1;

      const sectionObj = {
        title: sectionTitle.replace(/^\./, "").trim(),
        subsections: [],
        number: sectionNumber.trim(),
      };

      if (sectionDepth === 0) {
        contentData.push(sectionObj);
        currentSection = sectionObj;
        stack = [contentData, currentSection];
      } else {
        while (sectionDepth < stack.length - 1) {
          stack.pop();
        }
        stack[stack.length - 1].subsections.push(sectionObj);
        stack.push(sectionObj);
        currentSection = sectionObj;
      }
    }
  });

  return contentData;
}

const structuredContent = parseContentArray(trimmedContentArray);
console.log(JSON.stringify(structuredContent, null, 2));
