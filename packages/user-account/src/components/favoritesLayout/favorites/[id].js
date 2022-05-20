import { useRouter } from "next/router";

export default function FavoritePage() {
  const router = useRouter();
  return <div>Favorite #{router.query.id}</div>;
} 