// Product array with corrected id field quotes
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      avgRating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      avgRating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      avgRating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      avgRating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      avgRating: 5.0
    }
  ];
  
  document.addEventListener("DOMContentLoaded", function() {
    // Populate the product dropdown
    const productSelect = document.querySelector('select[name="product"]');
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  
    // Handle form submission
    const form = document.querySelector('form.wf1');
    form.addEventListener('submit', function(event) {
      // Increment the review counter in localStorage
      let reviewCount = localStorage.getItem('reviewCount') || 0;
      reviewCount = parseInt(reviewCount) + 1;
      localStorage.setItem('reviewCount', reviewCount);
    });
  });
  