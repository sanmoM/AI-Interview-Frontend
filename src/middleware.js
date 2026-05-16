import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;
  if (
    pathname === "/home" ||
    pathname === "/calls" ||
    pathname === "/" ||
    pathname === "/explore" ||
    pathname === "/not-found" ||
    /^\/explore\/[^/]+$/.test(pathname) ||
    /^\/chat\/[^/]+$/.test(pathname) ||
    /^\/interview\/.+$/.test(pathname)
  )
    return NextResponse.next();

  const adminProtectedRoutes = [
    "/call-details",
    "/calls",
    "/engine",
    "/faqs",
    "/jobs",
    "/questions",
    "/ventures",
    "/venture-profile",
    "/pricing",
  ];

  const adminRegex = new RegExp(`^(${adminProtectedRoutes.join("|")})$`);

  if (!token) {
    if (adminRegex.test(pathname)) {
      return NextResponse.redirect(new URL("/admin-signin", request.url));
    } else {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }
}

export const config = {
  matcher: [
    "/((?!signin|signup|admin-signin|_next|api|favicon.ico|images|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.svg$|.*\\.webp$).*)",
  ],
};
