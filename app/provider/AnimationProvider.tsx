"use client";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isFirstMounted, setIsFirstMounted] = useState(false);

  useEffect(() => {
    setIsFirstMounted(true);
  }, []);

  return <AnimatePresence initial={isFirstMounted}>{children}</AnimatePresence>;
}
