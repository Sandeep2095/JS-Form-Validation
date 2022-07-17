function validate() {
	let username = document.getElementById('username').value;
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	let cpassword = document.getElementById('cpassword').value;

	checkusername(username);
	checkemail(email);
	checkpassword(password);
	checkcpassword(cpassword);
}

// username field function

function checkusername(username) {
	if (username.length > 7) {
		document.getElementById('username').classList.add('success');
		document.getElementById('username').classList.replace('error', 'success');
		document.getElementById('username_errors').innerHTML = '';
	} else {
		document.getElementById('username').classList.add('error');
		document.getElementById('username_errors').innerText =
			'username must be 8 letter long';
	}
}

// email field function

function checkemail(email) {
	if (email.length > 7 && email.includes('@gmail')) {
		document.getElementById('email').classList.add('success');
		document.getElementById('email').classList.replace('error', 'success');
		document.getElementById('email_errors').innerHTML = '';
	} else {
		document.getElementById('email').classList.add('error');
		document.getElementById('email_errors').innerText =
			'Enter Valid Email Address';
	}
}

// password field function

function checkpassword(password) {
	if (password.length > 7 && password.includes('#')) {
		document.getElementById('password').classList.add('success');
		document.getElementById('password').classList.replace('error', 'success');
		document.getElementById('password_errors').innerHTML = '';
	} else {
		document.getElementById('password').classList.add('error');
		document.getElementById('password_errors').innerHTML =
			'password must be 8 letter long and should includes (#)';
	}
}

// confirm password field function
function checkcpassword(cpassword, password) {
	if (cpassword == password) {
		document.getElementById('cpassword').classList.add('success');
		document.getElementById('cpassword').classList.replace('error', 'success');
		document.getElementById('cpassword_errors').innerHTML = '';
	} else {
		document.getElementById('cpassword').classList.add('error');
		document.getElementById('cpassword_errors').innerHTML =
			'passwords not matched';
	}
}

console.log(cpassword, password);
