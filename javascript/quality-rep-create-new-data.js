let suppNameSelect = document.querySelector('#supplier-name')

let suppliers = [
    "Blue Star", "Access Co.", "Mart Guys", "Tech Solutions", "Green Valley", "Prime Supplies", 
    "Global Traders", "Sunrise Corp", "Elite Goods", "Apex Industries", "NextGen Supplies", 
    "Urban Outfitters", "Pinnacle Products", "Fusion Enterprises", "Dynamic Distributors", 
    "Innovative Imports", "Superior Supplies", "Metro Merchants", "Quantum Goods", "Vertex Ventures", 
    "Summit Solutions", "Eagle Enterprises", "Infinity Supplies", "Titan Traders", "Zenith Corp", 
    "Alpha Goods", "Omega Supplies", "Delta Distributors", "Echo Enterprises", "Bravo Goods", 
    "Sierra Supplies", "Foxtrot Traders", "Charlie Corp", "Tango Goods", "Victor Supplies", 
    "Whiskey Enterprises", "X-ray Goods", "Yankee Supplies", "Zulu Traders", "Nova Corp", 
    "Stellar Supplies", "Galaxy Goods", "Cosmic Traders", "Nebula Enterprises", "Astro Supplies", 
    "Lunar Goods", "Solar Traders", "Comet Corp", "Meteor Supplies", "Orbit Goods", 
    "Planet Traders", "Star Enterprises", "Universe Supplies", "Milky Way Goods", "Andromeda Traders", 
    "Pulsar Enterprises", "Quasar Supplies", "Black Hole Goods", "Supernova Traders", "Starlight Corp", 
    "Moonbeam Supplies", "Sunshine Goods", "Aurora Traders", "Eclipse Enterprises", "Cosmos Supplies", 
    "Nebula Goods", "Asteroid Traders", "Meteorite Enterprises", "Orbit Supplies", "Planet Goods", 
    "Star Traders", "Universe Enterprises", "Milky Way Supplies", "Andromeda Goods", "Pulsar Traders", 
    "Quasar Enterprises", "Black Hole Supplies", "Supernova Goods", "Starlight Traders", "Moonbeam Enterprises", 
    "Sunshine Supplies", "Aurora Goods", "Eclipse Traders", "Cosmos Enterprises", "Nebula Supplies", 
    "Asteroid Goods", "Meteorite Traders", "Orbit Enterprises", "Planet Supplies", "Star Goods", 
    "Universe Traders", "Milky Way Enterprises", "Andromeda Supplies", "Pulsar Goods", "Quasar Traders", 
    "Black Hole Enterprises", "Supernova Supplies", "Starlight Goods", "Moonbeam Traders", "Sunshine Enterprises"
]

let val = 1
suppliers.sort().forEach((s) => {
    let option = document.createElement('option')
    option.value = "0".repeat(4 - val.toString().length) + val
    val++
    option.text = s
    suppNameSelect.appendChild(option)
})
