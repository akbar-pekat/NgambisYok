const signin = document.getElementById('signin');
let determ;

signin.addEventListener('submit', function(event) {
	event.preventDefault();
	let email = document.querySelector('input#email').value;
	let password = document.getElementById('password').value;

	if( email == '' || email.length < 4 ) {
		alert('Please fill the Email Correctly!');
		return false;
	} else if( password == '' || password.length < 4 ) {
		alert('Please fill the correct password !');
		return false;
	}
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		determ = false;
		var errorCode = error.code;
		var errorMessage = error.message;

		if (errorCode === 'auth/wrong-password') {
			alert('Wrong password.');
		} else {
			alert(errorMessage);
		}
		console.log(error);

		window.location.href = 'signin.html';

	}).then(function() {
		if(determ == false) {
			return false;
		} else {
			window.location.href = 'index.html';
		}
	});

});