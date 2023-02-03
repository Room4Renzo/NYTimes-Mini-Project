const searchValue = $(`#search`);
const submitBtn = $(`#submitBtn`);
const dropBtn = $(`#dropBtn`);
const startYear = $(`#startYear`);
const endYear = $(`#endYear`);
const clearResults = $(`clearResults`);

submitBtn.on(`click`, function (event) {
    event.preventDefault();

    let searchTerm = searchValue.val();

    console.log(searchTerm);

});

let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=arts&api-key=ARLR7Y6y9Zqrp8NKHTGpWCr4gIOj6L9U";


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    })


























