import yaml from 'js-yaml';

const parse = (content, format) => {
  let parsed;
  if (format === 'json') {
    parsed = JSON.parse(content);
  } else if (format === 'yml' || format === 'yaml') {
    parsed = yaml.load(content);
  }

  return parsed;
};

export default parse;
