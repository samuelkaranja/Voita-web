import { Wrench, Car, Settings, Toolbox } from "lucide-react";

type GarageCardProps = {
  title: string;
  subtitle: string;
  icon: "wrench" | "car" | "settings" | "tool";
};

export default function GarageCard({
  title,
  subtitle,
  icon,
}: GarageCardProps) {
  const icons = {
    wrench: <Wrench size={20} />,
    car: <Car size={20} />,
    settings: <Settings size={20} />,
    tool: <Toolbox size={20} />,
  };

  return (
    <div className="bg-[#ffffff] rounded-2xl p-6 flex flex-col items-center text-center transition hover:shadow-md">
      {/* Icon Circle */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#c9f2df] text-[#033d2e] mb-4">
        {icons[icon]}
      </div>

      {/* Text */}
      <h3 className="text-sm font-semibold text-[#0b1f1a]">{title}</h3>
      <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
}
