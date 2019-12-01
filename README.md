## forceable-tty

Sets `process.std(in/out/err).isTTY` to true basing on env vars.

### Usage

Include `require('forcable-tty').override();`
in your code. 
Then you can use `FORCE_STDIN_TTY=1`, `FORCE_STDOUT_TTY=1` or `FORCE_STDIN_TTY=1` env variable to get required outcome.


### Example

```
[~/forceable-tty] echo test | ./example/example.js 
process.stdin.isTTY: undefined
process.stdout.isTTY: true
process.stderr.isTTY: true

[~/forceable-tty] echo test | FORCE_STDIN_TTY=1 ./example/example.js 
process.stdin.isTTY: true
process.stdout.isTTY: true
process.stderr.isTTY: true
```

### Licence

[![license](https://img.shields.io/badge/license-MIT-green.svg)](/LICENSE)

This project is licensed under the terms of the [MIT license](/LICENSE).

### Credits 

This piece of code was authored by @brian-mann and @bahmutov and published in [cypress](https://github.com/cypress-io/cypress) under MIT license. As it solves an issue I had with testing on some CI that uses windows, I've republished it as small separate package I could use in my code. Big thanks to them!.