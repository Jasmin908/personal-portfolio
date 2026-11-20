/**
 * Checks the requirements of an exercise against the learner's code.
 *
 * Pure and independent of React: code in, result out. Nothing is executed.
 * The result therefore never says "correct" or "solved". It says which of
 * the expected patterns were recognised, which were not, and which
 * requirements cannot be judged from the text of the code at all.
 */

function normalise(code: string): string {
  return code.replace(/\r\n?/g, '\n').trim();
}

function checkRequirement(requirement: Requirement, source: ReturnType<typeof parseSource>): RequirementResult {
  const { check } = requirement;
  const outcome = runCheck(check, source);
  const rough = check.kind === 'pattern' || check.kind === 'absent';

  if (check.kind === 'manual') {
    return { requirement, status: 'not-verifiable', message: outcome.detail, rough: false };
  }
  if (outcome.found) {
    return { requirement, status: 'recognised', message: outcome.detail, line: outcome.line, rough };
  }
  const message = requirement.suggestion ? `${outcome.detail} ${requirement.suggestion}` : outcome.detail;
  return { requirement, status: 'not-recognised', message, line: outcome.line, rough };
}
