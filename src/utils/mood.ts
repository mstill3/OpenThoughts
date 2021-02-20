export const diagnosis = (moodScore: number) => {
  if (moodScore >= 90) return 'great';
  else if (moodScore >= 80) return 'good';
  else if (moodScore >= 70) return 'okay';
  else if (moodScore >= 60) return 'bad';
  else if (moodScore >= 1) return 'awful';
  else return 'none';
};
