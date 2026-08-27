# Deployment

## Local

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```powershell
npm run build
```

This project is configured for a static Next.js export.

## Recommended publication path

```text
Local VS Code project
        ↓
Git repository
        ↓
GitHub: power-platform-portfolio
        ↓
Vercel
        ↓
Custom domain
```

Before publishing, set your GitHub/LinkedIn profile links in `src/data/profile.ts` and verify that the resume PDF is the version you intend to make public.
