import React, { useState, useEffect } from 'react';
import './styles/enter-address.scss';

function EnterAddress({ housingOptions, setHousingOptions, setNextDisable }) {
  const [street, setStreet] = useState(housingOptions.address.street);
  const [city, setCity] = useState(housingOptions.address.city);
  const [state, setState] = useState(housingOptions.address.state);
  const [zipcode, setZipcode] = useState(housingOptions.address.zipcode);
  const [country, setCountry] = useState(housingOptions.address.country);
  const availableCountries = [
    { code: 'MX', value: 'México' },
    { code: 'CO', value: 'Colombia' },
    { code: 'CL', value: 'Chile' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setHousingOptions({
      ...housingOptions,
      address: {
        street,
        city,
        state,
        zipcode,
        country,
      },
    });
    setNextDisable(false);
  };

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((response) => response.json())
      .then((data) => setCountry(data.country_code))
      .catch((error) => error && setCountry(availableCountries[0]));
  }, []);

  useEffect(() => {
    Object.keys(housingOptions.address).forEach((key) => {
      if (housingOptions.address[key] === '') {
        setNextDisable(true);
      }
    });
  }, [housingOptions]);

  return (
    <form className="enter-address" onSubmit={handleSubmit}>
      <label className="enter-address__field" htmlFor="street">
        <input
          id="street"
          type="text"
          placeholder="Calle"
          onChange={(e) => setStreet(e.target.value)}
          value={street}
          required
        />
      </label>
      <label className="enter-address__field" htmlFor="City">
        <input
          id="City"
          type="text"
          placeholder="Ciudad"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          required
        />
      </label>
      <label className="enter-address__field" htmlFor="state">
        <input
          id="state"
          type="text"
          placeholder="state"
          onChange={(e) => setState(e.target.value)}
          value={state}
          required
        />
      </label>
      <label className="enter-address__field" htmlFor="zipcode">
        <input
          id="zipcode"
          type="text"
          placeholder="código postal"
          onChange={(e) => setZipcode(e.target.value)}
          value={zipcode}
          required
        />
      </label>
      <label className="enter-address__field" htmlFor="country">
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          {availableCountries.map(({ code, value }) => (
            <option key={code} value={code}>
              {value}
            </option>
          ))}
        </select>
      </label>
      <button className="enter-address__button" type="submit">
        Está bien
      </button>
    </form>
  );
}

export default EnterAddress;
