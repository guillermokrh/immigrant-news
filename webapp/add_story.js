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

var drawerEl = document.querySelector('.mdc-persistent-drawer');
var MDCPersistentDrawer = mdc.drawer.MDCPersistentDrawer;
var drawer = new MDCPersistentDrawer(drawerEl);
var myResults = [];


// Page initialize
window.mdc.autoInit();

(function() {
  var tfs = document.querySelectorAll(
    '.mdc-text-field:not([data-demo-no-auto-js])'
  );
  for (var i = 0, tf; tf = tfs[i]; i++) {
    mdc.textField.MDCTextField.attachTo(tf);
  }
})();

// Hamburger Menu
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    drawer.open = !drawer.open;
});
drawerEl.addEventListener('MDCPersistentDrawer:open', function() {
    console.log('Received MDCPersistentDrawer:open');
});
drawerEl.addEventListener('MDCPersistentDrawer:close', function() {
    console.log('Received MDCPersistentDrawer:close');
});


$(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
        $('hide', 'mdc-list-item').not('template').removeClass('hide');
           // ajax call get data from server and append to the div
    }
});

function search_and_display(what) {
   myResults = search_news(what) ;
   show_results(5);
}

/* Search for some word and look it up on all news
   and add those results to the result list */
function search_news(what) {
    var count = 0;
    var result = [];
    var news = {};

    console.log('hello there');
    $('#results-header').text('Results for: ' + what);
    $('.mdc-list-item').not('#template').remove();
    $('.mdc-toolbar-fixed-adjust').removeClass('hide');
    $.getJSON("https://immigrant-news.firebaseio.com/stories.json", function(data) {

        $.each(data, function(key, val) {
            if (JSON.stringify(val).toLowerCase().includes(what.toLowerCase())) {
                news.id = key;
                news.value = val;
                result.push(news);
                console.log(result);

                count++;

                var $t = $('#template').clone();
                $t.prop('id', key);
                $t.find('.ranking').text(val.percentage + '%');
                if (val.percentage > 80) {
                    $t.find('.ranking').addClass('high_ranking');
                } else if (val.percentage < 40) {
                    $t.find('.ranking').addClass('low_ranking');
                } else {
                    $t.find('.ranking').addClass('medium_ranking');
                }
                $t.find('.result-title').text(val.title.substring(0,100));
                $t.find('.result-title').prop('href', 'stories.html?id=' + key);
                $t.find('.mdc-list-item__text__secondary').text(val.description.substring(0,100));
                $t.show();
                $t.appendTo('#search-results-list');
            };
        });

        if (count > 0) {
                $('#results-header').text('Did you mean. . .?');

        }
    });
    
    $('#do_search').hide();
    $('#do_submit').show();
    console.log(result);
    return result;
}

function show_results(limit) {
    var i = 0;
    var news = {};
    console.log('hola');
    console.log(myResults);

    while (i < limit) {
        if (myResults.length >= 0){
            news = myResults[0];
            console.log(news);
            myResults.shift();
            i++;

            var $t = $('#template').clone();
            $t.prop('id', news.id);
            $t.find('.ranking').text(news.value.percentage + '%');
            if (news.value.percentage > 80) {
                $t.find('.ranking').addClass('high_ranking');
            } else if (news.value.percentage < 40) {
                $t.find('.ranking').addClass('low_ranking');
            } else {
                $t.find('.ranking').addClass('medium_ranking');
            }
            $t.find('.result-title').text(news.value.title.substring(0,100));
            $t.find('.result-title').prop('href', 'stories.html?id=' + news.id);
            $t.find('.mdc-list-item__text__secondary').text(news.value.description.substring(0,100));
            $t.removeClass('hide');
            $t.appendTo('#search-results-list');
        } else {
            break;
        }
    }

}



function submit_story(){

    // Get elements
    var submission_title = document.getElementById('submission_title').value;
    var submission_date = document.getElementById('submission_date').value;
    var submission_location = document.getElementById('submission_location').value;
    var submission_description = document.getElementById('submission_description').value;
    var submission_author = "immi2";

    console.log(submission_title);
    console.log(submission_date);
    console.log(submission_location);
    console.log(submission_description);

    var postStory = {
        author: submission_author,
        date: submission_date,
        description: submission_description,
        images: "none",
        location: submission_location,
        no_of_comments: 0,
        percentage: 0,
        title: submission_title
    }

      // Get a key for a new Post.
      var newStoryKey = firebase.database().ref().child('stories').push().key;

      // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {};
      updates['/stories/' + newStoryKey] = postStory;

    console.log("submitting story")
    return firebase.database().ref().update(updates);
 }

    // Add login events
    /*
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
        })
        .catch(function(e) {
            console.log(e.message);
            loginError = document.getElementById('loginError');
            loginError.innerText = "Sorry, the username and/or password are incorrect.";
        });

    });
    */

    // Add sign up event
    /*
    btnSignUp.addEventListener('click', e => {
        var email = txtEmail.value;
        var password = txtPassword.value;
        var auth = firebase.auth();
        // Sign in
        var promise = auth.createUserWithEmailAndPassword(email, password);
        promise
        .then(function() {
            console.log("successfully created account and logged in");
            modalAction();
            toggleLoginText();
        })
        .catch(function(e) {
            console.log(e.message);
            loginError = document.getElementById('loginError');
            loginError.innerText = e;
        });
    });
    */

    // Add log out event
    /*
    btnLogout.addEventListener('click', e=> {
        if(logButton.textContent == "LOGOUT") {
            firebase.auth().signOut();
            toggleLoginText();
        }
    });
    */

    /*
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
            //btnLogout.classList.remove('hide');
        } else {
            console.log('not logged in');
            //btnLogout.classList.add('hide');
        }
    });
    */


//Log-in Code
/*
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
*/
