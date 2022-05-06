import { useRouter } from "next/router";
import Header from "@booking-ui/user-account/src/components/header";
import Footer from "@booking-ui/user-account/src/components/footer";
import styles from  "../../../styles/Favorite.module.scss";

export default function Favorite() {
  const router = useRouter()
  const title = router.query.title
  const photoUrl = router.query.photoUrl
  const favorites = router.query.favorites

  

  return (
    <div>
      <Header />
      <h2 className={styles.paragraph}>{title}</h2>
      <img src={photoUrl}></img>
      <p>{favorites}</p>
      <Footer />
    </div>
  );}