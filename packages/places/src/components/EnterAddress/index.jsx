import React, { useState, useEffect } from 'react';
import './styles/enter-address.scss';

function EnterAddress({ housingOptions, setHousingOptions, setNextDisable }) {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [country, setCountry] = useState('');
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
  };

  useEffect(() => {
    if (!housingOptions.address) {
      setNextDisable(true);
    } else {
      setNextDisable(false);
    }
  }, [housingOptions]);

  return (
    <form className="enter-address" onSubmit={handleSubmit}>
      <label className="enter-address__field" htmlFor="street">
        <input
          id="street"
          type="text"
          placeholder="Calle"
          onChange={(e) => setStreet(e.target.value)}
        />
      </label>
      <label className="enter-address__field" htmlFor="City">
        <input
          id="City"
          type="text"
          placeholder="Ciudad"
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label className="enter-address__field" htmlFor="state">
        <input
          id="state"
          type="text"
          placeholder="state"
          onChange={(e) => setState(e.target.value)}
        />
      </label>
      <label className="enter-address__field" htmlFor="zipcode">
        <input
          id="zipcode"
          type="text"
          placeholder="código postal"
          onChange={(e) => setZipcode(e.target.value)}
        />
      </label>
      <label className="enter-address__field" htmlFor="country">
        <select onChange={(e) => setCountry(e.target.value)}>
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
