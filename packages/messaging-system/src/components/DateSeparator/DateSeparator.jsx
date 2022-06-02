// External dependencies
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

// Internal dependencies
import classes from './DateSeparator.module.scss';
import getMonthNumberAs3LetterSymbol from '../../utils/getMonthNumberAs3LetterSymbol';

function DateSeparator({
  timestamp,
}) {
  const formattedTimestamp = useMemo(() => {
    const date = new Date(timestamp);
    // Get year
    const year = date.getFullYear();

    // Get month
    const month = date.getMonth() + 1;
    const monthAs3Letters = getMonthNumberAs3LetterSymbol(month);

    // Get day
    const day = date.getDate();

    return `${day} de ${monthAs3Letters}. de ${year}`;
  }, [timestamp]);

  return (
    <div className={classes.date_separator}>
      { formattedTimestamp }
    </div>
  );
}

DateSeparator.propTypes = {
  timestamp: PropTypes.number.isRequired,
};

export default DateSeparator;
