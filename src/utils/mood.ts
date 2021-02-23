export const diagnosis = (moodScore: number) =>
  moodScore >= 90
    ? 'great'
    : moodScore >= 80
    ? 'good'
    : moodScore >= 70
    ? 'okay'
    : moodScore >= 60
    ? 'bad'
    : moodScore >= 1
    ? 'awful'
    : 'none';
