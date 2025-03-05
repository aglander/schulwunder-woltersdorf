
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { Event, events as allEvents } from '../data/events';

interface EventCalendarProps {
  filterTag?: 'schulgruendungswunder' | 'schulbauwunder' | 'schulinnovationswunder';
}

async function fetchCalendarEvents(filterTag?: string): Promise<Event[]> {
  // Simuliere einen API-Aufruf mit verzögerter Rückgabe
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredEvents = filterTag
        ? allEvents.filter(event => event.tags.includes(filterTag as any))
        : allEvents;
      
      resolve(filteredEvents);
    }, 300);
  });
}

export const EventCalendar: React.FC<EventCalendarProps> = ({ filterTag }) => {
  const { data: events = [], isLoading, error } = useQuery({
    queryKey: ['calendar-events', filterTag],
    queryFn: () => fetchCalendarEvents(filterTag),
    refetchInterval: 1000 * 60 * 15, // Alle 15 Minuten aktualisieren
  });

  if (isLoading) {
    return <div className="text-center">Lade Termine...</div>;
  }

  if (error) {
    return <div className="text-red-500">Fehler beim Laden der Termine</div>;
  }

  return (
    <div className="space-y-4">
      {events.length === 0 && (
        <div className="text-center text-gray-500 py-4">
          Keine Termine gefunden
        </div>
      )}
      
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
  );
};
