import { Users, Check } from "lucide-react";

export default function ExpertCommunityCard() {
  return (
    <div className="bg-[#e0e3e1] rounded-3xl p-10 flex flex-col gap-6 transition group-hover:shadow-md">
      
      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
        <Users className="text-[#0d2b1f]" size={24} />
      </div>

      <div>
        <h3 className="text-[#0d2b1f] text-2xl font-bold">
          Expert Community
        </h3>

        <p className="text-[#4a5a52] text-base leading-relaxed mt-3 mb-6">
          Request a Scout for second opinions or chat on specialized boards.
        </p>

        <ul className="space-y-3 ">
          {["Ask an Expert", "Specialized Chat Boards"].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-[#0d2b1f] font-medium"
            >
              <span className="w-5 h-5 rounded-full border-2 border-[#0d6e4a] flex items-center justify-center">
                <Check size={12} className="text-[#0d6e4a] stroke-[3px]" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
