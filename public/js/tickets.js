$(window).load(function (){

  const $dept = $('#dept-input')
  const $title = $("title-input");
  const $description = $("body-input");
  
  $("#submit1").on("click", function() {
      $event.preventDefault();
  
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
  
  })
  
  
      // $.ajax({
      //     type: 'GET',
      //     url: '/',
      //     success: function(data) {
      //         console.log(data);
      //     }
      // })
  })