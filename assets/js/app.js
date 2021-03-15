// Add your custom javascript here
console.log("Hi from Federalist");
jQuery(document).ready(function() {
   jQuery('#table_id').DataTable( {
       responsive: true,
       dom: 'pfrtiB',
       buttons: [
           'copyHtml5',
           'excelHtml5',
           'csvHtml5',
           'pdfHtml5',
           'pageLength'
       ]
   } );
} );



      // Get the modal
       var modal = document.getElementById('myModal');

       // Get the image and insert it inside the modal - use its "alt" text as a caption
       var img = document.getElementById('myImg');
       var modalImg = document.getElementById("img01");
       var captionText = document.getElementById("caption");
       img.onclick = function(){
         modal.style.display = "block";
         modalImg.src = this.src;
         captionText.innerHTML = this.alt;
       }

       // Get the <span> element that closes the modal
       var span = document.getElementsByClassName("close")[0];

       // When the user clicks on <span> (x), close the modal
       span.onclick = function() {
         modal.style.display = "none";
     }

