<h1 align="center">Coding Challenge Twig Education</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/nai-young" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

## Table of contents

* [General info](#description)
* [Setup](#execute)
* [Import and Export](#import-and-export)
* [Class ES6](#class-alternative)

<br/>

> ## Description
>
> JS Script that returns a divided array into N given number of arrays.
>
> The code is written following latest ECMAScript6 standard syntax, using Prettier extension to automatically remove semicolons from the project code since JavaScirpt does not strictly require them.
>
>
> Challenge destructuring:
>
> - Given array length is greater or iqual than 0
>
> - Given N number is a positive integer
>
> - The final array should have the given remainder length
>
> - The size of the original array is not divided equally by N
>
> - Prevent mutation of the original array

<br/>

### ℹ️ [Source code](https://github.com/nai-young/coding_challenge/script.js)

<br/>

## Execute

---
To run this project, fork this repository and start it locally using node:

```sh
node script.js
```

<br/>

## Usage

---

```javascript
groupArrayElements([1, 2, 3, 4, 5], 3)
// returns: [[1, 2], [3, 4], [5]]

groupArrayElements([], 3)
// returns: [[], [], []]
```

<br/>

### Import and Export

---

To import the JS function or class as module from a external file, use the .mjs extension to export:

```javascript
// script-class.mjs

class Grouped () {
  ...
}

export { Grouped }
```

Import module and create a new instance:

```javascript
// main.js

import { Grouped } from './script-class'

const instance = new Grouped()
instance.groupArrayElements([1, 2, 3], 2)
```
<br/>

## Class Alternative

---

You can find a script-class.js file with a Class function script alternative.

<br/>

## Author details

---

### ✨ **Naiche Lorenzana Young**

* Portfolio: naicheyoung.com
* LinkedIn: [@naicheyoung](https://linkedin.com/in/naicheyoung)
* Github: [@nai-young](https://github.com/nai-young)


