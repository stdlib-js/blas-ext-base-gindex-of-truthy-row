<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# gindexOfTruthyRow

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the index of the first row in an input matrix which contains at least one truthy element.



<section class="usage">

## Usage

```javascript
import gindexOfTruthyRow from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gindex-of-truthy-row@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { ndarray } from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gindex-of-truthy-row@deno/mod.js';
```

#### gindexOfTruthyRow( order, M, N, A, LDA )

Returns the index of the first row in an input matrix which contains at least one truthy element.

<!-- eslint-disable max-len -->

```javascript
/*
    A = [
        [ 0.0, 0.0, 0.0, 0.0 ],
        [ 1.0, 0.0, 1.0, 1.0 ],
        [ 1.0, 1.0, 1.0, 1.0 ],
        [ 0.0, 0.0, 0.0, 0.0 ]
    ]
*/
var A = [ 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0 ];

var out = gindexOfTruthyRow( 'row-major', 4, 4, A, 4 );
// returns 1
```

The function has the following parameters:

-   **order**: storage layout.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **A**: input matrix as a linear array.
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).

If the function is unable to find a row with at least one truthy element, the function returns `-1`.

```javascript
var A = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

var out = gindexOfTruthyRow( 'row-major', 4, 2, A, 2 );
// returns -1
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments, max-len -->

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

// Initial array:
var A0 = new Float64Array( [ 9999.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset view:
var A1 = new Float64Array( A0.buffer, A0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var out = gindexOfTruthyRow( 'row-major', 4, 4, A1, 4 );
// returns 1
```

#### gindexOfTruthyRow.ndarray( M, N, A, strideA1, strideA2, offsetA )

Returns the index of the first row in an input matrix which contains at least one truthy element using alternative indexing semantics.

<!-- eslint-disable max-len -->

```javascript
/*
    A = [
        [ 0.0, 0.0, 0.0, 0.0 ],
        [ 1.0, 0.0, 1.0, 1.0 ],
        [ 1.0, 1.0, 1.0, 1.0 ],
        [ 0.0, 0.0, 0.0, 0.0 ]
    ]
*/
var A = [ 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0 ];

var out = gindexOfTruthyRow.ndarray( 4, 4, A, 4, 1, 0 );
// returns 1
```

The function has the following parameters:

-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **A**: input matrix as a linear array.
-   **strideA1**: stride length for the first dimension of `A`.
-   **strideA2**: stride length for the second dimension of `A`.
-   **offsetA**: starting index for `A`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to start searching from the second element

<!-- eslint-disable max-len -->

```javascript
/*
    A = [
        [ 0.0, 0.0, 0.0, 0.0 ],
        [ 1.0, 1.0, 1.0, 1.0 ],
        [ 1.0, 1.0, 1.0, 1.0 ],
        [ 0.0, 0.0, 0.0, 0.0 ]
    ]
*/
var A = [ 9999.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0 ];

var out = gindexOfTruthyRow.ndarray( 4, 4, A, 4, 1, 1 );
// returns 1
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A row is considered to contain at least one truthy element when at least one element in the row is not equal to `0.0` and is not `NaN`.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array-base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable max-len -->

<!-- eslint no-undef: "error" -->

```javascript
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-to-array@deno/mod.js';
import shape2strides from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@deno/mod.js';
import gindexOfTruthyRow from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gindex-of-truthy-row@deno/mod.js';

var shape = [ 4, 2 ];
var order = 'row-major';
var strides = shape2strides( shape, order );

var A = [ 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0 ];
console.log( ndarray2array( A, shape, strides, 0, order ) );

var out = gindexOfTruthyRow( order, shape[ 0 ], shape[ 1 ], A, strides[ 0 ] );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-gindex-of-truthy-row.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-gindex-of-truthy-row

[test-image]: https://github.com/stdlib-js/blas-ext-base-gindex-of-truthy-row/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-gindex-of-truthy-row/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-gindex-of-truthy-row/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-gindex-of-truthy-row?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-gindex-of-truthy-row.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-gindex-of-truthy-row/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-gindex-of-truthy-row/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-gindex-of-truthy-row/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-gindex-of-truthy-row/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-gindex-of-truthy-row/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-gindex-of-truthy-row/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-gindex-of-truthy-row/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-gindex-of-truthy-row/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-gindex-of-truthy-row/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor/tree/deno

</section>

<!-- /.links -->
