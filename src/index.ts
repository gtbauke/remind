import { readdir } from 'fs/promises';
import { Stats, statSync } from 'fs';
import path from 'path';

/*
How I plan on using this tool:
------ cbuild ------

--------------------
*/

const FOLDERS_TO_IGNORE = ['.git', '.vscode', '.vs', '.idea'];
const FILES_TO_IGNORE = ['.gitignore'];

console.log('hello world');
