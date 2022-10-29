# mernopex1
OpenBootcamp MERN Course Exercise 1:

DevDependencies what they do:

-@types/express: This package contains type definitions for Express
-@types/jest: This package contains type definitions for Jest
-@types/node:  This package contains type definitions for Node
-@typescript-eslint/eslint-plugin: An ESLint plugin which provides lint rules for TypeScript codebases.
-concurrently: Run multiple commands concurrently
-eslint: ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code
-eslint-config-standard-with-typescript: An ESLint shareable config for TypeScript that is based on eslint-config-standard and has TypeScript specific rules from @typescript-eslint/eslint-plugin.
-eslint-plugin-import: This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.
-eslint-plugin-n: Additional ESLint's rules for Node.js
-eslint-plugin-promise: Enforce best practices for JavaScript promises.
-jest: Delightful JavaScript Testing
-nodemon: Nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
-serve: helps you serve a static site, single page application or just a static file (no matter if on your device or on the local network). It also provides a neat interface for listing the directory's contents
-supertest: The motivation with this module is to provide a high-level abstraction for testing HTTP, while still allowing you to drop down to the lower-level API provided by superagent.
-ts-jest: It supports all features of TypeScript including type-checking in Jest.
-ts-node: It supports all features of Node.js including type-checking in Jest.
-typescript: TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript.
-webpack: Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
-webpack-cli: webpack CLI provides a flexible set of commands for developers to increase speed when setting up a custom webpack project.
-webpack-node-externals: Webpack allows you to define externals - modules that should not be bundled.
-webpack-shell-plugin: This plugin allows you to run any shell commands before or after webpack builds. This will work for both webpack and webpack-dev-server. Goes great with running cron jobs, reporting tools, or tests such as selenium, protractor, phantom, ect.

Scripts what they do:

-"build": "npx tsc",
-"start": "node dist/index.js",
-"dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\"",
-"test": "jest",
-"serve:coverage": "npm run test && cd coverage/lcov-report && npx serve"
  
