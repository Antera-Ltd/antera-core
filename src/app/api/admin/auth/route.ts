import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    
    // Log authentication attempts for debugging
    console.log('Admin login attempt');
    console.log('ADMIN_PASSWORD exists:', !!process.env.ADMIN_PASSWORD);
    
    if (password === process.env.ADMIN_PASSWORD) {
      const response = NextResponse.json({ 
        success: true,
        message: 'Authentication successful'
      });
      
      // Set authentication cookie with security options
      response.cookies.set('admin_token', 'authenticated', {
        httpOnly: true, // Prevents XSS attacks
        secure: process.env.NODE_ENV === 'production', // HTTPS only in production
        sameSite: 'lax', // Allows cookies across redirects
        path: '/', // Cookie available on all routes
        maxAge: 60 * 60 * 24, // 1 day expiration
      });
      
      return response;
    }

    // Return 401 for invalid password
    return NextResponse.json(
      { error: 'Invalid password' },
      { 
        status: 401,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}