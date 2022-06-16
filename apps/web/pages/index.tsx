import Link from "next/link";
import { useState } from "react";
import { Button } from "ui";
import { sum } from "utils";

export default function Web() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  return (
    <div>
      <h1>Web</h1>

      <input type="number" onChange={(e) => setA(e.target.value)} />
      <input type="number" onChange={(e) => setB(e.target.value)} />

      <p>Hey, tricky question</p>
      <p>
        How much is {a} + {b}?
      </p>
      <p>Maybe {sum(Number(a), Number(b))}</p>

      <Link href={"/login"}>Login</Link>
    </div>
  );
}
