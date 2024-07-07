/** @license Apache-2.0 */

'use strict';

/**
* Evaluate the inverse of the incomplete beta function.
*
* @module @stdlib/math-base-special-kernel-betaincinv
*
* @example
* var kernelBetaincinv = require( '@stdlib/math-base-special-kernel-betaincinv' );
*
* var y = kernelBetaincinv( 3.0, 3.0, 0.2, 0.8 );
* // returns [ ~0.327, ~0.673 ]
*
* y = kernelBetaincinv( 3.0, 3.0, 0.4, 0.6 );
* // returns [ ~0.446, ~0.554 ]
*
* y = kernelBetaincinv( 1.0, 6.0, 0.4, 0.6 );
* // returns [ ~0.082, ~0.918 ]
*
* y = kernelBetaincinv( 1.0, 6.0, 0.8, 0.2 );
* // returns [ ~0.235, ~0.765 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
