const MONTH_MAP = {
  1: 'Ene',
  2: 'Feb',
  3: 'Mar',
  4: 'Abr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Ago',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dic',
};

const getMonthNumberAs3LetterSymbol = (monthNumber) => MONTH_MAP[monthNumber];

export default getMonthNumberAs3LetterSymbol;
