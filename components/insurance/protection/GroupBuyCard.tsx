import { Users, CheckCircle } from "lucide-react";

export default function GroupBuyCard() {
  return (
    <div className="bg-[#8ff6d0] rounded-3xl p-8 relative overflow-hidden">
      <div>
        <h3 className="text-2xl text-[#002117] font-bold mb-4">Group Buy</h3>

        <p className="text-sm text-[#00513d] mb-8 font-light">
          Pool your risk with colleagues or neighbors for community-exclusive discounts.
        </p>

        <ul className="space-y-3 text-sm mb-8">
          <li className="flex items-center gap-2 text-sm font-medium">
            <CheckCircle size={16} /> Up to 15% Group Discount
          </li>
          <li className="flex items-center gap-2 text-sm font-medium">
            <CheckCircle size={16} /> Shared No-Claims Bonus
          </li>
        </ul>
      </div>

      <Users className="absolute bottom-0 right-0 opacity-10" size={120} />
    </div>
  );
}
