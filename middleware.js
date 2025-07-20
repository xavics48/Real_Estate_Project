import { NextResponse } from 'next/server';
import { fallbackLng, languages } from './i18n/settings';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  if (languages.some((lng) => pathname.startsWith(`/${lng}`))) return;

  return NextResponse.redirect(
    new URL(`/${fallbackLng}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};
