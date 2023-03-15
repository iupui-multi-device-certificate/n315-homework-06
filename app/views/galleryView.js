//? SEMANTIC - should these be buttons or anchor tags?
//https://ux.iu.edu/writings/buttons-vs-links-basic/
//https://uxmovement.com/buttons/when-to-use-a-button-or-link/

const renderGame = (game) => `
    <li class="card" id=${game.id}">
        <figure class="figure-component">      
        <figcaption class="figure-image-caption">
          <h2 class="figure-title">${game.gameTitle}</h2>
        </figcaption>          
          <img src="./images/games/thumb/${game.gameThumbImg}" alt="${game.gameTitle}" />
        </figure>
        <div class="card-body">
          <p class="card-text"><span class="card-text-label">Rating:</span> ${game.gameRating}</p>
          <p class="card-text"><span class="card-text-label">Platform:</span> ${game.gamePlatform}</p>  
          <p class="card-text"><span class="card-text-label">Maker:</span> ${game.gameMaker}</p>       
          <p class="card-text"><span class="card-text-label">Description:</span> 
            ${game.gameBriefDescription}
          </p>   
           
        </div>
    </li>
`;

const renderGames = (games) => `
  ${games.map((game) => renderGame(game)).join("")}
`;

export const galleryView = (games) => `

        <section class="gallery content">
          <h1 class="section-title">Games</h1>
          <ul class="cards">
            ${renderGames(games)}
          </ul>
        </section>

`;
