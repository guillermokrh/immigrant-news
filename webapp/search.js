var drawerEl = document.querySelector('.mdc-persistent-drawer');
var MDCPersistentDrawer = mdc.drawer.MDCPersistentDrawer;
var drawer = new MDCPersistentDrawer(drawerEl);
var myResults = [];

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

                
    $('#results-header').text('Results for: ' + what);
    $('.mdc-list-item').not('#template').remove();
    $('.mdc-toolbar-fixed-adjust').removeClass('hide');
    $.getJSON("https://immigrant-news.firebaseio.com/stories.json", function(data) {
        
        $.each(data, function(key, val) {
            if (JSON.stringify(val).toLowerCase().includes(what.toLowerCase())) {
                news.id = key;
                news.value = val;
                result.push(news);
                
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
                $t.removeClass('hide');
                $t.appendTo('#search-results-list');
            };
        });
        
        if (count > 0) {
                $('#results-header').text('Results for: ' + what + ' ' + count + 'results found');

        }
    });
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