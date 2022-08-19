var btntranslate =document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-Input");
var outputdiv=document.querySelector("#output");


var serverURL=	"https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
        return serverURL+"?"+"Text="+text;
    }
 
function errorhandler(error){
 console.log("error occured",error);
 alert("something wrong with server! please try again later")

}
  
function clickHandler() {
    var inputText = txtinput.value;



fetch(getTranslationURL (inputText))
    .then(response=>response.json())
    .then(json=> {
        var transaltedtext= json.contents.translated;
        outputdiv.innerText=transaltedtext;
    })
    .catch(errorhandler)
};

    btntranslate.addEventListener("click",clickHandler);