# SHORT OPENCODE PROMPT - Paste This Into Terminal/OpenCode Chat

---

## FINAL PROJECT CLEANUP - SpringVox Solution Limited

**Task**: Clean, organize, and finalize the entire SpringVox project for production.

### CRITICAL FIXES (DO THESE FIRST)

1. **Remove all em-dashes and symbols**
   - Find and remove: `\u2014`, `————`, `// ————————`
   - Clean all component files: `frontend/src/components/*.tsx`
   - Remove unnecessary comment lines

2. **Fix Code Quality**
   - Remove all console.logs (keep only critical errors)
   - Remove dead code and unused imports
   - Fix all TypeScript errors: `tsc --noEmit`
   - Format everything: `npx prettier --write .`
   - Run linter: `npm run lint` (fix all errors)

3. **Organize File Structure**

   ```
   frontend/src/
   ├── app/ (Next.js pages)
   ├── components/ (all React components)
   ├── utils/ (helper functions)
   ├── types/ (TypeScript interfaces)
   ├── config/ (constants)
   └── styles/ (CSS files)
   ```

4. **Update README.md**
   - Add: Project overview, tech stack, installation steps
   - Add: Environment variables guide
   - Add: API endpoints documentation
   - Add: Deployment instructions for both frontend + backend
   - Keep it SHORT and CLEAR

5. **Update .env.local.example**
   - List ALL required environment variables
   - Add comments explaining each one
   - Example:

     ```
     # Frontend
     NEXT_PUBLIC_API_URL=http://localhost:5000

     # Backend
     MONGODB_URI=your_mongodb_connection
     EMAIL_SERVICE=gmail
     EMAIL_USER=your_email
     EMAIL_PASSWORD=your_password
     ```

6. **Verify Integration**
   - Check frontend API calls point to backend correctly
   - Test contact form → submits to backend ✓
   - Test consultation form → submits to backend ✓
   - Verify error handling works

7. **Final Checks**
   - No broken links
   - All icons/emojis display
   - 3D element (Three.js) renders
   - Mobile responsive works
   - All animations smooth

### CLEANUP CHECKLIST

- [ ] Remove all `\u2014` and dashes
- [ ] Remove console.logs and dead code
- [ ] Fix TypeScript errors
- [ ] Format code (Prettier)
- [ ] Run linter (fix all)
- [ ] Organize folder structure
- [ ] Update README (comprehensive but short)
- [ ] Update .env.local.example
- [ ] Verify backend integration
- [ ] Test all functionality
- [ ] Verify on mobile/desktop

### WHAT NOT TO CHANGE

❌ Don't change functionality
❌ Don't add new features
❌ Don't rewrite components (only optimize)
❌ Don't change API structure
❌ Don't add unnecessary dependencies

### SUCCESS = WHEN:

✅ Zero build errors
✅ Zero runtime errors
✅ Clean, production-ready code
✅ Frontend ↔ Backend fully integrated
✅ README is clear and complete
✅ All tests pass

---

**That's it. Clean it up and we're done! 🚀**
