
// JavaScript function to get the current year
// Author: Adson Mettler do Nascimento

// Function to get the current year
function getCurrentYear() {
    return new Date().getFullYear();
}

// To update the copyright year in the footer
document.addEventListener("DOMContentLoaded", function() {
    var yearSpan = document.querySelector("#year span.highlight");
    if (yearSpan) {
		yearSpan.textContent = getCurrentYear();
    }
});


// Function to get the last modified date of the document
document.addEventListener("DOMContentLoaded", function() {
    var lastModifiedDate = document.lastModified;

    // Update the second paragraph in the footer with the last modified date
    var modifiedParagraph = document.querySelector("footer p:nth-of-type(2)");
    if (modifiedParagraph) {
        modifiedParagraph.textContent = "Last modified: " + lastModifiedDate;
    }
});


// PRODUCT ARRAY

const products = [
    {
      id: fc-1888,
      name: "flux capacitor",
      avg-rating: 4.5
    },
    {
      id: fc-2050,
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: fs-1987,
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: ac-2000,
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: jj-1969,
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];



  // Handle form submission to track review count
const form = document.querySelector('form.wf1');
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
      
      // Increment the review counter in localStorage
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
    localStorage.setItem('reviewCount', reviewCount);

      // Optionally display a message to the user
    alert(`Thank you for your review! You have submitted ${reviewCount} reviews.`);

      // Optionally, submit the form data using AJAX if needed
      // For now, just reset the form
    form.reset();
  });
});

// Function to get the current year
function getCurrentYear() {
  return new Date().getFullYear();
}