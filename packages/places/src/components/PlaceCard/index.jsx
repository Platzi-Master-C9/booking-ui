import styles from './Placecard.module.css'

const PlaceCard = () => {
  const props = {
    place: {
      id: 1,
      title1: 'Loft en Medellín',
      title2: 'New Loft near Parque de los Pies Des...',
      perks:
        '2 huéspedes · 1 habitación · 1 cama · 1 baño · Wifi · Cocina · Estacionamiento gratuito',
      calification: '4,53',
      comments: '15',
      price: '285,044',
      like: true,
      images: [
        'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      ],
    },
  };
  const defaultImage = [
    'https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  ];
  return (
    <>
      <div className={styles.main__container}>
        <div className={styles.image__container}>
          <section className={"image__container-slider"}>
            <img width={291} height={260} src={defaultImage} alt="" />
          </section>
        </div>
        <div className={styles.details__container}>
          <div className={styles.card_header}>
            <p>{props.place.title1}</p>
            <img
              src="https://cdn-icons-png.flaticon.com/128/4643/4643982.png"
              width={40}
              height={40}
              alt={'HeartIcon'}
            ></img>
          </div>
          <div className={styles.card_body}>
            <h2 className={styles.subtitle__cardbody}>{props.place.title2 || 'titulo 2'}</h2>
            <hr className={styles.line}/>
            <h2 className={styles.perks}>{props.place.perks || 'perks'}</h2>
          </div>
          <div className={styles.card__footer}>
            <div className={styles.container_puntuation}>
              <img
                src="https://cdn-icons.flaticon.com/png/128/5249/premium/5249357.png?token=exp=1649738007~hmac=0f08c450bf2d729a86453927ad7d18f7"
                width={30}
                height={30}
                alt={'StarIcon'}
              ></img>
              <p>{props.place.calification || 'califi'}</p>
              <p>{`( ${props.place.comments || 'comments'} Reseñas) `}</p>
            </div>
            <div className={styles.container__price}>
              <p>{`$${props.place.price || 'price'} COP `}</p>
              <p>/ noche</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { PlaceCard };
