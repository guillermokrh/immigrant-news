var drawerEl = document.querySelector('.mdc-persistent-drawer');
var MDCPersistentDrawer = mdc.drawer.MDCPersistentDrawer;
var drawer = new MDCPersistentDrawer(drawerEl);
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    drawer.open = !drawer.open;
});
drawerEl.addEventListener('MDCPersistentDrawer:open', function() {
    console.log('Received MDCPersistentDrawer:open');
});
drawerEl.addEventListener('MDCPersistentDrawer:close', function() {
    console.log('Received MDCPersistentDrawer:close');
});

$("#mainsearchbox").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#do_search").click();
    }
});

function say() {
    alert("hello");
}

function search_news(what) {
    $(".search-results-list").empty();
    $.getJSON("https://immigrant-news.firebaseio.com/stories.json", function(data) {
        var items = [];
        var i = 0;
        $.each(data, function(key, val) {
            console.log(key);
            console.log(val);
            if (JSON.stringify(val).toLowerCase().includes(what.toLowerCase())) {
                items.push("<li class='mdc-list-item' id='" + key + "'> <img class='mdc-list-item__start-detail' src='img/percent.png' width='56' height='56'>" +
                    val.title +
                    "<a  class='mdc-list-item__end-detail material-icons resultNav' style='text-decoration: none;color='#000';' href='https://preview.c9users.io/dihara/test/immigrant-news/webapp/story.html?id=" +
                    key + "' aria-label='Add to favorites' title='Add to favorites' onclick='alert(&quot;you like it! you really like it!&quot;);'> star_border </a> </li>");
            }
        });


        $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo(".search-results-list");
    });
}
