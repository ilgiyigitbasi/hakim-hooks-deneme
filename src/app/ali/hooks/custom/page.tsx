"use client"

import useTextChange from "@/app/ali/hooks/custom/useTextChange";
import useFetch from "@/app/ali/hooks/custom/useFetch";
import {useEffect} from "react";

export default function AliCustomHook() {
  const [text, changeValue] = useTextChange("custom hook change")

  let response: Todos[], error: any, loading: boolean;
  [response, error, loading] = useFetch("https://jsonplaceholder.typicode.com/todos", "get");
  return (
    <>
      <p>{text}</p>
      <button onClick={changeValue}>Custom Hook</button><br/>
      {loading ? 'Yükleniyor...' : response.map((todo, key) => {
        return <div key={key}>
          <p>{todo.title }</p>
        </div>
      })}
    </>
  )
}