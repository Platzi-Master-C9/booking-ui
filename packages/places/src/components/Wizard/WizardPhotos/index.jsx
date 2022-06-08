import React, { useState, useEffect } from 'react';
import './styles/wizard-photos.scss';
import { usePlaceProvider } from '../../../context/place';

export function Photos() {
  const { placeOptions, setPlaceOptions, setNextDisable } = usePlaceProvider();
  const [previewImages, setpreviewImages] = useState([]);
  const fileTypes = ['image/png', 'image/jpg', 'image/jpeg'];

  const onFileDrop = (e) => {
    if (placeOptions.images.length === 10) return;
    const newImage = e.target.files[0];
    if (newImage) {
      const isValid = fileTypes.includes(newImage.type);
      if (!isValid) return;
      setpreviewImages([
        ...previewImages,
        { id: newImage.name, img: URL.createObjectURL(newImage) },
      ]);
      setPlaceOptions({
        ...placeOptions,
        images: [...placeOptions.images, newImage],
      });
    }
  };

  const removeImage = (imageId) => {
    const imageListRemoved = placeOptions.images.filter((image) => image.name !== imageId);
    const previewImagesRemoved = previewImages.filter((image) => image.id !== imageId);
    setpreviewImages(previewImagesRemoved);
    setPlaceOptions({ ...placeOptions, images: imageListRemoved });
  };

  useEffect(() => {
    const housingImages = placeOptions.images.map((image) => ({
      id: image.name,
      img: URL.createObjectURL(image),
    }));
    setpreviewImages(housingImages);
    if (placeOptions.images.length < 5) {
      setNextDisable(true);
    } else {
      setNextDisable(false);
    }
  }, [placeOptions]);

  return (
    <div className="wizard-photos">
      <div className="wizard-photos__input">
        <span className="wizard-photos__input-icon" />
        <h2 className="wizard-photos__input-instruction">
          Arrastra las fotos aquí
        </h2>
        <span className="wizard-photos__input-images-amount">
          Agrega por los menos 5 fotos
        </span>
        <label className="wizard-photos__input-clic" htmlFor="load-image">
          Sube fotos desde tu dispositivo
          <input
            className="wizard-photos__input-input"
            type="file"
            name="load-image"
            id="load-image"
            accept=".png, .jpg, .jpeg"
            onChange={onFileDrop}
          />
        </label>
      </div>
      <div className="wizard-photos__preview-images">
        {previewImages.map(({ id, img }) => (
          <div className="wizard-photos__preview-images-item" key={id}>
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

export default Photos;
