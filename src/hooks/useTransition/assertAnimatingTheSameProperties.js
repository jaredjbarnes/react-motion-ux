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
      `Invalid Arguments: When transitioning, you need to animate all of the same properties, these have different property sets. From:${JSON.stringify(
        animatedPropertiesA
      )}, To:${JSON.stringify(animatedPropertiesB)}`
    );
  }
};

export default assertAnimatingTheSameProperties;
