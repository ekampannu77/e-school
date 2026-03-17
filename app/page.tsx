import Navbar from "@/components/Navbar";
import ModuleSection from "@/components/ModuleSection";
import { frontOfficeModules, utilityModules, examModules } from "@/data/modules";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar schoolName="Saransh E-School" />
      <main className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        </div>
        <ModuleSection title="Front / Admin Office" color="blue" modules={frontOfficeModules} />
        <ModuleSection title="Utility Applications" color="green" modules={utilityModules} />
        <ModuleSection title="Online Examination Management Tools" color="purple" modules={examModules} />
      </main>
    </div>
  );
}
