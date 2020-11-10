const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const showError = (input, message) => {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
};

const showSuccess = (input) => {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
};

const isValidEmail = (email) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

form.addEventListener('submit', (e) => {
	e.preventDefault();

	if (username.value.length === 0) {
		showError(username, 'User name is required');
	} else {
		showSuccess(username);
	}

	if (email.value.length === 0) {
		showError(email, 'E-mail is required');
	} else if (!isValidEmail(email.value)) {
		showError(email, 'E-mail is not valid');
	} else {
		showSuccess(email);
	}

	if (password.value.length === 0) {
		showError(password, 'Password is required');
	} else {
		showSuccess(password);
	}

	if (password2.value.length === 0) {
		showError(password2, 'Password confirm is required');
	} else {
		showSuccess(password2);
	}
});
