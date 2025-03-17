document.addEventListener("DOMContentLoaded", function() {
    const games = document.querySelectorAll(".game");
    const gameDetailsSection = document.getElementById("game-details");
    const gameInfoDiv = document.getElementById("game-info");
    const playGameBtn = document.getElementById("play-game-btn");
    const gameFrameSection = document.getElementById("game-frame");
    const gameIframe = document.getElementById("game-iframe");

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

    document.addEventListener("keypress", function(event) {
        if (event.key === "z" || event.key === "Z") {
            loadExternalSite("https://issaquah.instructure.com/");
        }
    });

    function loadGameDetails(gameName) {
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
                gameIframe.src = "https://shreycodesbetter.github.io/Fisch/";
                gameFrameSection.classList.remove("hidden");
                break;
            // Add cases to load other games
        }
    }

    function loadExternalSite(url) {
        window.location.href = url;
    }
});
