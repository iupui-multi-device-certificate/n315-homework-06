export const galleryDetailView = (campingItem) => `
  <article class="gallery-detail content" id=${campingItem.id}>
    <img src="./images/camping/full/${campingItem.fullImg}" alt="${campingItem.name}"/>    
    <h1>${campingItem.name}</h1>
    <p><span">Category:</span> ${campingItem.category}</p>  
    <p"><span">Manufacturer:</span> ${campingItem.manufacturer}</p>     
    <p><span">Rating:</span> ${campingItem.rating} / 5</p>
    <p>$${campingItem.cost}</p>
    <p>${campingItem.detail}</p>
    
  </article>
`;
