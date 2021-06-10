export const formatAmount = (val: number, precision: number = 6, abbr: boolean = true) => {
  return parseInt(val).toFixed(precision);
};
