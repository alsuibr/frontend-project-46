import stylish from './stylish.js';
import plain from './plain.js';

const getFormatter = (formatName) => {
  const formatters = { stylish, plain };
  const formatter = formatters[formatName];
  if (!formatter) {
    throw new Error(`Unknown format: ${formatName}`);
  }
  return formatter;
};

export default getFormatter;
