// app/layout.js
import { dir } from 'i18next';
// import { languages } from '../i18n/settings';
import { languages } from '../../i18n/settings';
import './globals.css';

export const metadata = {
  title: 'Dubai Haus',
  description: 'A Real Estate Platform',
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lng} dir="ltr">
      <body>{children}</body>
    </html>
  );
}
