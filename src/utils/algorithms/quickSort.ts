import type { AlgorithmStep } from '../../hooks/useAlgorithm';

export function generateQuickSortSteps(input: number[]): AlgorithmStep[] {
  const arr = [...input];
  const steps: AlgorithmStep[] = [];
  const n = arr.length;
  const sorted: number[] = [];

  steps.push({
    array: [...arr],
    sorted: [...sorted],
    description: 'Initial array - Ready to sort with Quick Sort',
  });

  function markSorted(index: number) {
    if (index >= 0 && index < n && !sorted.includes(index)) {
      sorted.push(index);
      sorted.sort((a, b) => a - b);
    }
  }

  function partition(low: number, high: number): number {
    const pivot = arr[high];

    steps.push({
      array: [...arr],
      sorted: [...sorted],
      current: high,
      description: `Pivot = ${pivot} (last element of range [${low}..${high}])`,
    });

    let i = low - 1;

    for (let j = low; j < high; j++) {
      steps.push({
        array: [...arr],
        sorted: [...sorted],
        comparing: [j, high],
        current: high,
        description: `Comparing ${arr[j]} with pivot ${pivot}`,
      });

      if (arr[j] <= pivot) {
        i++;
        if (i !== j) {
          steps.push({
            array: [...arr],
            sorted: [...sorted],
            swapping: [i, j],
            description: `Swap ${arr[i]} ↔ ${arr[j]} — move ${arr[j]} into the left partition`,
          });

          [arr[i], arr[j]] = [arr[j], arr[i]];

          steps.push({
            array: [...arr],
            sorted: [...sorted],
            current: i,
            description: `After swap: [${arr.join(', ')}]`,
          });
        } else {
          steps.push({
            array: [...arr],
            sorted: [...sorted],
            current: i,
            description: `${arr[j]} <= pivot — already in the left partition`,
          });
        }
      } else {
        steps.push({
          array: [...arr],
          sorted: [...sorted],
          current: j,
          description: `${arr[j]} > pivot — stays on the right side`,
        });
      }
    }

    const pivotIndex = i + 1;

    if (pivotIndex !== high) {
      steps.push({
        array: [...arr],
        sorted: [...sorted],
        swapping: [pivotIndex, high],
        description: `Place pivot: swap ${pivot} ↔ ${arr[pivotIndex]}`,
      });

      [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]];

      steps.push({
        array: [...arr],
        sorted: [...sorted],
        current: pivotIndex,
        description: `After swap: [${arr.join(', ')}]`,
      });
    }

    return pivotIndex;
  }

  function quickSort(low: number, high: number) {
    if (low > high) return;

    if (low === high) {
      markSorted(low);
      steps.push({
        array: [...arr],
        sorted: [...sorted],
        current: low,
        description: `Single element ${arr[low]} at index ${low} — already sorted`,
      });
      return;
    }

    steps.push({
      array: [...arr],
      sorted: [...sorted],
      description: `Sort range [${low}..${high}]: [${arr.slice(low, high + 1).join(', ')}]`,
    });

    const pivotIndex = partition(low, high);
    markSorted(pivotIndex);

    steps.push({
      array: [...arr],
      sorted: [...sorted],
      current: pivotIndex,
      description: `Pivot ${arr[pivotIndex]} is now fixed at its final index ${pivotIndex}`,
    });

    quickSort(low, pivotIndex - 1);
    quickSort(pivotIndex + 1, high);
  }

  quickSort(0, n - 1);

  steps.push({
    array: [...arr],
    sorted: Array.from({ length: n }, (_, i) => i),
    description: 'Array is sorted!',
  });

  return steps;
}
