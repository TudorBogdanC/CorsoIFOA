let photos = [];
const url = "https://api.pexels.com/v1/search?query=sunset";
const secondUrl = "https://api.pexels.com/v1/search?query=cats"
const key = "ww4XkdWb7WfZBkhFW5NTXQvRaCphrRyA4RpOh3tPl6UosLHJelje3RzZ";
imageUrl = photos.url;

async function getPhotosA() {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: key,
      },
    });
    const data = await response.json();
    photos = data.photos;
    renderPhotos(data.photos);
  } catch (error) {
    /*alert("Could not get photos");*/
  }
}


async function getPhotosB() {
    try {
      const response = await fetch(secondUrl, {
        headers: {
          Authorization: key,
        },
      });
      const data = await response.json();
      photos = data.photos;
      renderPhotos(data.photos);
    } catch (error) {
      /*alert("Could not get photos");*/
    }
  }






 function renderPhotos(photos) {
    console.log(photos);
  // selezionare tutte le card con classe ".card" presenti nella pagina
  
  let cardsContainer = document.getElementById("row");

  // itera su ogni card i dati ricevuti via API //


  cardsContainer.innerHTML = '';

  photos.forEach(photo => {
    console.log(photo);
    let images = ` 
    <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <img class="bd-placeholder-img card-img-top" src="${photo.src.medium}" alt="photo">
      <div class="card-body">
        <h5 class="card-title">${photo.photographer}</h5>
        <p class="card-text">${photo.alt}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="primary btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" class="secondary btn btn-sm btn-outline-secondary">
              Edit
            </button>
          </div>
          <small class="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>
   
  `;

  
   
    
    cardsContainer.innerHTML += images;
  });
  console.log(renderPhotos);
}

// funzione per visualizzare un'immagine in una finestra modal v-bootstrap //

function viewPhoto(imageUrl) {

    // creazione della finestra modal //
    const modal = document.createElement("div");
    modal.classList.add("modal");

    // creazione dell'immagine modal //
    const img = document.createElement("img");
    img.src = imageUrl;
    modal.appendChild(img);

    // chiudere il modal quando si fa click fuori //
    modal.addEventListener("click", () => {
        modal.remove();
    });

    // aggiungo la finestra modal al corpo del documento //
    document.body.appendChild(modal);

}

viewPhoto(imageUrl);



