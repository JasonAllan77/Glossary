// Main JS File

// Loops through all the data and for each iten, we should
// -- create an html element, and then add any data to that element from the item
// -- append the element to the page

// Referencing the page id created in the html document
// grabs the first element with this id on the page (which should be only one)
// and can append children into it

// const content = document.querySelector('#content');
// content rename as results

// outputItems(glossary.filter((item) => item.term === "Browser"));
// for each item in the array it will return a filtered value

// Main Program
// You can put your functions down below and call them up above

const selectedTags = [];

outputItems(glossary);
outputTags();

// map - for each item in your array insert into a new array the value returned by this function
// The new array will be of every glossary item but only the tags
// But don't want an array of arrays, want it all in one array
// flatMap returns all inone array
// reduce takes a function

function getTags() {
    const allTags = glossary.flatMap((item) => {
        return item.tags;
    });

    const uniqueTags = allTags.reduce((accumulator, item) => {
        if (!accumulator.includes(item)) {
            accumulator.push(item);
        }

        return accumulator;
    }, []);

    return uniqueTags;
}

function outputTags() {
    const tagsContainer = document.querySelector("#tags");
    const tags = getTags();
    tags.forEach((tag) => {
        const markup = `
        <span>
            <input type="checkbox" value="${tag}"> ${tag}
        </span>
        
        `;
        tagsContainer.innerHTML += markup;
    });
    tagsContainer.addEventListener('click', (event) => {
        if(event.target.tagName === 'INPUT') {
            if(event.target.checked) {
                selectedTags.push(event.target.value);
            } else {
                selectedTags.splice(selectedTags.indexOf(events.target.value), 1);
        }
            console.log(selectedTags);
            // checkbox add or remove here from the list
            // selectedTags.push(event.target.value);
            const filteredByTag = glossary.filter((item) => {
                for (let i = 0; i < selectedTags.length; i++ ) {
                    if(item.tags.includes(selectedTags[i])) {
                        return true; // keeps item
                    }
                }
// call somekind of filter function on the glossary
                return false;
            });
            outputItems(filteredByTag);    
        }
    });
}

function outputItems(glossaryItems) {
    const content = document.querySelector("#content");
    content.innerHTML = ""; // empty string to clear everything out
    glossaryItems.forEach((glossaryItem) => {
        // -- glossaryItem, i is a second argument you can do as a counter
        const markup = `    
        <div>
            <h3>${glossaryItem.term}</h3>
            <div>
                ${glossaryItem.definition}
            </div>
            <div>
                Tags: ${glossaryItem.tags.join(", ")}
            </div>
            </div>
        </div>
    `;

        content.innerHTML += markup;
    });
}

//forEach Loop
// glossary.forEach(glossaryItem => { // -- glossaryItem, i is a second argument you can do as a counter
//     const markup = `
//     <div>
//         <h3>${glossaryItem.term}</h3>
//         <div>
//             ${glossaryItem.definition}
//         </div>
//         <div>
//             Tags: ${glossaryItem.tags.join(", ")}
//         </div>
//         </div>
//     </div>
// `

// content.innerHTML += markup;
// });

// for Loop - for when you can control the flow of the loop
// for(let i = 0; i < glossary.length; i++) {
//     const glossaryItem = glossary[i];
// const glossaryItemElement = document.createElement('h3')
// glossaryItemElement.innerText = glossaryItem.term;
// content.appendChild(glossaryItemElement);
// break; break statement - exits the loop
// continue;skips this iteration and goes to the next item in the list
//     const markup = `
//         <div>
//             <h3>${glossaryItem.term}</h3>
//             <div>
//                 ${glossaryItem.definition}
//             </div>
//             <div>
//                 Tags: ${glossaryItem.tags.join(", ")}
//             </div>
//             </div>
//         </div>
//     `

//     content.innerHTML += markup;
// });

// ${tags.map(tag => )} // for each tag -- instead of $(tags... above)

// content.innerHTML = content.innerHTML + markup;  Or above
// add this          to                     this

// HTML Heading Tag
// Passes in HMTL Element as a string - h1
// you might create more elements here for Definition, Tag etc
// a div instead of an h1 and then append the h1 inside the div
// h1.addEventListener("click", () => conosle.log("hi")); -- An alternative answer to a Qestion
// make it the inner text of this new heading element i have added
// h1.appendChild.... append a Child into the h1
// document.appendChild(h1);
// An example of using onclick instead of addEventListener
// const h1 = `<div>
//     <h1 onclick="log(${id})">${glossaryItem.term}</h1>
//     <div>Details</div>
// </div>`;
// content.innerHTML += h1;
