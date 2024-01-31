"use client"

import {useEffect, useRef} from "react";

export default function AliRefHook() {
  const text = useRef<HTMLParagraphElement | null>(null);

  const onClick = () => {
    if (text.current) {
      text.current.textContent = 'New Deneme';
    }
  }

  return (
    <div>
      <p ref={text}>Deneme</p>
      <button onClick={onClick}>Change</button>
    </div>
  );
}