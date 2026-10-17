This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contact Form Email Notifications

Set `NEXT_PUBLIC_API_URL` to the API base URL to submit Contact form inquiries to the production backend. The form sends `name`, `email`, and a `message` containing the project details to `<API URL>/inquiries`. The default is `https://ashivam-tech.onrender.com/api/v1`. `VITE_API_URL` is not used because this is a Next.js app. Restart the dev server after changing the value; set the same variable in your hosting provider before deploying.

When `NEXT_PUBLIC_API_URL` is unset, inquiries are stored locally in `data/database.json`. To send those local inquiries through Resend:

1. Create a Resend account and API key, then verify a sending domain.
2. In `.env.local`, set `SMTP_PASS` to the API key and `SMTP_FROM_EMAIL` to an address on the verified domain.
3. Keep the SMTP settings as `SMTP_HOST=smtp.resend.com`, `SMTP_PORT=587`, and `SMTP_USER=resend`. Set `CONTACT_RECEIVER_EMAIL` to the inbox that should receive inquiries.
4. Restart the development server after changing environment variables.

Never commit `.env.local` or share the API key. Without complete SMTP settings, inquiries are still saved locally, but email delivery is not enabled.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
