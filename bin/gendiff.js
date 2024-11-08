#!/usr/bin/env node
import { Command } from 'commander';
import getFormat from '../src/getFormat.js';
import getFullPath from '../src/getFullPath.js';
import parse from '../src/parser.js';
import readFile from '../src/reader.js';
import diff from '../src/diff.js';

const gendiff = new Command();

gendiff
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const fullPath1 = getFullPath(filepath1);
    const fullPath2 = getFullPath(filepath2);
    const content1 = readFile(fullPath1);
    const content2 = readFile(fullPath2);
    const format1 = getFormat(filepath1);
    const format2 = getFormat(filepath2);
    const object1 = parse(content1, format1);
    const object2 = parse(content2, format2);
    console.log(diff(object1, object2));
    // пока не дописаны функции
  });
gendiff.parse(process.argv);
