import {useEffect, useState} from "react";

export default function useFetch(url: string, method: string, data?: any) {
  const [response, setResponse] = useState<any>([])
  const [error, setError] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const action = async () => {
      try {
        setLoading(true)
        var request = await fetch(url, {
          method: method,
          body: data ? JSON.stringify(data) : undefined
        })

        if (!request.ok) {
          throw new Error("error")
        }

        const result = await request.json()
        setResponse(result)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    action()
  }, [url, method, data])

  return [response, error, loading]
}