document.addEventListener("DOMContentLoaded", () => {

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
        msgBox.querySelector("#title").innerHTML = `<i class="fa-regular fa-circle-check me-2"></i> Form saved!`
        msgBox.querySelector("#text").innerHTML = `You can continue editing this NCR later.`
        msgBox.querySelector("#btns").innerHTML = `
            <a class="d-block mt-4 mx-auto btn-wide" href="quality-rep-details.html" tabindex="-1">
            <button class="btn bg-mid-blue">See Details</button>
            </a>
            <a class="d-block mt-4 mx-auto btn-wide" href="quality-rep-edit.html" tabindex="-1">
            <button class="btn bg-mid-blue">Resume Editing</button>
            </a>
            <a class="d-block mt-4 mx-auto btn-wide" href="quality-rep-create.html" tabindex="-1">
            <button class="btn bg-mid-blue">Create a New NCR</button>
            </a>
            <a class="d-block mt-4 mx-auto btn-wide" href="quality-rep-list.html" tabindex="-1">
            <button class="btn bg-mid-blue">See Your NCRs List</button>
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
        msgBox.querySelector("#title").innerHTML = `<i class="fa-regular fa-circle-check me-2"></i> NCR submitted!`
        msgBox.querySelector("#text").innerHTML = `You can see the NCR details, create a new one, or go to the list.`
        msgBox.querySelector("#btns").innerHTML = `
            <a class="d-block mt-4 mx-auto btn-wide" href="quality-rep-details.html" tabindex="-1">
            <button class="btn bg-mid-blue">See Details</button>
            </a>
            <a class="d-block mt-4 mx-auto btn-wide" href="quality-rep-create.html" tabindex="-1">
            <button class="btn bg-mid-blue">Create a New NCR</button>
            </a>
            <a class="d-block mt-4 mx-auto btn-wide" href="quality-rep-list.html" tabindex="-1">
            <button class="btn bg-mid-blue">See Your NCRs List</button>
            </a>`
    })
})
