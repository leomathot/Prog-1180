document.addEventListener("DOMContentLoaded", () => {

    let fill = document.getElementById("btn-fill")

    fill.addEventListener("click", () => {

        const reviewEngineer = document.getElementById("review-engineer");
        reviewEngineer.value = "Repair";
    
        const customerNotice = document.getElementById("customer-notice");
        customerNotice.value = "Yes";
    
        const dispositionDescription = document.getElementById("item-disposition");
        dispositionDescription.value = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, laborum vero error odio distinctio consectetur temporibus, odit itaque facere eveniet id eos consequatur laudantium nesciunt at magni cumque labore cum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit consequatur perspiciatis odio libero expedita! Necessitatibus, molestiae beatae reiciendis quidem tenetur nemo?";
    
        const drawingUpdate = document.getElementById("drawing-update");
        drawingUpdate.value = "Yes";
        


        const originalRev = document.getElementById("original-rev");
        originalRev.value = "Yes";

        const updatedRev = document.getElementById("updated-rev");
        updatedRev.value = "Yes";

        const date2 = document.getElementById("revision-date")
        date2.value = "2023-11-01"


        const date3 = document.getElementById("ncr-date")
        date3.value = "2023-11-11"
    })
})
