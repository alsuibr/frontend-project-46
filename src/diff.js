import prepareObjects from './prepareObjects.js';
import prepareAST from './prepareAST.js';
import formatter from './formatter.js';

const diff = (filepath1, filepath2, formatName = 'stylish') => {
  const { object1, object2 } = prepareObjects(filepath1, filepath2);
  const ast = prepareAST(object1, object2);
  const result = formatter(ast, formatName);
  return result;
};

export default diff;
