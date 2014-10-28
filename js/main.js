$(function() {
    $.ajax({
        url: 'http://feeds.delicious.com/v2/json/jpsear',
        dataType: 'jsonp',
        success: function(data) {
            if (data) {
                //$('rss-links').append(data.d);
                //$.each(data, function(key, value) {
                //    console.log(key + value);
                //});

                for(i = 0; i < data.length; i++) {
                    console.log(data[i]);
                    $('.rss-links').append(JSON.stringify(data[i]));

                }
                //
                //$.each(data, function() {
                //    console.log(data);
                //});
            }
        }
    });
});