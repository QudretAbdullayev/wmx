"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Providers({ children }) {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return <>{children}</>;
}
