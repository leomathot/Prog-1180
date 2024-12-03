
window.jsPDF = window.jspdf.jsPDF;

function generatePDF(role) {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    // Grabbing page dimension
    var pageHeight = pdf.internal.pageSize.height || pdf.internal.pageSize.getHeight();     // pageheight
    var pageWidth = pdf.internal.pageSize.width || pdf.internal.pageSize.getWidth();        // pagewidth

    let title = (document.getElementById("qual-rep-sect-title").innerHTML).toString();

    var img = new Image();

    if (role == 'qual-rep') {
        img.src = 'images/quality-details.png';

        pdf.text(title, pageWidth / 2, 20, { align: 'center' });
        pdf.addImage(img, 'png', 15, 40, 180, 120);  // IMAGE
        pdf.text('Created by: 404 Cached', pageWidth / 2, pageHeight - 10, { align: 'center' });
        pdf.save('NCR 45454544 REPORT.pdf');  // PDF TITLE

    } else if (role == 'eng') {

        let title2 = (document.getElementById("eng-sect-title").innerHTML).toString();  // This gets qual rep section header
        var img2 = new Image();  // Created a new image to store the engineer section picture

        img.src = 'images/quality-details.png'; // Path for Quality Rep section picture
        img2.src = 'images/engineering-details.png'; // Path for Engineer section picture

        pdf.text(title, pageWidth / 2, 20, { align: 'center' });  // Adds Qual Rep Section title to pdf
        pdf.addImage(img, 'png', 15, 40, 180, 120);  // Qual rep image
        pdf.text('Created by: 404 Cached', pageWidth / 2, pageHeight - 10, { align: 'center' });

        pdf.addPage();  // Adds page for next section

        pdf.text(title2, pageWidth / 2, 20, { align: 'center' });  // Adds engineer section title
        pdf.addImage(img2, 'png', 15, 40, 180, 100);  // Engineer section image

        pdf.text('Created by: 404 Cached', pageWidth / 2, pageHeight - 10, { align: 'center' });
        pdf.save('NCR 48854544 REPORT.pdf');  // PDF TITLE  

    } else if (role == 'pur') {

        // Targeting the Purchasing section's title
        let title = 'Quality Rep Section';
        let title2 = 'Engineer Section';
        let title3 = 'Purchasing Section';  // Static title for the Purchasing Section
        var img2 = new Image();    // Created a new image to store engineer section
        var img3 = new Image();  // Created a new image to store the purchasing section picture

        img.src = 'images/quality-details.png';  // Path for Quality Rep section picture
        img2.src = 'images/engineering-details.png';  // Path for Engineering section picture
        img3.src = 'images/purchasing-details.png'; // Path for Purchasing section picture

        // Adds Quality Rep section title to pdf
        pdf.text(title, pageWidth / 2, 20, { align: 'center' });
        pdf.addImage(img, 'png', 15, 40, 180, 120);  // Quality Rep image
        pdf.text('Created by: 404 Cached', pageWidth / 2, pageHeight - 10, { align: 'center' });

        pdf.addPage();  // Adds page for next section

        // Adds Engineer section title to pdf
        pdf.text(title2, pageWidth / 2, 20, { align: 'center' });
        pdf.addImage(img2, 'png', 15, 40, 180, 120);
        pdf.text('Created by: 404 Cached', pageWidth / 2, pageHeight - 10, { align: 'center' });

        pdf.addPage();  // Adds page for next section

        // Adds Purchasing Section title
        pdf.text(title3, pageWidth / 2, 20, { align: 'center' });
        pdf.addImage(img3, 'png', 15, 40, 180, 100);  // Purchasing section image

        pdf.text('Created by: 404 Cached', pageWidth / 2, pageHeight - 10, { align: 'center' });
        pdf.save('NCR 545454544 REPORT.pdf');  // PDF TITLE  
    }
}
