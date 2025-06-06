"use client";

import { instantiateSha256 } from "@bitauth/libauth/build/lib/crypto/sha256";
import { binToHex } from "@bitauth/libauth/build/lib/format/hex";
import Link from "next/link";
import { useState } from "react";

const sha256 = await instantiateSha256();

export default function Home() {
  const hash1 = sha256.final(
    sha256.update(sha256.init(), new TextEncoder().encode("Hello world!"))
  );

  const [count, setCount] = useState(0);

  return (
    <main>
      <div>Hello world!</div>
      <div>{binToHex(hash1)}</div>
      <div>Count: {count}</div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
      <div>
        Run next dev, load page, increment counter, then edit this file and save
      </div>
      <div>This page triggers a full reload due to its use of Libauth.</div>
      <div>
        The{" "}
        <Link href="/" className="text-blue-500">
          homepage
        </Link>{" "}
        does not use Libauth and does not trigger a full reload.
      </div>
    </main>
  );
}
