

// Function to display products
function displayProducts(filteredData) {
    const productscont = document.getElementById("products-container");
    productscont.innerHTML = ''; // Clear the container before appending products
  
    filteredData.forEach(product => {
      const productIndividual = document.createElement('div');
      productIndividual.className = "col";
      productIndividual.innerHTML = `
        <div class="border border-secondary-subtle my-2">
          <img src=${product.image} alt='image-name' class='image-size'>
          <h2>${product.title.substring(0, 12)}...</h2>
          <p>${product.description.substring(0, 90)}...</p>
          <hr />
          <h2>$ ${product.price}</h2>
          <hr>
          <div>
            <button class="p-2 bg-black text-white">Details</button>
            <button class="p-2 bg-black text-white">Add to cart</button>
          </div>
        </div>
      `;
      productscont.appendChild(productIndividual);
    });
  }
  
  // Fetch and display all products initially and on clicking the "All" button
  function fetchAndDisplayAll() {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        displayProducts(data);
      });
  }
  
  // Fetch and display products based on category
  function fetchAndDisplayByCategory(category) {
    fetch('https://fakestoreapi.com/products/category/' + category)
      .then(response => response.json())
      .then(data => {
        displayProducts(data);
      });
  }
  
  // Event listeners for category buttons
  document.getElementById('all').addEventListener('click', fetchAndDisplayAll);
  document.getElementById('mensfashion').addEventListener('click', () => fetchAndDisplayByCategory("men's clothing"));
  document.getElementById('womensfashion').addEventListener('click', () => fetchAndDisplayByCategory("women's clothing"));
  document.getElementById('jewelery').addEventListener('click', () => fetchAndDisplayByCategory('jewelery'));
  document.getElementById('electronics').addEventListener('click', () => fetchAndDisplayByCategory('electronics'));
  
  // Automatically display all products on page load
  window.addEventListener('load', fetchAndDisplayAll);
  