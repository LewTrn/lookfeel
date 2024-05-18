"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
    router.refresh();
  }, [router]);

  return null;
}
