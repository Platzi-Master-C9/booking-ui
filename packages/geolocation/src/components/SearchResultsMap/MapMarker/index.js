import React from 'react';
import styles from './mapMarker.module.css';
import { MarkerCard } from '../MarkerCard';
import { OutsideAlerter } from './useOutsideAlerter';

function MapMarker({ text, place }) {
  const [modal, setModal] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);

  function _toggleClick() {
    setModal((prev) => !prev);
    !clicked ? setClicked(true) : '';
  }

  return (
    <>
      <div
        className={clicked ? styles.markerSelected : styles.marker}
        onClick={_toggleClick}
      >
        <p className={styles.markerPrice}>{text}</p>
      </div>
      {modal && (
        <OutsideAlerter setState={setModal}>
          <MarkerCard place={place} />
        </OutsideAlerter>
      )}
    </>
  );
}

export { MapMarker };
