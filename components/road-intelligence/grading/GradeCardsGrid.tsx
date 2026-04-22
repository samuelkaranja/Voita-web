import GradeCard from "./GradeCard";

const grades = [
  {
    letter: "A",
    label: "Pristine",
    description: "Well-paved, high visibility, optimal for all vehicle types.",
    accentColor: "#065f46", // Darker Emerald for better contrast
  },
  {
    letter: "B",
    label: "Standard",
    description: "Minor wear, standard highway conditions. Safe for long hauls.",
    accentColor: "#14b8a6", // Teal
  },
  {
    letter: "C",
    label: "Caution",
    description: "Rough patches and uneven surfaces. Speed reduction advised.",
    accentColor: "#94a3b8", // Slate
  },
  {
    letter: "D",
    label: "Critical",
    description: "Heavy damage or unpaved. Avoid if possible to prevent damage.",
    accentColor: "#e11d48", // Rose/Red
  },
];

export default function GradeCardsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {grades.map((grade) => (
        <GradeCard key={grade.letter} {...grade} />
      ))}
    </div>
  );
}
