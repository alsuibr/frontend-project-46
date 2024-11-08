import _ from 'lodash';
const diff = (object1, object2) => {
    const keys = _.uniq(Object.keys(object1).concat(Object.keys(object2)));
    const callback  = (acc, item) => {
        let value = '';
        if (object1.hasOwnProperty(item) && object2.hasOwnProperty(item)) {
            value = object1[item] === object2[item] ? `  ${item} : ${object1[item]}` : `- ${item} : ${object1[item]}\n+ ${item} : ${object2[item]}`;
        }
        else if (object1.hasOwnProperty(item) && !object2.hasOwnProperty(item)) {
            value = `- ${item} : ${object1[item]}`;
        }
        else if (!object1.hasOwnProperty(item) && object2.hasOwnProperty(item)) {
            value = `+ ${item} : ${object2[item]}`;
        }
        acc.push(value);
        return acc;
    }
    const array = keys.reduce(callback, []);
    const result = `{\n${array.join('\n')}\n}`;
    return result;
    };

export default diff;