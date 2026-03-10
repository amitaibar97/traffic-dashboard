# Traffic Stats Dashboard

A full-stack web app for managing traffic statistics, built with React, Firebase Functions (v2), and Express.
data stored in Firestore, which holds all the stats.

---

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+)
- [Firebase CLI](https://firebase.google.com/docs/cli): `npm install -g firebase-tools`
- [Java JDK 17+](https://adoptium.net) _(only required if using the Firebase emulator)_

---

## Project Structure
```
/
├── frontend/         # React frontend (Vite)
├── functions/        # Firebase Functions (Express backend)
├── shared/           # Shared Zod schemas between frontend and backend
└── firebase.json
```

## Setup

### 1. Install Dependencies

```bash
# Frontend
npm install

# Backend
cd functions
npm install
```

### 2. Environment Variables

Create `.env` in the root:

```
VITE_API_BASE_URL=http://localhost:5001/traffic-dashboard-amitai/europe-west3/api
```

> ⚠️ Never commit `.env` files to source control.

---

## Running Locally

### Option A: Firebase Serve *(no Java required)*

```bash
firebase serve
```

### Option B: Firebase Emulator *(full suite, requires Java)*

```bash
firebase emulators:start
```

Have fun, and I would like to get honest feedback :)
