const stylish = (ast) => {
  const indentSize = 4;
  const makeIndent = (depth, shift = 0) => {
    const totalIndent = depth * indentSize + shift;
    return ' '.repeat(totalIndent);
  };

  const isObject = (value) => Object.prototype.toString.call(value) === '[object Object]';

  const stringify = (value, depth) => {
    if (!isObject(value)) {
      return String(value);
    }

    const entries = Object.entries(value).map(([key, nestedValue]) => {
      const nestedIndent = makeIndent(depth + 1);
      return `${nestedIndent}${key}: ${stringify(nestedValue, depth + 1)}`;
    });

    const closingIndent = makeIndent(depth);
    const result = `{\n${entries.join('\n')}\n${closingIndent}}`;
    return result;
  };

  const iter = (nodes, depth) => {
    const lines = nodes.flatMap((node) => {
      const {
        key, type, value, newValue, children,
      } = node;

      const currentIndent = makeIndent(depth, -2);
      const keyValueString = `${key}: ${stringify(value, depth)}`;

      switch (type) {
        case 'added':
          return `${currentIndent}+ ${keyValueString}`;
        case 'removed':
          return `${currentIndent}- ${keyValueString}`;
        case 'unchanged':
          return `${currentIndent}  ${keyValueString}`;
        case 'updated':
          return [
            `${currentIndent}- ${keyValueString}`,
            `${currentIndent}+ ${key}: ${stringify(newValue, depth)}`,
          ];
        case 'nested': {
          const nestedIndent = makeIndent(depth);
          const nestedResult = `${nestedIndent}${key}: {\n${iter(children, depth + 1)}\n${nestedIndent}}`;
          return nestedResult;
        }
        default:
          throw new Error(`Unknown node type: ${type}`);
      }
    });

    return lines.join('\n');
  };

  const result = `{\n${iter(ast, 1)}\n}`;
  return result;
};

export default stylish;
