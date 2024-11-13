document.addEventListener("DOMContentLoaded", () => {

    let suppNameSelect = document.querySelector("#supplier-name")

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
        let option = document.createElement("option")
        option.value = "0".repeat(4 - val.toString().length) + val
        val++
        option.text = s
        suppNameSelect.appendChild(option)
    })

    const identProcessApp = document.getElementById("i-p-a-supp")
    identProcessApp.checked = true

    const supplierSelect = document.getElementById("supplier-name")
    supplierSelect.value = "0021"

    const prodNumSelect = document.getElementById("prod-num")
    prodNumSelect.value = "01-00129"

    const salesOrderSelect = document.getElementById("sales-order")
    salesOrderSelect.value = "2024-0048-0017"

    const itemDescription = document.getElementById("item-decription")
    itemDescription.value = "Odit consequatur perspiciatis odio libero expedita! Necessitatibus, molestiae beatae reiciendis quidem tenetur nemo? Repellendus modi."

    const defectDescription = document.getElementById("defect-decription")
    defectDescription.value = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, laborum vero error odio distinctio consectetur temporibus, odit itaque facere eveniet id eos consequatur laudantium nesciunt at magni cumque labore cum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit consequatur perspiciatis odio libero expedita! Necessitatibus, molestiae beatae reiciendis quidem tenetur nemo? Repellendus modi ducimus optio aliquam voluptatum eius quam cum."

    const itemMarkedNC = document.getElementById("marked-nc-no")
    itemMarkedNC.checked = true

    // quantity received / quantity defective
    let prodNum = document.querySelector("#prod-num")
    let salesOdr = document.querySelector("#sales-order")
    let qntyRec = document.querySelector("#qnty-received")
    let qntyDef = document.querySelector("#qnty-defective")

    function updateQuantity() {
        if (prodNum.value !== "" && salesOdr.value !== "") {
            qntyRec.value = 860
        } else {
            qntyRec.value = ""
        }
        checkQntyDef()
    }

    function checkQntyDef () {
        if (qntyRec.value == "")
            qntyDef.value = ""
        else {
            if (qntyDef.value < 0)
                qntyDef.value = ""
            if (qntyDef.value - qntyRec.value > 0)
                qntyDef.value = qntyRec.value
        } 
    }

    prodNum.addEventListener("change", updateQuantity)
    salesOdr.addEventListener("change", updateQuantity)
    qntyDef.addEventListener("change", checkQntyDef)
})