import { useRouter } from "next/router";

export default function favorite() {
  const router = useRouter()
  const ide = JSON.stringify(router.query)

  

  return (
    <div>{ide}</div>
  );}