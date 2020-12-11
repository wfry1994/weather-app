module.exports = {
	plugins: ['react', 'jest'],
	extends: ['eslint:recommended', 'plugin:react/recommended'],
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
	},
	parser: 'babel-eslint',
}
