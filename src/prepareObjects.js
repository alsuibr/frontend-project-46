import getFormat from './getFormat.js';
import getFullPath from './getFullPath.js';
import parse from './parser.js';
import readFile from './reader.js';

const prepareObjects = (filepath1, filepath2) => {
  const fullPath1 = getFullPath(filepath1);
  const fullPath2 = getFullPath(filepath2);
  const content1 = readFile(fullPath1);
  const content2 = readFile(fullPath2);
  const format1 = getFormat(filepath1);
  const format2 = getFormat(filepath2);
  const object1 = parse(content1, format1);
  const object2 = parse(content2, format2);
  return { object1, object2 };
};

export default prepareObjects;
