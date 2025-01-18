import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import prepareAST from '../src/prepareAST.js';
import diff from '../src/diff.js';
import expectedObject1 from '../__fixtures__/expected/expectedObject1.js';
import expectedObject2 from '../__fixtures__/expected/expectedObject2.js';
import expectedAST from '../__fixtures__/expected/expectedAST.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// не использую import.meta.dirname тк использую версию Node.js v18.20.4 ()

let json1;
let json2;
let yml1;
let yml2;
let twoFilesStylish;
let twoFilesPlain;

beforeAll(() => {
  json1 = path.join(__dirname, '../__fixtures__/file1.json');
  json2 = path.join(__dirname, '../__fixtures__/file2.json');
  yml1 = path.join(__dirname, '../__fixtures__/file1.yml');
  yml2 = path.join(__dirname, '../__fixtures__/file2.yml');
  // eslint-disable-next-line max-len
  twoFilesStylish = fs.readFileSync(path.join(__dirname, '../__fixtures__/expected/twoFilesStylish.txt'), 'utf-8');
  twoFilesPlain = fs.readFileSync(path.join(__dirname, '../__fixtures__/expected/twoFilesPlain.txt'), 'utf-8');
});

test('json files comparison, outcome format stylish', () => {
  expect(diff(json1, json2)).toEqual(twoFilesStylish);
});

test('yml files comparison, outcome format stylish', () => {
  expect(diff(yml1, yml2)).toEqual(twoFilesStylish);
});

test('json file and yml file comparison, outcome format stylish', () => {
  expect(diff(yml1, yml2)).toEqual(twoFilesStylish);
});

test('json files comparison, outcome format plain', () => {
  expect(diff(json1, json2, 'plain')).toEqual(twoFilesPlain);
});

test('yml files comparison, outcome format plain', () => {
  expect(diff(yml1, yml2, 'plain')).toEqual(twoFilesPlain);
});

test('json file and yml file comparison, outcome format plain', () => {
  expect(diff(yml1, yml2, 'plain')).toEqual(twoFilesPlain);
});

test('prepareAST generates correct AST from objects', () => {
  const ast = prepareAST(expectedObject1, expectedObject2);
  expect(ast).toEqual(expectedAST);
});
