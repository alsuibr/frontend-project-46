const plain = (ast) => {
  const formatValue = (value) => {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (Array.isArray(value) || typeof value === 'object') return '[complex value]';
    if (typeof value === 'string') return `'${value}'`;
    return String(value);
  };

  const iter = (nodes, parentPath = '') => nodes
    .filter((node) => node.type !== 'unchanged')
    .map((node) => {
      const propertyPath = parentPath ? `${parentPath}.${node.key}` : node.key;
      switch (node.type) {
        case 'added':
          return `Property '${propertyPath}' was added with value: ${formatValue(node.value)}`;
        case 'removed':
          return `Property '${propertyPath}' was removed`;
        case 'updated':
          return `Property '${propertyPath}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`;
        case 'nested':
          return iter(node.children, propertyPath);
        default:
          throw new Error(`Unknown node type: ${node.type}`);
      }
    })
    .join('\n');

  return iter(ast);
};

export default plain;
