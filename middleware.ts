import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Get the current session (user)
  const { data: { session } } = await supabase.auth.getSession();

  // Define protected routes
  const protectedRoutes = ["/gallery", "/entry"];

  // Redirect to login if not authenticated
  if (!session && protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}
