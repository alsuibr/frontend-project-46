import { resolve } from 'path';

const getFullPath = (filepath) =>  {
    return resolve(process.cwd(), filepath)
};

export default getFullPath;

