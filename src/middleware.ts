import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {
  return NextResponse.rewrite(new URL("/users", req.url));
}

export const config = {
  matcher: "/about",
};
