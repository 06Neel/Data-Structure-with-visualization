import type { AlgorithmStep } from '../../hooks/useAlgorithm';

export function generateMergeSortSteps(input: number[]): AlgorithmStep[] {
  const arr = [...input];
  const steps: AlgorithmStep[] = [];
  const sorted: number[] = [];
  const n = arr.length;

  steps.push({
    array: [...arr],
    sorted: [...sorted],
    description: 'Initial array - Ready to sort with Merge Sort',
  });

  function mergeSort(left: number, right: number) {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);

    steps.push({
      array: [...arr],
      sorted: [...sorted],
      current: mid,
      description: `Dividing: left=[${left}..${mid}] right=[${mid + 1}..${right}]`,
    });

    mergeSort(left, mid);
    mergeSort(mid + 1, right);
    merge(left, mid, right);
  }

  function merge(left: number, mid: number, right: number) {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);

    steps.push({
      array: [...arr],
      sorted: [...sorted],
      description: `Merging subarrays: [${leftArr.join(', ')}] + [${rightArr.join(', ')}]`,
    });

    let i = 0;
    let j = 0;
    let k = left;

    while (i < leftArr.length && j < rightArr.length) {
      steps.push({
        array: [...arr],
        comparing: [left + i, mid + 1 + j],
        sorted: [...sorted],
        description: `Comparing ${leftArr[i]} and ${rightArr[j]}`,
      });

      if (leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i];
        steps.push({
          array: [...arr],
          swapping: [k],
          sorted: [...sorted],
          current: left + i,
          description: `${leftArr[i]} <= ${rightArr[j]}, place ${leftArr[i]} at position ${k}`,
        });
        i++;
      } else {
        arr[k] = rightArr[j];
        steps.push({
          array: [...arr],
          swapping: [k],
          sorted: [...sorted],
          current: mid + 1 + j,
          description: `${leftArr[i]} > ${rightArr[j]}, place ${rightArr[j]} at position ${k}`,
        });
        j++;
      }
      k++;
    }

    while (i < leftArr.length) {
      arr[k] = leftArr[i];
      steps.push({
        array: [...arr],
        swapping: [k],
        sorted: [...sorted],
        description: `Place remaining ${leftArr[i]} at position ${k}`,
      });
      i++;
      k++;
    }

    while (j < rightArr.length) {
      arr[k] = rightArr[j];
      steps.push({
        array: [...arr],
        swapping: [k],
        sorted: [...sorted],
        description: `Place remaining ${rightArr[j]} at position ${k}`,
      });
      j++;
      k++;
    }

    if (left === 0 && right === n - 1) {
      for (let idx = 0; idx < n; idx++) {
        sorted.push(idx);
      }
    }
  }

  mergeSort(0, n - 1);

  steps.push({
    array: [...arr],
    sorted: Array.from({ length: n }, (_, i) => i),
    description: 'Array is sorted!',
  });

  return steps;
}
