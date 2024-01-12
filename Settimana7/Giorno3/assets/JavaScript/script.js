let shoppingCartList = [];
const url = "https://striveschool-api.herokuapp.com/books";

// Funzione per scaricare i dati dalla API //

async function getBooks() {   // dichiare asynch equivale ad usare una promise con away che equivale a then
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Errore nel recupero dei libri", err);
  }
}

// Funzione per renderizzare i libri dalla API //

async function renderBooks() {
  const books = await getBooks();
  const bookListContainer = document.getElementById("bookList");

  books.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("col-md-3", "mb-4");

    card.innerHTML = `
        <div class="col">
          <div class="card">
            <img class="card-img-top" src="${book.img}" alt="Copertina del libro">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">${book.price} €</p>
              <div class="button-group d-flex justify-content-between align-items-end">
                <button class="bottoncini btn btn-danger" onclick="deleteBook(event, '${book.asin}')">Scarta</button>
                <button class="bottoncini btn btn-success">Compra</button>
              </div>
            </div>
          </div>
        </div>
      `;
    bookListContainer.appendChild(card);
  });

  bookListContainer.addEventListener("click", function(event) {
    if (event.target.matches(".btn-success")) {
      const card = event.target.closest(".card");
      const title = card.querySelector(".card-title").textContent;
      const price = card.querySelector(".card-text").textContent;
      const book = {
        title: title,
        price: price
      };
      let bookList = JSON.parse(localStorage.getItem("bookList")) || [];

      bookList.push(book);
      localStorage.setItem("bookList", JSON.stringify(bookList));

      loadShoppingCart();
     
    }
  });

}

// Funzione per scartare un libro //

const deleteBook = (event) => {
  event.target.closest(".card").remove();
};

// Funzione per aggiungere un libro al carrello //

const loadShoppingCart = () => {
  let bookList = JSON.parse(localStorage.getItem("bookList")) || [];
  let ul = document.createElement("ul");
  ul.classList.add("list-group", "pt-5");
  let div = document.querySelector(".carrello");
  div.innerHTML = "";
  bookList.forEach((book, index) => {
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = `${book.title} - ${book.price}`;
    ul.appendChild(li);

    let removeButton = document.createElement("button");
    removeButton.textContent = "Rimuovi";
    removeButton.classList.add("btn", "btn-danger", "ms-2", "float-end");
    removeButton.addEventListener("click", function () {
      bookList.splice(index, 1); // Rimuovi il libro dalla lista
      localStorage.setItem("bookList", JSON.stringify(bookList)); // Aggiorna il localStorage
      loadShoppingCart(); // Aggiorna la visualizzazione
    });
    li.appendChild(removeButton);
  });
  div.appendChild(ul);
};

// Funzione per salvare i libri nello storage //

function saveCartToStorage() {
  const cartItems = JSON.parse(localStorage.getItem("cart"));
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

// Funzione per recuperare il carrello dallo storage del browser //

function loadCartFromStorage() {
  const cartItems = JSON.parse(localStorage.getItem("bookList"));

  if (cartItems) {
    shoppingCartList = cartItems;
    loadShoppingCart();
  }
}

// Funzione per avviare le funzionalità della pagina //

window.onload = function () {
  renderBooks();
  loadCartFromStorage();
  localStorage.clear();
}; 
