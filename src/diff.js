import prepareObjects from './prepareObjects.js';
import prepareAST from './prepareAST.js';

const diff = (filepath1, filepath2) => {
  const { object1, object2 } = prepareObjects(filepath1, filepath2);
  const ast = prepareAST(object1, object2);
  return ast;
};

export default diff;
