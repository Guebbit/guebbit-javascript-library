// @ts-check
/* eslint-env node */

//WARNING check .prettierignore, for "src/" and "tests/"

/**
 * An object with Prettier.js options.
 * @type {import('prettier').Options}
 */
const options = {
	jsxBracketSameLine: true,
	quoteProps: 'consistent',
	singleQuote: true,
	trailingComma: 'all',
	useTabs: true,
	tabWidth: 4,
};

module.exports = options;
