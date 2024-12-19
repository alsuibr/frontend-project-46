const prepareAST = (object1, object2) => {
  const isUpdated = (value1, value2) => !Object.is(value1, value2);
  const isNested = (value) => Object.prototype.toString.call(value) === '[object Object]';
  const hasKey = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
  const isAdded = (key, obj1, obj2) => !hasKey(obj1, key) && hasKey(obj2, key);
  const isRemoved = (key, obj1, obj2) => hasKey(obj1, key) && !hasKey(obj2, key);

  const keys = [...new Set([...Object.keys(object1), ...Object.keys(object2)])];
  const orderedKeys = keys.sort();

  const ast = orderedKeys.map((key) => {
    const value1 = object1[key];
    const value2 = object2[key];
    if (isAdded(key, object1, object2)) {
      return { key, type: 'added', value: value2 };
    }
    if (isRemoved(key, object1, object2)) {
      return { key, type: 'removed', value: value1 };
    }
    if (isNested(value1) && isNested(value2)) {
      return { key, type: 'nested', children: prepareAST(value1, value2) };
    }
    if (isUpdated(value1, value2)) {
      return {
        key, type: 'updated', value: value1, newValue: value2,
      };
    }
    return { key, type: 'unchanged', value: value1 };
  });
  return ast;
};
export default prepareAST;
