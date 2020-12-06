module.exports = {
	plugins: ['react', 'jest', 'prettier'],
	extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
	env: {
		jest: true,
		node: true,
		browser: true,
		es6: true,
	},
	parserOptions: {
		ecmaversion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			pragma: 'React',
			version: 'detect',
		},
	},
	globals: {
		should: true,
		sinon: true,
	},
	rules: {
		'no-mixed-spaces-and-tabs': 'off',
		'no-unused-vars': 'off',
		'no-console': 'off',
		'prettier/prettier': [
			'error',
			{
				trailingComma: 'es5',
				arrowParens: 'avoid',
			},
		],
	},
	parser: 'babel-eslint',
}
