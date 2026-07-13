# Ms. Interdigital Website

Next.js website for Ms. Interdigital, prepared for Vercel deployment.

## Tech Stack

- Next.js
- React
- TypeScript
- next-intl
- Vercel

## Project Structure

```text
.
├── src/
│   ├── app/
│   ├── components/
│   ├── data/
│   └── i18n/
├── messages/
├── public/
│   └── assets/
├── package.json
├── next.config.mjs
├── vercel.json
└── .gitignore
```

## Local Preview

Use Node.js 20.9.0 or newer, then install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Then open:

```text
http://127.0.0.1:3000/
```

## Deployment

This project is ready for Next.js deployment on Vercel.

### Deploy with Vercel

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Use the Next.js framework preset.
4. Deploy.

Vercel should run `npm run build` with Node.js 20.9.0 or newer.

## Notes

- The favicon is stored at `assets/images/msid_favicon.svg`.
- Kean's portrait is stored at `assets/images/kean-dey-foy.png`.
- Affiliate background images are stored in `assets/images/affiliate/`.
- Shared interactions such as the mobile navigation menu live in `assets/js/main.js`.
