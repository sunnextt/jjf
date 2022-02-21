export const StepKey = (step) => {
  let key;
  if (step === 'In Review') {
    key = 1;
    return key;
  } else if (step === 'Approved') {
    key = 2;
    return key;
  } else if (step === 'Funds Disbursed') {
    key = 3;
    return key;
  } else return (key = 0);
};
