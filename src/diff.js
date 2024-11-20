import _ from 'lodash';
import getFormat from './getFormat.js';
import getFullPath from './getFullPath.js';
import parse from './parser.js';
import readFile from './reader.js';

const diff = (filepath1, filepath2) => {

  const fullPath1 = getFullPath(filepath1);
  const fullPath2 = getFullPath(filepath2);
  const content1 = readFile(fullPath1);
  const content2 = readFile(fullPath2);
  const format1 = getFormat(filepath1);
  const format2 = getFormat(filepath2);
  const object1 = parse(content1, format1);
  const object2 = parse(content2, format2);

  const keys = _.uniq(Object.keys(object1).concat(Object.keys(object2)));
  const callback = (acc, item) => {
    let value = '';
    if (Object.hasOwn(object1, item) && Object.hasOwn(object2, item)) {
      value = object1[item] === object2[item] ? `  ${item} : ${object1[item]}` : `- ${item} : ${object1[item]}\n+ ${item} : ${object2[item]}`;
    } else if (Object.hasOwn(object1, item) && !Object.hasOwn(object2, item)) {
      value = `- ${item} : ${object1[item]}`;
    } else if (!Object.hasOwn(object1, item) && Object.hasOwn(object2, item)) {
      value = `+ ${item} : ${object2[item]}`;
    }
    acc.push(value);
    return acc;
  };
  const array = keys.reduce(callback, []);
  const result = `{\n${array.join('\n')}\n}`;
  return result;
};

export default diff;
