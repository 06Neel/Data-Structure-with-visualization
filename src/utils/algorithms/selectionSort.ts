import type { AlgorithmStep } from '../../hooks/useAlgorithm';

export function generateSelectionSortSteps(input: number[]): AlgorithmStep[] {
  const arr = [...input];
  const steps: AlgorithmStep[] = [];
  const n = arr.length;
  const sorted: number[] = [];

  steps.push({
    array: [...arr],
    sorted: [],
    description: 'Initial array - Ready to sort',
  });

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;

    steps.push({
      array: [...arr],
      current: i,
      sorted: [...sorted],
      description: `Finding minimum in unsorted portion [${i}..${n - 1}]`,
      codeLine: 2,
    });

    for (let j = i + 1; j < n; j++) {
      steps.push({
        array: [...arr],
        comparing: [minIdx, j],
        current: i,
        sorted: [...sorted],
        description: `Comparing ${arr[minIdx]} with ${arr[j]}`,
        codeLine: 3,
      });

      if (arr[j] < arr[minIdx]) {
        minIdx = j;
        steps.push({
          array: [...arr],
          current: minIdx,
          sorted: [...sorted],
          description: `New minimum found: ${arr[minIdx]} at index ${minIdx}`,
          codeLine: 4,
        });
      }
    }

    if (minIdx !== i) {
      steps.push({
        array: [...arr],
        swapping: [i, minIdx],
        sorted: [...sorted],
        description: `Swapping ${arr[i]} with minimum ${arr[minIdx]}`,
        codeLine: 5,
      });

      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }

    sorted.push(i);

    steps.push({
      array: [...arr],
      sorted: [...sorted],
      description: `Placed ${arr[i]} at position ${i}`,
    });
  }

  sorted.push(n - 1);
  steps.push({
    array: [...arr],
    sorted: Array.from({ length: n }, (_, i) => i),
    description: 'Array is sorted!',
  });

  return steps;
}
