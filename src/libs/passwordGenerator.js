/** @format */

const getRandomChars = (text) => {
	return text[Math.floor(Math.random() * text.length)];
};

export const passwordGenerator = (config) => {
	let result = '';

	const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
	const UPPERCASE = LOWERCASE.toUpperCase();
	const NUMBERS = '1234567890';
	const SPECIALS = '<>?!@#$%^&*()_+{}|?:';

	let alphabet = getRandomChars(LOWERCASE);

	if (config.uppercase) {
		alphabet += getRandomChars(UPPERCASE);
		result += getRandomChars(UPPERCASE);
	}
	if (config.numbers) {
		alphabet += NUMBERS;
		result += getRandomChars(NUMBERS);
	}
	if (config.specials) {
		alphabet += SPECIALS;
		result += getRandomChars(SPECIALS);
	}

	for (let i = 0; i < config.size; i++) {
		result += getRandomChars(alphabet);
	}

	return result;
};
