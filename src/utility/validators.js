export const validateEmail = function(value) {
	console.log();
	return Boolean(
		String(value).length > 0 &&
			String(value).match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
	);
};

export const validateName = function(value) {
	return Boolean(String(value).match(/^[a-z ,.'-]+$/i));
};

export const validateMessage = function(value) {
	return Boolean(String(value).length > 0);
};
