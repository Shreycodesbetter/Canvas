document.addEventListener("DOMContentLoaded", function() {
    const games = document.querySelectorAll(".game");
    const gameDetailsSection = document.getElementById("game-details");
    const gameInfoDiv = document.getElementById("game-info");
    const playGameBtn = document.getElementById("play-game-btn");
    const aboutDevBtn = document.getElementById("about-dev-btn");
    const aboutDevSection = document.getElementById("about-dev");

    games.forEach(game => {
        game.addEventListener("click", function() {
            const gameName = this.getAttribute("data-game");
            loadGameDetails(gameName);
        });
    });

    aboutDevBtn.addEventListener("click", function() {
        aboutDevSection.classList.toggle("hidden");
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
            case "rooftop-snipers":
                gameDetails = `
                    <h3>Rooftop Snipers</h3>
                    <p>Engage in a fun and intense two-player sniper shootout on rooftops!</p>
                `;
                gameUrl = "https://canvas-login-instructure.github.io/macvg/projects/rooftop-snipers/";
                break;
            case "yo-ho-ho":
                gameDetails = `
                    <h3>Yo Ho Ho</h3>
                    <p>Play as a pirate and battle other players to become the top pirate!</p>
                `;
                gameUrl = "https://canvas-login-instructure.github.io/macvg/yohoho.html";
                break;
            case "basket-random":
                gameDetails = `
                    <h3>Basket Random</h3>
                    <p>Play a random and fun basketball game with quirky physics!</p>
                `;
                gameUrl = "https://canvas-login-instructure.github.io/macvg/projects/basket-random/";
                break;
            case "boxing-random":
                gameDetails = `
                    <h3>Boxing Random</h3>
                    <p>Enjoy a hilarious and random boxing game with unpredictable physics!</p>
                `;
                gameUrl = "https://canvas-login-instructure.github.io/macvg/projects/boxing-random/";
                break;
            case "cookie-clicker":
                gameDetails = `
                    <h3>Cookie Clicker</h3>
                    <p>Click to produce cookies and unlock upgrades to produce even more cookies!</p>
                `;
                gameUrl = "https://canvas-login-instructure.github.io/macvg/projects/cookie-clicker/";
                break;
            case "volley-random":
                gameDetails = `
                    <h3>Volley Random</h3>
                    <p>Play a fun and chaotic volleyball game with random physics!</p>
                `;
                gameUrl = "https://canvas-login-instructure.github.io/macvg/projects/volley-random/";
                break;
            case "soccer-random":
                gameDetails = `
                    <h3>Soccer Random</h3>
                    <p>Enjoy a random and fun soccer game with quirky physics!</p>
                `;
                gameUrl = "https://canvas-login-instructure.github.io/macvg/projects/soccer-random/";
                break;
            case "snow-rider-3d":
                gameDetails = `
                    <h3>Snow Rider 3D</h3>
                    <p>Experience the thrill of skiing down snowy slopes, dodging obstacles, and collecting gifts!</p>
                `;
                gameUrl = "https://github.com/lcpsgames/snowrider";
                break;
            // Add more cases for other games
        }
        gameInfoDiv.innerHTML = gameDetails;
        playGameBtn.href = gameUrl;
        gameDetailsSection.classList.remove("hidden");
    }

    document.addEventListener("keydown", function(event) {
        if (event.key === "z" || event.key === "Z") {
            window.open("https://issaquah.instructure.com/", "_blank");
        }
    });
});
