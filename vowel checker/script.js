
let vowels = "aeiouAEIOU";
document.getElementById("count").onclick = () =>{
    let text = document.getElementById("paragraph").value;
    console.log(text);
    let count = 0;
    for(let i = 0; i < text.length ; i++ ){
        for(let j = 0; j < vowels.length ; j++ ){
            if(text[i] == vowels[j]){
                count += 1;
            }
        }
    }
    document.getElementById("output").innerHTML = `Total Vowels: ${count}`;
}