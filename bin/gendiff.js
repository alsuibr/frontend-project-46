#!/usr/bin/env node
import { Command } from 'commander';

const gendiff = new Command();

gendiff
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format');
gendiff.parse(process.argv);
