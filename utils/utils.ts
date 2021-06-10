export const formatAmount = (val: any, precision: number = 6, abbr: boolean = true) => {
  return parseInt(val).toFixed(precision);
};
