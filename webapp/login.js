(function() {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyA-I9XVJya_5zR-BsXSYct7W8zCxkPh7PM",
        authDomain: "immigrant-news.firebaseapp.com",
        databaseURL: "https://immigrant-news.firebaseio.com",
        projectId: "immigrant-news",
        storageBucket: "immigrant-news.appspot.com",
        messagingSenderId: "598567031572"
    };
    firebase.initializeApp(config);

    // Get elements
    var txtEmail = document.getElementById('txtEmail');
    var txtPassword = document.getElementById('txtPassword');
    var btnLogin = document.getElementById('btnLogin');
    var btnSignUp = document.getElementById('btnSignUp');
    var btnLogout = document.getElementById('btnLogout');

    // Add login events
    btnLogin.addEventListener('click', e => {
       var email = txtEmail.value;
       var password = txtPassword.value;
       var auth = firebase.auth();
       // Sign in
       var promise = auth.signInWithEmailAndPassword(email, password);
       promise.catch(e => console.log(e.message));
    });

    // Add sign up event
    btnSignUp.addEventListener('click', e => {
        var email = txtEmail.value;
        var password = txtPassword.value;
        var auth = firebase.auth();
        // Sign in
        var promise = auth.createUserWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
    });

    // Add log out event
    btnLogout.addEventListener('click', e=> {
        firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        } else {
            console.log('not logged in');
            btnLogout.classList.add('hide');
        }
    });
}());



const loginModal = document.getElementById('loginModal');

// Change text of login button on login/logout
function toggleText(loginButtonID) {
    
    var logButton = document.getElementById(loginButtonID);

    if(logButton.textContent == "LOGIN")
    {
        logButton.textContent = "LOGOUT";
    }
    else
    {
        logButton.textContent = "LOGIN";
    }
}

// open/close modal
function modalAction() {
    
    loginModal.style.display = loginModal.style.display == "block"? "none" : "block";
}

// Close the modal when clicking outside the modal
window.onclick = function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
};

