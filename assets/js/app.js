// Add your custom javascript here
console.log("Hi from Federalist");
jQuery(document).ready(function() {
   jQuery('#table_id').DataTable( {
       dom: 'Bfrtip',
       buttons: [
           'copyHtml5',
           'excelHtml5',
           'csvHtml5',
           'pdfHtml5',
           'pageLength'
       ]
    } );
} );