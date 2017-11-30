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

$("#mainsearchbox").keypress(function(event) {
    if (event.which == 13) {
        $("#do_search").click();
    }
});

/* Search for some word and look it up on all news 
   and add those results to the result list */
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
                
                "<span class='mdc-list-item__text'> " + 
                "<a href='story.html?id=" +
                    key + 
                    "' > " +
                  val.title + 
                  "</a> <span class='mdc-list-item__text__secondary'>" + 
                  "Secondary text" +
                  "</span> </span>" +
                    "<a  class='mdc-list-item__end-detail material-icons resultNav' style='text-decoration: none;color='#000';' href='story1.html?id=" +
                    key + "' aria-label='Add to favorites' title='Add to favorites' onclick='alert(&quot;you like it! you really like it!&quot;);'> star_border </a> </li>");
            }
        });


        $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo(".search-results-list");
    });
}
