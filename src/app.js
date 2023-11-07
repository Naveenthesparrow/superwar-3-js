const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];
const PLAYER_IMAGES = [
    "images/super-1.png",
    "images/super-2.png",
    "images/super-3.png",
    "images/super-4.png",
    "images/super-5.png",
    "images/super-6.png",
    "images/super-7.png",
    "images/super-8.png",
    "images/super-9.png",
    "images/super-11.png",
    "images/super-12.png",
    "images/super-13.png",
    "images/super-14.png",
    "images/super-15.png",
    "images/super-16.png",
    "images/super-17.png",
    "images/super-18.png",
    "images/super-19.png",
    "images/super-20.png",
 ];

// initialize players with image and strength
const initPlayers = (players) => {
    return players.slice(0, players.length - 1).map((player, i) => ({
        name: player,
        strength: getRandomStrength(),
        image: PLAYER_IMAGES[i],
        type: i % 2 === 0 ? 'hero' : 'villain'
    }));
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template


    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    const buildPlayers = (players, type) => {
        const filteredPlayers = players.filter(player => player.type === type);
        const playerHTML = filteredPlayers.map(player => `
            <div class="player">
                <img src="${player.image}" alt="${player.name}">
                <h3>${player.name}</h3>
                <p id="str">${player.strength}</p>
            </div>`
        ).join('');
    
        return playerHTML;
    }



// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}