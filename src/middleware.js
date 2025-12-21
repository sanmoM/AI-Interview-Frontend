// // middleware.js

import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;
  //   console.log(pathname);

  //   const protectedRoutes = ["/dashboard", "/checkout"];

  //   if (protectedRoutes.some((route) => pathname.startsWith(route)) && !token) {
  // const loginUrl = new URL(`/login`, request.url);
  // loginUrl.searchParams.set("redirect", pathname);
  // return NextResponse.redirect(loginUrl);
  //   }
  if (!token) {
    return NextResponse.redirect(new URL("/signin", request.url));
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
  matcher: ["/((?!signin|signup|_next|api|favicon.ico).*)"],
};
