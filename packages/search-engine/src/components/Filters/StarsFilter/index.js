import React from 'react'
import css from './StarsFilter.module.scss'
import Star from '../../../assets/icons/Star'

export default function StartsFilter (props) {
  const { stars, handleStar } = props;

  const StarOption = ({
    check,
    handleCheck,
    numberStars,
    numberOpinions,
    testID
  }) => (
    <label className={css.containerLabel} data-testid={testID}>
      <input type="checkbox" checked={check === numberStars} onChange={handleCheck} />
      <div className={css.containerStars}>
        {[1, 2, 3, 4, 5].map((star, index) => (
          <Star
            key={index}
            fillColor={numberStars >= star ? '#1572A1' :'#fff'}
            border='#1572A1'
          />
        ))}
      </div>
      <span className={css.opinions}>({numberOpinions})</span>
    </label>
  )

  return (
    <div className={css.starsFilter}>
      <StarOption 
        check={stars}
        handleCheck={() => handleStar(5)}
        numberStars={5}
        numberOpinions={35}
        testID='one-start'
      />

      <StarOption 
        check={stars}
        handleCheck={() => handleStar(4)}
        numberStars={4}
        numberOpinions={15}
      />

      <StarOption 
        check={stars}
        handleCheck={() => handleStar(3)}
        numberStars={3}
        numberOpinions={5}
      />

      <StarOption 
        check={stars}
        handleCheck={() => handleStar(2)}
        numberStars={2}
        numberOpinions={3}
      />

      <StarOption 
        check={stars}
        handleCheck={() => handleStar(1)}
        numberStars={1}
        numberOpinions={1}
      />
    </div>
  )
}
