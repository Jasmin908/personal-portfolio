/** The rule that applied on the given day. */
export function ruleOn(habit, dateKey) {
  let rule = habit.schedules[0];
  for (const entry of habit.schedules) {
    if (entry.from > dateKey) break;
    rule = entry;
  }
  return rule;
}

/** Sorts by date and drops entries that do not change anything. */
function compact(schedules) {
  const sorted = [...schedules].sort((a, b) => (a.from < b.from ? -1 : a.from > b.from ? 1 : 0));
  const result = [];
  for (const entry of sorted) {
    const previous = result.at(-1);
    if (previous && previous.from === entry.from) result[result.length - 1] = entry;
    else if (!previous || !sameRule(previous, entry)) result.push(entry);
  }
  return result;
}

/**
 * Returns the history after the user picked `rule` in the form.
 * The new rule starts today; an entry that already starts today or later
 * (a new habit, or a second edit on the same day) is simply replaced.
 */
export function applyScheduleChange(schedules, rule, today) {
  const next = normalizeRule(rule);
  const last = schedules.at(-1);
  if (sameRule(last, next)) return schedules;

  if (last.from >= today) return compact([...schedules.slice(0, -1), { from: last.from, ...next }]);
  return [...schedules, { from: today, ...next }];
}
