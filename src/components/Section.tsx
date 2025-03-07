
import React from "react";
import { Card } from "@/components/ui/card";

interface SectionProps {
  title: string;
  id: string;
  textColor?: string;
  children: React.ReactNode;
}

export const Section = ({
  title,
  id,
  textColor = "text-primary",
  children
}: SectionProps) => {
  return (
    <section id={id} className="mb-16">
      <Card className="p-8">
        <h2 className={`text-3xl font-bold mb-6 ${textColor}`}>
          {title}
        </h2>
        {children}
      </Card>
    </section>
  );
};