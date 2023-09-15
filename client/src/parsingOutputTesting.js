const contentArray = [
  "Table of Contents: Rankine Cycle",
  "1. Introduction to the Rankine Cycle",
  "   1.1 Definition and Purpose",
  "   1.2 Importance in Power Generation",
  "   1.3 Historical Background",
  "2. Basic Principles of Thermodynamics",
  "   2.1 Laws of Thermodynamics",
  "   2.2 Energy Conversion and Heat Transfer",
  "   2.3 Ideal vs. Real Processes",
  "3. Components of the Rankine Cycle",
  "   3.1 Boiler or Steam Generator",
  "      3.1.1 Function and Types",
  "         3.1.1.1 Jojo",
  "         3.1.1.2 Jojo",
  "      3.1.2 Heat Transfer Mechanisms",
  "   3.2 Turbine",
  "      3.2.1 Types and Working Principles",
  "      3.2.2 Efficiency and Performance",
  "   3.3 Condenser",
  "      3.3.1 Purpose and Operation",
  "      3.3.2 Cooling Methods",
  "   3.4 Pump",
  "      3.4.1 Function and Types",
  "      3.4.2 Work Input and Efficiency",
  "4. Rankine Cycle Processes",
  "   4.1 Vaporization or Boiling Process",
  "      4.1.1 Saturation and Superheated States",
  "      4.1.2 Heat Addition and Steam Quality",
  "   4.2 Expansion Process",
  "      4.2.1 Adiabatic and Isentropic Expansion",
  "      4.2.2 Work Output and Efficiency",
  "   4.3 Condensation Process",
  "      4.3.1 Heat Rejection and Cooling",
  "      4.3.2 Subcooling and Condenser Performance",
  "   4.4 Pumping Process",
  "      4.4.1 Compression and Work Input",
  "      4.4.2 Pressure Increase and Efficiency",
  "5. Rankine Cycle Analysis and Performance",
  "   5.1 Efficiency Calculation",
  "      5.1.1 Carnot Efficiency and Rankine Efficiency",
  "      5.1.2 Factors Affecting Efficiency",
  "   5.2 Heat Rate and Specific Steam Consumption",
  "      5.2.1 Definitions and Formulas",
  "      5.2.2 Importance in Power Plant Operation",
  "   5.3 Improving Rankine Cycle Performance",
  "      5.3.1 Regenerative Feed Heating",
  "      5.3.2 Reheating and Superheating",
  "      5.3.3 Combined Cycle Configurations",
  "6. Applications of the Rankine Cycle",
  "   6.1 Steam Power Plants",
  "      6.1.1 Thermal Power Plants",
  "      6.1.2 Nuclear Power Plants",
  "   6.2 Geothermal Power Plants",
  "   6.3 Waste Heat Recovery Systems",
  "   6.4 Solar Thermal Power Plants",
  "7. Challenges and Future Developments",
  "   7.1 Environmental Impact and Emissions",
  "   7.2 Integration with Renewable Energy Sources",
  "   7.3 Advanced Rankine Cycle Technologies",
  "      7.3.1 Supercritical and Ultra-Supercritical Cycles",
  "      7.3.2 Organic Rankine Cycle (ORC)",
  "      7.3.3 Combined Heat and Power (CHP) Systems",
  "8. Conclusion",
  "   8.1 Summary of Key Concepts",
  "   8.2 Importance and Applications",
  "   8.3 Future Prospects and Research Areas",
];

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
