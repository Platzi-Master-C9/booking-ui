import React, { useState, useEffect } from 'react';
import './styles/load-images.scss';

function LoadImages({housingOptions, setHousingOptions, setNextDisable}) {
  const [previewImages, setpreviewImages] = useState([]);
  const fileTypes = ['image/png', 'image/jpg', 'image/jpeg'];

  const onFileDrop = (e) => {
    if (housingOptions.images.length === 10) return;
    const newImage = e.target.files[0];
    if (newImage) {
      const isValid = fileTypes.includes(newImage.type);
      if (!isValid) return;
      setpreviewImages([
        ...previewImages,
        { id: newImage.name, img: URL.createObjectURL(newImage) },
      ]);
      setHousingOptions({ ...housingOptions, images: [...housingOptions.images, newImage] });
    }
  };

  const removeImage = (imageId) => {
    const imageListRemoved = housingOptions.images.filter((image) => image.name !== imageId);
    const previewImagesRemoved = previewImages.filter((image) => image.id !== imageId);
    setpreviewImages(previewImagesRemoved);
    setHousingOptions({ ...housingOptions, images: imageListRemoved });
  };

  useEffect(() => {
    const housingImages = housingOptions.images.map((image) => ({
      id: image.name,
      img: URL.createObjectURL(image),
    }));
    setpreviewImages(housingImages);
    if (housingOptions.images.length < 5) {
      setNextDisable(true);
    } else {
      setNextDisable(false);
    }
  }, [housingOptions]);

  return (
    <div className="load-images">
      <div className="load-images__input">
        <span className="load-images__input-icon" />
        <h2 className="load-images__input-instruction">
          Arrastra las fotos aquí
        </h2>
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
          <div className="load-images__preview-images-item" key={id}>
            <button type="button" onClick={() => removeImage(id)}>
              X
            </button>
            <img src={img} alt={id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoadImages;
