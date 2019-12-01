#!/usr/bin/env node

require('../tty').override();

console.log(`process.stdin.isTTY: ${process.stdin.isTTY}`);
console.log(`process.stdout.isTTY: ${process.stdout.isTTY}`);
console.log(`process.stderr.isTTY: ${process.stderr.isTTY}`);