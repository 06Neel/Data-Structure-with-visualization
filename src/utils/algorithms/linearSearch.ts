import type { AlgorithmStep } from '../../hooks/useAlgorithm';

export function generateLinearSearchSteps(input: number[], target: number): AlgorithmStep[] {
  const steps: AlgorithmStep[] = [];
  const n = input.length;

  steps.push({
    array: [...input],
    description: `Searching for ${target} in array`,
  });

  for (let i = 0; i < n; i++) {
    steps.push({
      array: [...input],
      current: i,
      description: `Checking index ${i}: Is ${input[i]} == ${target}?`,
      codeLine: 2,
    });

    if (input[i] === target) {
      steps.push({
        array: [...input],
        found: i,
        description: `Found ${target} at index ${i}!`,
        codeLine: 3,
      });
      return steps;
    }

    steps.push({
      array: [...input],
      description: `${input[i]} != ${target}, moving to next`,
      codeLine: 4,
    });
  }

  steps.push({
    array: [...input],
    description: `${target} not found in array`,
  });

  return steps;
}
