import type { AlgorithmStep } from '../../hooks/useAlgorithm';

export function generateInsertionSortSteps(input: number[]): AlgorithmStep[] {
  const arr = [...input];
  const steps: AlgorithmStep[] = [];
  const n = arr.length;
  const sorted: number[] = [0];

  steps.push({
    array: [...arr],
    sorted: [],
    description: 'Initial array - Ready to sort',
  });

  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;

    steps.push({
      array: [...arr],
      current: i,
      sorted: [...sorted],
      description: `Pick element ${key} at index ${i}`,
      codeLine: 2,
    });

    while (j >= 0 && arr[j] > key) {
      steps.push({
        array: [...arr],
        comparing: [j, j + 1],
        current: i,
        sorted: [...sorted],
        description: `Comparing ${arr[j]} with key ${key}`,
        codeLine: 3,
      });

      arr[j + 1] = arr[j];

      steps.push({
        array: [...arr],
        swapping: [j, j + 1],
        sorted: [...sorted],
        description: `Shifting ${arr[j]} to the right`,
        codeLine: 4,
      });

      j--;
    }

    arr[j + 1] = key;
    sorted.push(i);

    steps.push({
      array: [...arr],
      sorted: Array.from({ length: i + 1 }, (_, k) => k),
      description: `Inserted ${key} at position ${j + 1}`,
      codeLine: 5,
    });
  }

  steps.push({
    array: [...arr],
    sorted: Array.from({ length: n }, (_, i) => i),
    description: 'Array is sorted!',
  });

  return steps;
}
