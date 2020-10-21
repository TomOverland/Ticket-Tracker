$(document).ready(function (){
    console.log("Page loaded");


  const $dept = $('#dept-input')
  const $title = $("#title-input");
  const $description = $("#body-input");
  
  $("#submit1").on("click", function() {
    console.log("Button press..");
      const ticket = {
          department: $dept.val(),
          title: $title.val(),
          body: $description.val()
      };
  
      $.ajax({
          type: 'POST',
          url: '/',
          data: ticket,
          success: function(newTicket) {
              console.log(newTicket);
          }
      });
  
  });
  
  
      // $.ajax({
      //     type: 'GET',
      //     url: '/',
      //     success: function(data) {
      //         console.log(data);
      //     }
      // })
  });