import React from 'react';
import styles from './cardCarousel.module.css';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import { IconContext } from 'react-icons';

function CardCarousel({ images }) {
  const [current, setCurrent] = React.useState(0);

  const imgs = [
    {
      src: 'https://media.istockphoto.com/photos/luxurious-beautiful-modern-villa-with-front-yard-garden-at-sunset-picture-id1283532082?b=1&k=20&m=1283532082&s=170667a&w=0&h=KxQ3cfMs-Xi7FL2TXfrgFbi9pwtBOdjSEc4-ufAeVlo=',
    },
    {
      src: 'https://i.pinimg.com/originals/29/8d/f1/298df1cac168231b7572f2b4e75a269c.jpg',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQukxClvNB07ZM991lmNo_pdpixKIC8QcYFz1GWtcBMJ3uc3Bgo93btNeoYd4QWpFqJA&usqp=CAU',
    },
  ];

  // const dots = Array.from({length: place.images.length)

  function nextSlide() {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  function prevSlide() {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function setImg(index) {
    setCurrent(index);
  }

  return (
    <div className={styles.slider}>
      <div className={styles.sliderControls}>
        <IconContext.Provider value={{ size: '25' }}>
          <IoIosArrowDropleft onClick={prevSlide} />
          <IoIosArrowDropright onClick={nextSlide} />
        </IconContext.Provider>
      </div>

      <div className={styles.sliderDots}>
        {Array.from({ length: images.length }).map((item, index) => {
          return (
            <div
              key={index}
              className={index === current ? styles.dotActive : styles.dot}
              onClick={() => setImg(index)}
            />
          );
        })}
      </div>

      <div className={styles.sliderImage}>
        <img src={images[current]} />
      </div>
    </div>
  );
}

export { CardCarousel };
