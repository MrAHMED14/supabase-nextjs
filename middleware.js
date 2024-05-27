import { NextResponse } from 'next/server';
import { createClient } from './lib/middlewareHelper';

export async function middleware(request) {
    const { supabase, response } = createClient(request);
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user && request.nextUrl.pathname.startsWith('/notes')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    if (user && request.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/', request.url));
    }
    return response;
}

