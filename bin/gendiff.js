#!/usr/bin/env node
import { Command } from 'commander';

import diff from '../src/diff.js';

const gendiff = new Command();

gendiff
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    const format = options.format === true ? 'stylish' : options.format;
    console.log(diff(filepath1, filepath2, format));
  });

gendiff.parse(process.argv);
