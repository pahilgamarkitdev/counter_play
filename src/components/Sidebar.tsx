"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Heroes", href: "/heroes" },
  { name: "Items", href: "/items" },
  { name: "Emblem", href: "/emblem" },
  { name: "Heroes Synergy", href: "/heroes-synergy" },
  { name: "Heroes Tier", href: "/heroes-tier" },
  {name: "Battle Spells", href: "/battle-spells" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-black text-white flex flex-col border-r border-cyan-400">
      {/* Logo */}
      <div className="p-6 flex justify-center items-center gap-3">
        <Image
          src="/img/sidebar-logo.png"
          alt="Counter Play Logo"
          width={140}
          height={80}
          priority
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-2 flex flex-col gap-6">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <Button
                  variant="ghost"
                  className={`w-full justify-center items-center text-left h-12 text-lg ${
                    pathname === item.href
                      ? "underline underline-offset-8 decoration-2 decoration-cyan-400 text-white font-semibold"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
