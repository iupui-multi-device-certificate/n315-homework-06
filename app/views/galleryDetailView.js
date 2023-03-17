//TODO: add a close button or use history API

export const galleryDetailView = (campingItem) => `
  <article class="gallery-detail content" id=${campingItem.id}>
    <header>
      <h1 class="detail-title">${campingItem.name}</h1>
      <button class="close-detail"><span class="sr-only">Close</span></button>       
    </header>  
    <div class="detail-content">
      <img src="./images/camping/full/${campingItem.fullImg}" alt="${campingItem.name}"/>
      <div class="detail-text">
      <p class="cost">$${campingItem.cost}</p>
        <div class="info">
          <p><span>Manufacturer:</span> ${campingItem.manufacturer} | <span>Category:</span> ${campingItem.category}</p>
          <p><span>Rating:</span> ${campingItem.rating} / 5</p>
        </div>       
        <p>${campingItem.detail}</p>

                  
      </div>
    </div>
  </article>
`;
