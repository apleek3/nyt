// Built by LucyBot. www.lucybot.com

function buildQueryURL() {

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    var queryParams = {"api-key": "d4c747898a304e74822763766ed81eab" };

queryParams.q = $("search-term")
.val()
.trim()

var startYear = $("#start-year")
.val()
.trim()

if (parseInt) 
                

    



    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        console.log(result);
    }).fail(function (err) {
        throw err;
    });





