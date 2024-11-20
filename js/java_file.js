// INDIVIDUAL PROJECT - SI 339 - SARA BALDOVINO 
// JAVASCRIPT FILE

// ----------------------------------------
// STEP 1) Dropdown section with Table using a Toggle function 
// Making the Relevant courses section of ie_uni.html as a dropdown menu, therefore creating a toggle function
function toggleCourses() {
    // defining constsnt and get element with id "section_ieu_courses"
    const sectionCourses = document.getElementById("section_ieu_courses");
    // define constant for the arrow of the dropdown menu
    const arrowIcon = document.getElementById("dropdown_arrow");

    // checking if the display is set to none basically hidden. 
    // if hidden (display=="none) --> make it visble - block
    // otherwise hide it
    sectionCourses.style.display = sectionCourses.style.display === "none" ? "block" : "none";

    // rotate the arrow of dropdown menu - remember in style.css transform: rotate(180deg)
    arrowIcon.classList.toggle("rotate");
}

// -------------------------------------
// STEP 2) Filter Buttons to filter by year or arrange by grade the table

// defining function that takes the year
function filterByYear(year) {
    // get all rows of the table that are contained in the tbody
    const rows = document.querySelectorAll("#section_ieu_courses tbody tr");
    // iterating throught he rows
    rows.forEach(row => {
        // get the 2nd column [1] which contains the years (either 2 or 3)
        const yearCell = row.cells[1].innerText; 
        // keep only visible the rows with the selected year, not voisible the ones that contained the other year
        row.style.display = (yearCell === year) ? "" : "none";
    });
}

// creating function to remove all the filters (to go back to the initial view basically)
function resetFilter() {
    // getting again all rows of the table
    const rows = document.querySelectorAll("#section_ieu_courses tbody tr");
    // iterating again
    rows.forEach(row => {
        // display all rows now (since removing all filters)
        row.style.display = ""; 
    });
}

// get another function to sort the grades
function sortByGrade() {
    // get all rows of the table again
    const tableBody = document.querySelector("#section_ieu_courses tbody");
    // converting in an array all the rows
    const rows = Array.from(tableBody.querySelectorAll("tr"));

    // now sorting
    rows.sort((a, b) => {
        // get column 4 [3] where the grade is contained 
        // parseFloat to convert the array to a number
        const gradeA = parseFloat(a.cells[3].innerText);
        const gradeB = parseFloat(b.cells[3].innerText);
        // substracting a from b to sort in descending order, have first the highest grade basically 
        return gradeB - gradeA; 
    });

    // apped sorted rows back to the table
    rows.forEach(row => tableBody.appendChild(row));
}

// ----------------------------------------------------
// STEP 3) Animate skill bar (langiages.html)

// attaching an event listener to the document to be able to run the script only after the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    // selecting all element with class .skills
    const skillBars = document.querySelectorAll(".skills");

    // iterating through eachh element 
    skillBars.forEach((bar) => {
        // getting the data-width attribute
        const targetWidth = bar.getAttribute("data-width");
        // had to put this to debug, otherwise it kept going and never end
        console.log("target"+targetWidth)
        bar.style.width = targetWidth + '%';

        // starting at 0
        let width = 0;
        const interval = setInterval(() => {
            // if the width has reached the correct targetWidth -> then stops
            if (width >= targetWidth) {
                clearInterval(interval);
            } 
            // otherwise keep going
            else {
                width++;
                bar.innerHTML = width + '%'; 
            }
            // 20 milliseconds of speed
        }, 20); 
    });
});

// -------------------------------------------------------------
// TIMELINE
// var items = document.querySelectorAll('.timeline li');
// console.log(items); 


// function elementInView(el){
//     var react = el.getBoudingClientRect();

//     return(
//         rect.top >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElementclientHeight )
//     )
// }

// function callBack(){
//     for( var i = 0; i < items.length; i++){
//         if(elementInView(items[i])){
//             items[i].classList.add("in-view")
//         }
//     }
// }

// window.onload = callBack;
// window.onresize = callBack;
// window.onscroll = callBack;

// declaring a variable called items that selects all li elements inside the class .timeline
// converting the nodelist in an array
var items = Array.from(document.querySelectorAll('.timeline li')); 

// creating a function, called elementInView, that takes a single element
function elementInView(el) {
    // check if the element is a valid DOM element 
    if (!el || typeof el.getBoundingClientRect !== 'function') {
        // giving an error message if the element is invalid
        console.error('Invalid element:', el);
        // stopping the function in case it fails
        return false;
    }

    // creating a variable called rect that gets the element posiiton
    var rect = el.getBoundingClientRect();
    // returning true or false depending if the element is in view
    return (
        // ensuring that the top of the element is either at or below the top edge of the viewport
        rect.top >= 0 &&
        // ensuring that the bottom of the element is either at or above the bottom edge of the viewport
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// creating a function called callBack
function callBack() {
    // iterating over each item in the previously created array
    items.forEach(item => {
        // checking if the item is visible
        if (elementInView(item)) {
            // adds the in-view class to the element if it's visible
            item.classList.add("in-view");
        } 
        else {
            item.classList.remove("in-view"); // Optional: remove class if out of view
        }
    });
}

window.onload = callBack;
window.onresize = callBack;
window.onscroll = callBack;


// --------------------------------------------------------------------



// STEP 3) Handwritten animation for <h1 id="home_heading">Sara Baldovino</h1>
// Using Vara library (check SOIs in the report)

// function VaraText(id='#home_heading') {
//     console.log("test")
//     useEffect(() => {
//       var vara = new Vara(
//         "#home_heading",
//         "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
//         [
//           {
//             text: text,
//             fontSize: 40,
//             strokeWidth: 0.7,
//           },
//         ]
//       );
//     }, []);
  
//     return '<div id="home_heading"></div>';
//   }


// document.addEventListener("DOMContentLoaded", function() {
//     // Target the container where Vara will insert the SVG
//     const headingContainer = document.createElement("div");
//     headingContainer.id = "vara_home_heading";
//     document.body.insertBefore(headingContainer, document.getElementById("home_heading"));

//     // Initialize Vara with the created container
//     new Vara(
//         "#vara_home_heading", // New container for the animation
//         "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json", // Font JSON
//         [
//             {
//                 text: "Sara Baldovino",
//                 fontSize: 40, // Adjust font size
//                 strokeWidth: 1, // Adjust stroke width
//                 duration: 3000, // Animation duration in milliseconds
//                 color: "#020164" // Set color for text
//             }
//         ],
//         {
//             autoAnimation: true, // Automatically start the animation
//             width: 400, // Width of SVG canvas
//             height: 100, // Height of SVG canvas
//             textAlign: "center" // Center-align the text
//         }
//     );
// });


// var vara = new Vara(
//     "h1#home_heading",
//     "dist/vara/fonts/Satisfy/SatisfySL.json",
//     [
//       {
//         text: "Vara.js",
//         textAlign: "center",
//         strokeWidth: 2.5,
//         y: 80,
//         duration: 1500,
//       },
//       {
//         text: "A red flare silhouetted the jagged edge of a wing.",
//         width: 500,
//         strokeWidth: 2.5,
//         y: 40,
//         x: 80,
//         duration: 4000,
//       },
//       {
//         text: "Sphinx of black quartz, judge my vow.",
//         strokeWidth: 2,
//         color: "blue",
//         id: "sphinx",
//         autoAnimation: false,
//         x: 80,
//         duration: 4500,
//       },
//     ],
//     {
//       fontSize: 46,
//     }
//   );
//   vara.ready(function () {
//     vara.draw("sphinx");
//   });
