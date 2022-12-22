# ua-regexes-lite

[![NPM version][npm]][npm-url]
[![Node version][node]][node-url]
[![Build status][build]][build-url]

[npm]: https://img.shields.io/npm/v/ua-regexes-lite.svg
[npm-url]: https://www.npmjs.com/package/ua-regexes-lite

[node]: https://img.shields.io/node/v/ua-regexes-lite.svg
[node-url]: https://nodejs.org

[build]: https://img.shields.io/github/actions/workflow/status/TrigenSoftware/ua-regexes-lite/CI.yml?branch=main
[build-url]: https://github.com/TrigenSoftware/ua-regexes-lite/actions

A lite useragent regexes collection.

## Install

```bash
# yarn
yarn add ua-regexes-lite
# pnpm
pnpm add ua-regexes-lite
# npm
npm i ua-regexes-lite
```

## Usage

```js
import { regexes } from 'ua-regexes-lite';

/**
 * @property {RegExp} regex - Regular expression to match user agent.
 */
regexes[0].regex
/**
 * @property {string} family - caniuse-lite compatible browser family name.
 */
regexes[0].family
/**
 * @property {[number, number, number]} [version] - Fixed browser version.
 */
regexes[0].version
/**
 * @property {[number, number, number]} [minVersion] - Minimum browser version.
 */
regexes[0].minVersion
/**
 * @property {[number, number, number]} [maxVersion] - Maximum browser version.
 */
regexes[0].maxVersion
```
