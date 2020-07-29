firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log('Welcome');
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