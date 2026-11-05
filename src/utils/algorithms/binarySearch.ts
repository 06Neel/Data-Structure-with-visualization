import type { AlgorithmStep } from '../../hooks/useAlgorithm';

export function generateBinarySearchSteps(input: number[], target: number): AlgorithmStep[] {
  const arr = [...input].sort((a, b) => a - b);
  const steps: AlgorithmStep[] = [];
  let left = 0;
  let right = arr.length - 1;

  steps.push({
    array: [...arr],
    description: `Searching for ${target} in sorted array`,
  });

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    steps.push({
      array: [...arr],
      current: mid,
      comparing: [left, right],
      description: `left=${left}, right=${right}, mid=${mid}`,
      codeLine: 3,
    });

    if (arr[mid] === target) {
      steps.push({
        array: [...arr],
        found: mid,
        description: `Found ${target} at index ${mid}!`,
        codeLine: 4,
      });
      return steps;
    }

    if (arr[mid] < target) {
      steps.push({
        array: [...arr],
        description: `${arr[mid]} < ${target}, searching right half`,
        codeLine: 5,
      });
      left = mid + 1;
    } else {
      steps.push({
        array: [...arr],
        description: `${arr[mid]} > ${target}, searching left half`,
        codeLine: 6,
      });
      right = mid - 1;
    }
  }

  steps.push({
    array: [...arr],
    description: `${target} not found in array`,
  });

  return steps;
}
