let sections = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((ent)=>{
    ent.forEach((entry) =>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    });
});
sections.forEach((el) => observer.observe(el));