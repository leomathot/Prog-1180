document.addEventListener("DOMContentLoaded", () => {

    let fill = document.getElementById("btn-fill")

    fill.addEventListener("click", () => {

        var followUpType = document.getElementById('followUpType');
        followUpType.value = "Type B"

        var followUpDate = document.getElementById('followUpDate');
        followUpDate.value = "2024-11-01"

        followUpType.disabled = false;
        followUpDate.disabled = false;

        var carNumber = document.getElementById('carNumber');
        carNumber.value = "10929301"
        carNumber.disabled = false;

        var newNcr = document.getElementById('newNcr');
        newNcr.value = "2024-1111"

        const review = document.getElementById("review-purchasing")
        review.value = "Rework 'In-House'"

        const carRaised = document.getElementById("carRaised")
        carRaised.value = "yes"

        const followUp = document.getElementById("followUp")
        followUp.value = "yes"

        const reInspected = document.getElementById("reInspected")
        reInspected.value = "No"

        const date1 = document.getElementById("ncr-date1")
        date1.value = "2024-01-01"
        
        const date3 = document.getElementById("ncr-date3")
        date3.value = "2024-01-01"
    })
})
