
<p align="center">
    <a href="https://github.com/Antera-Ltd/antera-core"><img src="https://img.shields.io/badge/status-active-brightgreen.svg"></a>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16-000000.svg"></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-61DAFB.svg"></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.x-3178C6.svg"></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind-4-38B2AC.svg"></a>
    <a href="https://github.com/Antera-Ltd/antera-core/graphs/contributors"><img src="https://img.shields.io/github/contributors/Antera-Ltd/antera-core?color=blue"></a>
    <a href="https://github.com/Antera-Ltd/antera-core/stargazers"><img src="https://img.shields.io/github/stars/Antera-Ltd/antera-core.svg?logo=github"></a>
    <img src="https://visitor-badge.laobi.icu/badge?page_id=Antera-Ltd.antera-core" alt="visitors"/>   
</p>

![Banner](https://capsule-render.vercel.app/api?type=venom&height=200&color=0:FA520F,100:000000&text=Antera%20Core&textBg=false&desc=&descAlign=75&fontAlign=50&descAlignY=70&fontColor=ffffff)

<p align="center">
    <strong>Advanced Neural Technologies & Engineering Research Agency</strong>
</p>

<h3>🚀 Quick Links</h3>

<div align="left">
    <a href="https://antera.co.tz"><img src="https://img.shields.io/badge/Visit%20Antera-00A98F?style=flat-square&logo=vercel&logoColor=white" alt="Visit Antera"></a>
    <a href="mailto:info@antera.co.tz"><img src="https://img.shields.io/badge/Contact%20Us-30302f?style=flat-square&logo=gmail" alt="Contact"></a>
    <a href="https://github.com/Antera-Ltd/antera-core/issues"><img src="https://img.shields.io/badge/Report%20Bug-30302f?style=flat-square&logo=github" alt="Report Bug"></a>
    <a href="https://github.com/Antera-Ltd/antera-core/discussions"><img src="https://img.shields.io/badge/Discussions-30302f?style=flat-square&logo=github" alt="Discussions"></a>
</div>

<br>

<p align="center">
    <img src="src/assets/shot.png" alt="Antera Core Screenshot" width="800">
</p>

## Getting Started

The Company's Website Landing page has been migrated from a plain React (Vite) application to Next.js.

First, install dependencies:

```bash
npm install --legacy-peer-deps
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Blog Management System
Antera Core now includes a comprehensive blog management system with:
- **Admin Dashboard**: Stat tracking, post management, and subscriber lists.
- **Rich Text Editor**: TipTap powered editor with support for media and markdown.
- **AI Generation**: DeepSeek integration for generating post drafts and SEO metadata.
- **Newsletter**: Brevo-integrated subscription system.
- **I18n**: Fully translated blog interface (EN, SW, PL).

### Setup Instructions
1. Run `schema/schema.sql` in your Supabase SQL Editor.
2. Create a public bucket named `blog-images` in Supabase Storage.
3. Configure environment variables:
   - `ADMIN_PASSWORD`: For dashboard access.
   - `BREVO_API_KEY`: For newsletter functionality. (Note: If you use Supabase Edge Functions for backend logic, ensure this key is also added to Supabase secrets using `supabase secrets set BREVO_API_KEY=your_key`).
   - `NEXT_PUBLIC_SUPABASE_URL` & `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
   - `NEXT_PUBLIC_CHAT_API_URL`: For AI features (typically points to a Supabase Edge Function).

## Product Roadmap
Explore our vision for the Tanzanian market in [products.md](products.md), featuring 10 high-impact technology products designed for local growth.

## Build

To create a production build:

```bash
npm run build
```

> **Warning:** This software, Antera Core is protected under Apache 2.0 License. Violation of terms (including removing copyright notices or patent retaliation) will result in legal action. Read [LICENSE](LICENSE).
---