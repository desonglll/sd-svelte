// src/routes/+page.ts
import { redirect } from "@sveltejs/kit";

export function load() {
  throw redirect(307, "/sd"); // 307 表示临时重定向
}
