const express = require('express');
const { events, bookings } = require('../data/store');

const router = express.Router();

// GET: Retrieve all events and active bookings
router.get('/events', (req, res) => {
  res.status(200).json({ success: true, data: events });
});

router.get('/bookings', (req, res) => {
  res.status(200).json({ success: true, data: bookings });
});

// POST: Book tickets for an event with capacity check
router.post('/book', (req, res) => {
  try {
    const { eventId, attendeeName, attendeeEmail, ticketsCount } = req.body;

    if (!eventId || !attendeeName || !attendeeEmail || !ticketsCount) {
      return res.status(400).json({ success: false, message: 'All booking fields are required.' });
    }

    const event = events.find(e => e.id === parseInt(eventId));
    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found.' });
    }

    const requestedTickets = parseInt(ticketsCount);
    if (isNaN(requestedTickets) || requestedTickets <= 0) {
      return res.status(400).json({ success: false, message: 'Invalid ticket quantity.' });
    }

    const availableSeats = event.totalSeats - event.bookedSeats;
    if (requestedTickets > availableSeats) {
      return res.status(400).json({
        success: false,
        message: `Only ${availableSeats} seats remaining for this event.`
      });
    }

    // Update booked seats count
    event.bookedSeats += requestedTickets;
    const totalPaid = event.price * requestedTickets;

    const newBooking = {
      id: Date.now(),
      eventId: event.id,
      eventTitle: event.title,
      attendeeName: attendeeName.trim(),
      attendeeEmail: attendeeEmail.trim(),
      ticketsCount: requestedTickets,
      totalPaid,
      bookedAt: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };

    bookings.unshift(newBooking);
    res.status(201).json({ success: true, message: 'Tickets booked successfully!', data: newBooking });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE: Cancel booking and restore seat capacity
router.delete('/bookings/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const bookingIndex = bookings.findIndex(b => b.id === id);

    if (bookingIndex === -1) {
      return res.status(404).json({ success: false, message: 'Booking record not found.' });
    }

    const booking = bookings[bookingIndex];
    const event = events.find(e => e.id === booking.eventId);

    if (event) {
      event.bookedSeats = Math.max(0, event.bookedSeats - booking.ticketsCount);
    }

    bookings.splice(bookingIndex, 1);
    res.status(200).json({ success: true, message: 'Booking cancelled and seats restored.' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;