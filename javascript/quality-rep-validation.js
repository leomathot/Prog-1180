document.addEventListener("DOMContentLoaded", function () {

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
            <a class="d-flex justify-content-center mt-4" href="quality-rep-edit.html">
            <button class="btn bg-mid-blue w-50-25 shadow">Resume Editing</button>
            </a>
            <a class="d-flex justify-content-center mt-4" href="quality-rep-create.html">
            <button class="btn bg-mid-blue w-50-25 shadow">Create a New NCR</button>
            </a>
            <a class="d-flex justify-content-center mt-4" href="quality-rep-list.html">
            <button class="btn bg-mid-blue w-50-25 shadow">See Your NCRs List</button>
            </a>`
    })

    // Modal close
    modal.querySelector(".modal-close").addEventListener("click", () => {
        modal.style.display = "none"
    })

    // Confirmation
    submit.addEventListener("click", (e) => {
        e.preventDefault()

        if (form.checkValidity()) {
            // Confirmation
            modal.style.display = "block"
        } else {
            // Validation messages
            form.reportValidity()
        }
    })

    // Modal cancel button
    cancel.addEventListener("click", function () {
        modal.style.display = "none"
    })

    // Modal OK button
    ok.addEventListener("click", function() {
        modal.style.display = "none"
        form.style.display = "none"
        msgBox.style.display = "block"
        msgBox.querySelector("#title").innerHTML = `<i class="fa-regular fa-circle-check me-2"></i> NCR submitted!`
        msgBox.querySelector("#text").innerHTML = `You can see the NCR details, create a new one, or go to the list.`
        msgBox.querySelector("#btns").innerHTML = `
            <a class="d-flex justify-content-center mt-4" href="quality-rep-details.html">
            <button class="btn bg-mid-blue w-50-25 shadow">See Details</button>
            </a>
            <a class="d-flex justify-content-center mt-4" href="quality-rep-create.html">
            <button class="btn bg-mid-blue w-50-25 shadow">Create a New NCR</button>
            </a>
            <a class="d-flex justify-content-center mt-4" href="quality-rep-list.html">
            <button class="btn bg-mid-blue w-50-25 shadow">See Your NCRs List</button>
            </a>`
    });

})
