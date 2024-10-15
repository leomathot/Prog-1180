document.addEventListener("DOMContentLoaded", () => {

    let tableBody = document.querySelector("tbody")

    let records = [{
        "NCR Number": "2024-032",
        "Date": "10/04/2024",
        "Product": "04-00157",
        "Status": "Q-Rep Working",
    }, {
        "NCR Number": "2024-032",
        "Date": "09/28/2024",
        "Product": "11-00219",
        "Status": "Q-Rep Completed",
    }, {
        "NCR Number": "2024-032",
        "Date": "10/04/2024",
        "Product": "04-00157",
        "Status": "Q-Rep Working",
    }, {
        "NCR Number": "2024-032",
        "Date": "09/28/2024",
        "Product": "11-00219",
        "Status": "Q-Rep Working",
    }, {
        "NCR Number": "2024-032",
        "Date": "10/04/2024",
        "Product": "04-00157",
        "Status": "Q-Rep Completed",
    }, {
        "NCR Number": "2024-032",
        "Date": "09/28/2024",
        "Product": "11-00219",
        "Status": "Q-Rep Working",
    }, {
        "NCR Number": "2024-032",
        "Date": "10/04/2024",
        "Product": "04-00157",
        "Status": "Q-Rep Completed",
    }, {
        "NCR Number": "2024-032",
        "Date": "09/28/2024",
        "Product": "11-00219",
        "Status": "Q-Rep Working",
    }, {
        "NCR Number": "2024-032",
        "Date": "10/04/2024",
        "Product": "04-00157",
        "Status": "Q-Rep Working",
    }, {
        "NCR Number": "2024-032",
        "Date": "09/28/2024",
        "Product": "11-00219",
        "Status": "Q-Rep Working",
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
                ${r.Status}
            </td>
            <td>
                <a class="me-2" href="quality-rep-details.html">View</a>
                ${r.Status == "Q-Rep Completed"
                ? ""
                : '<a class="" href="quality-rep-edit.html">Edit</a>'}
            </td>
        </tr>
    `
    });
});