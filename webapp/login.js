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
            displayUserIcon();
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
            document.getElementById('avatar').src = 'img/icons/Unknown.png';
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



const loginModal = document.getElementById('loginModal');
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

    // Find first unused icon and set to user
    var icon = firebase.database().ref().once("value", function(snapshot) {
        var iconList = snapshot.val().icons;
        var icons = Object.keys(iconList);
        for(var i = 0; i < icons.length; i++)
        {
            var currIcon = icons[i];
            if(iconList[currIcon].used == false) {
                console.log("In func " + currIcon);
                i = icons.length;
                }
        }
    
        // Add currIcon as username and email     
        firebase.database().ref('users/' + currIcon).set({
        email: email
        });

        // Update icon as used
        var iconRef = firebase.database().ref("icons/" + currIcon);
        iconRef.update({
            "used" : true
        });

        // Display user icon
        document.getElementById('avatar').src = 'img/icons/' + currIcon + '.png';        
    });
}

// Get user icon and display
function displayUserIcon() {
    var userEmail = firebase.auth().currentUser.email;
    // Find user icon
    var userIcon = firebase.database().ref().once("value", function(snapshot) {
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
        // Display user icon
        document.getElementById('avatar').src = 'img/icons/' + currUser + '.png';            
    });
}