# Prism Consulting - Corporate Website

This repository contains the source code for the official website of **Prism Consulting**, an AI/ML and Product Strategy consultancy specializing in Agentic AI, federated machine learning, and enterprise intelligence for healthcare and finance.

## 🏗️ Architecture & Tech Stack (Current State)

This project is built using modern web development standards, focusing primarily on a high-performance frontend architecture.

### Frontend Technologies
- **Framework:** React 18
- **Build Tool:** Vite 5
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Component Library:** shadcn/ui (Radix UI primitives)
- **Routing:** React Router DOM (v6)
- **Icons:** Lucide React

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saify09/Prism-Consulting.git
   cd Prism-Consulting
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the Frontend Development Server**
   ```bash
   npm run dev
   ```
   *The site will be available at `http://localhost:8080` (or another port if 8080 is in use).*

---

## 📦 Project Structure

```text
.
├── public/                   # Static assets (Favicons, OG images, SVGs)
├── src/
│   ├── assets/               # Images and logo files used in components
│   ├── components/           # Reusable React components (Header, Footer, Sections, UI)
│   ├── hooks/                # Custom React hooks (e.g., use-toast, use-mobile)
│   ├── lib/                  # Utility functions (e.g., tailwind merge)
│   ├── pages/                # Page components (Index, Blog, NotFound)
│   ├── App.tsx               # Main application router
│   ├── index.css             # Global CSS and Tailwind directives
│   └── main.tsx              # React DOM entry point
├── tailwind.config.ts        # Tailwind CSS configuration and theme colors
├── vite.config.ts            # Vite build configuration
└── package.json              # Project dependencies and scripts
```

---

## � Theme & Styling

The project uses Tailwind CSS for styling. The color palette (Primary blues, Accent teals/greens) is defined globally using CSS variables in `src/index.css` and mapped in `tailwind.config.ts`.

To change the core brand colors, simply update the CSS variables in `src/index.css`:
```css
:root {
  --primary: 222 47% 11%;
  --primary-foreground: 210 40% 98%;
  --accent: 173 80% 40%;
  --accent-foreground: 0 0% 100%;
  /* ... */
}
```

---

## 🔮 Future Steps / Deployment Integration Phase

While the frontend is complete, the following configurations are required for the live deployment and backend functionality (e.g., the Contact Form).

### 1. Serverless Email Backend (Vercel)
The contact form is designed to post to a Vercel Serverless Function (`/api/send-email.js`) which utilizes Nodemailer to securely send emails without exposing credentials to the frontend.

**Directory Additions needed for deployment:**
- `api/send-email.js` (Serverless logic)
- `vercel.json` (API routing & SPA rewrite rules)

### 2. Environment Variables Configuration
Before deploying to Vercel, the following Environment Variables must be set in the Vercel Project Settings:
- `EMAIL_USER`: The SMTP email address (e.g., `info@prismconsulting.ai`)
- `EMAIL_PASS`: The SMTP password
- `EMAIL_TO`: The destination email to receive contact form submissions

### 3. SMTP Provider Setup (Hostinger)
To allow the serverless function to send emails, it is configured to use Hostinger's SMTP servers:
```javascript
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com", 
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```
*Note: Make sure the Hostinger email account is active and the password matches the Vercel `EMAIL_PASS` environment variable.*
