import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Cookies from "js-cookie";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isAuthenticated() {
  const accessToken = Cookies.get("accessToken");
  // const refreshtoken = Cookies.get("refreshToken");

  if (accessToken) {
    return true;
  }
  return false;
}
