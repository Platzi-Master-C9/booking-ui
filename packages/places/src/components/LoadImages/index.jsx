import React, { useState, useEffect } from 'react';
import './styles/load-images.scss';

function LoadImages() {
  const [imageList, setImageList] = useState([]);
  const [previewImages, setpreviewImages] = useState([]);
  const fileTypes = ['image/png', 'image/jpg', 'image/jpeg'];

  const onFileDrop = (e) => {
    if (imageList.length === 10) return;
    const newImage = e.target.files[0];
    if (newImage) {
      const isValid = fileTypes.includes(newImage.type);
      if (!isValid) return;
      setImageList([...imageList, newImage]);
      setpreviewImages([
        ...previewImages,
        { id: newImage.name, img: URL.createObjectURL(newImage) },
      ]);
    }
  };

  return (
    <div className="load-images">
      <div className="load-images__input">
        <span className="load-images__input-icon" />
        <h4 className="load-images__input-instruction">
          Arrastra las fotos aquí
        </h4>
        <span className="load-images__input-images-amount">
          Agrega por los menos 5 fotos
        </span>
        <label className="load-images__input-clic" htmlFor="load-image">
          Sube fotos desde tu dispositivo
          <input
            className="load-images__input-input"
            type="file"
            name="load-image"
            id="load-image"
            accept=".png, .jpg, .jpeg"
            onChange={onFileDrop}
          />
        </label>
      </div>
      <div className="load-images__preview-images">
        {previewImages.map(({ id, img }) => (
          <img
            className="load-images__preview-images-item"
            key={id}
            src={img}
            alt={id}
          />
        ))}
      </div>
    </div>
  );
}

export default LoadImages;
