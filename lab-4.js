// ===== TASK 1: Using document object methods =====

// 1a
var images1 = document.images; // Method 1: document.images collection
var images2 = document.getElementsByTagName('img'); // Method 2: getElementsByTagName

// 1b
var citySelect = document.getElementsByName("City")[0];
var cityOptions = citySelect.getElementsByTagName("option");

// 1c
var tables = document.getElementsByTagName("table");
var secondTableRows = tables[1].getElementsByTagName("tr");

// 1d
var fontBlueElements = document.getElementsByClassName("fontBlue");

// ===== TASK 2: DOM Manipulation =====

// 2a
var secondTableAnchors = tables[1].getElementsByTagName("a");
if (secondTableAnchors.length > 0) {
    secondTableAnchors[0].href = "http://training.com";
    secondTableAnchors[0].innerHTML = "<h1>Training</h1>";
}

// 2b
if (images2.length > 0) {
    var lastImage = images2[images2.length - 1];
    lastImage.style.border = "4px dashed magenta";
}

// 2c
function alertCheckedCheckboxes() {
    var checkboxes = document.getElementsByName("hoppy");
    var checkedValues = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkedValues.push(checkboxes[i].value);
        }
    }
    console.log("Checked values: " + checkedValues.join(", "));
}

// 2d
var exampleDiv = document.getElementById("example");
if (exampleDiv) {
    exampleDiv.style.backgroundColor = "pink";
}

// ===== TASK 3: Slideshow =====
// Create the slideshow elements
var slideshowDiv = document.createElement("div");
var slideshowImg = document.createElement("img");
slideshowImg.src = "1.png";
slideshowImg.width = 250;
slideshowImg.height = 250;
slideshowImg.id = "slideshow-img"; // Add unique ID

var lineBreak = document.createElement("br");
var prevBtn = document.createElement("input");
prevBtn.type = "button";
prevBtn.value = "⏮️";
prevBtn.id = "prev";

var nextBtn = document.createElement("input");
nextBtn.type = "button";
nextBtn.value = "⏭️";
nextBtn.id = "next";

// Append elements
slideshowDiv.appendChild(slideshowImg);
slideshowDiv.appendChild(lineBreak);
slideshowDiv.appendChild(prevBtn);
slideshowDiv.appendChild(nextBtn);
document.body.appendChild(slideshowDiv);

// Slideshow functionality - now only affects our specific image
var counter = 1;

prev.onclick = function() {
    counter--;
    if (counter < 1) counter = 6;
    slideshowImg.src = "images/" + counter + ".png";
};

next.onclick = function() {
    counter++;
    if (counter > 6) counter = 1;
    slideshowImg.src = "images/" + counter + ".png";
};

alertCheckedCheckboxes()