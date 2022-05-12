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
      <div className={styles.bodyContainer}>
        <h2 className={styles.favoriteName}>{title}</h2>
        <img className={styles.photo} src={photoUrl}></img>
        <div className={styles.card}>
          <img className={styles.cardPhoto} src="https://img-co-1.trovit.com/q1OI16cgGE/q1OI16cgGE.1_12.jpg" alt=""></img>
          <div>
            <h1 className={styles.cardTitle}>Lujosa suite en ciudad bolivar</h1>
            <hr></hr>
            <p>El Apartamento amoblado Ciudad Bolivar ofrece alojamiento con balcón en Ciudad Bolívar. Todos los alojamientos disponen de sala de estar con TV de pantalla plana y cocina con microondas y fogones</p>
            <div>
              <p>4.53(15 reseñas)</p>
              <p>$285,040 COP/noche</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.cardPhoto} src="https://img-co-1.trovit.com/q1OI16cgGE/q1OI16cgGE.1_12.jpg" alt=""></img>
          <div>
            <h1 className={styles.cardTitle}>Lujosa suite en ciudad bolivar</h1>
            <hr></hr>
            <p>El Apartamento amoblado Ciudad Bolivar ofrece alojamiento con balcón en Ciudad Bolívar. Todos los alojamientos disponen de sala de estar con TV de pantalla plana y cocina con microondas y fogones</p>
            <div>
              <p>4.53(15 reseñas)</p>
              <p>$285,040 COP/noche</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );}