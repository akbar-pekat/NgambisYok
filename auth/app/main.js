firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    //console.log('Welcome');
  } else {
    // No user is signed in.
    window.location.href = '../login.html';
  }
});

function funLOGOUT(){
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    window.location.href = '../login.html';
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });
}

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