$(document).on('click','#add',function() {
      var msg   = $('#formx').serialize();
        $.ajax({
          type: 'POST',
          url: 'config.php',
          data:'msg',
          success: function(response) {
            response = JSON.parse(response)
            $('#content').html(data);
          },
          error:  function(xhr, str){
        alert('error ' + xhr.responseCode);
          }
        });
 
    })

