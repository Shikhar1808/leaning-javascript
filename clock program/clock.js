const lab = document.getElementById("lab");
update();
setInterval(update,1000);
function update(){
    let date = new Date();
    lab.innerHTML = clock(date);
    // lab.innerHTML = date;
    function clock(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amorpm = hours >= 12 ? `pm` : `am`;
        hours = (hours % 12) || 12;
        return `${hours}:${minutes}:${seconds} ${amorpm}`
    }
}
