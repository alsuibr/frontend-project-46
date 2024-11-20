#!/usr/bin/env node
import { Command } from 'commander';

import diff from '../src/diff.js';

const gendiff = new Command();

gendiff
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    //console.log('Arguments:', filepath1, filepath2); // Отладка
    console.log(diff(filepath1, filepath2));
  });

gendiff.parse(process.argv);