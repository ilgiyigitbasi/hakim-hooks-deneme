import {useState} from "react";

export default function useTextChange(text: string): [string, () => void]  {
  const [value, setValue]  = useState<string>("first")
  const changeValue = () => setValue(text)
  return [value, changeValue]
}