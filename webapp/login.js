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
    var btnLogout = document.getElementById('logButton');

    // Add login events
    btnLogin.addEventListener('click', e => {
       var email = txtEmail.value;
       var password = txtPassword.value;
       var auth = firebase.auth();
       // Sign in
       var promise = auth.signInWithEmailAndPassword(email, password);
       promise
        .then(function() {
            console.log("successfully logged in");
            modalAction();
            toggleLoginText();
            displayUserAvatar();
        })
        .catch(function(e) {
            console.log(e.message);
            loginError = document.getElementById('loginError');
            loginError.innerText = "Sorry, the username and/or password are incorrect.";
        });
    });

    // Add sign up event
    btnSignUp.addEventListener('click', e => {
        var email = txtEmail.value;
        var password = txtPassword.value;
        var auth = firebase.auth();
        // Sign in
        var promise = auth.createUserWithEmailAndPassword(email, password);
        promise
        .then(function() {
            var newUser = firebase.auth().currentUser.email;
            addUser(newUser);
            console.log("successfully created account, " + newUser + ", and logged in");
            modalAction();
            toggleLoginText();
        })
        .catch(function(e) {
            console.log(e.message);
            loginError = document.getElementById('loginError');
            loginError.innerText = e;
        });
    });

    // Add log out event
    btnLogout.addEventListener('click', e=> {
        if(logButton.textContent == "LOGOUT") {
            firebase.auth().signOut();
            toggleLoginText();
            avatar.classList.add('hide');
        }
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
        } else {
            console.log('not logged in');
        }
    });
}());



var loginModal = document.getElementById('loginModal');
var logButton = document.getElementById('logButton');

// Change text of login button on login/logout
function toggleLoginText() {
    
    logButton.textContent = logButton.textContent == "LOGIN" ? "LOGOUT" : "LOGIN";
}

// open/close modal
function modalAction() {
    
    if(logButton.textContent == "LOGIN")
        loginModal.style.display = loginModal.style.display == "block"? "none" : "block";
}

// Close the modal when clicking outside the modal
window.onclick = function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
};

// Add user to database with anonymous animal avatar
function addUser(email) {

    // Find first unused avatar and set to user
    var avatar = firebase.database().ref().once("value", function(snapshot) {
        var avatarList = snapshot.val().avatars;
        var avatars = Object.keys(avatarList);
        for(var i = 0; i < avatars.length; i++)
        {
            var currAvatar = avatars[i];
            if(avatarList[currAvatar].used == false) {
                console.log("In func " + currAvatar);
                i = avatars.length;
                }
        }
    
        // Add currAvatar as username and email     
        firebase.database().ref('users/' + currAvatar).set({
        email: email,
        rating: 0
        });

        // Update avatar as used
        var avatarRef = firebase.database().ref("avatars/" + currAvatar);
        avatarRef.update({
            "used" : true
        });

        // Display user avatar
        var avatar = document.getElementById('avatar');
        avatar.classList.remove('hide');
        avatar.src = 'img/avatars/' + currAvatar + '.png';

    });
}

// Get user avatar and display
function displayUserAvatar() {
    var userEmail = firebase.auth().currentUser.email;
    // Find user avatar
    var userAvatar = firebase.database().ref().once("value", function(snapshot) {
        var userList = snapshot.val().users;
        var users = Object.keys(userList);
        for(var i = 0; i < users.length; i++)
        {
            var currUser = users[i];
            console.log("Looking for email: " + userEmail + "    current at email: " + userList[currUser].email);
            console.log("currUser: " + currUser);
            if(userList[currUser].email == userEmail) {
                console.log("In func" + userEmail + "  matches  " + userList[currUser].email);
                i = users.length;
                }
        }
        // Display user avatar
        var avatar = document.getElementById('avatar');
        avatar.classList.remove('hide');
        avatar.src = 'img/avatars/' + currUser + '.png';            
    });
}