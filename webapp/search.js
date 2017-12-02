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
    $('#template').not('.hide').remove();
    $.getJSON("https://immigrant-news.firebaseio.com/stories.json", function(data) {
        var items = [];
        var i = 0;
        $.each(data, function(key, val) {
            console.log(key);
            console.log(val);
            if (JSON.stringify(val).toLowerCase().includes(what.toLowerCase())) {
               
                 
                var $t = $('#template').clone();
                $t.prop('id', key);
                //$t.children('.mdc-list-item__start-detail').
                $t.find('.result-title').text(val.title);
                $t.find('.result-title').prop('href', 'stories.html?id=' + key);
                $t.find('.mdc-list-item__text__secondary').text(val.description.substring(0,100));
                $t.removeClass('hide');
                $t.appendTo('#search-results-list');
                console.log($t);
                   
            }
        });
    });
}
