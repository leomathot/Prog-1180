// Navigation and Validation

localStorage.setItem('part', '1')

const getPart = () => parseInt(localStorage.getItem('part'), 10)
const setPart = (part) => localStorage.setItem('part', part.toString())

let f1 = document.querySelector('#fieldset-1')
let f2 = document.querySelector('#fieldset-2')
let f3 = document.querySelector('#fieldset-3')
let back = document.querySelector('#btnBack')
let next = document.querySelector('#btnNext')
let save = document.querySelector('#btnSave')
let subm = document.querySelector('#btnSubmit')

const updateFieldsets = () => {
    const part = getPart()
    f1.classList.add('hidden')
    f2.classList.add('hidden')
    f3.classList.add('hidden')
    let f

    if (part === 1) {
        f = f1
        f1.classList.remove('hidden')
        back.classList.add('faded')
        next.classList.remove('faded')
        subm.classList.add('hidden')
    } else if (part === 2) {
        f = f2
        f2.classList.remove('hidden')
        back.classList.remove('faded')
        next.classList.remove('faded')
        subm.classList.add('hidden')
    } else if (part === 3) {
        f = f3
        f3.classList.remove('hidden')
        back.classList.remove('faded')
        next.classList.add('faded')
        subm.classList.remove('hidden')
    }
    const firstInput = f.querySelector('input:not([readonly])');
    if (firstInput) {
        firstInput.focus();
    }
}

updateFieldsets()

next.addEventListener('click', (e) => {
    e.preventDefault()
    let part = getPart()
    if (part < 3) {
        part += 1
        setPart(part)
        updateFieldsets()
    }
})

back.addEventListener('click', (e) => {
    e.preventDefault()
    let part = getPart()
    if (part > 1) {
        part -= 1
        setPart(part)
        updateFieldsets()
    }
})
