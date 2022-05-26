import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "@booking-ui/user-account/src/components/header";
import Footer from "@booking-ui/user-account/src/components/footer";
import styles from  "../../../styles/Favorite.module.scss";
import { withRouter } from "react-router-dom";


export default function Favorite() {
  const router = useRouter()

  const [favorites, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://demo2545346.mockable.io/');
      console.log("response: ",response)
      const json = await response.json();
      console.log("json: ",json)
      setData(json.favorites);
    };
    fetchData();
  }, [setData]);

  if (typeof window !== "undefined") {
    let path = window.location.pathname
    const pathSplited = path.split("/")[2]
  }


 

  return (
    <div>
      <Header />
      <div className={styles.body}>
        <div className={styles.container}>
          <h2 className={styles.name}>{favorites.name}</h2>
          <div className={styles.properties}>
            {favorites.filter(favorite => favorite.id == pathSplited).map(favorite =>(
              <div key={favorite.id}>
                {favorite.favorites.map (fav=> (
                  <div className={styles.card}>
                  <img className={styles.photo} src={fav.photo} alt=""></img>
                  <div className={styles.content}>
                    <h1 className={styles.title}>{fav.propertyName}</h1>
                    <hr></hr>
                    <p>{fav.description}</p>
                    <div>
                      <p>{fav.stars}(15 reseñas)</p>
                      <p>${fav.price} COP/noche</p>
                    </div>
                  </div>
                </div>

                ))}
            
            </div>
))}

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );}