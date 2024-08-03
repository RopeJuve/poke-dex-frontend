import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"
 
export function ProgressDemo({ value }) {
  const [progress, setProgress] = useState(1)
 
  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500)
    return () => clearTimeout(timer)
  }, [])
 
  return <Progress value={progress} className="w-[60%]" />
}