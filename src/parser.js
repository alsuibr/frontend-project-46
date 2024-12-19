import yaml from 'js-yaml';

// eslint-disable-next-line consistent-return
const parse = (content, format) => {
  if (format === 'json') {
    return JSON.parse(content);
  }
  if (format === 'yml' || format === 'yaml') {
    return yaml.load(content);
  }
};

export default parse;
