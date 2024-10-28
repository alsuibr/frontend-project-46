#!/usr/bin/env node
import { Command } from 'commander';
import { resolve } from 'path';
import parse from './src/parser.js';

const gendiff = new Command();

gendiff
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    const fullpaths = [filepath1, filepath2].map((path) => resolve(path));
    const parsedFile1 = parse(fullpaths[0]);
    const parsedFile2 = parse(fullpaths[1]);
    // пока не дописана функция тк не поняла, что еще она должна делать
  });
gendiff.parse(process.argv);
