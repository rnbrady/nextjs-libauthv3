"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div>Hello world!</div>
      <div>Count: {count}</div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
      <div>
        Run next dev, load page, increment counter, then edit this file and save
      </div>
      <div>
        This page doed not trigger a full reload when edited as it does not use
        Libauth.
      </div>
      <div>
        The <Link href="/libauth">/libauth</Link> page does use Libauth and does
        trigger a full reload when edited.
      </div>
    </main>
  );
}
