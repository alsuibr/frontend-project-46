import path from 'path';
import { fileURLToPath } from 'url';
import diff from '../src/diff.js';

const __filename = fileURLToPath(import.meta.url); // Получение текущего файла
const __dirname = path.dirname(__filename); // Получение директории файла

const expect1 = `{
  host : hexlet.io
- timeout : 50
+ timeout : 20
- proxy : 123.234.53.22
- follow : false
+ verbose : true
}`;

const expect2 = `{
  host : hexlet.io
  timeout : 50
  proxy : 123.234.53.22
  follow : false
}`;

const expect3 = `{
- host : hexlet.io
- timeout : 50
- proxy : 123.234.53.22
- follow : false
}`;

const expect4 = `{
+ host : hexlet.io
+ timeout : 50
+ proxy : 123.234.53.22
+ follow : false
}`;

test('two plain objects', () => {
  const filePath1 = path.join(__dirname, '../__fixtures__/file1.json');
  const filePath2 = path.join(__dirname, '../__fixtures__/file2.json');
  const filePath3 = path.join(__dirname, '../__fixtures__/file3Empty.json');

  expect(diff(filePath1, filePath2)).toEqual(expect1);
  expect(diff(filePath1, filePath1)).toEqual(expect2);
  expect(diff(filePath1, filePath3)).toEqual(expect3);
  expect(diff(filePath3, filePath1)).toEqual(expect4);
});
