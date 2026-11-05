import type { AlgorithmStep } from '../../hooks/useAlgorithm';

export function generateDeleteSteps(arr: number[], position: number): AlgorithmStep[] {
  const result = [...arr];
  const steps: AlgorithmStep[] = [];
  const deletedValue = result[position];

  steps.push({ array: [...result], description: `Delete element at position ${position} (value: ${deletedValue})` });
  steps.push({ array: [...result], current: position, description: `Marked for deletion: ${deletedValue}` });

  for (let i = position; i < result.length - 1; i++) {
    steps.push({
      array: [...result],
      comparing: [i, i + 1],
      description: `Shifting element ${result[i + 1]} from index ${i + 1} to index ${i}`,
      codeLine: 3,
    });
    result[i] = result[i + 1];
    steps.push({ array: [...result], description: `After shift: [${result.join(', ')}]` });
  }

  result.pop();
  steps.push({
    array: [...result],
    description: `Removed ${deletedValue}. Array size reduced.`,
  });

  steps.push({ array: [...result], description: 'Deletion complete!' });
  return steps;
}
