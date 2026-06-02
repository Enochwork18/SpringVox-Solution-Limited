# OPENCODE COMPLETION PROMPT - SpringVox Solution Limited

Copy this entire prompt into OpenCode/Claude Code to complete your project:

---

## TASK: Complete SpringVox Solution Limited Project - Final Cleanup & Structure

### PROJECT OVERVIEW

Full-stack Next.js + Node.js/Express project for SpringVox Solution Limited landing page + Knowledge AI product.

**Current Structure:**

```
SpringVox Solution Limited/
├── frontend/          (Next.js app)
├── backend/           (Express.js API)
├── node_modules/
├── .next/
├── .env.local.example
├── .gitignore
├── eslint.config.mjs
├── next.config.js
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
```

---

## REQUIREMENTS (PRIORITY ORDER)

### 1. CODE CLEANUP (CRITICAL)

- [ ] Remove all `\u2014` (em-dashes) and unnecessary symbols from frontend code
- [ ] Remove all comments with dashes like `// ————————`
- [ ] Clean up all component files - remove console.logs, dead code
- [ ] Fix any TypeScript/ESLint errors
- [ ] Ensure no "vibe coding" - all code is production-ready
- [ ] Remove any placeholder text or TODO comments (unless critical)
- [ ] Format all files consistently (Prettier/ESLint)

**Files to check:**

- `frontend/src/components/*.tsx`
- `frontend/src/app/*.tsx`
- `frontend/src/pages/*.ts`
- All utility files

### 2. FILE STRUCTURE FIX

- [ ] Organize folder structure properly:

  ```
  frontend/
  ├── src/
  │   ├── app/
  │   │   ├── layout.tsx
  │   │   ├── page.tsx
  │   │   └── [routes]/
  │   ├── components/
  │   │   ├── Navigation.tsx
  │   │   ├── Hero.tsx
  │   │   ├── Products.tsx
  │   │   ├── Services.tsx
  │   │   ├── ContactForm.tsx
  │   │   ├── ConsultationBooking.tsx
  │   │   ├── AdminDashboard.tsx
  │   │   └── [other components]/
  │   ├── utils/
  │   │   ├── analytics.ts
  │   │   └── api.ts
  │   ├── styles/
  │   │   └── globals.css
  │   ├── types/
  │   │   └── index.ts
  │   └── config/
  │       └── constants.ts
  ├── public/
  │   ├── robots.txt
  │   ├── sitemap.xml
  │   └── images/
  ├── package.json
  ├── tsconfig.json
  ├── next.config.js
  ├── tailwind.config.ts
  ├── postcss.config.mjs
  └── README.md
  ```

- [ ] Ensure backend folder structure:
  ```
  backend/
  ├── server.js
  ├── .env.local
  ├── .gitignore
  ├── package.json
  └── [other backend files]
  ```

### 3. README UPDATE

- [ ] Update main README.md with:
  - Clear project overview
  - Tech stack (Next.js, Express, MongoDB, Tailwind, Framer Motion, Three.js)
  - Installation instructions
  - Setup guide (frontend + backend)
  - API endpoints documentation
  - Deployment instructions
  - Contributing guidelines
  - License

**README should include:**

````markdown
# SpringVox Solution Limited

## Overview

[1-2 sentence description]

## Tech Stack

- Frontend: Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion, Three.js
- Backend: Node.js, Express, MongoDB, Nodemailer
- Deployment: Vercel (Frontend), Railway/Render (Backend)

## Quick Start

### Frontend

```bash
cd frontend
npm install
npm run dev
```
````

### Backend

```bash
cd backend
npm install
npm run dev
```

## Environment Variables

### Frontend (.env.local)

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Backend (.env.local)

```
MONGODB_URI=
EMAIL_SERVICE=
EMAIL_USER=
EMAIL_PASSWORD=
```

## API Endpoints

- POST /api/contact
- POST /api/consultation
- GET /api/testimonials

## Project Structure

[Document structure]

## Deployment

[Instructions for both frontend and backend]

````

### 4. ICON & ASSET VERIFICATION
- [ ] Verify all emoji/icons display correctly in all components
- [ ] Check all Lucide React icons are properly imported (if used)
- [ ] Ensure no broken image references
- [ ] Verify 3D element (Three.js) renders properly
- [ ] Test responsive design on mobile/tablet/desktop

