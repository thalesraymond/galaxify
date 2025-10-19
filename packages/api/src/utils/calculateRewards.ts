export const calculateRewards = (streak: number) => {
  let baseReward = 5;
  if (streak > 10) {
    baseReward *= 2;
  }
  return baseReward;
};
