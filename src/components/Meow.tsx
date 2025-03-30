"use client";

import { useEffect, useState } from "react";

export default function Meow() {
  const [text, setText] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://meowfacts.herokuapp.com", {
        next: { revalidate: 0 },
      });
      const data = await res.json();
      setText(data.data[0]);
    }
    fetchData();
  }, []);

  return <article>{text}</article>;
}
