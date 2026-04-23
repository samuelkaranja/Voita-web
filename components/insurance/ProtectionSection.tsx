import TelematicsCard from "./protection/TelematicsCard";
import PayPerKmCard from "./protection/PayPerKmCard";
import GroupBuyCard from "./protection/GroupBuyCard";
import ClassicProtectionCard from "./protection/ClassicProtectionCard";

export default function ProtectionSection() {
  return (
    <section className="bg-[#f1f4f2] py-16 md:py-22">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl text-[#001810] font-bold mb-4">
              Precision Protection Models
            </h2>
            <p className="text-[#414845] max-w-md">
              Choose how you protect. From community-backed pools to usage-based
              digital auditing.
            </p>
          </div>

          <div className="bg-[#8ff6d0] px-6 py-4 rounded-2xl border-l-4 border-[#006c52] w-fit">
            <p className="text-sm text-[#007257] font-bold mb-1">
              Inclusive Advantage
            </p>
            <p className="text-lg text-[#001810] font-extrabold">
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
