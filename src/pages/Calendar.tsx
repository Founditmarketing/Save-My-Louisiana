import React, { useState, useEffect, useMemo } from 'react';
import { CalendarDays, MapPin, Clock, X, ChevronLeft, ChevronRight, ExternalLink, CalendarPlus, List, LayoutGrid } from 'lucide-react';

interface CalendarEvent {
    id: string;
    title: string;
    description: string;
    location: string;
    start: string;
    end: string;
    allDay: boolean;
    htmlLink: string;
    imageUrl?: string;
}

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

function formatTime(dateStr: string) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'America/Chicago' });
}

function formatDate(dateStr: string) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'America/Chicago' });
}

function formatDateRange(start: string, end: string, allDay: boolean) {
    if (allDay) return formatDate(start) + ' — All Day';
    return `${formatDate(start)}, ${formatTime(start)} – ${formatTime(end)}`;
}

function isSameDay(d1: Date, d2: Date) {
    return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
}

/* ── Event Detail Modal ─────────────────────────────── */
const EventModal: React.FC<{ event: CalendarEvent; onClose: () => void }> = ({ event, onClose }) => {
    useEffect(() => {
        const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', handler);
        document.body.style.overflow = 'hidden';
        return () => { document.removeEventListener('keydown', handler); document.body.style.overflow = ''; };
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={onClose}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
                onClick={e => e.stopPropagation()}
                style={{ animation: 'modalIn .25s ease-out' }}
            >
                {/* Color band */}
                <div className="h-2 bg-gradient-to-r from-blue-600 via-red-500 to-blue-800" />

                {/* Close */}
                <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10">
                    <X size={18} />
                </button>

                <div className="p-8 space-y-6">
                    <h2 className="text-2xl font-heading font-bold text-gray-900 pr-10 leading-tight">{event.title}</h2>

                    {/* Date & Time */}
                    <div className="flex items-start gap-3 text-gray-700">
                        <Clock size={20} className="mt-0.5 text-blue-600 shrink-0" />
                        <span className="text-sm leading-relaxed">{formatDateRange(event.start, event.end, event.allDay)}</span>
                    </div>

                    {/* Location */}
                    {event.location && (
                        <div className="flex items-start gap-3 text-gray-700">
                            <MapPin size={20} className="mt-0.5 text-red-500 shrink-0" />
                            <span className="text-sm leading-relaxed">{event.location}</span>
                        </div>
                    )}

                    {/* Image / Flyer */}
                    {event.imageUrl && (
                        <div className="w-full rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50 flex justify-center">
                            <img src={event.imageUrl} alt="Event Flyer" className="w-full h-auto max-h-[400px] object-contain" />
                        </div>
                    )}

                    {/* Description */}
                    {event.description && (
                        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                            <div
                                className="prose prose-sm max-w-none text-gray-700 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: event.description.replace(/\n/g, '<br/>') }}
                            />
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 pt-2">
                        {event.htmlLink && (
                            <a href={event.htmlLink} target="_blank" rel="noopener noreferrer"
                               className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-800 text-white px-5 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg">
                                <CalendarPlus size={16} /> Add to Calendar
                            </a>
                        )}
                        {event.location && (
                            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`}
                               target="_blank" rel="noopener noreferrer"
                               className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-colors">
                                <ExternalLink size={16} /> Get Directions
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <style>{`@keyframes modalIn{from{opacity:0;transform:translateY(12px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}`}</style>
        </div>
    );
};

/* ── Event Card (list view) ─────────────────────────── */
const EventCard: React.FC<{ event: CalendarEvent; onClick: () => void }> = ({ event, onClick }) => {
    const startDate = new Date(event.start);
    const month = MONTHS[startDate.getMonth()]?.slice(0, 3).toUpperCase();
    const day = startDate.getDate();

    return (
        <button onClick={onClick} className="w-full text-left flex gap-5 p-5 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all group cursor-pointer">
            {/* Date badge */}
            <div className="shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white flex flex-col items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <span className="text-[10px] font-bold uppercase tracking-widest leading-none opacity-80">{month}</span>
                <span className="text-2xl font-heading font-bold leading-none mt-0.5">{day}</span>
            </div>
            <div className="flex-1 min-w-0">
                <h3 className="font-heading font-bold text-gray-900 text-lg truncate group-hover:text-blue-700 transition-colors">{event.title}</h3>
                <div className="mt-1.5 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1.5 shrink-0">
                        <Clock size={13} className="text-gray-400" />
                        <span>{event.allDay ? 'All Day' : formatTime(event.start)}</span>
                    </div>
                    {event.location && (
                        <div className="flex items-center gap-1.5 min-w-0">
                            <span className="hidden sm:inline text-gray-300">•</span>
                            <MapPin size={13} className="text-gray-400 shrink-0" />
                            <span className="truncate">{event.location}</span>
                        </div>
                    )}
                </div>
            </div>
            <ChevronRight size={20} className="shrink-0 text-gray-300 group-hover:text-blue-500 self-center transition-colors" />
        </button>
    );
};

/* ── Main Calendar Page ─────────────────────────────── */
export const Calendar: React.FC = () => {
    const [events, setEvents] = useState<CalendarEvent[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
    const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');

    // Calendar nav state
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('/api/calendar-events');
                if (!res.ok) throw new Error('Failed to load events');
                const data = await res.json();
                setEvents(data.events || []);
            } catch (e: any) {
                console.error(e);
                setError(e.message);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const prevMonth = () => {
        if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); }
        else setCurrentMonth(m => m - 1);
    };
    const nextMonth = () => {
        if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); }
        else setCurrentMonth(m => m + 1);
    };
    const goToday = () => { setCurrentMonth(today.getMonth()); setCurrentYear(today.getFullYear()); };

    // Build calendar grid
    const calendarDays = useMemo(() => {
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const daysInPrev = new Date(currentYear, currentMonth, 0).getDate();
        const cells: { day: number; inMonth: boolean; date: Date }[] = [];

        for (let i = firstDay - 1; i >= 0; i--) {
            const d = daysInPrev - i;
            cells.push({ day: d, inMonth: false, date: new Date(currentYear, currentMonth - 1, d) });
        }
        for (let d = 1; d <= daysInMonth; d++) {
            cells.push({ day: d, inMonth: true, date: new Date(currentYear, currentMonth, d) });
        }
        const remaining = 42 - cells.length;
        for (let d = 1; d <= remaining; d++) {
            cells.push({ day: d, inMonth: false, date: new Date(currentYear, currentMonth + 1, d) });
        }
        return cells;
    }, [currentMonth, currentYear]);

    // Map events to dates
    const eventsByDate = useMemo(() => {
        const map = new Map<string, CalendarEvent[]>();
        events.forEach(ev => {
            const key = new Date(ev.start).toDateString();
            if (!map.has(key)) map.set(key, []);
            map.get(key)!.push(ev);
        });
        return map;
    }, [events]);

    // Upcoming events for list view
    const upcomingEvents = useMemo(() => {
        return events.filter(ev => new Date(ev.start) >= new Date(new Date().toDateString()));
    }, [events]);

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-900">
            {/* Hero */}
            <section className="bg-gray-900 text-white py-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-black/60" />
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest text-blue-300 border border-white/10">
                        <CalendarDays size={16} /> Upcoming Events
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">Events Calendar</h1>
                    <p className="text-xl md:text-2xl font-serif text-gray-300 max-w-2xl mx-auto">
                        Stay updated with our upcoming town halls, community meetings, and legislative sessions.
                    </p>
                </div>
            </section>

            {/* Controls */}
            <div className="max-w-6xl mx-auto px-6 pt-10">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    {/* View toggle */}
                    <div className="flex bg-white rounded-xl border border-gray-200 p-1 shadow-sm">
                        <button onClick={() => setViewMode('calendar')}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-widest transition-all ${viewMode === 'calendar' ? 'bg-brand-blue text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}>
                            <LayoutGrid size={16} /> Calendar
                        </button>
                        <button onClick={() => setViewMode('list')}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-widest transition-all ${viewMode === 'list' ? 'bg-brand-blue text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}>
                            <List size={16} /> List
                        </button>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="max-w-6xl mx-auto px-6 py-10 pb-20">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-32 gap-4">
                        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Loading events…</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-20">
                        <p className="text-red-600 font-bold mb-2">Unable to load events</p>
                        <p className="text-gray-500 text-sm">{error}</p>
                    </div>
                ) : viewMode === 'calendar' ? (
                    /* ── Month Grid View ──────────────────── */
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        {/* Month header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-gray-50/50">
                            <button onClick={prevMonth} className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center transition-colors"><ChevronLeft size={20} /></button>
                            <div className="text-center">
                                <h2 className="text-2xl font-heading font-bold">{MONTHS[currentMonth]} {currentYear}</h2>
                                <button onClick={goToday} className="text-xs text-blue-600 hover:underline font-bold uppercase tracking-widest mt-1">Today</button>
                            </div>
                            <button onClick={nextMonth} className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center transition-colors"><ChevronRight size={20} /></button>
                        </div>

                        {/* Day headers */}
                        <div className="grid grid-cols-7 border-b border-gray-100">
                            {DAYS.map(d => (
                                <div key={d} className="py-3 text-center text-[10px] font-bold uppercase tracking-widest text-gray-400">{d}</div>
                            ))}
                        </div>

                        {/* Day cells */}
                        <div className="grid grid-cols-7">
                            {calendarDays.map((cell, i) => {
                                const isToday = isSameDay(cell.date, today);
                                const dayEvents = eventsByDate.get(cell.date.toDateString()) || [];
                                return (
                                    <div key={i} className={`min-h-[90px] md:min-h-[110px] border-b border-r border-gray-50 p-1.5 md:p-2 ${cell.inMonth ? 'bg-white' : 'bg-gray-50/50'}`}>
                                        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${isToday ? 'bg-blue-600 text-white' : cell.inMonth ? 'text-gray-800' : 'text-gray-300'}`}>
                                            {cell.day}
                                        </span>
                                        <div className="mt-1 space-y-1">
                                            {dayEvents.slice(0, 2).map(ev => (
                                                <button key={ev.id} onClick={() => setSelectedEvent(ev)}
                                                    className="w-full text-left text-[11px] leading-tight font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 px-1.5 py-1 rounded-md truncate transition-colors cursor-pointer border border-blue-100/60">
                                                    {!ev.allDay && <span className="text-blue-400 mr-1">{formatTime(ev.start)}</span>}
                                                    {ev.title}
                                                </button>
                                            ))}
                                            {dayEvents.length > 2 && (
                                                <button onClick={() => setSelectedEvent(dayEvents[2])}
                                                    className="text-[10px] text-blue-500 font-bold px-1.5 hover:underline cursor-pointer">
                                                    +{dayEvents.length - 2} more
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    /* ── List View ─────────────────────────── */
                    <div className="space-y-4">
                        {upcomingEvents.length === 0 ? (
                            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                                <CalendarDays size={48} className="mx-auto text-gray-300 mb-4" />
                                <p className="text-gray-500 font-serif text-lg">No upcoming events scheduled.</p>
                            </div>
                        ) : upcomingEvents.map(ev => (
                            <EventCard key={ev.id} event={ev} onClick={() => setSelectedEvent(ev)} />
                        ))}
                    </div>
                )}
            </div>

            {/* Modal */}
            {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
        </div>
    );
};
