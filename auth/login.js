let determ;

document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

function funLOGIN(){
  var username = document.getElementById("inputUSERNAME").value;
  var email = username+'@ayok.com';
  var password = document.getElementById("inputPASSWORD").value;
  console.log(email+' '+password);
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    determ = false;
    var errorCode = error.code;
    var errorMessage = error.message;
    var close = document.getElementById("modalLOGIN");
    
    if (errorCode === 'auth/user-not-found') {
      close.classList.add("is-active");
      document.getElementById("errormsg").innerHTML = "The username is wrong, please check again";
    } else if (errorCode === 'auth/wrong-password') {
      close.classList.add("is-active");
      document.getElementById("errormsg").innerHTML = "The password is wrong, please check again";
    } else {
      close.classList.add("is-active");
      document.getElementById("errormsg").innerHTML = "System error :v | Fill in the username and password fields first";
    }
    console.log(error);
  });
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      window.location.href = 'app/index.html';
    } else {
      // No user is signed in.
      // console.log('Please Login');
    }
  });
}

function funCLOSE() {
 var close = document.getElementById("modalLOGIN");
  close.classList.remove("is-active");
}