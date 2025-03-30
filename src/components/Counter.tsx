"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  console.debug("클라이언트");
  return (
    <>
      <p>카운트 : {count}</p>
      <button onClick={() => setCount((num) => num + 1)}>카운트증가</button>
    </>
  );
}
