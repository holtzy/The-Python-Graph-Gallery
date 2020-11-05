'use strict';
const {htmlEscape} = require('escape-goat');

module.exports = (template, data) => {
	if (typeof template !== 'string') {
		throw new TypeError(`Expected a \`string\` in the first argument, got \`${typeof template}\``);
	}

	if (typeof data !== 'object') {
		throw new TypeError(`Expected an \`object\` or \`Array\` in the second argument, got \`${typeof data}\``);
	}

	const doubleBraceRegex = /{{(.*?)}}/g;

	if (doubleBraceRegex.test(template)) {
		template = template.replace(doubleBraceRegex, (_, key) => {
			let result = data;

			for (const property of key.split('.')) {
				result = result ? result[property] : '';
			}

			return htmlEscape(String(result));
		});
	}

	const braceRegex = /{(.*?)}/g;

	return template.replace(braceRegex, (_, key) => {
		let result = data;

		for (const property of key.split('.')) {
			result = result ? result[property] : '';
		}

		return String(result);
	});
};
