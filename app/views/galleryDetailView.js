export const galleryDetailView = (game) => `
  <article class="gallery-detail content" id=${game.id}>
    <h1>${game.gameTitle}</h1>       
    <img src="./images/games/full/${game.gameFullImg}" alt="${game.gameTitle}" 
    <p><span">Rating:</span> ${game.gameRating}</p>
    <p><span">Platform:</span> ${game.gamePlatform}</p>  
    <p"><span">Maker:</span> ${game.gameMaker}</p>       
    <p><span">Description:</span> 
      ${game.gameBriefDescription}
    </p> 
  </article>
`;
