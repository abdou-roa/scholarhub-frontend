// middleware/auth.js
import { isAuthenticated } from '../../lib/utils/auth';
import { NextResponse } from 'next/server';

export function middleware(req) {
  const isUserAuthenticated = isAuthenticated();

  if (!isUserAuthenticated && !req.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect('/auth/login');
  }

  return NextResponse.next();
}
