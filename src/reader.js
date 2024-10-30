import { readFileSync } from 'fs';

const readFile = (path) => {
    return readFileSync(path, 'utf-8');
};

export default readFile;