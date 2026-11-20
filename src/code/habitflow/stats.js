/**
 * Consecutive scheduled days completed, counted back from today.
 * If today is scheduled but not done yet, the streak is still alive: the
 * day is not over, so counting starts from the previous scheduled day.
 */
export function currentStreak(habit, completions, today) {
  let day = today;
  if (isScheduled(habit, day) && !isDone(completions, habit.id, day)) {
    day = addDays(day, -1);
  }

  let streak = 0;
  for (let i = 0; i < MAX_DAYS && day >= habit.startDate; i += 1) {
    if (isScheduled(habit, day)) {
      if (!isDone(completions, habit.id, day)) break;
      streak += 1;
    }
    day = addDays(day, -1);
  }
  return streak;
}
