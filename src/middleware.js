// // middleware.js

import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;
  if (
    pathname === "/home" ||
    pathname === "/calls" ||
    pathname === "/" ||
    pathname === "/explore" ||
    /^\/explore\/[^/]+$/.test(pathname) ||
    /^\/interview\/.+$/.test(pathname)
  )
    return NextResponse.next();
  //   console.log(pathname);

  //   const protectedRoutes = ["/dashboard", "/checkout"];

  //   if (protectedRoutes.some((route) => pathname.startsWith(route)) && !token) {
  // const loginUrl = new URL(`/login`, request.url);
  // loginUrl.searchParams.set("redirect", pathname);
  // return NextResponse.redirect(loginUrl);
  //   }
  const adminProtectedRoutes = [
    "/call-details",
    "/calls",
    "/engine",
    "/faqs",
    "/jobs",
    "/questions",
    "/ventures",
  ];

  if (!token) {
    if (adminProtectedRoutes.some((route) => pathname.startsWith(route))) {
      return NextResponse.redirect(new URL("/admin-signin", request.url));
    } else {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }

  // if (pathname.startsWith("/login") && token) {
  //   return NextResponse.redirect(new URL("/dashboard", request.url));
  // }

  return NextResponse.next();
}

// export const config = {
//   matcher: ["*"],
// };

export const config = {
  matcher: ["/((?!signin|signup|admin-signin|_next|api|favicon.ico).*)"],
};
