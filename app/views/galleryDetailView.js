//TODO: add a close button or use history API

export const galleryDetailView = (campingItem) => `
  <article class="gallery-detail content" id=${campingItem.id}>
    <img src="./images/camping/full/${campingItem.fullImg}" alt="${campingItem.name}"/>
    <div class="detail-text">    
      <h1>${campingItem.name}</h1>
      <p class="cost">$${campingItem.cost}</p>
      <p><span>Category:</span> ${campingItem.category}</p>  
      <p><span>Manufacturer:</span> ${campingItem.manufacturer}</p>     
      <p><span>Rating:</span> ${campingItem.rating} / 5</p>
      <p>${campingItem.detail}</p>
    </div>
  </article>
`;
