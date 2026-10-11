# Asia Yatra

A responsive React + Vite travel website inspired by the editorial travel layout of the Europe Yatra reference. This is an independent implementation; it does not copy the source site's code.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to Vercel
1. Create a new GitHub repository named `asia-yatra`.
2. Upload these project files to the repository root.
3. In Vercel, choose **Add New → Project**, import the `asia-yatra` repository.
4. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
5. Click **Deploy**. Vercel will provide a live URL; custom domains can be connected in Project Settings → Domains.

## Before taking bookings
- The trip planner currently demonstrates the selection flow only; connect it to an email/CRM/backend to receive enquiries.
- Prices are illustrative starting prices and should be confirmed before publishing.
- Destination photos load from Unsplash over the internet.
