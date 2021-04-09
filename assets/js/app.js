// Add your custom javascript here
console.log("Hi from Federalist");
jQuery(document).ready(function() {
   jQuery('#table_id').DataTable( {
       responsive: true,
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
      /* fm Life Cycle*/
     jQuery(document).ready(function(){
      jQuery.ajax({url: window.location.origin+"/business-standards-api/fm/business-lifecycle", success: function(result){              
             var jObj = JSON.parse(result);
             jQuery.each(jObj, function(key, value)
             {     
                 jQuery.each(value, function(innerKey, innerValue) {                                       
                     var tr= '<tr>';
                     var id = innerValue.ID ? innerValue.ID : innerValue.Identifier;
                     tr += '<td class="capability_class" valign="top">' + id + '</td>'
                     tr += '<td class="capability_class">' + innerValue.Activity + '</td>'
                     tr += '<td class="capability_class" valign="top">' + innerValue.Description + '</td>'
                     tr += '</tr>';
                     jQuery("#"+key+" > tbody").append(tr);
                 });
             });             
         }});

         jQuery.ajax({url: window.location.origin+"/business-standards-api/fm/", success: function(result){
          var jObject=JSON.parse(result);
          jQuery.each(jObject, function (key, value) {
         if(key=="Business Capabilities")
          {
              jQuery.each(value,function(key,value)
              {npm
                  var tr='<tr>';
                   jQuery.each(value,function(key,value){
                       tr+='<td class="capability_class">'+value+'</td>'     
                   });
                   tr+='</tr>';
                   jQuery("#fm-capabilities > tbody").append(tr);
               });
               jQuery("#fm-capabilities").DataTable({
                                                   responsive: true,
                                                   dom: 'Bfrtip',
                                                   buttons: [
                                                       'copyHtml5',
                                                       'excelHtml5',
                                                       'csvHtml5',
                                                       'pdfHtml5',
                                                       'pageLength'
                                                   ]
                                               } );
          }               
          });
       }});
     });

     
