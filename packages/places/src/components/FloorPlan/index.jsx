import React, { useState, useEffect } from 'react';
import './styles/floor-plan.scss';

function Plan({ field, amount, index, housingOptions, setHousingOptions }) {
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
    const plans = housingOptions.floorPlans;
    plans[index] = { ...plans[index], amount: fieldAmount };
    setHousingOptions({ ...housingOptions, floorPlans: plans });
  }, [fieldAmount]);

  return (
    <div className="floor-plan-option">
      <span className="floor-plan-option__field">{fieldName}</span>
      <div className="floor-plan-option__handle-amount">
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

function FloorPlan({ housingOptions, setHousingOptions, setNextDisable }) {
  return (
    <div className="floor-plan">
      {housingOptions.floorPlans.map(({ field, amount }, index) => (
        <Plan
          key={field}
          field={field}
          amount={amount}
          index={index}
          housingOptions={housingOptions}
          setHousingOptions={setHousingOptions}
        />
      ))}
    </div>
  );
}

export default FloorPlan;
