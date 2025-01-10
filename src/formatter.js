import stylish from './stylish.js';

const formatter = (data, formatName = 'stylish') => {
  switch (formatName) {
    case 'stylish':
      return stylish(data);
    default:
      throw new Error(`Unknown format: ${formatName}`);
  }
};

export default formatter;
