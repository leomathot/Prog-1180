document.addEventListener("DOMContentLoaded", () => {

    let fill = document.getElementById("btn-fill")

    fill.addEventListener("click", () => {

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


        const qntyDefective = document.getElementById("qnty-defective")
        qntyDefective.value = "80"

        const qntyReceived = document.getElementById("qnty-received")
        qntyReceived.value = "800"

         const date3 = document.getElementById("ncr-date")
        date3.value = "2023-12-11"
    })
})
