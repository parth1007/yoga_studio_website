import productsData from '../data/products.json' assert { type: "json" };


export function renderProducts() {

  document.addEventListener('DOMContentLoaded', function() {
        const categoryList = document.getElementById('category-list');
        
        const contentArea = document.getElementById('category-content');
        
        categoryList.addEventListener('click', function(event) {
            
        if (event.target.tagName === 'LI') {
            const categoryItems = categoryList.getElementsByTagName('li');
            for (const item of categoryItems) {
                item.classList.remove('active-category');
            }
            event.target.classList.add('active-category');

            const selectedCategory = event.target.getAttribute('data-category');
            renderContent(selectedCategory);
        }
        });

    renderContent('books');

    function renderContent(category) {

        const booksData = productsData[category];

        if(category === "books"){

            var booksList = "";

            for (var i = 0; i <booksData.length; i++){
                var htmlContent = `
                    <li class="book-item">
                        <div class="book book-name">${booksData[i].name}</div>
                        <div class="book book-pub">${booksData[i].publication} </div>
                        <div class="book book-price">&#8377; ${booksData[i].price}</div>
                    </li>
                `;
                booksList += htmlContent;
            }

            var booksHtml = 
                `<section class="books-container">
                    <div class="books-header">
                        <div class="heading head-name">	Book Name </div>
                        <div class="heading head-pub"> Publication </div>
                        <div class="heading head-price">Price</div>
                    </div>
                    <ul class="book-items">
                        ${booksList}
                    </ul>
                </section>`

            contentArea.innerHTML = booksHtml;

        }
        else{

            const data = productsData[category];
            console.log(category)
            var itemsList = "";

            for (var i = 0; i <data.length; i++){
                var htmlContent = `
                    <div class="p-grid-item">
                        <img src = ${data[i].img}>
                        <div class="p-grid-item-name"> ${data[i].name} </div>
                        <div class="p-grid-item-price"> ${data[i].price} </div>
                    </div>
                `;
                itemsList += htmlContent;
            }

            var itemsHtml = 
                `<div class="product-grid">
                    ${itemsList}
                </div>
                 `

            contentArea.innerHTML = itemsHtml;
            
        }
    }
  });
}