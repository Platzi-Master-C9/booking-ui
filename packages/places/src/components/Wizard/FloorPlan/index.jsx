import React, { useState, useEffect } from 'react';
import './styles/wizard-floor-plan.scss';
import { usePlaceProvider } from '../../../context/place';

function Plan({ field, amount, index, placeOptions, setPlaceOptions }) {
  const [fieldName] = useState(field);
  const [fieldAmount, setFieldAmount] = useState(amount);

  const decreaseAmount = () => {
    if (fieldAmount === 0) return;
    setFieldAmount(fieldAmount - 1);
  };

  const increaseAmount = () => {
    setFieldAmount(fieldAmount + 1);
  };

  useEffect(() => {
    const plans = placeOptions.floorPlans;
    plans[index] = { ...plans[index], amount: fieldAmount };
    setPlaceOptions({ ...placeOptions, floorPlans: plans });
  }, [fieldAmount]);

  return (
    <div className="wizard-floor-plan-option">
      <span className="wizard-floor-plan-option__field">{fieldName}</span>
      <div className="wizard-floor-plan-option__handle-amount">
        <button type="button" onClick={decreaseAmount}>
          -
        </button>
        <span>{fieldAmount}</span>
        <button type="button" onClick={increaseAmount}>
          +
        </button>
      </div>
    </div>
  );
}

export function FloorPlan() {
  const { placeOptions, setPlaceOptions } = usePlaceProvider();
  return (
    <div className="wizard-floor-plan">
      {placeOptions.floorPlans.map(({ field, amount }, index) => (
        <Plan
          key={field}
          field={field}
          amount={amount}
          index={index}
          placeOptions={placeOptions}
          setPlaceOptions={setPlaceOptions}
        />
      ))}
    </div>
  );
}

export default FloorPlan;
