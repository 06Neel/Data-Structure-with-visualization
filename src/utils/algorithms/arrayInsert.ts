import type { AlgorithmStep } from '../../hooks/useAlgorithm';

export function generateInsertSteps(arr: number[], position: number, value: number): AlgorithmStep[] {
  const result = [...arr];
  const steps: AlgorithmStep[] = [];

  steps.push({ array: [...result], description: `Insert ${value} at position ${position}` });

  for (let i = result.length - 1; i > position; i--) {
    steps.push({
      array: [...result],
      comparing: [i, i - 1],
      description: `Shifting element ${result[i - 1]} from index ${i - 1} to index ${i}`,
      codeLine: 3,
    });
    result[i] = result[i - 1];
    steps.push({ array: [...result], description: `After shift: [${result.join(', ')}]` });
  }

  result[position] = value;
  steps.push({
    array: [...result],
    current: position,
    description: `Inserted ${value} at position ${position}`,
    codeLine: 5,
  });

  steps.push({ array: [...result], description: `Insertion complete!` });
  return steps;
}
