import Sidebar from "@/components/community/Sidebar";
import Hero from "@/components/community/Hero";
import ExpertPortal from "@/components/community/ExpertPortal";
import CollectiveKnowledge from "@/components/community/CollectiveKnowledge";
import EmergencyDirectory from "@/components/community/EmergencyDirectory";

export default function CommunityPage() {
  return (
    <div className="bg-[#f7faf8] min-h-screen flex justify-center py-20">
      <div className="max-w-7xl w-full flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content column */}
        <main className="flex-1 overflow-x-hidden">
          <div className="px-8 py-8 md:px-12 md:py-2">
            <Hero />
            <ExpertPortal />
            <CollectiveKnowledge />
            <EmergencyDirectory />
          </div>
        </main>
      </div>
    </div>
  );
}
