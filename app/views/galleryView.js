/* 

  SEMANTIC: leave anchor inside h* tag

  - https://stackoverflow.com/questions/1128778
  - how-to-mix-links-a-tag-and-headings-h1-tag-in-web-standard
  - https://kittygiraudel.com/2022/04/02/accessible-cards/
  - https://inclusive-components.design/cards/
  --> used pseudo trick
*/

const renderCampingItem = (campingItem) => `
    <li class="card-vertical" id="${campingItem.id}"> 
        <header>
          <h2 class="card-title"><a class="item-link" href="#">${campingItem.name}</a></h2>          
        </header>     
        <div class="card-body">
          <img src="./images/camping/thumb/${campingItem.thumbImg}" alt="${campingItem.name}" />
          <div class="card-details">
            <p class="card-text"> 
              ${campingItem.summary}
            </p>
            <p class="card-text"><span class="card-text-label">Rating:</span> ${campingItem.rating} / 5</p>
            <p class="card-text"><span class="card-text-label">$${campingItem.cost}</p>
          </div>           
        </div>
    </li>
`;

const renderCampingItems = (campingItems) => `
  ${campingItems.map((campingItem) => renderCampingItem(campingItem)).join("")}
`;

export const galleryView = (campingItems) => `

        <section class="gallery content">
          <h1 class="section-title">Camping</h1>
          <ul class="cards">
            ${renderCampingItems(campingItems)}
          </ul>
        </section>

`;
