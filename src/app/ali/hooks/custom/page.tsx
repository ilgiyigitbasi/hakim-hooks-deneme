"use client"

import useTextChange from "@/app/ali/hooks/custom/useTextChange";

export default function AliCustomHook() {
  const [text, changeValue] = useTextChange("custom hook change")

  return (
    <>
      <p>{text}</p>
      <button onClick={changeValue}>Custom Hook</button>
    </>
  )
}