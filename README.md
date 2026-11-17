# 🎟️ Event Ticketing & Seat Reservation REST API

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.21-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![REST API](https://img.shields.io/badge/Architecture-RESTful%20API-6366F1?style=for-the-badge)](https://restfulapi.net/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

An enterprise-grade **Event Ticketing & Seat Reservation REST API** engineered with **Node.js**, **Express.js**, and a responsive dark-mode **Tailwind CSS** event management dashboard. Designed for conferences, workshops, and concert ticketing platforms, the engine features real-time seat inventory tracking, capacity validation checks, automated pricing calculation, and complete booking cancellation lifecycle management.

---

## 📋 Table of Contents
1. [System Overview & Business Value](#-system-overview--business-value)
2. [Core Features & Highlights](#-core-features--highlights)
3. [Tech Stack & Architecture](#-tech-stack--architecture)
4. [Project Folder Structure](#-project-folder-structure)
5. [Complete API Endpoints Reference](#-complete-api-endpoints-reference)
6. [Request & Response Payloads (JSON Examples)](#-request--response-payloads-json-examples)
7. [HTTP Status & Error Handling](#-http-status--error-handling)
8. [Local Installation & Testing](#-local-installation--testing)
9. [Production Scaling & Roadmap](#-production-scaling--roadmap)
10. [Author & Developer](#-author--developer)

---

## 🎯 System Overview & Business Value

Managing ticket sales requires strict inventory control to prevent overselling limited venue seats. **TixPulse Engine (`event-ticketing-api`)** provides a robust backend API combined with a modern attendee portal:

* **Real-Time Seating Constraints:** Prevents ticket reservations from exceeding remaining venue capacity, automatically locking out overbooking attempts.
* **Dynamic Revenue Calculation:** Instantly computes total ticket pricing based on ticket counts and per-seat event pricing.
* **Seamless Cancellation Flow:** When an attendee cancels a booking, venue seats are automatically restored back to the available inventory pool.

---

## 🌟 Core Features & Highlights

* **🎟️ Live Seat Allocation Validation:** Intercepts booking requests exceeding available venue capacity and returns descriptive error responses.
* **🔄 Automated Capacity Restoration:** Purging or canceling a booking immediately updates event seat availability.
* **🎨 Modern Dark-Mode UI:** Responsive two-column event browser and attendee registry styled with Tailwind CSS (`slate-950` palette).
* **🧩 Modular Architecture:** Clean code separation across routing controllers (`eventRoutes.js`), data store (`store.js`), and server initialization (`server.js`).

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Role & Responsibility |
| :--- | :--- | :--- |
| **Frontend UI** | HTML5, Vanilla JS (ES6+), Tailwind CSS | Interactive event cards, modal booking form, and live attendees registry |
| **Backend Runtime** | Node.js (v18+) | Event-driven server execution |
| **Web Framework** | Express.js (v4.21) | REST routing, middleware parsing, and static file delivery |
| **Configuration** | Dotenv & CORS | Environment port configuration and cross-origin resource sharing |

---

## 📂 Project Folder Structure

```text
event-ticketing-api/
├── public/
│   └── index.html               # Tailwind CSS event ticketing & booking dashboard UI
├── src/
│   ├── routes/
│   │   └── eventRoutes.js       # REST controllers for events, ticket booking & cancellation
│   └── data/
│       └── store.js             # In-memory database store for events and bookings
├── server.js                    # Express server bootstrap & static file bindings
├── package.json                 # Project metadata, dependencies, and scripts manifest
├── .env                         # Environment variables (PORT=5009)
├── .gitignore                   # Excludes node_modules and .env files
└── README.md                    # Comprehensive technical & API documentation
