export interface LLStep {
  nodes: { value: number; x: number; y: number }[];
  links: { from: number; to: number }[];
  highlights: number[];
  activeIndex?: number;
  description: string;
  codeLine?: number;
}

export function generateTraversalSteps(values: number[]): LLStep[] {
  const steps: LLStep[] = [];
  const nodes = values.map((v, i) => ({ value: v, x: 80 + i * 120, y: 60 }));
  const links = values.slice(0, -1).map((_, i) => ({ from: i, to: i + 1 }));

  steps.push({ nodes, links, highlights: [], description: 'Linked List initialized. Start traversal from HEAD.' });

  for (let i = 0; i < values.length; i++) {
    steps.push({
      nodes, links,
      highlights: [],
      activeIndex: i,
      description: `Pointer at node [${i}], value = ${values[i]}`,
    });
    if (i < values.length - 1) {
      steps.push({
        nodes, links,
        highlights: [i],
        description: `Visit ${values[i]}, follow next pointer to node [${i + 1}]`,
      });
    }
  }

  steps.push({ nodes, links, highlights: values.map((_, i) => i), description: 'Traversal complete! Reached NULL at end.' });
  return steps;
}

export function generateInsertSteps(values: number[], position: number, newVal: number): LLStep[] {
  const steps: LLStep[] = [];
  const allVals = [...values];
  allVals.splice(position, 0, newVal);

  const makeNodes = (vals: number[]) =>
    vals.map((v, i) => ({ value: v, x: 80 + i * 110, y: 60 }));
  const makeLinks = (len: number) => Array.from({ length: len - 1 }, (_, i) => ({ from: i, to: i + 1 }));

  steps.push({ nodes: makeNodes(values), links: makeLinks(values.length), highlights: [], description: `Initial list: [${values.join(' → ')}]. Insert ${newVal} at position ${position}.` });

  steps.push({ nodes: makeNodes(values), links: makeLinks(values.length), highlights: [], activeIndex: position, description: `Traverse to position ${position - 1}` });

  const pre = values.slice(0, position);
  const post = values.slice(position);
  steps.push({ nodes: makeNodes([...pre, newVal, ...post]), links: makeLinks(allVals.length), highlights: [position], description: `Create new node with value ${newVal}` });

  steps.push({ nodes: makeNodes(allVals), links: makeLinks(allVals.length), highlights: [position], description: `Link new node: ${position > 0 ? pre[position - 1] : 'HEAD'} → ${newVal} → ${post[0] ?? 'NULL'}` });

  steps.push({ nodes: makeNodes(allVals), links: makeLinks(allVals.length), highlights: [], description: `Insertion complete! List: [${allVals.join(' → ')}]` });
  return steps;
}

export function generateDeleteSteps(values: number[], position: number): LLStep[] {
  const steps: LLStep[] = [];
  const deleted = values[position];

  const makeNodes = (vals: number[]) =>
    vals.map((v, i) => ({ value: v, x: 80 + i * 110, y: 60 }));
  const makeLinks = (len: number) => Array.from({ length: len - 1 }, (_, i) => ({ from: i, to: i + 1 }));

  steps.push({ nodes: makeNodes(values), links: makeLinks(values.length), highlights: [], description: `Initial list: [${values.join(' → ')}]. Delete at position ${position}.` });

  steps.push({ nodes: makeNodes(values), links: makeLinks(values.length), highlights: [], activeIndex: position, description: `Traverse to position ${position}` });

  steps.push({ nodes: makeNodes(values), links: makeLinks(values.length), highlights: [position], description: `Node at position ${position} has value ${deleted}` });

  const remaining = values.filter((_, i) => i !== position);
  steps.push({ nodes: makeNodes(remaining), links: makeLinks(remaining.length), highlights: [], description: `Bypass node: ${position > 0 ? values[position - 1] : 'HEAD'} → ${remaining[position] ?? 'NULL'}` });

  steps.push({ nodes: makeNodes(remaining), links: makeLinks(remaining.length), highlights: [], description: `Deletion complete! List: [${remaining.join(' → ')}]` });
  return steps;
}

export function generateDoublyLLSteps(values: number[]): LLStep[] {
  const steps: LLStep[] = [];
  const nodes = values.map((v, i) => ({ value: v, x: 80 + i * 130, y: 60 }));
  const links = values.slice(0, -1).map((_, i) => ({ from: i, to: i + 1 }));

  steps.push({ nodes, links, highlights: [], description: 'Doubly Linked List: each node has prev and next pointers.' });

  for (let i = 0; i < values.length; i++) {
    const prevNode = i > 0 ? values[i - 1] : 'NULL';
    const nextNode = i < values.length - 1 ? values[i + 1] : 'NULL';
    steps.push({
      nodes, links, highlights: [i], activeIndex: i,
      description: `Node[${i}] (${values[i]}): prev → ${prevNode}, next → ${nextNode}`,
    });
  }

  steps.push({ nodes, links, highlights: nodes.map((_, i) => i), description: 'All nodes traversed in both directions.' });
  return steps;
}

export function generateCircularLLSteps(values: number[]): LLStep[] {
  const steps: LLStep[] = [];
  const nodes = values.map((v, i) => ({ value: v, x: 80 + i * 120, y: 60 }));
  const links = values.slice(0, -1).map((_, i) => ({ from: i, to: i + 1 }));

  steps.push({ nodes, links, highlights: [], description: 'Circular Linked List: last node points back to HEAD instead of NULL.' });

  for (let i = 0; i < values.length; i++) {
    steps.push({
      nodes, links, highlights: [i], activeIndex: i,
      description: `Visit node [${i}], value = ${values[i]}. Next: ${i < values.length - 1 ? values[i + 1] : values[0]} (head)`,
    });
  }

  steps.push({ nodes, links, highlights: nodes.map((_, i) => i), description: 'Traversal returns to HEAD — infinite loop if no stop condition!' });
  return steps;
}
