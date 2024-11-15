document.addEventListener("DOMContentLoaded", () => {

    let searchInput = document.querySelector("#search-input")
    let searchClearBtn = document.querySelector("#clear-search-btn")
    let tableBody = document.querySelector("tbody")
    let ncrNumUp = document.querySelector("#ncr-num-up")
    let ncrNumDown = document.querySelector("#ncr-num-down")
    let dateUp = document.querySelector("#date-up")
    let dateDown = document.querySelector("#date-down")
    let prodUp = document.querySelector("#prod-up")
    let prodDown = document.querySelector("#prod-down")
    let statusUp = document.querySelector("#status-up")
    let statusDown = document.querySelector("#status-down")

    let records = [
        { "NCR Number": "2023-188", "Date": "12/04/2023", "Product": "04-00157", "Status": "2" },
        { "NCR Number": "2023-205", "Date": "12/13/2023", "Product": "06-00587", "Status": "3" },
        { "NCR Number": "2024-109", "Date": "04/21/2024", "Product": "08-00305", "Status": "1" },
        { "NCR Number": "2024-111", "Date": "05/26/2024", "Product": "02-00987", "Status": "4" },
        { "NCR Number": "2024-123", "Date": "06/17/2024", "Product": "08-00345", "Status": "4" },
        { "NCR Number": "2024-132", "Date": "06/22/2024", "Product": "02-00987", "Status": "1" },
        { "NCR Number": "2024-135", "Date": "07/09/2024", "Product": "02-00214", "Status": "4" },
        { "NCR Number": "2024-138", "Date": "08/30/2024", "Product": "08-00345", "Status": "3" },
        { "NCR Number": "2024-163", "Date": "09/14/2024", "Product": "02-00715", "Status": "2" },
        { "NCR Number": "2024-178", "Date": "10/25/2024", "Product": "02-00987", "Status": "3" }
    ]

    // Title for status abbreviations
    let statusInfo = `1 - Quality Section In Progress \n2 - Quality Section Complete\n3 - Engineering Section In Progress \n4 - Engineering Section Complete\n5 - Purchasing Section In Progress \n6 - Purchasing Section Complete\n`

    // Status colunm content
    function status(s) {
        if (s == "1")
            return `<i class="fa-solid fa-circle-half-stroke icon-quality me-2" style="rotate: -45deg;"></i> <span title="${statusInfo}">1 - QSIP</span>`
        else if (s == "2")
            return `<i class="fa-solid fa-circle icon-quality me-2"></i> <span title="${statusInfo}">2 - QSC</span>`
        else if (s == "3")
            return `<i class="fa-solid fa-circle-half-stroke icon-engineer me-2" style="rotate: -45deg;"></i> <span title="${statusInfo}">3 - ESIP</span>`
        else if (s == "4")
            return `<i class="fa-solid fa-circle icon-engineer me-2"></i> <span title="${statusInfo}">4 - ESC</span>`
        else if (s == "5")
            return `<i class="fa-solid fa-circle-half-stroke icon-purchasing me-2" style="rotate: -45deg;"></i> <span title="${statusInfo}">5 - PSIP</span>`
        else if (s == "6")
            return `<i class="fa-solid fa-circle icon-purchasing me-2"></i> <span title="${statusInfo}">6 - PSC</span>`
        else
            return ""
    }

    // Actions colunm content
    function actions(s) {
        if (s == "1")
            return '<a class="ms-2" href="engineer-.html">Edit</a>'
        else if (s == "2")
            return '<a class="ms-2" href="engineer-.html">Next</a>'
        else if (s == "3")
        return '<a class="ms-2" href="engineer-.html">Edit</a>'
        else if (s == "4")
            return ''
        else if (s == "5")
            return ''
        else if (s == "6")
            return ''
        else return ""
    }

    // Function to render the table rows
    const renderTable = (recs, col = "NCR Number", order = "asc") => {

        let searchValue = searchInput.value.trim().toLowerCase();
        let filteredRecs = recs.filter(r => r["NCR Number"].toLowerCase().includes(searchValue))
        // If sort by date
        if (col == "Date") {
            if (order == "asc")
                filteredRecs.sort((a, b) => new Date(a.Date) - new Date(b.Date))
            else
                filteredRecs.sort((b, a) => new Date(a.Date) - new Date(b.Date))
        }
        // If sort by something else
        else {
            if (order == "asc")
                filteredRecs.sort((a, b) => a[col].localeCompare(b[col]))
            else
                filteredRecs.sort((b, a) => a[col].localeCompare(b[col]))
        }
        tableBody.innerHTML = ""
        filteredRecs.forEach(r => {
            tableBody.innerHTML += `
        <tr>
            <td>
                ${r["NCR Number"]}
            </td>
            <td>
                ${r.Date}
            </td>
            <td>
                ${r.Product}
            </td>
            <td>
                ${status(r.Status)}
            </td>
            <td>
                <a class="" href="quality-rep-details.html?status=${r.Status}">View</a>
                ${actions(r.Status)}
            </td>
        </tr>
    `})
    }

    // Initial table rendering
    renderTable(records)

    // Event listener for searching
    searchInput.addEventListener("input", () => renderTable(records))
    // Event listener for clear button
    searchClearBtn.addEventListener("click", () => {
        searchInput.value = ""
        renderTable(records)
    })

    // Event listeners for sorting buttons
    // Sort by NCR number Up
    ncrNumUp.addEventListener("click", () => renderTable(records, "NCR Number", "asc"))
    // Sort by NCR number Down
    ncrNumDown.addEventListener("click", () => renderTable(records, "NCR Number", "desc"))
    // Sort by date Up
    dateUp.addEventListener("click", () => renderTable(records, "Date", "asc"))
    // // Sort by date Down
    dateDown.addEventListener("click", () => renderTable(records, "Date", "desc"))
    // Sort by product numberr Up
    prodUp.addEventListener("click", () => renderTable(records, "Product", "asc"))
    // Sort by product number Down
    prodDown.addEventListener("click", () => renderTable(records, "Product", "desc"))
    // Sort by status Up
    statusUp.addEventListener("click", () => renderTable(records, "Status", "asc"))
    // Sort by status Down
    statusDown.addEventListener("click", () => renderTable(records, "Status", "desc"))
})