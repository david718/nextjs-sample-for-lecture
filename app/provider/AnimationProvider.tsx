"use client";
import { AnimatePresence } from "framer-motion";

export default function AnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AnimatePresence>{children}</AnimatePresence>;
}
