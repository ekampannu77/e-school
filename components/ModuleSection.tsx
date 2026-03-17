import ModuleCard from "@/components/ModuleCard";
import { Module } from "@/data/modules";

interface ModuleSectionProps {
  title: string;
  color: "blue" | "green" | "purple";
  modules: Module[];
}

const colorMap = {
  blue: {
    header: "bg-blue-600",
    badge: "bg-blue-100 text-blue-700",
  },
  green: {
    header: "bg-emerald-600",
    badge: "bg-emerald-100 text-emerald-700",
  },
  purple: {
    header: "bg-purple-600",
    badge: "bg-purple-100 text-purple-700",
  },
};

export default function ModuleSection({ title, color, modules }: ModuleSectionProps) {
  const colors = colorMap[color];

  return (
    <div className="mb-8">
      <div className={`${colors.header} rounded-t-xl px-5 py-3 flex items-center justify-between`}>
        <h2 className="text-white font-semibold text-sm uppercase tracking-wider">{title}</h2>
        <span className={`${colors.badge} text-xs font-semibold px-2 py-0.5 rounded-full`}>
          {modules.length} modules
        </span>
      </div>
      <div className="bg-white rounded-b-xl shadow-sm border border-t-0 border-gray-100 p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {modules.map((mod) => (
            <ModuleCard key={mod.href} module={mod} />
          ))}
        </div>
      </div>
    </div>
  );
}
