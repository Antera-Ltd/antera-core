import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Log middleware checks for debugging
  console.log('Middleware checking path:', path);

  // Protect all /admin/* routes except the login page
  if (path.startsWith('/admin') && path !== '/admin') {
    const token = request.cookies.get('admin_token')?.value;

    console.log('Token exists:', !!token);

    // Redirect to login if not authenticated
    if (!token || token !== 'authenticated') {
      const loginUrl = new URL('/admin', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
}