export function isValidAnswer(answer: boolean, sequence: Map<string, number>, spell: string) {
  return (answer && sequence.has(spell)) || (!answer && !sequence.has(spell));
}

export function selectRandomSpell(spells: readonly string[]) {
  return spells[Math.floor(Math.random() * spells.length)];
}
