const searchValue = $(`#search`);
const submitBtn = $(`#submitBtn`);
const startYear = $(`#startYear`);
const endYear = $(`#endYear`);
const clearResults = $(`clearResults`);
let option = $("option"); //creates an array, 0-indexed
const limit = "&limit="

// grabbing articles div
let articlesDiv = $(".articles");
let searchTerm = "";

// let i


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

        $(function () {
            $(startYear).datepicker({
                showOn: `click`,
                // buttonImage: "./Images\Calendar 50.png",
            })
        })
    })

    let dropBtn = $(`.dropBtn`).val();
    queryURL = ("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=ARLR7Y6y9Zqrp8NKHTGpWCr4gIOj6L9U" + limit + dropBtn);

    //Testing search fields with console logs
    console.log(response)
    console.log(response.response.docs[0].pub_date)



    //Empties previous results
    let article
    $(clearResults).on("click", function () {
        $(articlesDiv).empty();
    });

    // Loop to create the divs for requested number of article results
    for (i = 0; i < dropBtn; i++) {


        //div for single article, within Articles div
        article = $("<div>");
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

// if option [i].value = 1, 2, 3, 4, 5 set querurl to limit =
// console.log(option[0].value); //returns "1"
// console.log(option[1].value); //returns "2"
// Calendar image credit: <a target="_blank" href="https://icons8.com/icon/37877/tear-off-calendar">Tear-Off Calendar</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

























