<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Kernel Betaincinv

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Inverse of the lower [incomplete beta function][incomplete-beta-function].

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-kernel-betaincinv
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var kernelBetaincinv = require( '@stdlib/math-base-special-kernel-betaincinv' );
```

#### kernelBetaincinv( a, b, p, q )

Inverts the lower regularized [incomplete beta function][incomplete-beta-function] at `a > 0` and `b > 0`. Input probabilities `p` and `q` must satisfy `p = 1 - q`. The function returns a two-element array holding the function value `y` and `1-y`.

```javascript
var y = kernelBetaincinv( 3.0, 3.0, 0.2, 0.8 );
// returns [ ~0.327, ~0.673 ]

y = kernelBetaincinv( 3.0, 3.0, 0.4, 0.6 );
// returns [ ~0.446, ~0.554 ]

y = kernelBetaincinv( 1.0, 6.0, 0.4, 0.6 );
// returns [ ~0.082, ~0.918 ]

y = kernelBetaincinv( 1.0, 6.0, 0.8, 0.2 );
// returns [ ~0.235, ~0.765 ]
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var kernelBetaincinv = require( '@stdlib/math-base-special-kernel-betaincinv' );

var i;
var p;
var a;
var b;

for ( i = 0; i < 100; i++ ) {
    p = randu();
    a = randu() * 10.0;
    b = randu() * 10.0;
    console.log( 'p: %d, \t a: %d, \t b: %d, \t f(p,a,b): %d', p.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), kernelBetaincinv( a, b, p, 1.0-p )[ 0 ] );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/betaincinv`][@stdlib/math/base/special/betaincinv]</span><span class="delimiter">: </span><span class="description">inverse incomplete beta function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-kernel-betaincinv.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-kernel-betaincinv

[test-image]: https://github.com/stdlib-js/math-base-special-kernel-betaincinv/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-kernel-betaincinv/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-kernel-betaincinv/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-kernel-betaincinv?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-kernel-betaincinv.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-kernel-betaincinv/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-kernel-betaincinv/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-kernel-betaincinv/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-kernel-betaincinv/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-kernel-betaincinv/blob/main/branches.md

[incomplete-beta-function]: https://en.wikipedia.org/wiki/Incomplete_beta_function

<!-- <related-links> -->

[@stdlib/math/base/special/betaincinv]: https://github.com/stdlib-js/math-base-special-betaincinv

<!-- </related-links> -->

</section>

<!-- /.links -->
