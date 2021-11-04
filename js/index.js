var text = document.querySelector('.text')

var omina="Omina";
console.log(typeof girlName); 

var miss="To the moon and back"
console.log(typeof miss);

var yes="Ha"

alert ("Hurmatli Little Prince, marhamat qilib ba'zi savollarga javob bersangiz 😀");

alert("Aytkancha javoblarni katta harf bilan kiriting 🤓") 

var girlName=prompt("Sevgan qizingizni ismini kiring");

if(girlName !== omina){
    text.textContent = "Kim u chunmadim 😫" 
    text.style.color = "black"
} else{
    text.textContent = "Voyy rostanmi men ham 😊" 
    text.style.color = 'black'
}
console.log(text);

alert ('Siz ham sog`indingizmi?')

var missing = prompt("Unday bo`lsa qayerdan qayergacha? 😅")
if(missing !== miss){
    text.textContent = "iy 😕 " 
    text.style.color = "black" 
} else{
    text.textContent = "Xixixix 🤪"
    text.style.color = 'black'
}
console.log(text);

var ask = prompt("Sizga yoqtimi? 😀")
if(ask !== yes){
    text.textContent = "Vayy yalamas milida 😞" 
    text.style.color = "black" 
} else{
    text.textContent = "Demak 5 ta lasm qarszsz 🤪  HOZZIROQ TO'LANG 🥳😙  yahhhahaha😝"
    text.style.color = 'black'
}

console.log(text);
 
