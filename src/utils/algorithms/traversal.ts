import type { AlgorithmStep } from '../../hooks/useAlgorithm';

export function generateTraversalSteps(arr: number[]): AlgorithmStep[] {
  const steps: AlgorithmStep[] = [];
  steps.push({ array: [...arr], description: 'Initial array' });
  for (let i = 0; i < arr.length; i++) {
    steps.push({
      array: [...arr],
      current: i,
      description: `Visiting index ${i}: value = ${arr[i]}`,
    });
  }
  steps.push({
    array: [...arr],
    sorted: Array.from({ length: arr.length }, (_, i) => i),
    description: 'Traversal complete! All elements visited.',
  });
  return steps;
}
