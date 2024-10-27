document.addEventListener("DOMContentLoaded", () => {

    let tableBody = document.querySelector("tbody")

    let records = [{
        "NCR Number": "2024-032",
        "Date": "10/04/2024",
        "Product": "04-00157",
        "Status": "QR Working",
    }, {
        "NCR Number": "2024-032",
        "Date": "09/28/2024",
        "Product": "11-00219",
        "Status": "QR Completed",
    }, {
        "NCR Number": "2024-032",
        "Date": "10/04/2024",
        "Product": "04-00157",
        "Status": "QR Working",
    }, {
        "NCR Number": "2024-032",
        "Date": "09/28/2024",
        "Product": "11-00219",
        "Status": "QR Working",
    }, {
        "NCR Number": "2024-032",
        "Date": "10/04/2024",
        "Product": "04-00157",
        "Status": "QR Completed",
    }, {
        "NCR Number": "2024-032",
        "Date": "09/28/2024",
        "Product": "11-00219",
        "Status": "QR Working",
    }, {
        "NCR Number": "2024-032",
        "Date": "10/04/2024",
        "Product": "04-00157",
        "Status": "QR Completed",
    }, {
        "NCR Number": "2024-032",
        "Date": "09/28/2024",
        "Product": "11-00219",
        "Status": "QR Working",
    }, {
        "NCR Number": "2024-032",
        "Date": "10/04/2024",
        "Product": "04-00157",
        "Status": "QR Working",
    }, {
        "NCR Number": "2024-032",
        "Date": "09/28/2024",
        "Product": "11-00219",
        "Status": "QR Working",
    },
    ]

    records.forEach(r => {
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
                ${r.Status == "QR Completed" 
                ? '<i class="fa-solid fa-square-check"></i> ' 
                : '<i class="fa-solid fa-square-minus"></i> ' }${r.Status}
            </td>
            <td>
                <a class="" href="quality-rep-details.html">View</a>
                ${r.Status == "QR Completed"
                ? ""
                : '<a class="ms-2" href="quality-rep-edit.html">Edit</a>'}
            </td>
        </tr>
    `
    });
});