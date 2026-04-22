type GradeCardProps = {
  letter: string;
  label: string;
  description: string;
  accentColor: string;
};

export default function GradeCard({
  letter,
  label,
  description,
  accentColor,
}: GradeCardProps) {
  return (
    <div
      className="relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100"
    >
      {/* Thick left accent border with rounded corners to match the parent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-3 rounded-l-3xl"
        style={{ backgroundColor: accentColor }}
      />

      {/* Card content container - ensure padding-left is enough to not overlap the accent */}
      <div className="flex flex-col p-6 pl-9">
        {/* Large grade letter */}
        <span
          className="text-5xl font-bold leading-none mb-4 select-none opacity-20"
          style={{ color: accentColor }}
        >
          {letter}
        </span>

        {/* Label */}
        <h3 className="text-base font-semibold text-gray-900 mb-2">
          {label}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-gray-500 mb-6">
          {description}
        </p>

        {/* Horizontal line */}
        <div
          className="h-1 w-full rounded-full opacity-40"
          style={{ backgroundColor: accentColor }}
        />
      </div>
    </div>
  );
}
