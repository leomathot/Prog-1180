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

    let form = document.querySelector(".ncr-form")
    let save = document.querySelector("#btn-save")
    let submit = document.querySelector("#btn-submit")
    let modal = document.querySelector(".ncr-modal")
    let cancel = document.querySelector("#btn-cancel")
    let ok = document.querySelector("#btn-ok")
    let msgBox = document.querySelector("#msg-box")

    save.addEventListener("click", () => {
        form.style.display = "none"
        msgBox.style.display = "block"
        msgBox.querySelector("#title").innerHTML = `<h2><i class="fa-regular fa-circle-check me-3"></i>Form saved!</h2>`
        msgBox.querySelector("#text").innerHTML = `You can continue editing this NCR later.`
        msgBox.querySelector("#btns").innerHTML = `
            <a class="btn bg-mid-blue d-block mt-4 mx-auto btn-wide" href="quality-rep-details.html">
                See Details
            </a>
            <a class="btn bg-mid-blue d-block mt-4 mx-auto btn-wide" href="quality-rep-edit.html">
                Resume Editing
            </a>
            <a class="btn bg-mid-blue d-block mt-4 mx-auto btn-wide" href="quality-rep-create.html">
                Create a New NCR
            </a>
            <a class="btn bg-mid-blue d-block mt-4 mx-auto btn-wide" href="quality-rep-list.html">
                See Your NCRs List
            </a>`
    })

    // Modal close
    modal.querySelector(".modal-close").addEventListener("click", () => {
        modal.style.display = "none"
    })

    // Submit button
    submit.addEventListener("click", () => {

        if (form.checkValidity()) {
            // Confirmation pop-up
            modal.style.display = "block"
        } else {
            // Validation messages
            // form.reportValidity()

            const firstInvalidElement = form.querySelector(":invalid")
            firstInvalidElement.scrollIntoView({ behavior: "smooth", block: "start" })
            setTimeout(() => {
                form.reportValidity()
            }, 300)
        }
    })

    // Modal cancel button
    cancel.addEventListener("click", () => {
        modal.style.display = "none"
    })

    // Modal OK button
    ok.addEventListener("click", () => {

        modal.style.display = "none"
        form.style.display = "none"
        msgBox.style.display = "block"
        msgBox.querySelector("#title").innerHTML = `<h2><i class="fa-regular fa-circle-check me-3"></i>NCR submitted!</h2>`
        msgBox.querySelector("#text").innerHTML = `You can see the NCR details, create a new one, or go to the list.`
        msgBox.querySelector("#btns").innerHTML = `
            <a class="btn bg-mid-blue d-block mt-4 mx-auto btn-wide" href="quality-rep-details.html">
                See Details
            </a>
            <a class="btn bg-mid-blue d-block mt-4 mx-auto btn-wide" href="quality-rep-create.html">
                Create a New NCR
            </a>
            <a class="btn bg-mid-blue d-block mt-4 mx-auto btn-wide" href="quality-rep-list.html">
                See Your NCRs List
            </a>`
    })
})
