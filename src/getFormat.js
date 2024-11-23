const getFormat = (path) => {
  const format = path.split('.').at(-1);
  return format;
};

export default getFormat;
