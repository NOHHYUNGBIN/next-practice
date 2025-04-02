import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.debug("미들웨어 실행중", request.nextUrl.pathname);
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.debug("경로를 리다이렉트함!");
    return NextResponse.redirect(new URL("products", request.url));
  }
}
export const config = {
  matcher: ["/products/:path+"],
};
