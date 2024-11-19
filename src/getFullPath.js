import { resolve } from 'path';

const getFullPath = (filepath) => resolve(process.cwd(), filepath);

export default getFullPath;
