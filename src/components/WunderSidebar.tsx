
import React from "react";
import { Card } from "@/components/ui/card";

interface NavItem {
  href: string;
  label: string;
}

interface ProjectStatus {
  location: string;
  phase: string;
  nextSteps: string[];
}

interface WunderSidebarProps {
  navigation: NavItem[];
  status: ProjectStatus;
}

export const WunderSidebar = ({ navigation, status }: WunderSidebarProps) => {
  return (
    <div className="sticky top-20">
      <nav className="bg-white rounded-lg shadow-lg p-4">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-schulbau hover:underline block py-2">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-8 border-t">
          <h3 className="font-semibold mb-4">Projektstatus</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-medium">Standort</p>
              <p className="text-gray-600">{status.location}</p>
            </div>
            <div>
              <p className="font-medium">Bauphase</p>
              <p className="text-gray-600">{status.phase}</p>
            </div>
            <div>
              <p className="font-medium">Nächste Schritte</p>
              <ul className="list-disc list-inside text-gray-600">
                {status.nextSteps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
