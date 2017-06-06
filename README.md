# TypeScript Projects Boilerplate

This project is a simple boilerplate to start new projects in TypeScript. It includes testing, code coverage mocks and related configuration, including the integration with Travis CI. The latter, at the end of the process, increments the version, creates a new release on Github and publishes the package to NPM registry.

The project is configured to put built sources into the `dist` directory, while compiled tests are kept in the `test` directory.
Tests can be written in TypeScript or JavaScript.

See `package.json` to discover all the defined scripts.



---

Prerequisites
--------------

1. a [Github](https://github.com/) account and repository;
2. a [Travis CI](https://travis-ci.org/) account, configured to use your Github repos;
3. a [Coveralls](https://coveralls.io/) account, with your Github repository imported and enabled;
4. Install [`npm install -g semantic-release-cli`](https://www.npmjs.com/package/semantic-release-cli) and then run: `semantic-release-cli setup`. 

Follow the instructions and answer to questions to configure semantic release.

---

The Workflow
------------

1. Write code and tests;
2. `npm run build`;
3. `npm test`;

OR

2. Run `npm run precommit`;
3. goto 1   ;)

When ready to create a new version:

4. `git add <your modified files>`;
5. `npm run commit`;
6. `git push`.

The latter step fires an event for Travis CI which reads the `.travis.yml` configuration file, builds and tests the code and if all is ok the it publishes the new version of the package.  




---


License - "MIT License"
-----------------------

Copyright (c) 2017 Antonio Pintus

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.