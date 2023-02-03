const searchValue = $(`#search`);
const submitBtn = $(`#submitBtn`);
const dropBtn = $(`#dropBtn`);
const startYear = $(`#startYear`);
const endYear = $(`#endYear`);
const clearResults = $(`clearResults`);

<<<<<<< HEAD
submitBtn.on(`click`, function (event) {
=======
//grabbing articles div
let articlesDiv = $(".articles");
let searchTerm = "";

submitBtn.on(`click`, function (event){
>>>>>>> a680cb45e11efaefd784628cd98d40e7bf1569e7
    event.preventDefault();
    let searchTerm = searchValue.val();
    console.log(searchTerm);
    //retrieving data via ajax first

//changing url from test to article search API proper
let queryURL = 
    ("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=ARLR7Y6y9Zqrp8NKHTGpWCr4gIOj6L9U");
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response); //this works
        console.log(response.response);
        console.log(response.response.docs);
        //testing path to headline:
        console.log(response.response.docs[0].headline.main);
        //path to abstract:
        console.log(response.response.docs[0].abstract);
        
        //generating elements to hold selected content
    //creating place for article

    
    //div for single article, within Articles div
    let article = $("<div>");
    article.attr("class", "articleResult");
    articlesDiv.append(article);

    //article title in single article div 
    let articleTitle = $("<h2>");
    articleTitle.attr("id","article-title");
    articleTitle.text(response.response.docs[0].headline.main);
    article.append(articleTitle);

    //text for single article in single article div
    let articleText = $("<p>");
    articleText.attr("id", "article-text");
    articleText.text(response.response.docs[0].abstract)
    article.append(articleText);
    })


//need for loop within button click that adds more results depending on dropdown number

//need to clear results between clicks for when topic changes

});

<<<<<<< HEAD
let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=arts&api-key=ARLR7Y6y9Zqrp8NKHTGpWCr4gIOj6L9U";


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    })
=======

>>>>>>> a680cb45e11efaefd784628cd98d40e7bf1569e7


























