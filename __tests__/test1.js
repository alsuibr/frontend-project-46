import path from 'path';
import { fileURLToPath } from 'url';
// import fs from 'fs';
import diff from '../src/diff.js';
import myExpectedAST from '../__fixtures__/expected/myExpectedAST.js';

const __filename = fileURLToPath(import.meta.url); // Получение текущего файла
const __dirname = path.dirname(__filename); // Получение директории файла
// не использую import.meta.dirname тк использую версию Node.js v18.20.4 ()

// let json1;
// let json2;
// let yml1;
// let yml2;
// let twoFilesStylish;
let myJson1;
let myJson2;
let myYml1;
let myYml2;

beforeAll(() => {
  myJson1 = path.join(__dirname, '../__fixtures__/myFile1.json');
  myJson2 = path.join(__dirname, '../__fixtures__/myFile2.json');
  myYml1 = path.join(__dirname, '../__fixtures__/myFile1.yml');
  myYml2 = path.join(__dirname, '../__fixtures__/myfile2.yml');
  // json1 = path.join(__dirname, '../__fixtures__/file1.json');
  // json2 = path.join(__dirname, '../__fixtures__/file2.json');
  // yml1 = path.join(__dirname, '../__fixtures__/file1.yml');
  // yml2 = path.join(__dirname, '../__fixtures__/file2.yml');
  // eslint-disable-next-line max-len
  // twoFilesStylish = fs.readFileSync(path.join(__dirname, '../__fixtures__/twoFilesStylish.txt'), 'utf-8');
});

test('my json files comparison AST', () => {
  // const result = diff(myJson1, myJson2);
  // console.log('Result:', JSON.stringify(result, null, 2));
  // console.log('Expected:', JSON.stringify(myExpectedAST, null, 2));
  expect(diff(myJson1, myJson2)).toEqual(myExpectedAST);
});

test('my yml files comparison AST', () => {
  expect(diff(myYml1, myYml2)).toEqual(myExpectedAST);
});
