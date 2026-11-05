import type { AlgorithmStep } from '../../hooks/useAlgorithm';

export function generateMergeSteps(arr1: number[], arr2: number[]): AlgorithmStep[] {
  const result: number[] = [];
  const steps: AlgorithmStep[] = [];
  let i = 0, j = 0;

  steps.push({
    array: [...arr1, ...arr2],
    comparing: Array.from({ length: arr1.length }, (_, k) => k),
    description: `Merging [${arr1.join(', ')}] and [${arr2.join(', ')}]`,
  });

  while (i < arr1.length && j < arr2.length) {
    steps.push({
      array: [...result, ...arr1.slice(i), ...arr2.slice(j)],
      comparing: [i, arr1.length + j],
      description: `Comparing ${arr1[i]} and ${arr2[j]}`,
      codeLine: 3,
    });

    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      steps.push({
        array: [...result, ...arr1.slice(i + 1), ...arr2.slice(j)],
        sorted: Array.from({ length: result.length }, (_, k) => k),
        description: `${arr1[i]} <= ${arr2[j]}, add ${arr1[i]} to result`,
        codeLine: 4,
      });
      i++;
    } else {
      result.push(arr2[j]);
      steps.push({
        array: [...result, ...arr1.slice(i), ...arr2.slice(j + 1)],
        sorted: Array.from({ length: result.length }, (_, k) => k),
        description: `${arr1[i]} > ${arr2[j]}, add ${arr2[j]} to result`,
        codeLine: 5,
      });
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    steps.push({
      array: [...result, ...arr1.slice(i + 1), ...arr2.slice(j)],
      sorted: Array.from({ length: result.length }, (_, k) => k),
      description: `Remaining from arr1: add ${arr1[i]}`,
    });
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    steps.push({
      array: [...result, ...arr2.slice(j + 1)],
      sorted: Array.from({ length: result.length }, (_, k) => k),
      description: `Remaining from arr2: add ${arr2[j]}`,
    });
    j++;
  }

  steps.push({
    array: [...result],
    sorted: Array.from({ length: result.length }, (_, k) => k),
    description: 'Merge complete!',
  });

  return steps;
}
