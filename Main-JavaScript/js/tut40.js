console.log("Hey Welcome to tut40.js in this we can create a Project3 --Creating a news Website--");

//Initalize the news parameters :-
let sources = "bbc-news";
let apiKey = "f8605d8f5dc94d6291abdc3aa149422e";


//Grab the new container--
let newsAcco = document.getElementById("newsAcco");

//Create an Ajax GET request--
const xhr = new XMLHttpRequest();
xhr.open("GET", `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apiKey}`, true);
xhr.getAllResponseHeaders('Content-type', 'applicatin/json');

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles)
        let  newsHtml = "";
        articles.forEach(function(element,index) {
            // console.log(articles[news]);

            let news = `<div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            <b>Breaking News ${index + 1} </b> ${element.title}
                            </button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse" data-bs-parent="#newsAcco">
                            <div class="accordion-body">${element.content}<a href="${element.url}" target="_blank">Read More here</a></div>
                            </div>
                        </div>`;
             newsHtml += news;
        });
        newsAcco.innerHTML = newsHtml;
    } else {
        console.error('Some error occured');
    }
}

// send the request--
xhr.send();

