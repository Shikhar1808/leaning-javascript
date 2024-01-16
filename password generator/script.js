let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbols = "!@#$%&*.~"
let numbers = "1234567890"
// console.log(lowercase);
// console.log(uppercase);
let inclc = document.getElementById("inclc");
let incuc = document.getElementById("incuc");
let incs = document.getElementById("incs");
let incn = document.getElementById("incn");
let button = document.getElementById("generate");
button.addEventListener("click", function(){
    let p = document.getElementById("plength").value;
    let char = "";
    let pass = "";

    if(inclc.checked){
        char += lowercaseLetters;
    }
    if(incuc.checked){
        char += uppercaseLetters;
    }
    if(incn.checked){
        char += numbers;
    }
    if(incs.checked){
        char += symbols;
    }

    for(let i = 0; i < p; i++){
        pass += char.charAt(Math.floor(Math.random() * char.length));
    }
    document.getElementById("pass").value = `${pass}`;
})
document.getElementById("view").onclick = () =>{
    document.getElementById("pass").setAttribute('type','text');
}



