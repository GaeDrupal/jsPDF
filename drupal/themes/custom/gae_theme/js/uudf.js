console.log('js working');

function generate() {
    window.jsPDF = window.jspdf.jsPDF;
    window.html2canvas = html2canvas;
    var pdf = new jsPDF('l', 'mm');
    

pdf.html(document.getElementById('inte'), {
   callback: function (pdf) {
     pdf.save('toHTML');
   },
   x: 0,
   y: 0
});

    location.reload();
  }
  
  function getAllPDFs() {
    generate();
  }
  
  jQuery('.jsPDF').click(function (e) {
    e.preventDefault();
    getAllPDFs();
  });

pdf.html(document.getElementById('inte'), {
   callback: function (pdf) {
     pdf.save('toHTML');
   },
   x: 0,
   y: 0
});
