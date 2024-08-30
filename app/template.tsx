"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  NavigationDirection,
  useRouterWrapper,
} from "./provider/RouterWrapperProvider";
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const { direction } = useRouterWrapper();
  console.log("🚀 ~ Template ~ direction:", direction);

  return (
    <div className="flex relative">
      <motion.div
        key={pathname}
        custom={direction}
        variants={{
          enter: (direction: NavigationDirection) => ({
            x: direction === "forward" ? "100vw" : "-100vw",
          }),
          center: (direction: NavigationDirection) => ({
            x: 0,
          }),
        }}
        initial={"enter"}
        animate={"center"}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {children}
      </motion.div>

      <motion.div
        key={"prev cache page"}
        custom={direction}
        variants={{
          enter: {
            x: 0,
          },
          center: (direction: NavigationDirection) => ({
            x: direction === "forward" ? "-100vw" : 0,
          }),
          exit: {
            x: "100vw",
          },
        }}
        initial={direction === "forward" ? "enter" : "center"}
        animate={direction === "forward" ? "center" : "exit"}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: "100vw",
        }}
      >
        {"prev cache image page"}
      </motion.div>
    </div>
  );
}
