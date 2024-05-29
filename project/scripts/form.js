// Author: Adson Mettler do Nascimento

// Product array with corrected id field quotes
const products = [
    {
      id: "bn-001",
      name: "Banff Route",
      avgRating: 4.5
    },
    {
      id: "vc-001",
      name: "Vancouver Route",
      avgRating: 4.7
    },
    {
      id: "tr-001",
      name: "Toronto Route",
      avgRating: 3.5
    },
    {
      id: "nf-001",
      name: "Niagara Falls Route",
      avgRating: 3.9
    },
    {
      id: "oq-001",
      name: "Old Quebec Route",
      avgRating: 5.0
    },
    {
        id: "bf-001",
        name: "Bay of Fundy Route",
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
  