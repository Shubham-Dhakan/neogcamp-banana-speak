var btnTranslate = document.querySelector("#btn-translate");
var inputDiv = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/minion.json"

//var url = "https://api.funtranslations.com/translate/australian.json"

function getTranslationURL(Text) {
    return url + "?" + "text=" + Text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try another time")
}
    
function clickHandler() {
    var inputText = inputDiv.value;
    fetch(getTranslationURL(inputText))
        .then(respone => respone.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
                        };

btnTranslate.addEventListener("click",clickHandler);

