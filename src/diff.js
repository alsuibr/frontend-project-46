import prepareObjects from './prepareObjects.js';
import prepareAST from './prepareAST.js';
import getFormatter from '../formatters/index.js';

const diff = (filepath1, filepath2, formatName = 'stylish') => {
  const { object1, object2 } = prepareObjects(filepath1, filepath2);
  const ast = prepareAST(object1, object2);
  const formatter = getFormatter(formatName); // returns function
  const outcome = formatter(ast);
  return outcome;
};

export default diff;
