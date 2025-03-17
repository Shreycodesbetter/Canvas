document.addEventListener("DOMContentLoaded", function() {
    const games = document.querySelectorAll(".game");
    const gameDetailsSection = document.getElementById("game-details");
    const gameInfoDiv = document.getElementById("game-info");
    const playGameBtn = document.getElementById("play-game-btn");

    games.forEach(game => {
        game.addEventListener("click", function() {
            const gameName = this.getAttribute("data-game");
            loadGameDetails(gameName);
        });
    });

    function loadGameDetails(gameName) {
        let gameDetails = "";
        let gameUrl = "";
        switch (gameName) {
            case "fishing-game":
                gameDetails = `
                    <h3>Fishing Game</h3>
                    <p>Try to catch as many fish as you can and upgrade your rod to catch even more valuable fish!</p>
                `;
                gameUrl = "https://shreycodesbetter.github.io/Fisch/";
                break;
            case "snow-rider-3d":
                gameDetails = `
                    <h3>Snow Rider 3D</h3>
                    <p>Enjoy a thrilling snow ride and avoid obstacles to reach the end!</p>
                `;
                gameUrl = "https://sites.google.com/view/unblocked-games-x6/snow-rider-3d";
                break;
            // Add more cases for other games
        }
        gameInfoDiv.innerHTML = gameDetails;
        playGameBtn.href = gameUrl;
        gameDetailsSection.classList.remove("hidden");
    }
});
