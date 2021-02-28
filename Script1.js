  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBDdM6H_rpRTNlTZY_SCZvqhKSp1K1dK18",
    authDomain: "signin-55cda.firebaseapp.com",
    projectId: "signin-55cda",
    storageBucket: "signin-55cda.appspot.com",
    messagingSenderId: "208707460267",
    appId: "1:208707460267:web:cbf50ddcafc6176282ebee",
    measurementId: "G-28BXP79M05"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");


}

function signIn() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        alert("Error : " + errorMessage);

        // ...
    });

}




function signOut() {


    auth.signOut();
    alert("Signed Out");


}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.

        var user = firebase.auth().currentUser;

        if (user != null) {

            var email_id = user.email;
            document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

        }

    } else {
        // No user is signed in.

        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";

    }
});

function admin() {

    if (email == "savagegamez227@gmail.com" && password == "Admin123") {
        new Admin.html().Show();
        this.Hide();
    } else {
        alert("Nope");
    }

    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

    if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
    }
}
