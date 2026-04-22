import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  icon: ReactNode;
  variant?: "light" | "dark";
}

export default function InfoCard({
  title,
  icon,
  variant = "light",
}: InfoCardProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`rounded-3xl p-6 flex flex-col items-center justify-center text-center
      ${isDark ? "bg-[#022c22] text-white" : "bg-[#e9ece9] text-[#001810]"}`}
    >
      <div className="mb-3">{icon}</div>
      <p className="text-[17px] font-bold">{title}</p>
    </div>
  );
}
