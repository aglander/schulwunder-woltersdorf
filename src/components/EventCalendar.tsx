
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { Card } from './ui/card';

interface Event {
  summary: string;
  description?: string;
  start: Date;
  end: Date;
  location?: string;
}

async function fetchCalendarEvents(): Promise<Event[]> {
  try {
    const response = await fetch('URL_TO_YOUR_ICAL_FILE.ics');
    const icalData = await response.text();
    
    // Hier würde das Parsing der iCal-Daten erfolgen
    // Beispiel-Implementation mit simulierten Daten
    const demoEvents: Event[] = [
      {
        summary: "Baueinsatz",
        description: "Gemeinsamer Baueinsatz am Schulgebäude",
        start: new Date(2024, 3, 15, 9, 0),
        end: new Date(2024, 3, 15, 16, 0),
        location: "Schulgelände Woltersdorf"
      },
      {
        summary: "Planungstreffen",
        description: "Besprechung der nächsten Bauphase",
        start: new Date(2024, 3, 20, 18, 0),
        end: new Date(2024, 3, 20, 20, 0),
        location: "Online"
      }
    ];
    
    return demoEvents;
  } catch (error) {
    console.error('Fehler beim Laden der Kalenderdaten:', error);
    return [];
  }
}

export const EventCalendar: React.FC = () => {
  const { data: events = [], isLoading, error } = useQuery({
    queryKey: ['calendar-events'],
    queryFn: fetchCalendarEvents,
    refetchInterval: 1000 * 60 * 15, // Alle 15 Minuten aktualisieren
  });

  if (isLoading) {
    return <div className="text-center p-4">Lade Termine...</div>;
  }

  if (error) {
    return <div className="text-red-500 p-4">Fehler beim Laden der Termine</div>;
  }

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-4 text-schulbau">Kommende Termine</h3>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
            <div className="flex flex-col space-y-2">
              <h4 className="font-semibold text-lg">{event.summary}</h4>
              <div className="text-sm text-gray-600">
                <time>
                  {format(event.start, 'EEEE, d. MMMM yyyy', { locale: de })}
                </time>
                <div>
                  {format(event.start, 'HH:mm')} - {format(event.end, 'HH:mm')} Uhr
                </div>
              </div>
              {event.location && (
                <div className="text-sm text-gray-600">
                  📍 {event.location}
                </div>
              )}
              {event.description && (
                <p className="text-sm mt-2">{event.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
