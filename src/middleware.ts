import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { extractBaseColours } from "./utils/colours/extractBaseColours";
import { generateBaseColours } from "./utils/colours/generateBaseColours";
import { makeColoursUrl } from "./utils/colours/makeColoursUrl";

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (pathname === "/generate") {
    const colourParams = searchParams.get("colors");

    if (colourParams && extractBaseColours(colourParams)) {
      return NextResponse.next();
    }

    const baseColours = generateBaseColours();
    const url = makeColoursUrl({
      url: pathname,
      colours: Object.values(baseColours),
    });

    return NextResponse.redirect(new URL(url, request.url));
  }
}

export const config = {
  matcher: "/generate",
};
