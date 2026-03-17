import Image from "next/image";
import Link from "next/link";
import { Module } from "@/data/modules";

interface ModuleCardProps {
  module: Module;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  return (
    <Link href={module.href}>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center gap-3 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer group h-full">
        <div className="relative w-20 h-20 flex items-center justify-center">
          <Image
            src={module.image}
            alt={module.label}
            width={80}
            height={80}
            className="object-contain group-hover:scale-105 transition-transform duration-200"
            unoptimized
          />
        </div>
        <span className="text-xs font-semibold text-gray-600 text-center leading-tight uppercase tracking-wide">
          {module.label}
        </span>
      </div>
    </Link>
  );
}
