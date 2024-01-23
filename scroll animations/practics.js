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

// Imagine you have a friend who loves to play hide and seek. You close your eyes, and when you open them, you want to know if your friend is still hiding behind a tree or if they've come out into your view. In JavaScript, the IntersectionObserver is like your friend, and the elements on a webpage are like objects hiding or appearing in your view.

// Here's how it works:

// Observer and Target: You create an "observer" (like yourself) and tell it to watch for changes in a specific "target" (like your friend hiding behind a tree).

// Intersection: The observer checks if the target is intersecting with another element, such as the visible part of the webpage or another element on the page.

// Callback: If there is an intersection or change in visibility, the observer triggers a function you've set up, called a "callback" function. This function can then perform some action, like showing or hiding content, based on whether the target is in view or not.

// Options: You can also set some options when creating the observer, like how much of the target needs to be visible before considering it an intersection.

// To put it simply, IntersectionObserver is like a watcher that keeps an eye on specific elements on a webpage. When those elements come into or go out of view, it can alert you, and you can decide what to do in response. This is handy for lazy loading images, infinite scrolling, or other situations where you want to take action based on whether an element is visible or not.
