
import gendiff from '../src/gendiff';

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
}`

test('two plain objects', () => {
    expect(gendiff(file1.json, file2.json)).toEqual(expect1);
    expect(gendiff(file1.json, file1.json)).toEqual(expect2);
};
