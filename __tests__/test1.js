import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import diff from '../src/diff.js';

const __filename = fileURLToPath(import.meta.url); // Получение текущего файла
const __dirname = path.dirname(__filename); // Получение директории файла
// не использую import.meta.dirname тк использую версию Node.js v18.20.4 ()

let json1;
let json2;
let yml1;
let yml2;
let twoFilesStylish;

beforeAll(() => {
  json1 = path.join(__dirname, '../__fixtures__/file1.json');
  json2 = path.join(__dirname, '../__fixtures__/file2.json');
  // const emptyJson = path.join(__dirname, '../__fixtures__/empty.json');
  yml1 = path.join(__dirname, '../__fixtures__/file1.yml');
  yml2 = path.join(__dirname, '../__fixtures__/file2.yml');
  // const emptyYml = path.join(__dirname, '../__fixtures__/empty.yml');
  twoFilesStylish = fs.readFileSync(path.join(__dirname, '../__fixtures__/twoFilesStylish.txt'), 'utf-8');
});

test('two json files, default stylish', () => {
  expect(diff(json1, json2)).toEqual(twoFilesStylish);
});

test('two yml files, default stylish', () => {
  expect(diff(yml1, yml2)).toEqual(twoFilesStylish);
});

test('json and yml files, default stylish', () => {
  expect(diff(yml1, json2)).toEqual(twoFilesStylish);
});