### 5. BACKEND INTEGRATION CHECK
- [ ] Verify frontend API calls point to correct backend URL
- [ ] Ensure CORS is properly configured
- [ ] Check all form submissions connect to backend
- [ ] Verify environment variables are set correctly
- [ ] Test contact form submission end-to-end
- [ ] Test consultation booking end-to-end

### 6. CONFIG FILES VERIFICATION
- [ ] Review `next.config.js` - ensure all settings correct
- [ ] Review `tsconfig.json` - ensure proper paths configured
- [ ] Review `tailwind.config.ts` - all custom colors/utilities present
- [ ] Review `package.json` - all dependencies correct, no duplicates
- [ ] Update `.env.local.example` with all required variables
- [ ] Ensure `.gitignore` includes: node_modules, .env.local, .next, dist

### 7. SECURITY & PERFORMANCE
- [ ] Remove all exposed API keys/secrets from code
- [ ] Ensure .env.local is in .gitignore
- [ ] Verify no console.logs with sensitive data
- [ ] Check for security headers (already in next.config.js)
- [ ] Optimize all images (use Next.js Image component)
- [ ] Ensure 3D scene doesn't slow down page load

### 8. FINAL QUALITY CHECK
- [ ] No TypeScript errors: `tsc --noEmit`
- [ ] No ESLint errors: `npm run lint`
- [ ] Format all files: `npx prettier --write .`
- [ ] Test all links work (internal + external)
- [ ] Test all buttons/CTAs work
- [ ] Test form validation
- [ ] Test responsive design (mobile-first)
- [ ] Verify analytics events fire correctly
- [ ] Test on different browsers (Chrome, Firefox, Safari)

---

## DELIVERABLES

After completion, ensure:

✅ **Code Quality**
- All files formatted and clean
- No unused imports or variables
- No console.logs except for critical errors
- TypeScript strict mode passes
- ESLint no errors/warnings

✅ **Structure**
- Organized folder hierarchy
- Clear separation of concerns
- Reusable components
- Proper type definitions

✅ **Documentation**
- Updated README with clear instructions
- API documentation
- Environment variable guide
- Deployment instructions

✅ **Functionality**
- All pages load without errors
- All forms submit to backend
- All animations/3D elements work
- Responsive on all devices
- Analytics tracking works

✅ **Backend Ready**
- Frontend properly connected to backend
- All API endpoints functional
- Error handling in place
- Loading states implemented

---

## IMPORTANT NOTES

1. **No Vibe Coding**: Every function should be clear and purposeful
2. **Production Ready**: This code will be deployed to production
3. **Type Safe**: All TypeScript types must be correct
4. **Clean Code**: Follow the principle of least surprise
5. **Well Documented**: Code comments only where necessary (code should be self-documenting)

---

## SUCCESS CRITERIA

When complete, the project should:

✅ Have zero build errors
✅ Have zero runtime errors
✅ Have clean, readable code
✅ Have comprehensive README
✅ Be ready for production deployment
✅ Have frontend + backend fully integrated
✅ Pass all functionality tests

---

## FILES TO MODIFY/CREATE

**Create/Update:**
- README.md (comprehensive)
- .env.local.example (complete)
- .gitignore (comprehensive)

**Clean Up:**
- All .tsx files in components/
- All .ts files in utils/
- All config files

**Verify:**
- next.config.js
- tsconfig.json
- tailwind.config.ts
- package.json

---

## DO NOT

❌ Change functionality - only clean/organize
❌ Add new features - only complete what's started
❌ Change API structure - keep it as designed
❌ Rewrite components - optimize existing ones only
❌ Add unnecessary dependencies

---

## GIT READY

After completion:
```bash
git add .
git commit -m "refactor: clean up project structure and finalize code"
git push origin main
````

---

## TIMELINE

Expected completion: **1-2 hours**

Priority order:

1. Code cleanup (30 min)
2. File structure fix (20 min)
3. README update (20 min)
4. Verification & testing (30 min)
5. Final QA (10 min)

---

**READY TO START? Run this command to begin:**

```bash
code .
```

Then follow the priority order above.

Good luck! 🚀
