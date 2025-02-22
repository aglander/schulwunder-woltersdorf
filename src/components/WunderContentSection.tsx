
import React from "react";
import { Card } from "@/components/ui/card";

interface WunderContentSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const WunderContentSection = ({ id, title, children }: WunderContentSectionProps) => {
  return (
    <section id={id} className="mb-16">
      <Card className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-schulbau">{title}</h2>
        {children}
      </Card>
    </section>
  );
};
