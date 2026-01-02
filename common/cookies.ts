"use server";

import { cookies as NEXTCookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";

export async function setCookies(key: string, val?: string): Promise<void> {
  const cookieStore = await NEXTCookies();

  let userKey = cookieStore.get(key)?.value;

  if (!userKey) {
    userKey = val || uuidv4();
    cookieStore.set(key, userKey, {
      path: "/",
      httpOnly: false,
      sameSite: "lax",
    });
  }
}
