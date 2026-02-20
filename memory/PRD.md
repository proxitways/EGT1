# Product Requirements Document - GlobalForm Company Formation Website

## Original Problem Statement
Create a Company formation website with company formation for UK Company, USA company, Saudi Arabia company, Qatar company, and Indian Company.

## User Personas
1. **Entrepreneurs & Startups**: Individuals looking to expand internationally
2. **Business Owners**: Existing businesses wanting to establish presence in new jurisdictions
3. **Investors**: People seeking tax-efficient business structures
4. **Service Providers**: Consultants and agencies helping clients with company formation

## Core Requirements (Static)
1. Informational website showcasing 5 countries (UK, USA, Saudi Arabia, Qatar, India)
2. Detailed country pages with formation requirements, benefits, and pricing
3. Inquiry/contact forms for lead capture
4. Professional, conversion-optimized design
5. Database storage for inquiries
6. Responsive design across all devices

## Architecture & Tech Stack
- **Frontend**: React 19, Tailwind CSS, shadcn/ui components
- **Backend**: FastAPI, Python
- **Database**: MongoDB
- **Styling**: Inter font, emerald green color scheme

---

## What's Been Implemented

### Phase 1: Frontend with Mock Data (December 2024)
**Date**: December 2024

#### Home Page (`/`)
- Hero section with compelling value proposition
- Trust indicators (10,000+ companies formed, 99.8% success rate)
- Statistics showcase (4 key metrics)
- Countries section with 5 country cards (UK, USA, Saudi Arabia, Qatar, India)
- Services section (6 comprehensive services)
- "Why Choose Us" section with benefits
- FAQ section with accordion (8 questions)
- CTA section with gradient background
- Professional footer with navigation

#### Country Detail Pages (`/country/:countryId`)
- Individual pages for each of 5 countries
- Country overview with flag and description
- Key features & benefits section
- Formation requirements list
- Business benefits
- Pricing packages (Basic, Standard, Premium)
- Inquiry form with validation
  - Fields: Name, Email, Phone, Company Name, Package Selection, Additional Info
  - Mock form submission with success toast notification

#### Components Created
- `Home.jsx` - Main landing page
- `CountryDetail.jsx` - Individual country pages
- `mockData.js` - Mock data for countries, FAQs, services, and inquiries

#### Design Features
- Professional emerald green color scheme (#10b981)
- Inter font family for modern typography
- Smooth transitions and hover effects
- Shadcn UI components (Button, Card, Badge, Accordion, Form, Input, Textarea, Select)
- Responsive grid layouts
- Proper spacing and visual hierarchy
- Toast notifications using Sonner

---

## Prioritized Backlog

### P0 Features (Critical - Next Phase)
1. **Backend API Development**
   - MongoDB models for inquiries
   - POST endpoint for inquiry submission
   - GET endpoint for retrieving inquiries (admin)
   - Email notification system for new inquiries
   
2. **Frontend-Backend Integration**
   - Replace mock data with real API calls
   - Implement proper error handling
   - Add loading states

### P1 Features (High Priority)
1. **Admin Dashboard**
   - View all inquiries
   - Filter by country, status, date
   - Update inquiry status
   - Export to CSV

2. **Email Integration**
   - Send confirmation email to user
   - Notify admin of new inquiries
   - Email templates for each country

3. **Enhanced Features**
   - Package comparison page
   - Document upload capability
   - Multi-step inquiry form
   - Progress tracking for applications

### P2 Features (Medium Priority)
1. **Payment Integration**
   - Stripe integration for deposits
   - Payment package selection
   - Invoice generation

2. **User Account System**
   - User registration/login
   - Track application status
   - Document repository

3. **Additional Content**
   - Blog/resources section
   - Case studies/testimonials
   - Video explainers

4. **Analytics & Optimization**
   - Google Analytics integration
   - Conversion tracking
   - A/B testing for CTAs

---

## Next Tasks
1. Build backend API with MongoDB models for inquiries
2. Create POST `/api/inquiries` endpoint
3. Create GET `/api/inquiries` endpoint (with auth)
4. Integrate frontend forms with backend API
5. Test end-to-end inquiry submission flow
6. Implement email notifications

---

## API Contracts (To Be Implemented)

### POST /api/inquiries
**Request Body**:
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "companyName": "string",
  "country": "string",
  "package": "basic|standard|premium",
  "message": "string"
}
```

**Response**:
```json
{
  "id": "string",
  "status": "pending",
  "timestamp": "ISO 8601 string",
  ...requestBody
}
```

### GET /api/inquiries
**Response**:
```json
[
  {
    "id": "string",
    "name": "string",
    "email": "string",
    "phone": "string",
    "companyName": "string",
    "country": "string",
    "package": "string",
    "message": "string",
    "status": "pending|contacted|closed",
    "timestamp": "ISO 8601 string"
  }
]
```

---

## Mocked Data (To Be Replaced)
- `mockInquiries` array in `mockData.js` - Currently stores form submissions in browser memory
- Form submission uses `setTimeout` to simulate API call
- Success notifications shown via Sonner toast

---

## Notes
- All interactive elements have hover states and smooth transitions
- Form validation implemented on required fields
- Mobile-responsive design throughout
- Clean, professional aesthetic suitable for B2B services
- Conversion-optimized with multiple CTAs
