// Main JS File

// Main Program

// Changing the character
const selectedTags = [];

outputItems(glossary);
outputTags();
// outputClass();
// outputSearch();

// Get Tags
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

// Output Glossary Tags
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
    tagsContainer.addEventListener("click", (event) => {
        if (event.target.tagName === "INPUT") {
            if (event.target.checked) {
                selectedTags.push(event.target.value);
            } else {
                selectedTags.splice(
                    selectedTags.indexOf(event.target.value),
                    1
                );
            }
            // checkbox add or remove here from the list
            // selectedTags.push(event.target.value);
            if (selectedTags.length === 0) {
                outputItems(glossary);
                return;
            }
            const filteredByTag = glossary.filter((item) => {
                for (let i = 0; i < selectedTags.length; i++) {
                    if (item.tags.includes(selectedTags[i])) {
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

// Lewis' Search Code
const searchBar = document.querySelector("#search-input");

searchBar.addEventListener("keyup", (event) => {
    const searchValue = event.target.value.toLowerCase();

    const matchingItems = glossary.filter((glossaryItem) => {
        return (
            glossaryItem.term.toLowerCase().includes(searchValue) ||
            glossaryItem.definition.toLowerCase().includes(searchValue)
        );
    });
    outputItems(matchingItems);
});

// Output Glossary Items
function outputItems(glossaryItems) {
    const content = document.querySelector("#content");
    content.innerHTML = ""; // empty string to clear everything out (parameter) glossaryItem: any
    glossaryItems.forEach((glossaryItem) => {
        // -- glossaryItem, i is a second argument you can do as a counter
        const markup = `    
        <table bgcolor="" cellspacing="20" cellpadding="20">
        <div>
        <td bgcolor="#0000CD" width="400">
            <div>
            <center>
            <h3><font face="arial" color="#B0C4DE">${glossaryItem.term.toUpperCase()}</font></h3>
            </center>
            </div>
            <div>
            <font color="#B0C4DE">${glossaryItem.definition}</font
            </div>
            <div>
            <center>
                <h5><font face="arial" color="#B0C4DE"><i>Tags: ${glossaryItem.tags.join(
                    ", "
                )}</i></font></h5>
            </center>
            </div>
            <div>
            <center>
                <h5><font face="arial" color="#B0C4DE">Class: 0${
                    glossaryItem.class
                }</font></h5>
                </center>
            </div>
            </td>
        </div>
        <table>
    `;

        content.innerHTML += markup; // appendChild
    });
}

// DropDown Function
// const selectedIndex = document.querySelector.glossary;
// classDropdown.addEventListener("click", (event) => {
// var index = selectElem.selectedIndex

// const classArray = [glossary.class];
// console.log(...classArray);

// const classDropdown = document.querySelector("#select-class");

// Jacks Solution via PseudoCode
function filterByClass() {
    var selectTag = document.querySelector("select-class");
    const selectedClass = selectTag.value;
    const filteredGlossary = glossaryItem.filter(glossary);
    if (selectedClass === glossaryItem.class) {
        return true;
    } else {
        return false;
    }
    outputItems(filteredGlossary);
    console.log(filteredGlossary);
}

// function dropdownByClass () {
//     for (let i = 0; i < glossary.class; i++) {
//     // var index = selectedIndex;
//     var selectByClass = document.getElementById("#select-class").selectedIndex;
//     const classFilter = glossaryItem.filter((glossary) => {
//          return glossary.class === selectByClass[i]});
//     // selectByClass = glossary.class;
//     console.log(classFilter);
//     outputItems(classFilter);
//     }
// ;
// }

// function dropdownByClass() {
//     const selectByClass = document.
// }

// var e = document.getElementById("#select-class");
// var selectByClass = e.value;

// function dropdownByClass() {
//     var e = document.glossary[0].("select-class").value;

//     console.log(selectByClass);

// }

// Clear Button - Not Working

// const clearButton = document.querySelector("#clear-button");
// clearButton.addEventListener("reset", clearSearch);

// const log = document.getElementById('log');
// form.addEventListener('reset', logReset);

// function logReset(event) {
//     log.textContent = 'Clear This Search';
// }

// function clearSearch(event) {
//     this.someField;
//     let searchValue = document.querySelector("#search-input").value;
// }
