
import React from "react";
import { Card } from "@/components/ui/card";
import { Supporter } from "../data/supporters";

interface SupporterSectionProps {
  supporters: Supporter[];
  title?: string;
  textColor: string;
  description?: string;
}

export const SupporterSection = ({
  supporters,
  title = "Unsere Unterstützer",
  textColor,
  description = "Wir danken allen Sponsoren und Unterstützern, die dieses Projekt möglich machen.",
}: SupporterSectionProps) => {
  return (
    <section id="supporters" className="mb-16">
      <Card className="p-8">
        <h2 className={`text-3xl font-bold mb-6 ${textColor}`}>
          {title}
        </h2>
        <p className="mb-8">
          {description}
        </p>
        {supporters.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {supporters.map((supporter) => (
              <a
                key={supporter.filename}
                href={supporter.url}
                className="block transition-all duration-300"
                title={supporter.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`/assets/support/${supporter.filename}`}
                  alt={supporter.title}
                  className="w-full h-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </a>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">
            Wir sind auf der Suche nach Unterstützern für unser Projekt. Bei Interesse kontaktieren Sie bitte Johannes Wilk unter{" "}
            <a 
              href="mailto:johannes.wilk@freie-schule-woltersdorf.de" 
              className={`${textColor} hover:underline`}
            >
              johannes.wilk@freie-schule-woltersdorf.de
            </a>
          </p>
        )}
      </Card>
    </section>
  );
};
