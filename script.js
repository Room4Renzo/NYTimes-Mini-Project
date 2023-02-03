const searchValue = $(`#search`)
const submitBtn = $(`#submitBtn`)

//grabbing articles div
let articlesDiv = $(".articles");
let searchTerm = "";

submitBtn.on(`click`, function (event){
    event.preventDefault();

    let searchTerm = searchValue.val();
    console.log(searchTerm);

    //creating place for article
    let article = $("<div>");
    article.attr("class", "articleResult")
    article.text(searchTerm);
    articlesDiv.append(article);

});

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=arts&api-key=ARLR7Y6y9Zqrp8NKHTGpWCr4gIOj6L9U";


$.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
        console.log(response); //this works
    })



























