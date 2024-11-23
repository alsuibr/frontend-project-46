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

const expect5 = `{

}`;

const plainJson1 = path.join(__dirname, '../__fixtures__/plainFile1.json');
const plainJson2 = path.join(__dirname, '../__fixtures__/plainFile2.json');
const emptyJson = path.join(__dirname, '../__fixtures__/empty.json');
const plainYml1 = path.join(__dirname, '../__fixtures__/plainFile1.yml');
const plainYml2 = path.join(__dirname, '../__fixtures__/plainFile2.yml');
const emptyYml = path.join(__dirname, '../__fixtures__/empty.yml');

test('plain json files', () => {
  expect(diff(plainJson1, plainJson2)).toEqual(expect1);
  expect(diff(plainJson1, plainJson1)).toEqual(expect2);
  expect(diff(plainJson1, emptyJson)).toEqual(expect3);
  expect(diff(emptyJson, plainJson1)).toEqual(expect4);
});

test('plain yml files', () => {
  expect(diff(plainYml1, plainYml2)).toEqual(expect1);
  expect(diff(plainYml1, plainYml1)).toEqual(expect2);
  expect(diff(plainYml1, emptyYml)).toEqual(expect3);
  expect(diff(emptyYml, plainYml1)).toEqual(expect4);
});

test('plain json and yml files', () => {
  expect(diff(plainYml1, plainJson2)).toEqual(expect1);
  expect(diff(plainYml1, plainJson1)).toEqual(expect2);
  expect(diff(plainYml1, emptyJson)).toEqual(expect3);
  expect(diff(emptyYml, plainJson1)).toEqual(expect4);
  expect(diff(emptyYml, emptyJson)).toEqual(expect5);
});
