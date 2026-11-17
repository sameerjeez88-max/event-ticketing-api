/**
 * @project Event Ticketing & Seat Reservation REST API
 * @author Rana Yasir Mahy Ud Din (https://ranayasir.unaux.com/)
 */

const events = [
  {
    id: 1,
    title: 'Global Full-Stack Summit 2026',
    category: 'Conference',
    date: '2026-12-15',
    location: 'Silicon Valley Arena / Virtual',
    price: 150.00,
    totalSeats: 100,
    bookedSeats: 42
  },
  {
    id: 2,
    title: 'Node.js & Microservices Masterclass',
    category: 'Workshop',
    date: '2026-12-20',
    location: 'TechHub Auditorium, Lahore',
    price: 75.00,
    totalSeats: 50,
    bookedSeats: 48
  }
];

const bookings = [
  {
    id: 101,
    eventId: 1,
    attendeeName: 'Usman Tariq',
    attendeeEmail: 'usman@example.com',
    ticketsCount: 2,
    totalPaid: 300.00,
    bookedAt: '2026-11-17 10:30'
  }
];

module.exports = { events, bookings };