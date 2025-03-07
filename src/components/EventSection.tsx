import React from "react";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { Event } from "../data/events";
import { Section } from "./Section";

interface EventSectionProps {
  events: Event[];
  textColor?: string;
}

export const EventSection: React.FC<EventSectionProps> = ({
  events,
  textColor = "text-primary",
}) => {
  return events.length > 0 ? (
    <Section title="Kommende Termine" id="events" textColor={textColor}>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-4 last:border-0"
          >
            <div className="flex flex-col space-y-2">
              <h4 className="font-semibold text-lg">{event.summary}</h4>
              <div className="text-sm text-gray-600">
                <time>
                  {format(event.start, "EEEE, d. MMMM yyyy", { locale: de })}
                </time>
                <div>
                  {format(event.start, "HH:mm")} - {format(event.end, "HH:mm")}{" "}
                  Uhr
                </div>
              </div>
              {event.location && (
                <div className="text-sm text-gray-600">📍 {event.location}</div>
              )}
              {event.description && (
                <p className="text-sm mt-2">{event.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  ) : (
    <></>
  );
};
