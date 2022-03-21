// Grab an reference to the element
// We need an event Target
// We need the callback function
// then create the event listener linking up target with our callback function

// Find the first list item
// "li" or 'li' is the same
// const li = document.querySelector("li"); // Or declare as below lis
const ul = document.querySelector("ul");

// const lis = document.querySelectorAll("li"); // If don't declare const li above

// A powerful way of combining events by adding events to your parent element
// -- and then determining what kind of childs are being clicked

// lis.forEach(li=>{ 
    ul.addEventListener("click", (event)  => {
        console.log(event.target)
        // console.log(event.target.innerText);
        if(event.target.dataset.clickable === "true") {  // always a string not q boolean
        console.log(event.target.dataset.id); // Using data attributes in HTML
        }
    }, {
        capture: false,
    });
// })


// Not using event so can remove it from parameters

// CODE
// li.addEventListener("click", (event) => {
//     event.preventDefault();
//     console.log("My List Item #1");
// }, {
//     capture: false,
// END CODE;


    // the default action on a form after your submit a form trusts to post your data to a server
    // we don't want that to happen so this prevents it from doing so
    // event.stopPropagation();  -- another Example 

    // event.target provides the element actually clicked
    // event.target is an HTML element, the same as what you get from 
    //          querySelector, createElement

// CODE
//     ul.addEventListener("click", (event) => {
//     console.log("ul clicked");
// }, {
//     once: false,
//     capture: false,
// });
// END CODE

    // event.target provides the element actually clicked
    // This event listener Happens only once
    //Capture reverses the order of bubbling

// Side Effects are something that you might do in a function to cntrol the behaviour of an event

// CODE
// document.body.addEventListener('click', event => {
//     console.log('body clicked');
// }, {
//     capture: false,
// });

// document.addEventListener('click', event => {
//     console.log('document clicked');
// }, {
//     capture: false,
// });
// END CODE

// Add a click event listener
// The string 'click' can only be a specific list of allowed events that you can listen for
// li.addEventListener('click', (event) => {
//     console.log(event);
//     if(event.altKey) {
//         console.e;
//     }
// });


// you can omitt the paranthesis around even if only 1 argument in an arrow function
// document.addEventListener('keypress', event => {
//     console.log(event);
// if (event.key === "w") {
//     console.log("forward");
// }
// });
// Added directly to the documet
// checking if "w" key is pressed
// keydown - is pushed down (or held down)
// keypress - combination of the two - so both a keydown and key up have been registered
// keyup - when it comes back up after being pushed down

