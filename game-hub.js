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

    playGameBtn.addEventListener("click", function() {
        const gameName = playGameBtn.getAttribute("data-game");
        playGame(gameName);
    });

    function loadGameDetails(gameName) {
        // Here you can add more detailed information about each game
        let gameDetails = "";
        switch (gameName) {
            case "fishing-game":
                gameDetails = `
                    <h3>Fishing Game</h3>
                    <p>Try to catch as many fish as you can and upgrade your rod to catch even more valuable fish!</p>
                `;
                break;
            // Add more cases for other games
        }
        gameInfoDiv.innerHTML = gameDetails;
        playGameBtn.setAttribute("data-game", gameName);
        gameDetailsSection.classList.remove("hidden");
    }

    function playGame(gameName) {
        switch (gameName) {
            case "fishing-game":
                window.location.href = "index.html"; // Assuming the fishing game is in index.html
                break;
            // Add cases to redirect to other game pages
        }
    }
});
