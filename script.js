const searchValue = $(`#search`);
const submitBtn = $(`#submitBtn`);
const startYear = $(`#startYear`);
const endYear = $(`#endYear`);
const clearResults = $(`clearResults`);
let option = $("option"); //creates an array, 0-indexed
let selection = option.value;
let limit = "&limit="

// grabbing articles div
let articlesDiv = $(".articles");
let searchTerm = "";

let i


// stores search term in variable
submitBtn.on(`click`, function (event) {
    event.preventDefault();
    let searchTerm = searchValue.val();



    //changing url from test to article search API proper
    let queryURL = ("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=ARLR7Y6y9Zqrp8NKHTGpWCr4gIOj6L9U");


    //retrieving data via ajax first
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        let dropBtn = $(`.dropBtn`).val();

        queryURL = ("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=ARLR7Y6y9Zqrp8NKHTGpWCr4gIOj6L9U" + limit + dropBtn);

        // Loop to create the divs for requested number of article results
        for (i = 0; i < dropBtn; i++) {

            //div for single article, within Articles div
            let article = $("<div>");
            article.attr("class", "articleResult");
            articlesDiv.prepend(article);

            //article title in single article div 
            let articleTitle = $("<h2>");
            articleTitle.attr("id", "article-title");
            articleTitle.text(response.response.docs[i].headline.main);
            article.prepend(articleTitle);

            //text for single article in single article div
            let articleText = $("<p>");
            articleText.attr("id", "article-text");
            articleText.text(response.response.docs[i].abstract)
            article.append(articleText);
        }
    });
})

// clear previous results

//need to clear results between clicks for when topic changes

// if option [i].value = 1, 2, 3, 4, 5 set querurl to limit =
// console.log(option[0].value); //returns "1"
// console.log(option[1].value); //returns "2"


























