# DigiMantra — React + Tailwind Frontend

> AI-First, Future-Ready Digital Agency Website

---

## Folder Structure

```
digimantra/
├── index.html                        # Vite entry HTML
├── vite.config.js                    # Vite + path alias setup
├── tailwind.config.js                # Tailwind tokens & theme
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx                      # ReactDOM.createRoot entry
    ├── App.jsx                       # BrowserRouter + Routes
    ├── index.css                     # Global styles + Tailwind layers
    │
    ├── pages/
    │   └── HomePage.jsx              # Assembles all sections
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.jsx            # Sticky smart navbar
    │   │   └── Footer.jsx            # Full footer with newsletter
    │   ├── sections/
    │   │   ├── HeroSection.jsx       # Hero + lead capture form
    │   │   ├── TrustedSection.jsx    # Trusted & Recognized logos
    │   │   ├── ReachOutSection.jsx   # 3 contact cards
    │   │   └── GlobalPartnerSection.jsx  # World map + partner flags
    │   └── ui/
    │       ├── Button.jsx            # Reusable button (primary/outline/ghost)
    │       ├── Input.jsx             # Reusable input with error state
    │       └── SectionTag.jsx        # Pill tag for section labels
    │
    ├── hooks/
    │   ├── useLeadForm.js            # Hero form logic (react-hook-form + zod)
    │   ├── useNewsletter.js          # Newsletter subscription
    │   ├── useScrollAnimation.js     # IntersectionObserver fade-in
    │   └── useScrollHeader.js        # Smart sticky nav scroll behavior
    │
    ├── api/
    │   ├── axiosInstance.js          # Base axios config + interceptors
    │   └── contactApi.js             # Contact & newsletter API endpoints
    │
    ├── constants/
    │   └── index.js                  # Nav links, contact cards, locations, etc.
    │
    ├── types/
    │   └── index.js                  # JSDoc type definitions
    │
    └── utils/
        └── helpers.js                # cn(), debounce(), scrollToSection(), etc.
```

---

## Getting Started

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # production build → dist/
```

---

## Adding More Sections (Day-by-Day Expansion Plan)

| Day | Task |
|-----|------|
| Day 1 | ✅ Hero, Trusted, ReachOut, GlobalPartner, Navbar, Footer |
| Day 2 | Add `ServicesSection.jsx` → wire to `/api/servicesApi.js` |
| Day 3 | Add `CaseStudiesSection.jsx` → `useCaseStudies` hook |
| Day 4 | Add `BlogSection.jsx` → `useBlogPosts` hook + blog API |
| Day 5 | Add `TestimonialsSection.jsx` |
| Day 6 | Add `AboutPage.jsx`, `ServicesPage.jsx` routes |
| Day 7 | Wire all forms to real API by removing mock `setTimeout` |
| Day 8 | Add `AuthContext`, login/signup flow if needed |

---

## Environment Variables

Create `.env` (never commit):
```
VITE_API_BASE_URL=https://api.digimantra.com/v1
```

---

## Tech Stack
- **React 18** + **React Router v6**
- **Tailwind CSS 3** with custom tokens
- **Vite 5** (fast HMR)
- **react-hook-form** + **Zod** (form validation)
- **Axios** (API layer with interceptors)
- **react-hot-toast** (notifications)
- **lucide-react** (icons)
