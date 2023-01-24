var btnTranslate = document.querySelector("#btn-translate");
var inputDiv = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

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
        .then(json => console.log(json.contents.translated))
        .catch(errorHandler)
    };

btnTranslate.addEventListener("click",clickHandler);

