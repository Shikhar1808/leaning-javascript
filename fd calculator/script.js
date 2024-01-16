
// console.log(pa);
document.getElementById("calculate").onclick = () => {
    let pa = document.getElementById("principle").value;
    let ir = document.getElementById("interest").value;
    let time = document.getElementById("time").value;
    let fd = pa * (pa * ir * time) / 100
    document.getElementById("final-output").innerHTML = `Maturity Amount: ${fd}`;

}
