"use client";

import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  return <button onClick={handleClick}>Go To Home</button>;
}
