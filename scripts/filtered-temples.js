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


// Menu Navagation | Hamburguer menu button

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


// TEMPLE OBJECTS

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Campinas Brazil Temple",
      location: "Campinas, Sao Paulo, Brazil",
      dedicated: "2002, May, 17",
      area: 49100,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/campinas-brazil-temple-morning-1029896-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Albuquerque New Mexico Temple",
        location: "Albuquerque, New Mexico, United States",
        dedicated: "2000, March, 5",
        area: 34000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/400x250/albuquerque-temple-lds-137883-wallpaper.jpg"
      },
      {
        templeName: "Provo City Center Temple",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple03.jpg"
      },
      {
        templeName: "Calgary Alberta Temple",
        location: "Calgary, Alberta, Canada",
        dedicated: "2012, October, 28",
        area: 33000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/calgary-alberta/400x250/calgary-alberta-temple-lds-1025065-wallpaper.jpg"
      },
    // Add more temple objects here
  ];


  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.temple-container');
    const homeLink = document.getElementById('home');
    const oldLink = document.getElementById('old');
    const newLink = document.getElementById('new');
    const largeLink = document.getElementById('large');
    const smallLink = document.getElementById('small');


    const displayTemples = (filteredTemples) => {
        container.innerHTML = ''; // Clear existing content
        filteredTemples.forEach(temple => {
            const figure = document.createElement('figure');
            figure.classList.add('hover');

            const img = document.createElement('img');
            img.src = temple.imageUrl;
            img.alt = temple.templeName;
            img.loading = "lazy";
            figure.appendChild(img);

            const figcaption = document.createElement('figcaption');
            figcaption.innerHTML = `
                <h3>${temple.templeName}</h3>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${formatDate(temple.dedicated)}</p>
                <p>Area: ${temple.area.toLocaleString()} sq ft</p>
            `;
            figure.appendChild(figcaption);

            container.appendChild(figure);
        });
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        return `${year}, ${month}, ${day}`;
    };

    homeLink.addEventListener('click', () => displayTemples(temples));

    oldLink.addEventListener('click', () => {
        const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        displayTemples(oldTemples);
    });

    newLink.addEventListener('click', () => {
        const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        displayTemples(newTemples);
    });

    largeLink.addEventListener('click', () => {
        const largeTemples = temples.filter(temple => temple.area > 90000);
        displayTemples(largeTemples);
    });

    smallLink.addEventListener('click', () => {
        const smallTemples = temples.filter(temple => temple.area < 10000);
        displayTemples(smallTemples);
    });

    // Display all temples by default when the page loads
    displayTemples(temples);
});