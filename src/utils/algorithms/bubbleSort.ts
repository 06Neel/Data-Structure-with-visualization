import type { AlgorithmStep } from '../../hooks/useAlgorithm';

export function generateBubbleSortSteps(input: number[]): AlgorithmStep[] {
  const arr = [...input];
  const steps: AlgorithmStep[] = [];
  const n = arr.length;
  const sorted: number[] = [];

  steps.push({
    array: [...arr],
    sorted: [...sorted],
    description: 'Initial array - Ready to sort',
  });

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Comparing
      steps.push({
        array: [...arr],
        comparing: [j, j + 1],
        sorted: [...sorted],
        description: `Comparing ${arr[j]} and ${arr[j + 1]}`,
        codeLine: 3,
      });

      if (arr[j] > arr[j + 1]) {
        // Swapping
        steps.push({
          array: [...arr],
          swapping: [j, j + 1],
          sorted: [...sorted],
          description: `${arr[j]} > ${arr[j + 1]}, swapping them`,
          codeLine: 4,
        });

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        steps.push({
          array: [...arr],
          sorted: [...sorted],
          description: `After swap: [${arr.join(', ')}]`,
        });
      }
    }
    sorted.push(n - i - 1);
  }

  sorted.push(0);
  steps.push({
    array: [...arr],
    sorted: Array.from({ length: n }, (_, i) => i),
    description: 'Array is sorted!',
  });

  return steps;
}
