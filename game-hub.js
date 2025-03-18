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
            case "cookie-clicker":
                gameDetails = `
                    <h3>Cookie Clicker</h3>
                    <p>Click the cookie to produce more cookies and grow your cookie empire!</p>
                `;
                gameUrl = "https://canvas-login-instructure.github.io/macvg/projects/cookie-clicker/";
                break;
            case "boxing-random":
                gameDetails = `
                    <h3>Boxing Random</h3>
                    <p>Engage in random boxing matches and fight your way to victory!</p>
                `;
                gameUrl = "https://canvas-login-instructure.github.io/macvg/projects/boxing-random/";
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

    // Add new game links
    const gameLinks = [
        { id: "game1", url: "/macvg/projects/1/", name: "1" },
        { id: "game339", url: "/macvg/projects/1v1-soccer/", name: "1 on 1 Soccer" },
        { id: "game2", url: "/macvg/projects/1v1lol/", name: "1v1.lol" },
        { id: "game329", url: "/macvg/projects/color-match/", name: "1010 Color Match" },
        { id: "game340", url: "/macvg/projects/1010-deluxe/", name: "1010 Deluxe" },
        { id: "game4", url: "/macvg/projects/10-minutes-till-dawn/", name: "10 Minutes Till Dawn" },
        { id: "game6", url: "/macvg/projects/2048/", name: "2048" },
        { id: "game7", url: "/macvg/projects/2048-multitask/", name: "2048 Multitask" },
        { id: "game328", url: "/macvg/projects/3d-bowling/", name: "3D Bowling" },
        { id: "game330", url: "/macvg/projects/pandas-japan/", name: "3 Pandas in Japan" },
        { id: "game331", url: "/macvg/projects/8-ball/", name: "8 Ball Pool" },
        { id: "game8", url: "/macvg/projects/9007199254740992/", name: "900719925474" },
        { id: "game9", url: "/macvg/projects/achievementunlocked/", name: "Achievement Unlocked" },
        { id: "game332", url: "/macvg/projects/adam-eve/", name: "Adam and Eve 5 Part 1" },
        { id: "game333", url: "/macvg/projects/adam-eve-2/", name: "Adam and Eve 5 Part 2" },
        { id: "game10", url: "/macvg/projects/adarkroom/", name: "A Dark Room" },
        { id: "game11", url: "/macvg/projects/adrenalinechallenge/", name: "Adrenaline Challenge" },
        { id: "game291", url: "/macvg/projects/adventure-anxiety/", name: "Adventure with Anxiety" },
        { id: "game12", url: "/macvg/projects/adventure-drivers/", name: "Adventure Drivers" },
        { id: "game13", url: "/macvg/projects/ages-of-conflict/", name: "Ages of Conflict" },
        { id: "game14", url: "/macvg/projects/alienhominid/", name: "Alien Hominid" },
        { id: "game15", url: "/macvg/projects/amidst-the-clouds/", name: "Amidst the Clouds" },
        { id: "game16", url: "/macvg/projects/among-us/", name: "Among Us" },
        { id: "game17", url: "/macvg/projects/angry-sharks/", name: "Angry Sharks" },
        { id: "game334", url: "/macvg/projects/apple-shooter/", name: "Apple Shooter" },
        { id: "game18", url: "/macvg/projects/aquapark-slides/", name: "Aquapark Slides" },
        { id: "game338", url: "/macvg/projects/arcane-archer/", name: "Arcane Archer" },
        { id: "game19", url: "/macvg/projects/avalanche/", name: "Avalanche" },
        { id: "game337", url: "/macvg/projects/awesome-tanks-2/", name: "Awesome
