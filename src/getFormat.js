const getFormat = (path) => {
  const format = path.split('.').slice(-1);
  return format;
};

export default getFormat;
