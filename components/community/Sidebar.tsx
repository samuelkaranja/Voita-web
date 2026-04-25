import {
  Search,
  MessageSquare,
  AlertTriangle,
  ShieldCheck,
  MapPin,
} from "lucide-react";

export default function Sidebar() {
  const navItems = [
    { name: "Expert Portal", icon: Search, id: "hero" },
    { name: "Request Scout", icon: MapPin, id: "request-scout" },
    { name: "Community Chats", icon: MessageSquare, id: "community-chats" },
    { name: "Emergency Contacts", icon: AlertTriangle, id: "emergency" },
    { name: "Safety Guidelines", icon: ShieldCheck, id: "safety" },
  ];

  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-gray-200 p-6 justify-between min-h-screen">
      <div>
        <h1 className="text-sm font-bold text-emerald-900 mb-8 tracking-wider">
          VOITA COMMUNITY
        </h1>
        <nav className="space-y-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              className="flex items-center gap-3 text-gray-600 hover:text-emerald-700 transition-colors"
            >
              <item.icon size={18} />
              <span className="text-sm font-medium">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>

      <button className="bg-red-50 text-red-600 text-sm font-semibold p-4 rounded-lg text-left hover:bg-red-100 transition-colors">
        REPORT INCIDENT
        <p className="text-xs opacity-75 mt-1 font-normal">
          Immediate assistance for community policy violations
        </p>
      </button>
    </aside>
  );
}
