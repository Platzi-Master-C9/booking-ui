import { useRef } from 'react';
import styles from './Slider.module.css';

const Slider = (props) => {
  const sliderImages = props.sliderImages;
  const velocidad = 300; // a posible env/config vble in he future of monorepo
  const slideshow = useRef(null);

  const next = () => {
    if (slideshow.current.children.length > 0) {
      const primerElemento = slideshow.current.children[0];
      slideshow.current.style.transition = `${velocidad}ms ease-out all`;
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transicion = () => {
        slideshow.current.style.transition = 'none';
        slideshow.current.style.transform = `translateX(0)`;
        slideshow.current.appendChild(primerElemento);
        slideshow.current.removeEventListener('transitionend', transicion);
      };
      slideshow.current.addEventListener('transitionend', transicion);
    }
  };

  const before = async () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );
      slideshow.current.style.transition = 'none';
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      await setTimeout(() => {
        slideshow.current.style.transition = `${velocidad}ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  return (
    <div className={styles.main__container}>
      <div className={styles.slider__container} ref={slideshow}>
        {sliderImages.map((image) => (
          <div className={styles.slide} key={image}>
            <a>
              <img
                className={styles.image__container}
                alt="image"
                src={image}
                width={291}
                height={260}
                objectfit={'cover'}
              />
            </a>
          </div>
        ))}
      </div>
      <div className={styles.slider__control}>
        <button className={styles.arrow_rigth} onClick={before}>
          <div className={styles.arrow_background}>
            <img
              alt="lArrow"
              src={'/places/images/icons8-expand-arrow-96 7.svg'}
              height={40}
              width={40}
            />
          </div>
        </button>
        <button onClick={next} className={styles.arrow__left}>
          <div className={styles.arrow_background}>
            <img
              alt="rArrow"
              src={'/places/images/icons8-expand-arrow-96 7.svg'}
              height={40}
              width={40}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export { Slider };
