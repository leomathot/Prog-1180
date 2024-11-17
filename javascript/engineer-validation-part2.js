document.addEventListener("DOMContentLoaded", () => {

    // Add modal
    document.querySelector(".ncr-modal").innerHTML = `
        <div class="ncr-modal-content">
            <div class="ncr-modal-top d-flex justify-content-end">
                <button class="btn btn-outline-light modal-close py-0 px-1 d-flex">
                    <i class="fa-solid fa-xmark fs-4 p-0 m-0"></i>
                </button>
            </div>
            <div class="ncr-modal-body">
                <p class="ncr-modal-title fs-5">Are you sure you want to submit this NCR?</p>
                <div class="ncr-modal-main mt-5"></div>
                <div class="ncr-modal-footer mt-5">
                    <!-- Cancel -->
                    <Button class="btn btn-dark" id="btn-cancel">Cancel</Button>
                    <!-- OK -->
                    <Button class="btn bg-mid-blue" id="btn-ok">OK</Button>
                </div>
            </div>
        </div>`

    let part1 = document.querySelector("#part-1")
    let part2 = document.querySelector("#part-2")
    let form2 = document.querySelector("#ncr-form-part2")
    let save = document.querySelector("#btn-save")
    let submit = document.querySelector("#btn-submit")
    let modal = document.querySelector(".ncr-modal")
    let cancel = document.querySelector("#btn-cancel")
    let ok = document.querySelector("#btn-ok")
    let msgBox = document.querySelector("#msg-box")

    // Save button pressed => Saved message
    save.addEventListener("click", () => {
        part1.style.display = "none"
        part2.style.display = "none"
        msgBox.style.display = "block"
        msgBox.querySelector("#title").innerHTML = `<h2><i class="fa-regular fa-circle-check me-3"></i>Form saved!</h2>`
        msgBox.querySelector("#text").innerHTML = `You can continue editing this NCR later.`
        msgBox.querySelector("#btns").innerHTML = `
            <a class="btn bg-mid-blue d-block mt-4 mx-auto btn-wide" href="engineer-edit-part2.html">
                Continue Editing
            </a>
            <a class="btn bg-mid-blue d-block mt-4 mx-auto btn-wide" href="engineer-list.html">
                See Your NCRs List
            </a>`
    })

    // Modal close
    modal.querySelector(".modal-close").addEventListener("click", () => {
        modal.style.display = "none"
    })

    // Submit button
    submit.addEventListener("click", () => {

        // Validate form2
        if (!form2.checkValidity()) {
            // If part2 is invalid, scroll to the first invalid field and show validation messages
            const firstInvalidElement2 = form2.querySelector(":invalid");
            firstInvalidElement2.scrollIntoView({ behavior: "smooth", block: "start" });
            setTimeout(() => {
                form2.reportValidity(); // This will trigger the browser's built-in validation message
            }, 400);
            return; // If form2 is invalid, stop further submission
        }

        // If both forms are valid, show the confirmation modal
        modal.style.display = "block";
    })

    // Modal cancel button
    cancel.addEventListener("click", () => {
        modal.style.display = "none"
    })

    // Modal OK button => Submit
    ok.addEventListener("click", () => {
        modal.style.display = "none"
        part1.style.display = "none"
        part2.style.display = "none"
        msgBox.style.display = "block"
        msgBox.querySelector("#title").innerHTML = `<h2><i class="fa-regular fa-circle-check me-3"></i>NCR submitted!</h2>`
        msgBox.querySelector("#text").innerHTML = `<i class="fa-regular fa-paper-plane me-2 text-mid-blue"></i><strong>A notification was sent to Purchasing.</strong>`
        msgBox.querySelector("#btns").innerHTML = `
            <a class="btn bg-mid-blue d-block mt-4 mx-auto btn-wide" href="engineer-details-part2.html">
                See Details
            </a>
            <a class="btn bg-mid-blue d-block mt-4 mx-auto btn-wide" href="engineer-list.html">
                See Your NCRs List
            </a>`
    })
})
