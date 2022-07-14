let textArea = document.querySelector("#text");
let text=null;

let data= {
  words : 0,
  sentences : 0,
  charecters : 0,
  digits :0,
  vowels : 0,
  consonants : 0,
  upper : 0,
  lower : 0,
};

const setText = () => {
  text = textArea.value;

  const findLength= (i) => (i=== null ? 0 : i.length);

  if(text!=null){
    data.words=findLength(text.match(/[a-zA-Z]+/gi));
    data.sentences=findLength(text.match(/\056/gi));
    data.charecters=findLength(text.match(/[-[/\]{}()@%=!&_'"<>;:*+?.,\\^$|#\s]/gi));
    data.digits=findLength(text.match(/\d/g));
    data.vowels=findLength(text.match(/[aeiou]/gi));
    data.consonants=findLength(text.match(/[bcdfghjklmnpqrstvwxyz]/gi));
    data.upper=findLength(text.match(/[A-Z]/g));
    data.lower=findLength(text.match(/[a-z]/g));


  }
  localStorage.setItem("data",JSON.stringify(data));
  window.location="info.html";

};
const getData = () => {
  return JSON.parse(localStorage.getItem("data"));
};

const showData = () => {
  let data=getData();
  let htmlContent="";
  for (i in data){
    htmlContent+=`<div class="box">
    <h2>${data[i]}</h2>
    <p>${i}</p>
    </div>`;

  }
  document.querySelector(".info-wrapper").innerHTML=htmlContent;

};
