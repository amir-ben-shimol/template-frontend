module.exports = {
	'src/**/*.{ts,tsx,js,jsx,cjs}': ['pnpm exec eslint -c ./.eslintrc.cjs --ignore-path ./.eslintignore --fix', () => 'tsc --noEmit'],
	'src/**/*.scss': 'stylelint --config ./stylelint.config.cjs --fix',
	'src/**/*.{ts,tsx,js,jsx,cjs,json,yaml}': 'prettier --write',
};
