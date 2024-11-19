import { readFileSync } from 'fs';

const readFile = (path) => readFileSync(path, 'utf-8');

export default readFile;
