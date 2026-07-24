# Page Pulse Frontend

A React application that allows users to audit any website by entering its URL. The application communicates with the Spring Boot backend and displays a detailed audit report.

## Features

- Enter any website URL
- Displays:
  - HTTP Status
  - Response Time
  - Page Title
  - Meta Description
  - H1 Count
  - Images Missing Alt Text
  - Word Count
- Loading indicator
- Error handling
- Responsive UI
- Built using Tailwind CSS

## Tech Stack

- React
- Vite
- Tailwind CSS
- Axios

## Running Locally

Clone the repository

```bash
git clone https://github.com/<your-username>/page-pulse-frontend.git
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

## Backend Configuration

Update the backend URL inside

```
src/services/api.js
```

Example

```javascript
baseURL: "http://localhost:8080/api/v1"
```

## Project Structure

```
src
├── components
│   ├── UrlForm.jsx
│   ├── ReportCard.jsx
│   ├── LoadingSpinner.jsx
│   ├── ErrorMessage.jsx
│   └── Footer.jsx
│
├── services
│   └── api.js
│
├── App.jsx
└── main.jsx
```

## AI Usage

AI tools were used to assist with project planning, UI suggestions, and documentation. All implementation, debugging, testing, and final design decisions were completed manually.

## Author

Hitesh Kumar