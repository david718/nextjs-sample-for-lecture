"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  NavigationDirection,
  useRouterWrapper,
} from "./provider/RouterWrapperProvider";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { direction } = useRouterWrapper();

  return (
    <div className="flex relative">
      <motion.div
        key={pathname}
        custom={direction}
        variants={{
          enter: (direction: NavigationDirection) => ({
            x: direction === "forward" ? "100vw" : "-100vw",
          }),
          center: {
            x: 0,
          },
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
          center: {
            x: 0,
          },
          exit: (direction: NavigationDirection) => ({
            x: direction === "forward" ? "-100vw" : "100vw",
          }),
        }}
        initial={"center"}
        animate={"exit"}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: "100vw",
        }}
      >
        {"caching page"}
      </motion.div>
    </div>
  );
}
