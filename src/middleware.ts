import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const url = req.nextUrl.clone();

    // Example: Protecting admin routes
    if (url.pathname.startsWith('/admin')) {
        const token = req.cookies.get('auth_token') ? true : false;
        const role = 'admin' // req.cookies.get('user-role');
        console.log("Running on ENV :"+process.env.NODE_ENV);
    

        if (!token) {           
            
            res.cookies.set('auth_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik5hZ2VzaCIsImlhdCI6MTUxNjIzOTAyMn0.5fNqnhO7cp635ihkjPX69ztICOp6oqCT1zB5zstpYz4', {
                path: '/',
                // httpOnly: true, // Ensure the cookie is not accessible by JavaScript
                secure: false,//process.env.NODE_ENV === 'production', // Set to true in production
                sameSite: 'strict', // Helps protect against CSRF attacks
                maxAge: 60 * 60 * 24, // Cookie will expire in 1 day
              });
              console.log('Middleware running for:', req.nextUrl.pathname);
              console.log('Auth Token:', res.cookies.get('auth_token'));
            // Redirect to login if not authenticated
            url.pathname = '/auth/login';
            return NextResponse.redirect(url);
        }       
        if (role?.toString() !== 'admin') {
            // Redirect to forbidden page if not an admin
            url.pathname = '/403';
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

// Configure which routes apply middleware
export const config = {
    matcher: ['/admin/:path*'], // Middleware applies only to `/admin` routes
};
