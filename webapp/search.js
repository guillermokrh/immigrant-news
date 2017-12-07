var map;
var geocoder;
var drawerEl = document.querySelector('.mdc-persistent-drawer');
var MDCPersistentDrawer = mdc.drawer.MDCPersistentDrawer;
var myResults = [];
var mapMarkers = [];

$("#mainsearchbox").keypress(function(event) {
    if (event.which == 13) {
        $("#do_search").click();
    }
});

$(window).scroll(function() {
    
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
        $('.hide, .mdc-list-item').not('#template').first().removeClass('hide');;
    }
});

function show_map() {
    $('#map-tab').addClass('mdc-tab--active');
    $('#list-tab').removeClass('mdc-tab--active');
    $('#newsmap').show();
    $('#newslist').hide();
};

function show_list() {
    $('#list-tab').addClass('mdc-tab--active');
    $('#map-tab').removeClass('mdc-tab--active');
    $('#newsmap').hide();
    $('#newslist').show();    
};

function addNewsToMap(address, verified, contentString) {
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
          

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });          
          
        
        // map.setCenter(results[0].geometry.location);
        
        if (verified<0) {
            var image = 'img/red-marker.png';
        }
        
        if (verified==0) {
            var image = 'img/yellow-marker.png';
        }

        if (verified>0) {
            var image = 'img/green-marker.png';
        }

        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            icon: image
        });
        
        mapMarkers.push(marker);
        
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
};

function advanced_search(what) {
    $("#adv-search-switch").click();
    search_and_display(what);
    
};

function clearAllMarkers(){
    for (var i = 0; i < mapMarkers.length; i++) {
        mapMarkers[i].setMap(null);
    };
    
    mapMarkers = [];
}

/* Search for some word and look it up on all news 
   and add those results to the result list */
function search_and_display(what, panel) {
    var count = 0;
    var result = [];
    var news = {};
    var validation_status;

    clearAllMarkers();
                
    $('#results-header').text('Results for: ' + what);
    $('.mdc-list-item').not('#template').remove();
    $('.mdc-toolbar-fixed-adjust').removeClass('hide');
    $.getJSON("https://immigrant-news.firebaseio.com/stories.json", function(data) {
        
        $.each(data, function(key, val) {
            if (JSON.stringify(val).toLowerCase().includes(what.toLowerCase())) {
                count++;
                
                var $t = $('#template').clone();
                $t.prop('id', key);
                
                var validity_index = 0;
                 
                $.each(val.validations, function(key, val) {
                    if (val.vote=='valid') {
                        validity_index = validity_index + 1;    
                    } else {
                        validity_index = validity_index - 1;
                    };
                
                });                
                
                if (validity_index > 0) {
                    $t.find('#news-ranking').addClass('upvoted').text('+' + validity_index);
                    $t.addClass('upvoted');
                    validation_status = 'true';
                };
                
                if (validity_index < 0) {
                    $t.find('#news-ranking').addClass('downvoted').text(validity_index);
                    $t.addClass('downvoted');
                    validation_status = 'false';
                };
                
                if (validity_index == 0) {
                    $t.find('#news-ranking').addClass('novoted').text(validity_index);
                    $t.addClass('novoted');
                    validation_status = 'unverified';
                };                

                $t.find('.result-title').text(val.title.substring(0,100));
                $t.find('.result-title').prop('href', 'stories.html?id=' + key.replace('story',''));
                // $t.find('.mdc-list-item__text__secondary').text(val.description.substring(0,100));
                
                if (count < 10) {
                    $t.removeClass('hide');    
                };
                
                $t.appendTo('#search-results-list');
                


                 var contentString = '<div id="content">' +
                            '<div id="siteNotice">' +
                            '</div>' +
                            '<h2 id="firstHeading" class="firstHeading">' + val.title + '</h2>' +
                            '<h3>Status: ' + validation_status + '</h3>' +
                            '<div id="bodyContent">' +
                            '<p>' + val.description + '</p>' +
                            '<p>See <a href="stories.html?id=' + key.replace('story', '') + '">' + 
                            'the complete post</a></p>' +
                            '</div>' +
                            '</div>';


                addNewsToMap(val.location, validity_index, contentString);

            };
        });
        
        
        if (count > 0) {
                $('#results-header').text('Results for: ' + what);
                $('#showmoreresults').removeClass('hide');
                $('#results-footer').text(count + ' results found');
        } else {
            $('#showmoreresults').hide();
            $('#results-footer').removeClass('hide').text(count + ' results found');
        }
    });
    
    if (panel=='map') {
      $('#map-tab').click();
    } else {
      $('#list-tab').click();
    };
}

function show_more_results(count) {
    if (count > 0) {
        $('.hide.mdc-list-item').not('#template').first().removeClass('hide');  
        setTimeout(function(){
           show_more_results(count -1);
        }, 70);
    };

    if ($('.hide.mdc-list-item').not('#template').length == 0) {
        $('#showmoreresults').hide();
        $('#results-footer').removeClass('hide').text(count + ' results found');

    }
}
    
function toggleAdvancedSearch() {
    // $('#advanced_search_form').slideToggle();
    $('#simple-search-box').slideToggle();
    $('.srch').toggle();
}


 