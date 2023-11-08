const chalk = require('chalk');
const figlet = require('figlet');

figlet('Template', (err, figletText) => {
	if (err) {
		return;
	}

	console.log(chalk.bold(figletText));

	console.log(chalk.bold.blue('Welcome to Template frontend repository!!'));

	console.log('🎉✨🎉✨🎉✨🎉✨🎉✨🎉✨🎉✨🎉✨\n');

	console.log(chalk.bold('Please follow these rules:'));

	console.log(chalk.bold.blue('- 📦 Use pnpm instead of npm'));
	console.log(chalk.bold.blue('- 🛂 Follow the code conventions (our linters will enforce you..)'));
	console.log(chalk.bold.blue('- 🚀 Make sure GitHub actions are passed before asking for PR'));
	console.log(chalk.bold.blue('- 📝 Document/Modify your new feature/fix in the README.md file'));
});
