"use client";

import { useState } from "react";

export default function ClientComponent() {
  const [value, setValue] = useState(2024);
  return (
    <div>
      ClientComponent
      <button
        onClick={() => {
          console.log("@@@test string@@@");
          setValue((prev) => (prev += 1));
        }}
      >
        {value}
      </button>
    </div>
  );
}
