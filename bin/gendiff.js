#!/usr/bin/env node
import { Command } from 'commander';
import getFormat from './src/getFormat';
import getFullPath from './src/getFullPath.js';
import parse from './src/parser.js';
import readFile from './src/reader'

const gendiff = new Command();

gendiff
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    const fullPath1 = getFullPath(filepath1);
    const fullPath2 = getFullPath(filepath2);
    const content1 = readFile(filepath1);
    const content2 = readFile(filepath2);
    const format1 = getFormat(filepath1);
    const format2 = getFormat(filepath2);
    const parsedFile1 = parse(content1, format1);
    const parsedFile2 = parse(content2, format2);
    // пока не дописана функция тк не поняла, что еще она должна делать
  });
gendiff.parse(process.argv);
