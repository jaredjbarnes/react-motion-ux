const assertAnimatingTheSameProperties = (
  animatedPropertiesA,
  animatedPropertiesB
) => {
  const keysA = Object.keys(animatedPropertiesA);
  const keysB = Object.keys(animatedPropertiesB);

  keysA.sort();
  keysB.sort();

  const areTheSame = keysA.join("|") === keysB.join("|");

  if (!areTheSame) {
    throw new Error(
      `Invalid Arguments: useTransition cannot transition between animatedProperties that don't match between states: ${JSON.stringify(
        animatedPropertiesA
      )}, ${JSON.stringify(animatedPropertiesB)}`
    );
  }
};

export default assertAnimatingTheSameProperties;
