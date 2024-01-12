"use client";

import { useRouter } from "next/navigation";
import Main from "../_component/Main";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();
  // router.replace("/i/flow/login");
  useEffect(() => {
    router.replace("/i/flow/login");
  }, []);
  return <Main />;
}
