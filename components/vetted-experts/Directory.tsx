import {
  PaintBucket,
  Armchair,
  Car,
  ShowerHead,
  Truck,
  GraduationCap,
  Toolbox,
  Paintbrush,
  CarFront,
} from "lucide-react";
import { GiTowTruck } from "react-icons/gi";

export default function Directory() {
  const categories = [
    { name: "Mechanics", icon: Toolbox },
    { name: "Paint Specs", icon: Paintbrush },
    { name: "Upholstery", icon: Armchair },
    { name: "Car Dealers", icon: CarFront },
    { name: "Car Wash", icon: ShowerHead },
    { name: "Towing", icon: GiTowTruck },
  ];

  return (
    <div className="bg-[#f1f4f2] px-8 py-20">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-14">
          <h2 className="text-4xl font-extrabold text-[#001810] mb-4 tracking-tight">
            Comprehensive Directory
          </h2>
          <p className="text-gray-500 text-lg">
            In-app curated categories for every automotive need.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {categories.map((item, index) => (
            <div
              key={index}
              className=" p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="text-emerald-700 mb-5">
                <item.icon size={32} strokeWidth={2.1} />
              </div>
              <span className="font-bold text-[#001810] text-sm md:text-base text-left">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Banner Section */}
        <div className="bg-[#052f23] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 text-white">
            <div className=" bg-[#8ff6d0] p-4 rounded-full text-emerald-950">
              <GraduationCap size={30} />
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">
                Gender-Filtered Instructors
              </h3>
              <p className="text-[#719888] opacity-90 text-[17px]">
                Users can select instructors based on comfort and preference
                directly in the app.
              </p>
            </div>
          </div>

          <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl text-sm font-bold transition-colors whitespace-nowrap border border-white/10">
            Inclusive Selection
          </button>
        </div>
      </div>
    </div>
  );
}
