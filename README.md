# Ms. Interdigital Website

Static multi-page website for Ms. Interdigital, prepared for GitHub and Vercel deployment.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Vercel static hosting

## Project Structure

```text
.
├── index.html
├── about.html
├── services.html
├── counseling-therapy.html
├── coaching-mentoring.html
├── educational-products.html
├── affiliate-marketing.html
├── contact.html
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   └── pages/
│   ├── images/
│   └── js/
│       └── main.js
├── vercel.json
└── .gitignore
```

## Local Preview

Run a simple local server from the project root:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/
```

## Deployment

This project is ready for static deployment on Vercel.

### Deploy with Vercel

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Use the default static site settings.
4. Deploy.

No build step is required.

## Notes

- The favicon is stored at `assets/images/msid_favicon.svg`.
- Kean's portrait is stored at `assets/images/kean-dey-foy.png`.
- Affiliate background images are stored in `assets/images/affiliate/`.
- Shared interactions such as the mobile navigation menu live in `assets/js/main.js`.

