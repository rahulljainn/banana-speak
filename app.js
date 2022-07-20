var btntranslate =document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-Input");
var outputdiv=document.querySelector("#output");


var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
        return serverURL+"?"+"text"+text
    }
 
 
function clickHandler() {
    var inputText = txtinput.value;

fetch(getTranslationURL (inputText))
    .then(response=>response.json())
    .then(json=> {
        var transaltedtext= console.log(json.contents.translated);
        outputdiv.innerText=transaltedtext;
    })
};

    btntranslate.addEventListener("click",clickHandler);