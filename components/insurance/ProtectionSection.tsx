import TelematicsCard from "./protection/TelematicsCard";
import PayPerKmCard from "./protection/PayPerKmCard";
import GroupBuyCard from "./protection/GroupBuyCard";
import ClassicProtectionCard from "./protection/ClassicProtectionCard";

export default function ProtectionSection() {
  return (
    <section className="bg-[#f1f4f2] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">
              Precision Protection Models
            </h2>
            <p className="text-gray-600 max-w-md">
              Choose how you protect.
            </p>
          </div>

          <div className="bg-[#7dd3a6] px-6 py-4 rounded-2xl">
            <p className="text-sm">Inclusive Advantage</p>
            <p className="font-semibold">
              20% Direct Discount for Women
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Row 1 */}
          <div className="md:col-span-7">
            <TelematicsCard />
          </div>

          <div className="md:col-span-5">
            <PayPerKmCard />
          </div>

          {/* Row 2 */}
          <div className="md:col-span-5">
            <GroupBuyCard />
          </div>

          <div className="md:col-span-7">
            <ClassicProtectionCard />
          </div>

        </div>
      </div>
    </section>
  );
}
