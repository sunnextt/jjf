export const getfeesAmount = (amount) => {
  let feesamount = '';

  if (amount >= 25000 && amount <= 50000) {
    feesamount = 3000;
    return feesamount;
  } else if (amount >= 50000 && amount <= 75000) {
    feesamount = 6000;
    return feesamount;
  } else if (amount >= 100000 && amount <= 200000) {
    feesamount = 10000;
    return feesamount;
  } else if (amount >= 250000 && amount <= 499999) {
    feesamount = 20000;
    return feesamount;
  } else if (amount >= 500000) {
    feesamount = 50000;
    return feesamount;
  } else return 0;
};
