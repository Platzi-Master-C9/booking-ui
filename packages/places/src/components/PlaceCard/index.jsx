import styles from './Placecard.module.css'

const PlaceCard = (props) => {
  return (
    <>
      <div className={styles.main__container}>
        <div className={styles.image__container}>
          <section className={styles.container__slider}>
            {props.children}
          </section>
        </div>
        <div className={styles.details__container}>
          <div className={styles.card_header}>
            <p>{props.data.title1}</p>
            <img
              src="/places/images/icons8-heart-96 2.svg"
              width={40}
              height={40}
              alt={'HeartIcon'}
            ></img>
          </div>
          <div className={styles.card_body}>
            <h2 className={styles.subtitle__cardbody}>{props.data.title2}</h2>
            <hr className={styles.line}/>
            <h2 className={styles.perks}>{props.data.perks}</h2>
          </div>
          <div className={styles.card__footer}>
            <div className={styles.container_puntuation}>
              <img
                src="/places/images/icons8-star-90 2.svg"
                width={30}
                height={30}
                alt={'StarIcon'}
              ></img>
              <p>{props.data.calification}</p>
              <p>{`( ${props.data.comments} Reseñas) `}</p>
            </div>
            <div className={styles.container__price}>
              <p>{`$${props.data.price} COP `}</p>
              <p>/ noche</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { PlaceCard };
